import React from "react";
import AdminLayout from "./AdminLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./stylesheet.css";

function Ahome() {
  const data = [
    { name: "Users", value: 3, color: "#483D8B" },
    { name: "Vendors", value: 2, color: "#00FFFF" },
    { name: "Items", value: 2, color: "#0000FF" },
    { name: "Orders", value: 2, color: "#FFA500" },
  ];

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="dashboard-content">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Admin Dashboard
        </h2>

        <div className="stats-grid">
          <div className="stat-card card-users">
            <h3>USERS</h3>
            <p>3</p>
          </div>
          <div className="stat-card card-vendors">
            <h3>Vendors</h3>
            <p>2</p>
          </div>
          <div className="stat-card card-items">
            <h3>Items</h3>
            <p>2</p>
          </div>
          <div className="stat-card card-orders">
            <h3>Total Orders</h3>
            <p>2</p>
          </div>
        </div>

        <div className="chart-section">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" barSize={40}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Ahome;
