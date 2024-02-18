const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookRemovalController = require("../controllers/BookRemovalController");

router.use(requireAuth);

router.route("/add").post(bookRemovalController.addBookRemoval);

router.route("/get/:bookRemovalID").get(bookRemovalController.getBookRemovalByID);

router.route("/update/:bookRemovalID").put(bookRemovalController.updateBookRemovalByID);

router.route("/delete/:bookRemovalID").delete(bookRemovalController.deleteBookRemovalByID);

router.route("/").get(bookRemovalController.getAllBookRemovals);

module.exports = router;
