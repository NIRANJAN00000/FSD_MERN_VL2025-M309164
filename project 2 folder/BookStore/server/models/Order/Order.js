const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    flatno: String,
    pincode: String,
    city: String,
    state: String,
    totalamount: String,

    booktitle: String,
    bookauthor: String,
    bookgenre: String,
    itemImage: String,
    description: String,

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,

    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
    sellerName: String,

    BookingDate: {
      type: String,
      default: () => new Date().toLocaleDateString("hi-IN"),
    },
    Delivery: {
      type: String,
      default: () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 7);
        const day = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        return `${month}/${day}/${year}`;
      },
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("MyOrder", orderSchema);
