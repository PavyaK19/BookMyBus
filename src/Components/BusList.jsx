import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BusList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fromLocation = "", toLocation = "", busType = "", travelDate = "" } = location.state || {};

  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fromLocation || !toLocation || !busType || !travelDate) {
      setError("Missing travel details. Please go back and enter details.");
      setLoading(false);
      return;
    }

    fetch("http://localhost:5000/api/buses") // Replace with your backend URL
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch buses");
        return res.json();
      })
      .then((data) => {
        setBuses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [fromLocation, toLocation, busType, travelDate]);

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year.slice(-2)}`;
  };

  if (loading) return <p>Loading buses...</p>;
  if (error) return <h2>Error: {error}</h2>;

  const formattedDate = formatDate(travelDate);
  const filteredBuses = buses.filter((bus) => bus.busType === busType);

  if (filteredBuses.length === 0) {
    return <h2>No buses available for the selected type.</h2>;
  }

  const handleBusSelect = (bus) => {
    navigate("/seat-selection", { state: { bus, fromLocation, toLocation, busType, travelDate } });
  };

  return (
    <div className="bus-list-container">
      <h2>
        Available Buses from {fromLocation} to {toLocation} ({busType})
      </h2>
      <p>Travel Date: {formattedDate}</p>
      <div className="bus-items">
        {filteredBuses.map((bus) => (
          <div key={bus._id} className="bus-item" onClick={() => handleBusSelect(bus)}>
            <div className="bus-info">
              <img src={bus.image} alt={bus.name} className="bus-image" />
              <p><strong>{bus.name}</strong></p>
              <p>Price: Rs.{bus.price}</p>
              <p>
                Departure: {bus.departureTime} | Arrival: {bus.arrivalTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusList;
