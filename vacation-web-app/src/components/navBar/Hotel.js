import React from 'react';
import '../design/stylesHotel.css'; // Import the stylesheet

const Hotel = () => {
  return (
    <div className="Hotel">
      {/* Navigation Bar */}
      <div className="topnav">
        <a href="index.html" className="brand">Zen Travel</a>
        <a href="Hotel.html" className="active">Hotels</a>
        <a href="Car Rental.html">Car Rental</a>
        <a href="Flight Ticket.html">Flight Tickets</a>
        <a href="Contact.html">Contact</a>
        <a href="About.html">About</a>
      </div>

      {/* Search Container */}
      <div className="search-container">
        <form className="search-form">
          <input type="search" placeholder="Where are you going?" />
          <input type="date" placeholder="Check-in" />
          <input type="date" placeholder="Check-out" />
          <input type="number" placeholder="Guests" />
          <button type="submit">Search Hotels</button>
        </form>
      </div>
    </div>
  );
};

export default Hotel;