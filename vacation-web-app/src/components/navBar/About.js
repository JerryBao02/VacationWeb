import React from "react";
import stylesAbout from '../design/stylesAbout.css'; // Make sure to import the CSS file

const About = () => {
  return (
    <div className="About">
      {/* Navigation */}
      <div className="topnav">
        <a href="index.html" className="brand">Zen Travel</a>
        <a href="Hotel.html">Hotels</a>
        <a href="Car Rental.html">Car Rental</a>
        <a href="Flight Ticket.html">Flight Tickets</a>
        <a href="Contact.html">Contact</a>
        <a href="About.html" className="active">About</a>
      </div>

      {/* About Containers */}
      <div className="about-container">
        {/* First About Box */}
        <div className="about-box">
          <div className="about-front">
            <h2>About Zen Travel</h2>
            <p>
              Welcome to Zen Travel, your ultimate destination for seamless travel planning.
              We specialize in providing comprehensive travel solutions including flights, hotels, and car rentals.
              Our mission is to make your journey as peaceful as possible.
            </p>
          </div>
          <div className="about-back">
            <div className="back-content">
              <h2>Connect With Us</h2>
              <div className="social-links">
                <a href="https://github.com/zentravel" className="social-link">GitHub</a>
                <a href="https://linkedin.com/company/zentravel" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Second About Box */}
        <div className="about-box">
          <div className="about-front">
            <h2>Our Team</h2>
            <p>
              We are a passionate team of travel enthusiasts and technology experts working together to revolutionize the way people plan their travels.
              Our dedication to innovation and customer satisfaction drives everything we do.
            </p>
          </div>
          <div className="about-back">
            <div className="back-content">
              <h2>Join Our Team</h2>
              <div className="social-links">
                <a href="https://github.com/zentravel/careers" className="social-link">Careers on GitHub</a>
                <a href="https://linkedin.com/company/zentravel/jobs" className="social-link">Jobs on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;