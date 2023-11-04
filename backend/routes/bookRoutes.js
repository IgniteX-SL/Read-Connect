const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookController = require("../controllers/BookController");

router.use(requireAuth);

router.route("/add").post(bookController.addBook);

router.route("/get/:bookID").get(bookController.getBookByID);

router.route("/update/:bookID").put(bookController.updateBookByID);

router.route("/delete/:bookID").delete(bookController.deleteBookByID);

router.route("/").get(bookController.getAllBooks);

module.exports = router;
