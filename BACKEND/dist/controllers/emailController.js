var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Email } from "../models/emailModel";
import { Subscriber } from "../models/subscriberModel";
import { sendEmail } from "../libs/emailService";
// Type the handler as RequestHandler
export const sendEmailHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required." });
    }
    try {
        const newEmail = new Email({ name, email, message });
        yield newEmail.save();
        yield sendEmail({
            from: process.env.EMAIL_USER,
            to: process.env.OWNER_EMAIL,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        yield sendEmail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank you for reaching out",
            text: `Hello ${name},\n\nThank you for your message! We will get back to you shortly.`,
        });
        res.status(200).json({ message: "Emails sent successfully!" });
    }
    catch (err) {
        next(err); // Pass errors to the error handler
    }
});
export const subscribeHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }
    try {
        const newSubscriber = new Subscriber({ email });
        yield newSubscriber.save();
        res.status(200).json({ message: "Thank you for subscribing to our email!" });
    }
    catch (err) {
        if (err.code === 11000) {
            res.status(409).json({ message: "This email is already subscribed." });
        }
        else {
            next(err); // Pass errors to the error handler
        }
    }
});
