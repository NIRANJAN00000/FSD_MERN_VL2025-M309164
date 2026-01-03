import React from "react";
import Anavbar from "./Anavbar";
import { Link, useLocation } from "react-router-dom";
import "./stylesheet.css";

function AdminLayout({ children, title }) {
  const location = useLocation();

  return (
    <div className="admin-layout">
      <Anavbar />
      <div className="main-content">
        <div className="top-navbar">
          <div className="page-title">BookStore (Admin)</div>
          <div className="navbar-links">
            <Link
              to="/ahome"
              className={`navbar-link ${
                location.pathname === "/ahome" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/ausers"
              className={`navbar-link ${
                location.pathname === "/ausers" ? "active" : ""
              }`}
            >
              Users
            </Link>
            <Link
              to="/asellers"
              className={`navbar-link ${
                location.pathname === "/asellers" ? "active" : ""
              }`}
            >
              Sellers
            </Link>
            <Link to="/alogin" className="navbar-link">
              Logout
            </Link>
            <span className="navbar-link active">(Admin)</span>
          </div>
        </div>
        <div className="dashboard-container">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
