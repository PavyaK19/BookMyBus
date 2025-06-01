import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    localStorage.setItem("adminEmail", email);
    localStorage.setItem("adminPassword", password);
    navigate("/admin-login");
  };

  return (
    <div className="home-container">
      <h2>Admin Registration</h2>
      <form onSubmit={handleRegister} className="login-form">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-btn">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;
