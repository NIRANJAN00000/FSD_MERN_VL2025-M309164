import React from "react";
import AdminLayout from "./AdminLayout";
import { useParams, useNavigate } from "react-router-dom";
import "./stylesheet.css";

function Aorders() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Placeholder data to match the screenshot "Atomic Habits" order
  const order = {
    product: "Atomic Habits",
    orderId: "6590925588",
    buyer: "Ram",
    seller: "-",
    address: "173, Mayur Vihar Phase -1, Delhi (110091), Delhi",
    price: "$540",
    status: "on_the_way",
  };

  return (
    <AdminLayout title="User's Order view page">
      <div className="modal-overlay">
        <div className="order-detail-container">
          <div className="order-card">
            <h2>User Orders</h2>

            <div className="order-info-row">
              <div className="product-box">
                <span className="product-label">Product:</span>
                <span className="product-name">{order.product}</span>
                <span style={{ fontSize: "12px", color: "#666" }}>
                  Order ID: {order.orderId}
                </span>
              </div>

              <div className="order-details-grid">
                <div className="detail-item">
                  <strong>Buyer: {order.buyer}</strong>
                  <span>Seller: {order.seller}</span>
                </div>

                <div className="detail-item">
                  <strong>Address:</strong>
                  <span>{order.address}</span>
                </div>

                <div className="price-status">
                  <div className="price-text">Price: {order.price}</div>
                  <div className="status-text">Status: {order.status}</div>
                </div>

                <div className="action-icons">
                  <button
                    className="icon-btn icon-delete"
                    style={{ position: "static" }}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>

            <button className="close-btn" onClick={() => navigate("/ausers")}>
              Close
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Aorders;
