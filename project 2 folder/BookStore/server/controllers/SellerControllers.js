const Seller = require("../models/Seller/Seller");

const registerSeller = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ message: "Seller already exists" });
    }
    const newSeller = new Seller({ name, email, password });
    await newSeller.save();
    res.status(201).json({ message: "Seller registered successfully" });
  } catch (error) {
    console.error("Seller Register Error:", error);
    res
      .status(500)
      .json({
        message: "Server error: " + error.toString(),
        error: error.toString(),
      });
  }
};

const loginSeller = async (req, res) => {
  const { email, password } = req.body;
  try {
    const seller = await Seller.findOne({ email });
    if (!seller || seller.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful", seller });
  } catch (error) {
    console.error("Seller Login Error:", error);
    res
      .status(500)
      .json({
        message: "Server error: " + error.toString(),
        error: error.toString(),
      });
  }
};

const addBook = async (req, res) => {
  res.json({ message: "Add book logic" });
};

const updateInventory = async (req, res) => {
  res.json({ message: "Update inventory logic" });
};

const manageOrders = async (req, res) => {
  res.json({ message: "Manage orders logic" });
};

module.exports = {
  registerSeller,
  loginSeller,
  addBook,
  updateInventory,
  manageOrders,
};
