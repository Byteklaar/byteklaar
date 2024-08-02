"use server";
import nodemailer from "nodemailer";

export async function sendForm(text) {
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.BREVO_USER, // generated brevo user
                pass: process.env.BREVO_PW, // generated brevo password
            },
        });

        // send mail with defined transport object
        let infoSentToCustomer = await transporter.sendMail({
            from: "info@byteklaar.be", // sender address
            to: "bramdupont@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: `Customer, ${text}`, // plain text body
        });

        // send mail with defined transport object
        let infoSentToAdmin = await transporter.sendMail({
            from: "info@byteklaar.be", // sender address
            to: "info@byteklaar.be", // list of receivers
            subject: "Hello ✔", // Subject line
            text: `Admin, ${text}`, // plain text body
        });

        if (infoSentToCustomer && infoSentToAdmin) {
            return true;
        } else {
            console.error("Error sending email: ", error);
            return false;
        }
    } catch (error) {
        console.error("Error sending email: ", error);
        throw error;
    }
}
