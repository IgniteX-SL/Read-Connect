const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookBorrowalController = require("../controllers/BookBorrowalController");

router.use(requireAuth);

router.route("/add").post(bookBorrowalController.addBookBorrowal);

router.route("/get/:bookBorrowalID").get(bookBorrowalController.getBookBorrowalByID);

router.route("/update/:bookBorrowalID").put(bookBorrowalController.updateBookBorrowalByID);

router.route("/delete/:bookBorrowalID").delete(bookBorrowalController.deleteBookBorrowalByID);

router.route("/").get(bookBorrowalController.getAllBookBorrowals);

module.exports = router;
