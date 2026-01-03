import React from "react";
import SellerLayout from "./SellerLayout";
import "../Admin/stylesheet.css";

function Orders() {
  // Mock data matching the screenshot
  const orders = [
    {
      id: "6699355549",
      date: "2025-10-08",
      deliveryBy: "2025-08-15",
      buyer: "Ram",
      product: "Atomic Habits",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      address: "173, Mayur Vihar Phase-1, Delhi (110091), Delhi",
      warranty: "1 year",
      amount: "540",
      status: "ontheway",
    },
    {
      id: "6899500486",
      date: "2025-10-08",
      deliveryBy: "2025-08-15",
      buyer: "Akash",
      product: "The Alchemist",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      address: "Balaji Medical, Datia (475661), Madhya Pradesh",
      warranty: "1 year",
      amount: "450",
      status: "ontheway",
    },
  ];

  return (
    <SellerLayout title="Orders">
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
          Orders
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

              {/* Order ID & Customer */}
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
                <div style={{ marginTop: "10px" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#8d6e63",
                      fontSize: "12px",
                    }}
                  >
                    Customer Name
                  </span>
                  <div style={{ fontSize: "13px", color: "#333" }}>
                    {order.buyer}
                  </div>
                </div>
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

              {/* Warranty, Price, Status */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  flex: 1,
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
                    Warranty
                  </span>
                  <span style={{ fontSize: "13px", color: "#333" }}>
                    {order.warranty}
                  </span>
                </div>
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
                    ₹{order.amount}
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
    </SellerLayout>
  );
}

export default Orders;
