const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const admins = [];

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  admins.push({ name, email, password });
  res.json({ message: "Admin registered successfully", admins });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const admin = admins.find((a) => a.email === email && a.password === password);
  if (admin) {
    res.json({ message: "Login successful", admin });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
