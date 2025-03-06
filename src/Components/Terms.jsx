import React from "react";

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms & Conditions</h1>
      <p className="terms-text">
        Please read our terms and conditions carefully before using <strong>BookMyBus</strong>.
      </p>

      <h2 className="terms-section">1. Booking & Payments</h2>
      <p className="terms-text">
        All bookings made through BookMyBus are subject to availability. 
        Payment must be completed to confirm your ticket.
      </p>

      <h2 className="terms-section">2. Cancellations & Refunds</h2>
      <p className="terms-text">
        Cancellations are subject to the policies of the bus operator. 
        Refunds, if applicable, will be processed within 5-7 business days.
      </p>

      <h2 className="terms-section">3. Passenger Responsibility</h2>
      <p className="terms-text">
        Passengers must arrive at the bus stop on time. BookMyBus is not responsible for missed buses due to late arrival.
      </p>

      <h2 className="terms-section">4. Usage of Our Platform</h2>
      <p className="terms-text">
        You agree not to misuse our platform, engage in fraudulent bookings, or violate any laws while using our service.
      </p>

      <h2 className="terms-section">5. Contact Us</h2>
      <p className="terms-text">For any concerns regarding these terms, contact us at <strong>support@bookmybus.com</strong>.</p>
    </div>
  );
};

export default Terms;
