import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./stylesheet.css";

function Anavbar() {
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
          to="/ahome"
          className={`sidebar-item ${
            location.pathname === "/ahome" ? "active" : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/ausers"
          className={`sidebar-item ${
            location.pathname === "/ausers" ? "active" : ""
          }`}
        >
          Users
        </Link>
        <Link
          to="/asellers"
          className={`sidebar-item ${
            location.pathname === "/asellers" ? "active" : ""
          }`}
        >
          Sellers
        </Link>
        <Link
          to="/aitems"
          className={`sidebar-item ${
            location.pathname === "/aitems" ? "active" : ""
          }`}
        >
          Items
        </Link>
        <Link to="/alogin" className="sidebar-item">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Anavbar;
