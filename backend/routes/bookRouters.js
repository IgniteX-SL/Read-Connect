const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookController = require("../controllers/bookController");

router.use(requireAuth);

router.route("/add").post(bookController.addBook);

router.route("/get/:name").get(bookController.getBookByName);

router.route("/update/:name").put(bookController.updateBookByName);

router.route("/delete/:name").delete(bookController.deleteBookByName);

router.route("/").get(bookController.getAllBooks);

module.exports = router;
