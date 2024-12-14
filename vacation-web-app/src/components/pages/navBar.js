// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../design/navStyles.css";

const Navbar = () => {
  return (
    <div className="topnav">
      <div className="left-links">
        <Link to="/home" className="nav-link">Zen Travel</Link>
        <Link to="/flight" className="nav-link">Flights</Link>
        <Link to="/hotel" className="nav-link">Hotels</Link>
        <Link to="/car" className="nav-link">Cars</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <div className="right-links">
        <Link to="/" className="nav-link">Sign Out</Link>
      </div>
    </div>
  );
};

export default Navbar;