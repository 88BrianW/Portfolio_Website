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
app.post("/send-email", (req, res) => {
    const { subject, content, email } = req.body;

    // Email options
    const mailOptions = {
        from: process.env.REACT_APP_EMAIL,
        to: process.env.REACT_APP_EMAIL,
        subject: subject,
        text: `Content: ${content}\n\nSubmitted by: ${email}`,
    };

    // Sending email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: "Error sending email" });
        } else {
            console.log("Email sent: " + info.response);
            return res.status(200).json({ success: true, message: "Email sent successfully" });
        }
    });
});


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
