const Book = require("../Models/bookSchema");

// Add books
const addBook = async (req, res) => {
  try {
    const book = await Book.findOne({ title: req.body.title });

    if (book) {
      return res.send({ msg: "Book already exists!" });
    }
    const newBook = await Book.create(req.body);
    res.status(201).json({ msg: "Book added Successfully", newBook });
  } catch (err) {
    res.status(400).json({ msg: "Internal Server Error", err });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    let filter = {};
    if (req.query.genre) {
      filter.genre = req.query.genre;
    }

    const books = await Book.find(filter);
    res.json(books);
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", err });
  }
};

// Get book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: "Book not Found" });

    res.json(book);
  } catch (err) {
    res.status(400).json({ msg: "Invalid ID Format" });
  }
};

// Update book
const updateBook = async (req, res) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updateBook) return res.status(404).json({ msg: "Book not found" });
    res.json({msg: "Book updated Successfully", updateBook});
  } catch (err) {
    res.status(400).json({ msg: "Invalid ID Format" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const removedBook = await Book.findByIdAndDelete(req.params.id);

    if (!removedBook)
      return res.status(404).json({ msg: "Book not found" });

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: "Invalid ID format" });
  }
};

const myController = { addBook, getAllBooks, getBookById, updateBook,deleteBook };

module.exports = myController;
