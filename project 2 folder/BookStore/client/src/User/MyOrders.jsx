import React from "react";
import SellerLayout from "../Seller/SellerLayout"; // Or create a UserLayout. Using direct structure for now to match screenshot exactly without sidebar if not shown.
// Actually screenshot shows a Navbar, not a sidebar. So I will use the same Navbar structure as other User pages.
import { Link } from "react-router-dom";
import "../Admin/stylesheet.css";
import Footer from "../Components/Footer";

function MyOrders() {
  const orders = [
    {
      id: "6699355549",
      date: "2025-10-08",
      deliveryBy: "2025-08-15",
      product: "Atomic Habits",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      address: "173, Mayur Vihar Phase-1, Delhi (110091), Delhi",
      seller: "Pravenshe", // Added Seller field as per screenshot
      price: "540",
      status: "ontheway",
    },
    // Add more mock data if needed
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
        className="orders-container"
        style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}
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
          My Orders
        </h2>

        <div
          className="orders-list"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {orders.map((order) => (
            <div
              key={order.id}
              className="order-row"
              style={{
                backgroundColor: "#fcf6f0",
                padding: "20px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              {/* Image & Product Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  flex: 1,
                }}
              >
                <img
                  src={order.image}
                  alt={order.product}
                  style={{
                    width: "50px",
                    height: "75px",
                    objectFit: "cover",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#d97706",
                      fontSize: "14px",
                    }}
                  >
                    Product Name
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#5d4037",
                    }}
                  >
                    {order.product}
                  </span>
                </div>
              </div>

              {/* Order ID */}
              <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#8d6e63",
                    fontSize: "12px",
                  }}
                >
                  Order ID
                </span>
                <span style={{ fontSize: "13px", color: "#333" }}>
                  {order.id}
                </span>
              </div>

              {/* Address */}
              <div style={{ flex: 1.5, paddingRight: "10px" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#8d6e63",
                    fontSize: "12px",
                  }}
                >
                  Address
                </span>
                <div
                  style={{ fontSize: "13px", color: "#333", lineHeight: "1.4" }}
                >
                  {order.address}
                </div>
              </div>

              {/* Seller - User view specific */}
              <div
                style={{ display: "flex", flexDirection: "column", flex: 0.8 }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#8d6e63",
                    fontSize: "12px",
                  }}
                >
                  Seller
                </span>
                <span style={{ fontSize: "13px", color: "#333" }}>
                  {order.seller}
                </span>
              </div>

              {/* Booking & Delivery Date */}
              <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#8d6e63",
                    fontSize: "12px",
                  }}
                >
                  Booking Date
                </span>
                <span style={{ fontSize: "13px", color: "#333" }}>
                  {order.date}
                </span>
                <div style={{ marginTop: "10px" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#8d6e63",
                      fontSize: "12px",
                    }}
                  >
                    Delivery By
                  </span>
                  <div style={{ fontSize: "13px", color: "#333" }}>
                    {order.deliveryBy}
                  </div>
                </div>
              </div>

              {/* Price, Status */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  flex: 0.8,
                }}
              >
                <div style={{ marginBottom: "5px" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#8d6e63",
                      fontSize: "12px",
                      marginRight: "5px",
                    }}
                  >
                    Price
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    ₹{order.price}
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#8d6e63",
                      fontSize: "12px",
                      marginRight: "5px",
                    }}
                  >
                    Status
                  </span>
                  <span
                    style={{
                      color: "#d97706",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyOrders;
