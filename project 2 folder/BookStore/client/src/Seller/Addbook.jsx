import React, { useState } from "react";
import SellerLayout from "./SellerLayout";
import "../Admin/stylesheet.css";

function Addbook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    description: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding book:", book);
    alert("Book added successfully (preview mode)!");
  };

  return (
    <SellerLayout title="AddBook Page:">
      <div
        className="add-book-container"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <div
          className="auth-container"
          style={{
            width: "500px",
            padding: "40px",
            backgroundColor: "#fdf6e3",
            borderRadius: "8px",
            boxShadow: "none",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#3e2723",
              marginBottom: "30px",
              fontSize: "24px",
            }}
          >
            Add Book
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title"
                required
                onChange={(e) => setBook({ ...book, title: e.target.value })}
                style={{
                  backgroundColor: "#fdfcf0",
                  border: "1px solid #e0e0e0",
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Author"
                required
                onChange={(e) => setBook({ ...book, author: e.target.value })}
                style={{
                  backgroundColor: "#fdfcf0",
                  border: "1px solid #e0e0e0",
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Genre"
                onChange={(e) => setBook({ ...book, genre: e.target.value })}
                style={{
                  backgroundColor: "#fdfcf0",
                  border: "1px solid #e0e0e0",
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setBook({ ...book, price: e.target.value })}
                style={{
                  backgroundColor: "#fdfcf0",
                  border: "1px solid #e0e0e0",
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  setBook({ ...book, description: e.target.value })
                }
                style={{
                  backgroundColor: "#fdfcf0",
                  border: "1px solid #e0e0e0",
                }}
              />
            </div>
            <div className="form-group">
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  color: "#555",
                  fontSize: "14px",
                }}
              >
                Item Image
              </label>
              <input
                type="file"
                onChange={(e) => setBook({ ...book, image: e.target.files[0] })}
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "10px",
                  width: "100%",
                  backgroundColor: "#fdfcf0",
                }}
              />
            </div>
            <button
              className="btn-auth"
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#8d6e63",
                marginTop: "20px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </SellerLayout>
  );
}

export default Addbook;
