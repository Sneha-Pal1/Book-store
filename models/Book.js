const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxLength: [100, "Book title cannot be more than 100 characters"],
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "publication year is required"],
    min: [1000, "Year must be after 1000"],
    max: [new Date().getFullYear(), "Year cannot be in the future"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", BookSchema);
