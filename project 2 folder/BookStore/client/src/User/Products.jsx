import React from "react";
import { Link } from "react-router-dom";
import "../Admin/stylesheet.css";
import Footer from "../Components/Footer";

function Products() {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction / Inspirational",
      price: "399",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-help / Psychology",
      price: "450",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    },
  ];

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
        style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#3e2723",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "serif",
          }}
        >
          Books List
        </h2>
        <h3
          style={{
            textAlign: "center",
            color: "#3e2723",
            marginBottom: "30px",
            fontSize: "18px",
            fontFamily: "serif",
          }}
        >
          Book Section:
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                backgroundColor: "#fff9f0",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
                width: "250px",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "150px",
                  height: "220px",
                  objectFit: "cover",
                  marginBottom: "15px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
              <h3
                style={{
                  color: "#d84315",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {book.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#5d4037",
                  marginBottom: "5px",
                }}
              >
                <strong>Author:</strong> {book.author}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#5d4037",
                  marginBottom: "5px",
                }}
              >
                <strong>Genre:</strong> {book.genre}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#333",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                ₹{book.price}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#8d6e63",
                    color: "white",
                    padding: "8px 15px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Wishlist
                </button>
                <Link
                  to={`/uitem/${book.id}`}
                  style={{
                    backgroundColor: "#5d4037",
                    color: "white",
                    padding: "8px 25px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
