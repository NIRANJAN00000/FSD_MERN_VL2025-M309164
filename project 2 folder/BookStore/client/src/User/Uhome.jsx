import React from "react";
import { Link } from "react-router-dom";
import "../Admin/stylesheet.css";
import Footer from "../Components/Footer";

function Uhome() {
  const bestSellers = [
    {
      id: 1,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      id: 2,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    },
    {
      id: 3,
      title: "Don't Let Her Stay",
      author: "Nicola Sanders",
      image:
        "https://covers4.booksamillion.com/covers/bam/9/79/887/461/9798874610791_b.jpg",
    },
    {
      id: 4,
      title: "Killing the Witches",
      author: "Bill O'Reilly",
      image:
        "https://covers1.booksamillion.com/covers/bam/1/25/028/332/1250283329_b.jpg",
    },
  ];

  const recommendations = [
    {
      id: 5,
      title: "Harry Potter",
      image: "https://m.media-amazon.com/images/I/81q77Q39nEL.jpg",
    },
    {
      id: 6,
      title: "Elon Musk",
      image:
        "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg",
    },
    {
      id: 7,
      title: "Spider-Man",
      image:
        "https://m.media-amazon.com/images/I/81X4R7qJk-L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 8,
      title: "The Hobbit",
      image: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#fdf6e3", minHeight: "100vh" }}>
      {/* Navbar - Hardcoded for simplicity matching the design */}
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
        {/* Best Seller Section */}
        <section style={{ marginBottom: "50px" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#3e2723",
              marginBottom: "30px",
              fontSize: "28px",
              fontFamily: "serif",
            }}
          >
            Best Seller
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {bestSellers.map((book) => (
              <div
                key={book.id}
                style={{ width: "220px", textAlign: "center" }}
              >
                <div
                  style={{
                    height: "320px",
                    backgroundColor: "#fff",
                    padding: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "5px",
                  }}
                >
                  {book.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#666" }}>{book.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Recommendation Section */}
        <section>
          <h2
            style={{
              textAlign: "center",
              color: "#3e2723",
              marginBottom: "30px",
              fontSize: "28px",
              fontFamily: "serif",
            }}
          >
            Top Recommendation
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {recommendations.map((book) => (
              <div
                key={book.id}
                style={{ width: "220px", textAlign: "center" }}
              >
                <div
                  style={{
                    height: "300px",
                    overflow: "hidden",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Uhome;
