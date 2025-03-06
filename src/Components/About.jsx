import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About BookMyBus</h1>
      <p className="about-text">
        Welcome to <strong>BookMyBus</strong> – your trusted platform for booking bus tickets online.
      </p>
      <p className="about-text">
        We provide <strong>secure, fast, and hassle-free </strong>ticket booking with real-time seat selection.
      </p>

      <h2 className="about-title">Why Choose Us?</h2>
      <ul className="about-list">
        <li>🚌 Easy Online Ticket Booking</li>
        <li>💳 Secure Payment Gateway</li>
        <li>📍 Real-Time Bus Tracking</li>
        <li>⚡ Instant Ticket Confirmation</li>
        <li>🔒 24/7 Customer Support</li>
      </ul>
    </div>
  );
};

export default About;
