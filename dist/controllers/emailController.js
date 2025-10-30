import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export const sendEmail = async (req, res) => {
    const { to, subject, message } = req.body;
    if (!to || !subject || !message) {
        res.status(400).json({ success: false, message: "Missing fields" });
        return; // stop execution
    }
    try {
        await sgMail.send({
            to,
            from: process.env.SENDER_EMAIL,
            subject,
            html: message,
        });
        res.status(200).json({ success: true, message: "Email sent successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Email send failed" });
    }
};
