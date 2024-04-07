// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "portfolioprojectbrian@gmail.com",
        pass: "bgzxedsyohruczlm",
    },
    debug: true,
});

// Route to handle form submission
app.post("https://portfolio-website-1-ielg.onrender.com/send-email", (req, res) => {
    const { subject, content, email } = req.body;

    // Email options
    const mailOptions = {
        from: "portfolioprojectbrian@gmail.com",
        to: "portfolioprojectbrian@gmail.com",
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
