const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookDonationController = require("../controllers/BookDonationController");

router.use(requireAuth);

router.route("/add").post(bookDonationController.addBookDonation);

router.route("/get/:bookDonationID").get(bookDonationController.getBookDonationByID);

router.route("/update/:bookDonationID").put(bookDonationController.updateBookDonationByID);

router.route("/delete/:bookDonationID").delete(bookDonationController.deleteBookDonationByID);

router.route("/").get(bookDonationController.getAllBookDonations);

module.exports = router;
