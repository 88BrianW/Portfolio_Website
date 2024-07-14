import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import "./styles/contact.css";

//const uri = 'mongodb+srv://88brianw:01hgHq2Xfizv8j8M@brianportfolio.m0lhvxd.mongodb.net/?retryWrites=true&w=majority&appName=BrianPortfolio';

/*
async function saveFormData(formData) {
    try {
        await MongoClient.connect();

        const db = MongoClient.db('Contact');
        const submissionsCollection = db.collection('Contact Info');

        const result = await submissionsCollection.insertOne(formData);
        console.log('Form submission saved:', result.insertedId);
        return { success: true, message: 'Form submission saved successfully' };
    } catch (error) {
        console.error('Error saving form submission:', error);
        return { success: false, message: 'Error saving form submission' };
    } finally {
        await MongoClient.close();
    }
}
*/

const Contact = () => {
	const [formData] = useState({
		subject: "",
		content: "",
		email: "",
		attachments: [],
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setFormData({ ...formData, [name]: value });
	// };

	// const handleAttachmentChange = (e) => {
	// 	const fileInput = e.target;
	// 	const files = fileInput.files;
	// 	const fileNames = [];
	// 	for (let i = 0; i < files.length; i++) {
	// 		fileNames.push(files[i].name);
	// 	}
	// 	const fileNameDisplay = document.getElementById("file-name-display");
	// 	fileNameDisplay.textContent = fileNames.join(", ");
	// 	setFormData({ ...formData, attachments: files });
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(JSON.stringify(formData));
	
		try {
			const response = await fetch("/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({...formData}),
			});

			// axios
			// 	.post("http://localhost:3000/send-email", {...formData})
			// 	.then((response) => {
			// 		setFormData({
			// 			subject: "",
			// 			content: "",
			// 			email: "",
			// 			attachments: [],
			// 		})
			// 	})
			// 	.catch((error) => {
			// 		console.error("Error sending email:", error);
			// 		alert("Error sending email");
			// 	});
		
			if (response.ok) {
				document.getElementById("success-modal").style.display = "block";
			} else {
				const responseData = await response.json();
				alert(responseData.message);
			}
		} catch (error) {
			console.error("Error sending email:", error);
			alert("Error sending email");
		}
	};
		
	const closeModal = () => {
		document.getElementById("success-modal").style.display = "none";
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{"Brian's Contact"}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
				<div className="contact-logo-container">
					<div className="contact-logo">
					<Logo width={46} />
					</div>
				</div>

				<div className="contact-container">
					<form onSubmit={handleSubmit} className="contact-form">
					<div className="title contact-title">Ways to Contact Me</div>

					
					{/* <div className="form-group">
						<label htmlFor="subject">Subject:</label>
						<input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
					</div>

					<div className="form-group">
						<label htmlFor="content">Content:</label>
						<textarea id="content" name="content" value={formData.content} onChange={handleChange} required />
					</div>

					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
					</div>

					<div className="form-group">
						<label htmlFor="attachments">Attachments:</label>
						<input type="file" id="attachments" name="attachments" onChange={handleAttachmentChange} multiple />
						<div id="file-name-display" className="file-name-display"></div>
					</div>

					<button type="submit" className="submit-button">Submit</button> */}

					<div className="subtitle contact-subtitle">
						Find my available platforms below. My main forms of communications are Gmail and Discord.
					</div>

					</form>
				</div>

				<div className="socials-container">
					<div className="contact-socials">
					<Socials />
					</div>
				</div>

				<div className="page-footer">
					<Footer />
				</div>
				</div>
			</div>

			<div id="success-modal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>Success!</p>
                </div>
            </div>
			</React.Fragment>
	);
};

export default Contact;
