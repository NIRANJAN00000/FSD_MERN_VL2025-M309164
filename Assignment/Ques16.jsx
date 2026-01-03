import React, { useState } from "react";
import axios from "axios";

const Ques16 = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://dummyjson.com/posts/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);

      setMessage("Post Added!");

      setFormData({ title: "", body: "" });
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
      setMessage("Failed to add post.");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Add New Post</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Post title"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />

        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Post body"
          rows={4}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit Post
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            color: message === "Post Added!" ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Ques16;

