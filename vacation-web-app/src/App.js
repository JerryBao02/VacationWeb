import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/navBar/Home.js";
import Login from "./components/auth/LoginPage";
import Flight from "./components/navBar/Flight"; // Import the FlightTickets component

function App() {
  return (
    <Router>
      <div>
        <nav className="topnav">
          <Link to="/" className="brand">Zen Travel</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flights" element={<Flight />} /> {/* Define route for FlightTickets page */}
          
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;