import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link for navigation
import homeStyles from "../design/homeStyles.css"; // Ensure this file exists in your project

const Home = () => {
  // State for slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
      alt: "location 1",
    },
    {
      src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      alt: "location 2",
    },
    {
      src: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg",
      alt: "location 3",
    },
  ];

  // Slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Navigation */}
      <div className="nav-right">
        <nav className="topnav">
          <Link to="/" className="brand">Zen Travel</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/about" className="nav-link">About</Link>
      
        </nav>
      </div>

      {/* Slideshow */}
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      {/* Sub-Sections */}
      <div className="Sub-Sections">
        <div className="Hover-Box">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
            alt="Hotels"
          />
          <div className="service-overlay">
            <p className="service-text">Find your perfect stay</p>
            <Link to="/hotel" className="service-button">Hotels</Link>
          </div>
        </div>
        <div className="Hover-Box">
          <img
            src="https://wallpapersok.com/images/hd/green-retro-aesthetic-car-am1jqjvoc6mqugk5.jpg"
            alt="Cars"
          />
          <div className="service-overlay">
            <p className="service-text">Explore with freedom</p>
            <Link to="/car-rental" className="service-button">Cars</Link>
          </div>
        </div>
        <div className="Hover-Box">
          <img
            src="https://i.redd.it/bpxclgvpfgx01.jpg"
            alt="Flights"
          />
          <div className="service-overlay">
            <p className="service-text">Book your next Flight</p>
            <Link to="/flight-ticket" className="service-button">Flights</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;