import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./stylesheet.css";

function Asignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Admin registered successfully") {
          alert("Registration successful!");
          navigate("/alogin");
        } else {
          alert("Registration failed: " + (result.message || "Unknown error"));
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
        <h1>Admin Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-auth" type="submit">
            Signup
          </button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/alogin">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Asignup;
