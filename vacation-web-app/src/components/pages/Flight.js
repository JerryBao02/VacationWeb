import React, { useState, useEffect } from "react";
import "../design/stylesFlight.css";
import Navbar from "./navBar";

const FlightBooking = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);

  const handleFromChange = (e) => setFrom(e.target.value);
  const handleToChange = (e) => setTo(e.target.value);
  const handleDepartureDateChange = (e) => setDepartureDate(e.target.value);
  const handleReturnDateChange = (e) => setReturnDate(e.target.value);

  useEffect(() => {
    // Fetch flight data when the component mounts or when the search parameters change
    if (from && to && departureDate) {
      fetchFlights();
    }
  }, [from, to, departureDate, returnDate]);

  const fetchFlights = () => {
    fetch(
      `http://localhost:4040/api/flights?origin=${from}&destination=${to}&departDate=${departureDate}&adults=1&returnDate=${returnDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch flight data");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setFlights(data);
        } else {
          console.error("Unexpected response structure:", data);
          setFlights([]); // Reset flights if data structure is unexpected
        }
      })
      .catch((error) => {
        console.error("Error fetching flight data:", error);
        setFlights([]); // Reset flights in case of an error
      });
  };

  return (
    <div className="Flight">
      <Navbar /> {/* Here we use the Navbar component */}
      <div className="search-container">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="From..."
            required
            value={from}
            onChange={handleFromChange}
          />
          <input
            type="search"
            placeholder="To..."
            required
            value={to}
            onChange={handleToChange}
          />
          <input
            type="date"
            required
            value={departureDate}
            onChange={handleDepartureDateChange}
          />
          <input
            type="date"
            value={returnDate}
            onChange={handleReturnDateChange}
          />
          <button type="button" onClick={fetchFlights}>
            Search Flights
          </button>
        </form>
      </div>

      <div className="flight-results">
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index} className="card flight-card">
              <div className="card-header">
                <b>Price:</b> {flight.price.total} ({flight.price.currency})
              </div>
              <div className="card-body">
                Number of Seats Available: {flight.numberOfBookableSeats || "N/A"}
                <br />
                Last Ticketing Date: {flight.lastTicketingDate || "N/A"}
                <hr />
                <h5>Itineraries</h5>
                {flight.itineraries && flight.itineraries[0] ? (
                  <div>Duration: {flight.itineraries[0].duration}</div>
                ) : (
                  <p>No itinerary data available</p>
                )}
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => BookFlight(flight)}
                >
                  Book Flight
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No flight data found</p>
        )}
      </div>
    </div>
  );
};

const BookFlight = (flight) => {
  // Implementation of the booking logic
  console.log("Booking flight:", flight);
};

export default FlightBooking;