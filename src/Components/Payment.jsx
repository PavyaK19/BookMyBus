import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("isLoggedIn"); 
  const alreadyRedirected = sessionStorage.getItem("redirectedFromLogin"); 

  const { 
    selectedSeats = [], 
    totalPrice = 0, 
    bus = {}, 
    fromLocation = "Unknown", 
    toLocation = "Unknown", 
    travelDate = "" 
  } = location.state || {};

  useEffect(() => {
    if (!loggedIn) {
      sessionStorage.setItem("redirectedFromLogin", "true");
      navigate("/login", { state: { redirectTo: "/payment", data: location.state } });
    } else if (alreadyRedirected) {
      sessionStorage.removeItem("redirectedFromLogin");
    }
  }, [loggedIn, navigate, location.state, alreadyRedirected]);

  if (!selectedSeats.length || !totalPrice || !bus.name) {
    return <h2>Error: Missing booking details. Please go back and select seats again.</h2>;
  }

  const handlePayment = () => {
    Swal.fire({
      title: "Payment Successful! 🎉",
      text: "Your booking has been confirmed.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/confirmation", { state: { selectedSeats, totalPrice, bus, fromLocation, toLocation, travelDate } });
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p><strong>Bus:</strong> {bus.name}</p>
      <p><strong>From:</strong> {fromLocation} → <strong>To:</strong> {toLocation}</p>
      <p><strong>Travel Date:</strong> {formatDate(travelDate)}</p>
      <p><strong>Selected Seats:</strong> {selectedSeats.join(", ")}</p>
      <p><strong>Total Price:</strong> Rs.{totalPrice}</p>
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );
};

export default PaymentPage;
