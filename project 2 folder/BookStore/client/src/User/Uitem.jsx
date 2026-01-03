import React from "react";
import { Link } from "react-router-dom";
import "../Admin/stylesheet.css";
import Footer from "../Components/Footer";

function Uitem() {
  // Static data matching the screenshot detail view
  const book = {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help / Psychology",
    price: "450",
    seller: "Pravenshe",
    description:
      "A practical guide to building good habits and breaking bad ones, backed by scientific research.",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  };

  return (
    <div style={{ backgroundColor: "#fdf6e3", minHeight: "100vh" }}>
      {/* User Navbar */}
      <nav
        style={{
          backgroundColor: "#8d6e63",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>BookStore</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/uhome" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/products"
            style={{ color: "white", textDecoration: "none" }}
          >
            Books
          </Link>
          <Link
            to="/myorders"
            style={{ color: "white", textDecoration: "none" }}
          >
            My Orders
          </Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Logout
          </Link>
          <span>
            (
            {localStorage.getItem("userName")
              ? localStorage.getItem("userName").charAt(0).toUpperCase() +
                localStorage.getItem("userName").slice(1)
              : "User"}
            )
          </span>
        </div>
      </nav>

      <div
        className="content-container"
        style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}
      >
        <h2
          style={{ color: "#3e2723", marginBottom: "20px", fontSize: "24px" }}
        >
          BookView Page:
        </h2>

        <div
          style={{
            backgroundColor: "#fff9f0",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Main Book Info Section */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "1px",
                color: "#666",
                marginBottom: "5px",
              }}
            >
              THE INTERNATIONAL BESTSELLER
            </div>
            <h1
              style={{
                fontSize: "32px",
                color: "#b8860b",
                fontFamily: "serif",
                margin: "0 0 10px 0",
              }}
            >
              Atomic Habits
            </h1>
            <h3
              style={{ fontSize: "24px", color: "#333", margin: "0 0 20px 0" }}
            >
              James Clear
            </h3>
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "200px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            {/* Description Box */}
            <div
              style={{
                flex: 1,
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "20px",
                backgroundColor: "white",
              }}
            >
              <h4 style={{ margin: "0 0 10px 0", color: "#5d4037" }}>
                Description
              </h4>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
                {book.description}
              </p>
            </div>

            {/* Info Box */}
            <div
              style={{
                flex: 1,
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "20px",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  borderBottom: "1px solid #eee",
                  paddingBottom: "10px",
                  marginBottom: "10px",
                }}
              >
                <h4 style={{ margin: "0", color: "#5d4037" }}>Info</h4>
              </div>
              <div style={{ fontSize: "14px", lineHeight: "2" }}>
                <div>
                  <strong>Title:</strong> {book.title}
                </div>
                <div>
                  <strong>Author:</strong> {book.author}
                </div>
                <div>
                  <strong>Genre:</strong> {book.genre}
                </div>
                <div>
                  <strong>Price:</strong> ₹{book.price}
                </div>
                <div>
                  <strong>Seller:</strong> {book.seller}
                </div>
              </div>
            </div>
          </div>

          <button
            style={{
              marginTop: "30px",
              backgroundColor: "#a1887f",
              color: "white",
              border: "none",
              padding: "10px 30px",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Uitem;
