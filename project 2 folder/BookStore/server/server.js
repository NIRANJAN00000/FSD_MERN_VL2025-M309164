require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connect.js");
const adminRoutes = require("./routes/adminRoutes.js");
const sellerRoutes = require("./routes/sellerRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

// Database Connection
connectDB();

// Routes
app.use("/auth", adminRoutes);
app.use("/seller", sellerRoutes);
app.use("/user", userRoutes);

// Start Server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
