import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Admin/stylesheet.css";

function Snavbar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        SKILL
        <br />
        WALLET
      </div>
      <div className="sidebar-menu">
        <Link
          to="/shome"
          className={`sidebar-item ${
            location.pathname === "/shome" ? "active" : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/myproducts"
          className={`sidebar-item ${
            location.pathname === "/myproducts" ? "active" : ""
          }`}
        >
          My Products
        </Link>
        <Link
          to="/addbook"
          className={`sidebar-item ${
            location.pathname === "/addbook" ? "active" : ""
          }`}
        >
          Add Books
        </Link>
        <Link
          to="/sorders"
          className={`sidebar-item ${
            location.pathname === "/sorders" ? "active" : ""
          }`}
        >
          Orders
        </Link>
        <Link to="/slogin" className="sidebar-item">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Snavbar;
