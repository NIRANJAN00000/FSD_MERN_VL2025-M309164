import React, { useEffect, useState } from "react";

const Ques12 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);   // Loading state
  const [error, setError] = useState(false);      // Error state

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);   // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(true);      // Set error
        setLoading(false);   // Stop loading
      });
  }, []);

  // Show Loading message
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Show Error message
  if (error) {
    return <h2>Error loading data</h2>;
  }

  // Show products once loaded
  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              width: "220px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: "18px" }}>{product.title}</h2>
            <p style={{ fontWeight: "bold", color: "green" }}>
              Price: ${product.price}
            </p>
            <p>Brand: {product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ques12;
