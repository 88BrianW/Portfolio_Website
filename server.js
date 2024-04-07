// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config()

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_PASSWORD,
    },
    debug: true,
});

// Route to handle form submission
app.post("/send-email", async (req, res) => {

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    
    const { subject, content, email } = req.body;

    // Email options
    const mailOptions = {
        from: process.env.REACT_APP_EMAIL,
        to: process.env.REACT_APP_EMAIL,
        subject: subject,
        text: `Content: ${content}\n\nSubmitted by: ${email}`,
    };

    console.log("trying to submit email...")

    // Sending email
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                reject(info);
                return res.status(500).json({ success: false, message: "Error sending email" });
            } else {
                console.log("Email sent: " + info.response);
                resolve(info);
                return res.status(200).json({ success: true, message: "Email sent successfully" });
            }
        });
    });
    

    console.log("submitted!")
});


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
