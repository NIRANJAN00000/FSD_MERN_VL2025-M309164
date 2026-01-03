import React from "react";
import AdminLayout from "./AdminLayout";
import { useNavigate } from "react-router-dom";
import "./stylesheet.css";

function Users() {
  const navigate = useNavigate();
  const users = [
    {
      slNo: 1,
      id: "689995c2b9811a6325af12a3",
      name: "Ram",
      email: "ram@gmail.com",
    },
    {
      slNo: 2,
      id: "88950c07be1cfa2b588c7437",
      name: "Akash",
      email: "akash@gmail.com",
    },
    {
      slNo: 3,
      id: "6898d91aa3d7833b2a9d4a10",
      name: "Siya",
      email: "siya@gmail.com",
    },
  ];

  return (
    <AdminLayout title="Users Section">
      <div className="table-section">
        <h2>Users</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>SlNo</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.slNo}>
                <td>{user.slNo}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="icon-btn icon-edit">📝</button>
                  <button className="icon-btn icon-delete">🗑️</button>
                  <button
                    className="btn-action btn-view"
                    onClick={() => navigate(`/aorders/${user.id}`)}
                  >
                    View Orders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Users;
