const Admin = require("../models/Admin/Admin");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Signup request received:", { name, email, password });
  try {
    const newAdmin = new Admin({ name, email, password });
    await newAdmin.save();
    console.log("Admin saved successfully:", newAdmin);
    res
      .status(201)
      .json({ message: "Admin registered successfully", admin: newAdmin });
  } catch (err) {
    console.error("Error saving admin:", err);
    res
      .status(500)
      .json({ message: "Error registering admin", error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", admin });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
};

const approveSeller = async (req, res) => {
  res.status(200).json({ message: "Seller approval logic goes here" });
};

const manageSystem = async (req, res) => {
  res.status(200).json({ message: "System management logic goes here" });
};

module.exports = { signup, login, approveSeller, manageSystem };
