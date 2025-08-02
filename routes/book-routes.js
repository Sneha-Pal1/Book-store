const express = require("express");
const {
  getAllBooks,
  getSingleBooksById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

//create express router
const router = express.Router();

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBooksById);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
