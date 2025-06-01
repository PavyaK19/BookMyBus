import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/passenger/login", {
        email,
        password,
      });

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      window.dispatchEvent(new Event("storage"));

      const redirectTo = location.state?.redirectTo || "/booking";
      const stateData = location.state?.data || {};
      navigate(redirectTo, { state: stateData });
    } catch (err) {
      const message =
        err.response?.data?.message || "Login failed. Try again.";
      setError(message);
    }
  };

  return (
    <div className="home-container">
      <h2>Login to BookMyBus</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-btn">Login</button>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>

        <p className="register-link">
          Admin? <Link to="/admin-login">Login as Admin</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
