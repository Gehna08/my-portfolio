import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-header">
                <h2>Get in Touch</h2>
                <p>I’d love to hear from you! Whether it’s for collaborations, questions, or just a chat.</p>
            </div>

            <div className="contact-container">
                {/* Left Side (Image and Contact Details) */}
                <div className="contact-image">
                    <img src="contact.jpeg" alt="Your Avatar" />
                    <div className="contact-details">
                        <p>Email: <a href="mailto:gvithalani9@gmail.com">gvithalani9@gmail.com</a></p>
                        <p>Contact No.: +91 8799494269</p>
                        <div className="social-icons">
                            <a href="https://github.com/Gehna08" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/gehnavithalani/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} className="icon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side (Form) */}
                <div className="contact-info">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <label htmlFor="name">Your Name *</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Your Email *</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="subject">Subject *</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Your Message *</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
