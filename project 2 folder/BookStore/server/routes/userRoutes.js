const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  browseBooks,
  makePurchase,
  leaveReview,
} = require("../controllers/UsersController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/books", browseBooks);
router.post("/purchase", makePurchase);
router.post("/review", leaveReview);

module.exports = router;
