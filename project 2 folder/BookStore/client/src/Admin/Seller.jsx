import React from "react";
import AdminLayout from "./AdminLayout";
import "./stylesheet.css";

function Seller() {
  const sellers = [
    {
      slNo: 1,
      id: "SEL00123",
      name: "Modern Books",
      email: "modern@books.com",
      status: "Active",
    },
    {
      slNo: 2,
      id: "SEL00456",
      name: "The Book Nest",
      email: "nest@books.com",
      status: "Pending",
    },
  ];

  return (
    <AdminLayout title="Sellers Section">
      <div className="table-section">
        <h2>Sellers</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>SlNo</th>
              <th>Seller ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller) => (
              <tr key={seller.slNo}>
                <td>{seller.slNo}</td>
                <td>{seller.id}</td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: "4px",
                      backgroundColor:
                        seller.status === "Active" ? "#d4edda" : "#fff3cd",
                      color: seller.status === "Active" ? "#155724" : "#856404",
                    }}
                  >
                    {seller.status}
                  </span>
                </td>
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

export default Seller;
