import React, { useState } from "react";

const Ques14 = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  const [newFruit, setNewFruit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newFruit.trim() === "") return;

    setFruits([...fruits, newFruit]);
    setNewFruit("");
  };

  const deleteFruit = (indexToDelete) => {
    // Filter out fruit by index
    const updatedFruits = fruits.filter((_, index) => index !== indexToDelete);
    setFruits(updatedFruits);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fruit List</h1>

      {/* Add Fruit Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter fruit name"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Fruit
        </button>
      </form>

      {/* Fruit List */}
      <ul style={{ padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              fontSize: "18px",
              marginBottom: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "250px",
              listStyle: "none",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          >
            {fruit}

            <button
              onClick={() => deleteFruit(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ques14;
