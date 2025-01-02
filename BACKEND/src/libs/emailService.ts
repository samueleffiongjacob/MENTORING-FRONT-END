import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (mailOptions: nodemailer.SendMailOptions): Promise<void> => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent:", mailOptions.to);
  } catch (err) {
    console.error("Error sending email:", err);
    throw new Error("Failed to send email");
  }
};
