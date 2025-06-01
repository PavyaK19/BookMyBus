import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [bus, setBus] = useState({ name: "", from: "", to: "", time: "" });
  const [buses, setBuses] = useState([]);

  // Fetch buses from backend when component mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/buses")
      .then((res) => res.json())
      .then((data) => setBuses(data))
      .catch((err) => console.error("Failed to fetch buses:", err));
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/buses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bus),
      });

      if (!response.ok) {
        throw new Error("Failed to save bus");
      }

      const savedBus = await response.json();
      setBuses([...buses, savedBus]); // Add new bus to list
      setBus({ name: "", from: "", to: "", time: "" }); // Clear form
    } catch (err) {
      console.error(err);
      alert("Could not save bus.");
    }
  };

  return (
    <div className="home-container">
      <h2>Add New Bus</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="name"
          value={bus.name}
          onChange={handleChange}
          placeholder="Bus Name"
          required
        />
        <input
          name="from"
          value={bus.from}
          onChange={handleChange}
          placeholder="From"
          required
        />
        <input
          name="to"
          value={bus.to}
          onChange={handleChange}
          placeholder="To"
          required
        />
        <input
          name="time"
          value={bus.time}
          onChange={handleChange}
          placeholder="Time"
          required
        />
        <button type="submit" className="login-btn">Add Bus</button>
      </form>

      <h3>Existing Buses:</h3>
      <ul>
        {buses.map((b, i) => (
          <li key={i}>
            {b.name} - {b.from} to {b.to} at {b.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
