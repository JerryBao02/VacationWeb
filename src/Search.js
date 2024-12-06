import React, { useState } from "react";
import { searchFlights, searchHotels } from "../api";

const Search = () => {
  const [flightResults, setFlightResults] = useState([]);
  const [hotelResults, setHotelResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFlightSearch = async () => {
    setLoading(true);
    try {
      const results = await searchFlights("JFK", "LAX", "2024-12-15");
      setFlightResults(results.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleHotelSearch = async () => {
    setLoading(true);
    try {
      const results = await searchHotels("NYC", "2024-12-15", "2024-12-20");
      setHotelResults(results.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Flights and Hotels</h1>
      <button onClick={handleFlightSearch}>Search Flights</button>
      <button onClick={handleHotelSearch}>Search Hotels</button>

      {loading && <p>Loading...</p>}

      <h2>Flight Results</h2>
      <ul>
        {flightResults.map((flight, index) => (
          <li key={index}>
            {flight.itineraries[0].segments[0].departure.iataCode} to{" "}
            {flight.itineraries[0].segments[0].arrival.iataCode} - $
            {flight.price.total}
          </li>
        ))}
      </ul>

      <h2>Hotel Results</h2>
      <ul>
        {hotelResults.map((hotel, index) => (
          <li key={index}>
            {hotel.hotel.name} - ${hotel.offers[0].price.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
