import React from "react";
import SellerLayout from "./SellerLayout";
import "../Admin/stylesheet.css";

function MyProducts() {
  // Static data matching the product screenshot
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction / Inspirational",
      price: "350",
      description:
        "A shepherd boy named Santiago embarks on a journey to discover his personal legend and find his t...",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self Help / Psychology",
      price: "450",
      description:
        "A practical guide to building good habits and breaking bad ones, backed by scientific research...",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    },
  ];

  return (
    <SellerLayout title="Seller's Product">
      <div className="products-container">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Books List
        </h2>
        <div className="books-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <span className="delete-icon">🗑️</span>
              <img src={book.image} alt={book.title} className="book-image" />
              <h3 className="book-title" style={{ color: "#d84315" }}>
                {book.title}
              </h3>
              <p className="book-info">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="book-info">
                <strong>Genre:</strong> {book.genre}
              </p>
              <p className="book-info">
                <strong>Price:</strong> Rs {book.price}
              </p>
              <p className="book-desc">
                <strong>Description:</strong> {book.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SellerLayout>
  );
}

export default MyProducts;
