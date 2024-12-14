import React, { useState } from "react";
import "../design/contactStyles.css"; // Make sure to create this CSS file for styling
import Navbar from "./navBar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
            <Navbar /> {/* Here we use the Navbar component */}

      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please reach out with any questions or feedback.</p>

      <div className="contact-details">
        <h3>Our Contact Information</h3>
        <p><strong>Address:</strong> 1849 Broadway, 10023-7602, New York City</p>
        <p><strong>Phone:</strong> +1 (234) 567-8901</p>
        <p><strong>Email:</strong> support@zentravel.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send Us a Message</h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="thank-you">Thank you for contacting us! We'll get back to you soon.</p>}
    </div>
  );
};

export default Contact;