const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const libraryStaffController = require("../controllers/LibraryStaffController");

router.use(requireAuth);

router.route("/add").post(libraryStaffController.addLibraryStaff);

router.route("/get/:libraryStaffID").get(libraryStaffController.getLibraryStaffByID);

router.route("/update/:libraryStaffID").put(libraryStaffController.updateLibraryStaffByID);

router.route("/delete/:libraryStaffID").delete(libraryStaffController.deleteLibraryStaffByID);

router.route("/").get(libraryStaffController.getAllLibraryStaff);

module.exports = router;
