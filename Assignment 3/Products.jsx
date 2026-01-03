import React from "react";
import { Outlet, Link } from "react-router-dom";

// Electronics Component
const Electronics = () => {
  return (
    <div>
      <h2>Electronics</h2>
      <p>
        Explore our wide range of electronics, from smartphones and laptops to
        home appliances and gadgets. Find the latest technology at unbeatable
        prices!
      </p>
      <ul>
        <li>Smartphones</li>
        <li>Laptops & Tablets</li>
        <li>Headphones & Speakers</li>
        <li>Home Appliances</li>
      </ul>
    </div>
  );
};

// Fashion Component
const Fashion = () => {
  return (
    <div>
      <h2>Fashion</h2>
      <p>
        Discover the latest trends in fashion! From casual wear to elegant
        outfits, we have everything to keep you stylish.
      </p>
      <ul>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
        <li>Accessories</li>
        <li>Shoes</li>
      </ul>
    </div>
  );
};

// Main Products Component
const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <p>Welcome to our products section! Please choose a category below:</p>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="electronics" style={{ marginRight: "10px" }}>
          Electronics
        </Link>
        <Link to="fashion">Fashion</Link>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
};

// Export all components
export { Products, Electronics, Fashion };

