import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SeatSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting state safely with default values
  const bus = location.state?.bus || null;
  const fromLocation = location.state?.fromLocation || "Unknown";
  const toLocation = location.state?.toLocation || "Unknown";
  const busType = location.state?.busType || "Unknown";
  const travelDate = location.state?.travelDate || "Unknown";

  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!bus) {
    return <h2>Error: No bus selected. Please go back and choose a bus.</h2>;
  }

  const seatLayout = [
    ["1A", "1B"],
    ["2A", "2B"],
    ["3A", "3B"],
    ["4A", "4B"],
    ["5A", "5B"],
  ];

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat) ? prevSeats.filter((s) => s !== seat) : [...prevSeats, seat]
    );
  };

  // Ensure seat price is a valid number
  const seatPrice = Number(bus.price.toString().replace(/[^\d]/g, "")) || 0;
  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div className="seat-selection-container">
      <h2>Select Seats for {bus.name} ({busType})</h2>
      <p><strong>Route:</strong> {fromLocation} → {toLocation}</p>
      <p><strong>Departure:</strong> {bus.departureTime} | <strong>Arrival:</strong> {bus.arrivalTime}</p>
      <p><strong>Price per seat:</strong> {bus.price}</p>
      <p><strong>Travel Date:</strong> {travelDate}</p>

      <div className="seat-layout">
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seat) => (
              <button
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                onClick={() => handleSeatSelect(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>

      <h3>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</h3>
      <h3>Total Price: Rs.{totalPrice}</h3>

      <button 
        onClick={() => navigate("/payment", { 
          state: { bus, fromLocation, toLocation, busType, travelDate, selectedSeats, totalPrice } 
        })}
        disabled={selectedSeats.length === 0}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default SeatSelection;
