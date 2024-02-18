const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const librarianController = require("../controllers/LibrarianController");

router.use(requireAuth);

router.route("/add").post(librarianController.addLibrarian);

router.route("/get/:librarianID").get(librarianController.getLibrarianByID);

router.route("/update/:librarianID").put(librarianController.updateLibrarianByID);

router.route("/delete/:librarianID").delete(librarianController.deleteLibrarianByID);

router.route("/").get(librarianController.getAllLibrarians);

module.exports = router;
