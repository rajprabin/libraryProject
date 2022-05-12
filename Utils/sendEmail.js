const CONFIG =require('../Configurations/config')
const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: CONFIG.host,
            service: CONFIG.service,
            port: 587,
            secure: true,
            auth: {
                user: CONFIG.user,
                pass: CONFIG.pass,
            },
        });

        await transporter.sendMail({
            from: CONFIG.user,
            to: CONFIG.user,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent")
        
    }
};

module.exports = sendEmail;