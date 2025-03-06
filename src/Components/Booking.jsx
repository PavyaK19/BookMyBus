import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const tamilNaduDistricts = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
  "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanniyakumari", "Karur",
  "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Perambalur",
  "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
  "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur",
  "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"
];

const Booking = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [busType, setBusType] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fromLocation || !toLocation || !busType || !travelDate) {
      setError("All fields are required!");
    } else if (fromLocation === toLocation) {
      setError("Departure and destination locations cannot be the same!");
    } else {
      setError("");
      navigate("/bus-list", { state: { fromLocation, toLocation, busType, travelDate } });
    }
  };

  return (
    <div className="booking-container">
      <h2>Enter Your Travel Details</h2>
      <form onSubmit={handleSubmit}>
        <table className="booking-table">
          <tbody>
            {/* From Location */}
            <tr>
              <td><label htmlFor="from">From:</label></td>
              <td>
                <select
                  id="from"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  required
                >
                  <option value="">-- Select Departure District --</option>
                  {tamilNaduDistricts.map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </td>
            </tr>

            {/* To Location */}
            <tr>
              <td><label htmlFor="to">To:</label></td>
              <td>
                <select
                  id="to"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  required
                >
                  <option value="">-- Select Destination District --</option>
                  {tamilNaduDistricts
                    .filter((district) => district !== fromLocation) // Prevents selecting the same as 'From'
                    .map((district, index) => (
                      <option key={index} value={district}>{district}</option>
                    ))}
                </select>
              </td>
            </tr>

            {/* Bus Type */}
            <tr>
              <td><label htmlFor="busType">Select Bus Type:</label></td>
              <td>
                <select
                  id="busType"
                  value={busType}
                  onChange={(e) => setBusType(e.target.value)}
                  required
                >
                  <option value="">-- Select Bus Type --</option>
                  <option value="AC">AC Bus</option>
                  <option value="Non-AC">Non-AC Bus</option>
                </select>
              </td>
            </tr>

            {/* Travel Date */}
            <tr>
              <td><label htmlFor="travelDate">Travel Date:</label></td>
              <td>
                <input
                  type="date"
                  id="travelDate"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]} // Prevents past date selection
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        {error && <p className="error-message">{error}</p>}

        <div className="button-container">
          <button type="submit" className="submit-btn">Find Buses</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
