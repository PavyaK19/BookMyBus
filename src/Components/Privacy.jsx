import React from "react";
const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-text">
        Your privacy is important to us at <strong>BookMyBus</strong>. This policy outlines how we collect, use, and protect your information.
      </p>

      <h2 className="privacy-section">1. Information We Collect</h2>
      <p className="privacy-text">
        We collect personal details such as name, email, phone number, and payment details for booking purposes.
      </p>

      <h2 className="privacy-section">2. How We Use Your Information</h2>
      <p className="privacy-text">
        We use your data to process bookings, send confirmations, and improve our services. 
        We do **not** sell your data to third parties.
      </p>

      <h2 className="privacy-section">3. Security Measures</h2>
      <p className="privacy-text">
        We implement strong security protocols to protect your information. 
        All transactions are encrypted and processed securely.
      </p>

      <h2 className="privacy-section">4. Contact Us</h2>
      <p className="privacy-text">For any privacy concerns, contact us at <strong>support@bookmybus.com</strong>.</p>
    </div>
  );
};

export default Privacy;
