import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to BookMyBus</h1>
      <p>Book your tickets easily and securely.</p>
      <Link to="/booking">
        <button className="book-now-btn">Book Now</button>
      </Link>
    </div>
  );
}

export default Home;
