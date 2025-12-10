const myController = require("../Controller/bookController.js")

const express = require("express")
const bookRouter = express.Router()

bookRouter.post('/addBook', myController.addBook);
bookRouter.get("/book", myController.getAllBooks);
bookRouter.get("/book/:id", myController.getBookById);
bookRouter.put("/book/:id", myController.updateBook);
bookRouter.delete("/book/:id", myController.deleteBook);


module.exports=bookRouter