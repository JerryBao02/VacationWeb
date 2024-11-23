import React from "react";
import stylesFlight from "../design/stylesFlight.css";

const FlightTickets = () => {
  return (
    <div className="Flight">
      <div className="topnav">
        <a href="index.html" className="brand">Zen Travel</a>
        <a href="Hotel.html">Hotels</a>
        <a href="Car Rental.html">Car Rental</a>
        <a href="Flight Ticket.html" className="active">Flight Tickets</a>
        <a href="Contact.html">Contact</a>
        <a href="About.html">About</a>
      </div>

      <div className="search-container">
        <form className="search-form">
          <input type="search" placeholder="From..." required />
          <input type="search" placeholder="To..." required />
          <input type="date" required />
          <input type="date" required />
          <button type="submit">Search Flights</button>
        </form>
      </div>
    </div>
  );
};

export default FlightTickets;