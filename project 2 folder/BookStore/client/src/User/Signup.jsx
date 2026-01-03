import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Admin/stylesheet.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(async (response) => {
        // Changed to async to use await
        const data = await response.json();
        if (response.ok) {
          alert("Registration successful!");
          navigate("/login");
        } else {
          alert(
            "Registration failed: " +
              (data.message || "Unknown error") +
              (data.error ? "\nDetails: " + data.error : "")
          );
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Network error: " + err.message);
      });
  };

  return (
    <div className="auth-page" style={{ backgroundColor: "#fdf6e3" }}>
      <div
        className="auth-container"
        style={{
          backgroundColor: "#fff9f0",
          border: "1px solid #efebe9",
          padding: "40px",
          borderRadius: "8px",
          width: "400px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            color: "#3e2723",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          User Registration
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{ color: "#5d4037", fontWeight: "bold" }}>Name</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #d7ccc8",
              }}
            />
          </div>
          <div className="form-group">
            <label style={{ color: "#5d4037", fontWeight: "bold" }}>
              Email address
            </label>
            <input
              type="email"
              placeholder="Email address"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #d7ccc8",
              }}
            />
          </div>
          <div className="form-group">
            <label style={{ color: "#5d4037", fontWeight: "bold" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #d7ccc8",
              }}
            />
          </div>
          <button
            className="btn-auth"
            type="submit"
            style={{ backgroundColor: "#8d6e63", marginTop: "20px" }}
          >
            Signup
          </button>
        </form>
        <p
          className="auth-link"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#d84315" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
