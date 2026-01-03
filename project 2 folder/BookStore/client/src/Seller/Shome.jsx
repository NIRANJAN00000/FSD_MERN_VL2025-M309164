import React from "react";
import SellerLayout from "./SellerLayout";
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
import "../Admin/stylesheet.css";

function Shome() {
  const data = [
    { name: "Items", value: 2, color: "#0000FF" },
    { name: "Orders", value: 2, color: "#FFA500" },
  ];

  return (
    <SellerLayout title="Seller Dashboard">
      <div className="dashboard-content">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Seller Dashboard
        </h2>

        <div
          className="stats-grid"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            maxWidth: "800px",
            margin: "0 auto 40px",
          }}
        >
          <div className="stat-card" style={{ backgroundColor: "#8b4513" }}>
            <h3>Items</h3>
            <p>2</p>
          </div>
          <div className="stat-card" style={{ backgroundColor: "#e69b00" }}>
            <h3>Total Orders</h3>
            <p>2</p>
          </div>
        </div>

        <div
          className="chart-section"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
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
    </SellerLayout>
  );
}

export default Shome;
