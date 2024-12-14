import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/LoginPage";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import FlightTicket from "./components/pages/Flight";
import Car from "./components/pages/Car";
import Hotel from "./components/pages/Hotel";
import Register from "./components/auth/RegisterPage";


function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/car" element={<Car />} />
          <Route path="/flight" element={<FlightTicket/>} />
          <Route path="/register" element={<Register/>} />

          
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;