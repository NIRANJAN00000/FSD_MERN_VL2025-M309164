import React from "react";
import Snavbar from "./Snavbar";
import { Link, useLocation } from "react-router-dom";
import "../Admin/stylesheet.css";

function SellerLayout({ children, title }) {
  const location = useLocation();

  return (
    <div className="admin-layout">
      <Snavbar />
      <div className="main-content">
        <div className="top-navbar">
          <div className="page-title">BookStore (Seller)</div>
          <div className="navbar-links">
            <Link
              to="/shome"
              className={`navbar-link ${
                location.pathname === "/shome" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/myproducts"
              className={`navbar-link ${
                location.pathname === "/myproducts" ? "active" : ""
              }`}
            >
              My Products
            </Link>
            <Link
              to="/addbook"
              className={`navbar-link ${
                location.pathname === "/addbook" ? "active" : ""
              }`}
            >
              Add Books
            </Link>
            <Link
              to="/sorders"
              className={`navbar-link ${
                location.pathname === "/sorders" ? "active" : ""
              }`}
            >
              Orders
            </Link>
            <Link to="/slogin" className="navbar-link">
              Logout
            </Link>
            <span className="navbar-link active">(Preview)</span>
          </div>
        </div>
        <div className="dashboard-container">{children}</div>
      </div>
    </div>
  );
}

export default SellerLayout;
