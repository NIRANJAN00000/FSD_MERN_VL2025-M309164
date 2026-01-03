const User = require("../models/Users/User");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register Error:", error);
    res
      .status(500)
      .json({
        message: "Server error: " + error.toString(),
        error: error.toString(),
      });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login Error:", error);
    res
      .status(500)
      .json({
        message: "Server error: " + error.toString(),
        error: error.toString(),
      });
  }
};

const browseBooks = async (req, res) => {
  res.json({ message: "Browse books logic" });
};

const makePurchase = async (req, res) => {
  res.json({ message: "Purchase logic" });
};

const leaveReview = async (req, res) => {
  res.json({ message: "Leave review logic" });
};

module.exports = {
  registerUser,
  loginUser,
  browseBooks,
  makePurchase,
  leaveReview,
};
