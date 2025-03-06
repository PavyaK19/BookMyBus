import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const validCredentials = {
    email: "717823p139@kce.ac.in",
    password: "pavi"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    if (email === validCredentials.email && password === validCredentials.password) {
      setError("");
      localStorage.setItem("isLoggedIn", "true"); // Save login state
      localStorage.setItem("userEmail", email); // Store user email
      
      // 🔥 Force update Navbar by triggering storage event
      window.dispatchEvent(new Event("storage"));

      const redirectTo = location.state?.redirectTo || "/booking"; // Get previous page
      const stateData = location.state?.data || {}; // Get the previous page state
      
      navigate(redirectTo, { state: stateData }); // Redirect to previous page with state
    } else {
      setError("Invalid email or password. Please try again.");
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

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;