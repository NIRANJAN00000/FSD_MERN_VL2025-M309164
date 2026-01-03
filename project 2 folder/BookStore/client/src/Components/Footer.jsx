import React from "react";
import "../Admin/stylesheet.css";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#fdf6e3",
        padding: "40px 20px",
        textAlign: "center",
        marginTop: "auto",
        borderTop: "1px solid #efebe9",
      }}
    >
      <button
        style={{
          backgroundColor: "#8d6e63",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Contact Us
      </button>
      <p
        style={{
          color: "#3e2723",
          fontSize: "14px",
          fontStyle: "italic",
          marginBottom: "10px",
        }}
      >
        "Embark on a literary journey with our book haven - where every page
        turns into an adventure!"
      </p>
      <p style={{ color: "#5d4037", fontSize: "12px", fontWeight: "bold" }}>
        📞 Call At: 127-899-588-87
      </p>
    </div>
  );
}

export default Footer;
