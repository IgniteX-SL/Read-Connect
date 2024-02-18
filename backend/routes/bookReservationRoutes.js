const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookReservationController = require("../controllers/BookReservationController");

router.use(requireAuth);

router.route("/add").post(bookReservationController.addBookReservation);

router.route("/get/:bookReservationID").get(bookReservationController.getBookReservationByID);

router.route("/update/:bookReservationID").put(bookReservationController.updateBookReservationByID);

router.route("/delete/:bookReservationID").delete(bookReservationController.deleteBookReservationByID);

router.route("/").get(bookReservationController.getAllBookReservations);

module.exports = router;
