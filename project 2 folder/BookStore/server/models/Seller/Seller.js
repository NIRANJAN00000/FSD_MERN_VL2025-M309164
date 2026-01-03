const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "seller" },
  profileData: {
    bio: String,
    phoneNumber: String,
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }], // Reference to Book model
});

module.exports = mongoose.model("Seller", sellerSchema);
