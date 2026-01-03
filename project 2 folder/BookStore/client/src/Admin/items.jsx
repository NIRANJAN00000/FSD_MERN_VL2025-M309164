import React from "react";
import AdminLayout from "./AdminLayout";
import "./stylesheet.css";

function Items() {
  const items = [
    {
      id: 1,
      title: "React Development",
      author: "John Doe",
      price: "$29.99",
      category: "Programming",
    },
    {
      id: 2,
      title: "Node.js Guide",
      author: "Jane Smith",
      price: "$35.50",
      category: "Backend",
    },
  ];

  return (
    <AdminLayout title="Items management">
      <div className="table-section">
        <h2>Items</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Category</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button className="icon-btn icon-edit">📝</button>
                  <button className="icon-btn icon-delete">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Items;
