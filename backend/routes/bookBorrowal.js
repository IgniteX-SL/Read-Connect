const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookBorrowalController = require("../controllers/bookBorrowalController");

router.use(requireAuth);

router.route("/add").post(bookBorrowalController.addBorrowalBook);

router.route("/get/:memberID").get(bookBorrowalController.getBookBorrowalByMemberID);

router.route("/update/:memberID").put(bookBorrowalController.updateBookBorrowalByMemberID);

router.route("/delete/:memberID").delete(bookBorrowalController.deleteBookBorrowalByMemberID);

router.route("/").get(bookBorrowalController.getAllBookBorrowals);

module.exports = router;
