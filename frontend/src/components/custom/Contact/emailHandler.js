'use server'
import nodemailer from "nodemailer";

export async function handleSubmit(e, setFormSuccess) {
    e.preventDefault();
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
    let info = await transporter.sendMail({
        from: 'info@byteklaar.be', // sender address
        to: "info@byteklaar", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello {{ contact.FIRSTNAME }} , This is an SMTP message with customizations", // plain text body
    });

    setFormSuccess(true);
    console.log("Message sent: %s", info.messageId);
}
