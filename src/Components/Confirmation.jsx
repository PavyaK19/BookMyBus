import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, fromLocation, toLocation, travelDate, selectedSeats, totalPrice } = location.state || {};

  if (!bus || !selectedSeats || selectedSeats.length === 0) {
    return <h2>Error: No booking details found.</h2>;
  }

  // Function to format date as DD-MM-YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Handle download button click
  const handleDownload = () => {
    Swal.fire({
      title: "Ticket Downloaded!!!",
      text: "Your ticket has been successfully downloaded.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="payment-container">
      <h2>Booking Confirmed!</h2>
      <p><strong>Bus:</strong> {bus.name}</p>
      <p><strong>Route:</strong> {fromLocation} → {toLocation}</p>
      <p><strong>Travel Date:</strong> {formatDate(travelDate)}</p>
      <p><strong>Departure:</strong> {bus.departureTime} | <strong>Arrival:</strong> {bus.arrivalTime}</p>
      <p><strong>Selected Seats:</strong> {selectedSeats.join(", ")}</p>
      <p><strong>Total Price:</strong> Rs.{totalPrice}</p>

      <button onClick={handleDownload}>Download Ticket</button>
      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
};

export default Confirmation;
