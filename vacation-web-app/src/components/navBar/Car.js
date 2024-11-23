import React, { useState } from "react";
import stylesCar from "../design/stylesCar.css"; // Ensure the CSS file is properly imported

const CarRental = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [passengers, setPassengers] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Search Criteria:", {
      pickUpLocation,
      dropOffLocation,
      passengers,
      pickUpDate,
    });
  };

  return (
    <div className="Car">
      {/* Navigation Bar */}
      <div className="topnav">
        <a href="index.html" className="brand">Zen Travel</a>
        <a href="Hotel.html">Hotels</a>
        <a href="Car Rental.html" className="active">Car Rental</a>
        <a href="Flight Ticket.html">Flight Tickets</a>
        <a href="Contact.html">Contact</a>
        <a href="About.html">About</a>
      </div>

      {/* Search Form */}
      <div className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Pick-up Location"
            value={pickUpLocation}
            onChange={(e) => setPickUpLocation(e.target.value)}
          />
          <input
            type="search"
            placeholder="Drop-off Location"
            value={dropOffLocation}
            onChange={(e) => setDropOffLocation(e.target.value)}
          />
          <input
            type="number"
            placeholder="Passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
          <input
            type="date"
            placeholder="Pick-up Date"
            value={pickUpDate}
            onChange={(e) => setPickUpDate(e.target.value)}
          />
          <button type="submit">Search Cars</button>
        </form>
      </div>
    </div>
  );
};

export default CarRental;