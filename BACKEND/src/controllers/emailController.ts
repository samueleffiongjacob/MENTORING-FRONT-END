import { Request, Response, NextFunction } from "express";
import { Email } from "../models/emailModel";
import { Subscriber } from "../models/subscriberModel";
import { sendEmail } from "../libs/emailService";

// Type the handler as RequestHandler
export const sendEmailHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  try {
    const newEmail = new Email({ name, email, message });
    await newEmail.save();

    await sendEmail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    await sendEmail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for reaching out",
      text: `Hello ${name},\n\nThank you for your message! We will get back to you shortly.`,
    });

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (err) {
    next(err); // Pass errors to the error handler
  }
};

export const subscribeHandler = async (req: Request, res: Response, next: NextFunction)=> {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(200).json({ message: "Thank you for subscribing to our email!" });
  } catch (err: any) {
    if (err.code === 11000) {
      res.status(409).json({ message: "This email is already subscribed." });
    } else {
      next(err); // Pass errors to the error handler
    }
  }
};
