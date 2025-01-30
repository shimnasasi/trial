import React, { useState } from "react";
import "../Pages/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    contactNumber: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the message
    const message = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nContact Number: ${formData.contactNumber}\nMessage: ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API URL
    // https://wa.me/+919562465095/?text
    const whatsappUrl = `https://wa.me/+971542791548/?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Clear the form after sending
    setFormData({
      name: "",
      company: "",
      email: "",
      subject: "",
      contactNumber: "",
      message: ""
    });
  };

  return (
    <div className="contact-details-container">
      <form onSubmit={handleSubmit}>
        <h2>Get in Touch</h2>
        <div className="contactform-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="contactform-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className="contact-number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="learn-more" type="submit">
          <span aria-hidden="true" className="circle">
            <span className="icon arrow" />
          </span>
          <span className="button-text">Send message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
