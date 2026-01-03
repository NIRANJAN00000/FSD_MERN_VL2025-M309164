const express = require("express");
const router = express.Router();
const {
  registerSeller,
  loginSeller,
  addBook,
  updateInventory,
  manageOrders,
} = require("../controllers/SellerControllers");

router.post("/register", registerSeller);
router.post("/login", loginSeller);
router.post("/add-book", addBook);
router.put("/inventory", updateInventory);
router.get("/orders", manageOrders);

module.exports = router;
