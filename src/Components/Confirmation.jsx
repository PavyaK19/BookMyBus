import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticketRef = useRef();

  const { bus, fromLocation, toLocation, travelDate, selectedSeats, totalPrice } = location.state || {};

  if (!bus || !selectedSeats || selectedSeats.length === 0) {
    return <h2>Error: No booking details found.</h2>;
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Handle PDF download
  const handleDownload = () => {
    const input = ticketRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("ticket.pdf");

      Swal.fire({
        title: "Ticket Downloaded!",
        text: "Your ticket has been successfully downloaded.",
        icon: "success",
        confirmButtonText: "OK",
      });
    });
  };

  return (
    <div className="payment-container">
      <h2>Booking Confirmed!</h2>

      <div ref={ticketRef} style={{ background: "#fff", color: "#000", padding: "20px", marginTop: "20px" }}>
        <h3> BookMyBus - Ticket</h3>
        <p><strong>Bus:</strong> {bus.name}</p>
        <p><strong>Route:</strong> {fromLocation} → {toLocation}</p>
        <p><strong>Travel Date:</strong> {formatDate(travelDate)}</p>
        <p><strong>Departure:</strong> {bus.departureTime}</p>
        <p><strong>Arrival:</strong> {bus.arrivalTime}</p>
        <p><strong>Seats:</strong> {selectedSeats.join(", ")}</p>
        <p><strong>Total Price:</strong> Rs.{totalPrice}</p>
      </div>

      <br />

      <button onClick={handleDownload}>Download Ticket</button>
      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
};

export default Confirmation;
