const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

// MiddleWare
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const mongoose = require("mongoose");

const bookRoutes = require("./Routes/bookRoute.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/Book")
  .then(() => console.log("MongoDB Connected Successfully!!"))
  .catch((err) => console.log("Error connecting database...", err));

app.use("/Book", bookRoutes);

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server Running on port:${port}`);
  } else {
    console.log("Error connecting to server");
  }
});
