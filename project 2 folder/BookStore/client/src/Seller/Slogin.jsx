import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Admin/stylesheet.css";

function Slogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/seller/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Login successful") {
          alert("Login successful!");
          navigate("/shome");
        } else {
          alert("Login failed: " + (result.message || "Unknown error"));
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Network error: " + err.message);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login to Seller Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="Email address"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-auth" type="submit">
            Log In
          </button>
        </form>
        <p className="auth-link">
          Don't have an account? <Link to="/ssignup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Slogin;
