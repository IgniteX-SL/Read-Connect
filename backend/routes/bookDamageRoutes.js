const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookDamagesController = require("../controllers/BookDamageController");

router.use(requireAuth);

router.route("/add").post(bookDamagesController.addBookDamage);

router.route("/get/:bookDamageID").get(bookDamagesController.getBookDamageByID);

router.route("/update/:bookDamageID").put(bookDamagesController.updateBookDamageByID);

router.route("/delete/:bookDamageID").delete(bookDamagesController.deleteBookDamageByID);

router.route("/").get(bookDamagesController.getAllBookDamages);

module.exports = router;
