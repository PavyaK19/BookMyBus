import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BusList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fromLocation = "", toLocation = "", busType = "", travelDate = "" } = location.state || {};

  if (!fromLocation || !toLocation || !busType || !travelDate) {
    return <h2>Error: Missing travel details. Please go back and enter details.</h2>;
  }

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year.slice(-2)}`;
  };

  const formattedDate = formatDate(travelDate);

  const acBuses = [
    { 
      id: 1, name: "Sasi Travels (AC Sleeper)", price: "Rs.990", 
      departureTime: "10:00 PM", arrivalTime: "06:00 AM",
      image: "https://5.imimg.com/data5/RT/QM/GLADMIN-28978199/sahara-bus-travels-service-1000x1000.png"
    },
    { 
      id: 2, name: "TATA Travels (AC Seater)", price: "Rs.500",
      departureTime: "09:30 AM", arrivalTime: "04:00 PM",
      image: "https://chennaibusrental.com/wp-content/uploads/2022/01/1860x1050-Volvo-9900-Kortrijk-Edition-2017.jpg"
    },
  ];

  const nonAcBuses = [
    { 
      id: 3, name: "Super (Non-AC Seater)", price: "Rs.420",
      departureTime: "07:00 AM", arrivalTime: "12:30 PM",
      image: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/blue-bus?qlt=82&wid=1024&ts=1660212095501&dpr=off&fit=constrain"
    },
    { 
      id: 4, name: "KSMP (Non-AC Sleeper)", price: "Rs.625",
      departureTime: "08:45 PM", arrivalTime: "05:30 AM",
      image: "https://media.istockphoto.com/id/1616050163/photo/white-intercity-bus-in-the-parking-lot.webp?a=1&b=1&s=612x612&w=0&k=20&c=AGq5boBnk-6GNfDfbF_D0SAfMJfxECxOaZGgfvRpOxg="
    },
  ];

  const buses = busType === "AC" ? acBuses : busType === "Non-AC" ? nonAcBuses : [];

  if (buses.length === 0) {
    return <h2>No buses available for the selected type.</h2>;
  }

  const handleBusSelect = (bus) => {
    console.log("Selected Bus:", bus);
    navigate("/seat-selection", { state: { bus, fromLocation, toLocation, busType, travelDate } });
  };

  return (
    <div className="bus-list-container">
      <h2>Available Buses from {fromLocation} to {toLocation} ({busType})</h2>
      <p>Travel Date: {formattedDate}</p>
      <div className="bus-items">
        {buses.map((bus) => (
          <div key={bus.id} className="bus-item" onClick={() => handleBusSelect(bus)}>
            <div className="bus-info">
              <img src={bus.image} alt={bus.name} className="bus-image" />
              <p><strong>{bus.name}</strong></p>
              <p>Price: {bus.price}</p>
              <p>Departure: {bus.departureTime} | Arrival: {bus.arrivalTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusList;
