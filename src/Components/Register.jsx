import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/passenger/register", {
        email,
        password,
      });

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      const message =
        err.response?.data?.message || "Registration failed. Try again.";
      setError(message);
    }
  };

  return (
    <div className="home-container">
      <h2>Register for BookMyBus</h2>
      <form onSubmit={handleRegister} className="login-form">
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="login-btn">Register</button>
        <p className="register-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        <p className="register-link">
          Admin? <Link to="/admin-register">Register as Admin</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
