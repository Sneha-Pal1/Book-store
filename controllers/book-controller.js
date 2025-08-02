const Book = require("../models/Book");
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of Books fetched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const getSingleBooksById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);
    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message:
          "Book with the current ID is not found! Please try with a different ID",
      });
    }
    res.status(200).json({
      success: true,
      data: bookDetailsByID,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(200).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookId,
      updatedBookFormData,
      {
        new: true,
      }
    );
    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);
    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    } else {
      res.status(200).json({
        success: true,
        data: deletedBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBooksById,
  addNewBook,
  updateBook,
  deleteBook,
};
