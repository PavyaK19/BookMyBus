import React, { useEffect, useState } from "react";

const AvailableBuses = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("busList")) || [];
    setBuses(stored);
  }, []);

  return (
    <div className="home-container">
      <h2>Available Buses</h2>
      {buses.length === 0 ? (
        <p>No buses available</p>
      ) : (
        <ul>
          {buses.map((bus, index) => (
            <li key={index}>
              <strong>{bus.name}</strong> from {bus.from} to {bus.to} on {bus.date} at {bus.time} - ₹{bus.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailableBuses;
