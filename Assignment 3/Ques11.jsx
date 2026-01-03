import React, { useEffect, useState } from "react";

const Ques11 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // API returns { products: [...] }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

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

export default Ques11;
