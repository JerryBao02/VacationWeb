import React, { useState } from 'react';
import '../design/stylesHotel.css'; // Import the stylesheet
import Navbar from './navBar';

const Hotel = () => {
  const [cityCode, setCityCode] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState('1');
  const [rooms, setRooms] = useState('1');
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  const fetchHotels = () => {
    setError(null); // Clear previous errors
    fetch(
      `http://localhost:4040/api/hotels?cityCode=${cityCode}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch hotel data");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setHotels(data);
        } else {
          setHotels([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
        setError("Failed to load hotel data. Please try again.");
        setHotels([]);
      });
  };

  const BookHotel = (hotel) => {
    console.log("Booking hotel:", hotel);
  };

  return (
    <div className="Hotel">
      <Navbar />
      <div className="search-container">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Where are you going?"
            required
            value={cityCode}
            onChange={(e) => setCityCode(e.target.value)}
          />
          <input
            type="date"
            placeholder="Check-in"
            required
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <input
            type="date"
            placeholder="Check-out"
            required
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Guests"
            required
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rooms"
            required
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
          <button type="button" onClick={fetchHotels}>
            Search Hotels
          </button>
        </form>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="hotel-results">
        {hotels.length > 0 ? (
          hotels.map((hotel, index) => (
            <div key={index} className="card hotel-card">
              <div className="card-header">
                <b>Price:</b> {hotel.price.total} ({hotel.price.currency})
              </div>
              <div className="card-body">
                <p>{hotel.hotel.name}</p>
                <p>{hotel.hotel.address.cityName}, {hotel.hotel.address.countryCode}</p>
                <p>Number of Rooms Available: {hotel.hotel.roomAvailability || "N/A"}</p>
                <hr />
                <button
                  className="btn btn-primary"
                  onClick={() => BookHotel(hotel)}
                >
                  Book Hotel
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hotel data found</p>
        )}
      </div>
    </div>
  );
};

export default Hotel;