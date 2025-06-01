import React, { useEffect, useState } from "react";

const UserBusList = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const storedBuses = JSON.parse(localStorage.getItem("buses")) || [];
    setBuses(storedBuses);
  }, []);

  return (
    <div className="home-container">
      <h2>Available Buses</h2>
      <ul>
        {buses.map((bus, index) => (
          <li key={index}>{bus.name} - {bus.from} to {bus.to} at {bus.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserBusList;
