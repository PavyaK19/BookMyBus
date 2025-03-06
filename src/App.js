import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Booking from "./Components/Booking";
import BusList from "./Components/BusList";
import SeatSelection from "./Components/SeatSelection";
import Payment from "./Components/Payment"; 
import Confirmation from "./Components/Confirmation"; 
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Foot from "./Components/Foot"; 
import About from "./Components/About";
import Privacy from "./Components/Privacy";  
import Terms from "./Components/Terms";  
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bus-list" element={<BusList />} />
            <Route path="/seat-selection" element={<SeatSelection />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/about" element={<About />} />  {/* ✅ About Page */}
            <Route path="/privacy-policy" element={<Privacy />} />  {/* ✅ Match this URL exactly */}
            <Route path="/terms" element={<Terms />} />  {/* ✅ Terms Page */}
          </Routes>
        </main>

        <Foot />
      </div>
    </Router>
  );
}

export default App;
