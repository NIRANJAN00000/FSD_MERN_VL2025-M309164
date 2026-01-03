import React from "react";
import { Link } from "react-router-dom";
import bookstore from "../assets/bookstore.png";
import reading from "../assets/reading.png";
import science from "../assets/science.png";
import biographies from "../assets/Biographiespng.png";
import childrenBooks from "../assets/Children Books.png";

function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-section">
          <img src={bookstore} alt="BookVerse Logo" className="logo" />
          <Link to="/" className="logoname">
            BookVerse
          </Link>
        </div>

        <ul className="nav-links">
          <li className="red">
            <Link to="/login">User</Link>
          </li>
          <li className="green">
            <Link to="/slogin">Seller</Link>
          </li>
          <li className="orange">
            <Link to="/alogin">Admin</Link>
          </li>
        </ul>
      </nav>

      <div className="shape">
        <h1>Your Gateway to Infinite Stories</h1>
        <h4>
          Discover captivating books, connect with passionate sellers, and fuel
          your love for reading — only at BookVerse.
        </h4>
        <button className="btm">Start Exploring</button>
      </div>

      <div className="shape1">
        <h1>Explore by Category</h1>

        <div className="box1">
          <img src={reading} alt="Fiction books" className="img1" />
          <p className="text1">Fiction</p>
        </div>

        <div className="box1">
          <img src={science} alt="Science books" className="img1" />
          <p className="text1">Science</p>
        </div>

        <div className="box1">
          <img src={biographies} alt="Biography books" className="img1" />
          <p className="text1">Biographies</p>
        </div>

        <div className="box1">
          <img src={childrenBooks} alt="Children books" className="img1" />
          <p className="text1">Children's Books</p>
        </div>

        <div className="btm3">
          <button className="btm2">Contact Us</button>
        </div>
      </div>
    </>
  );
}

export default Home;
