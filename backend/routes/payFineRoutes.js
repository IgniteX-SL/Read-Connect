const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const payFineController = require("../controllers/PayFineController");

router.use(requireAuth);

router.route("/add").post(payFineController.addPayFine);

router.route("/get/:payFineID").get(payFineController.getPayFineByID);

router.route("/update/:payFineID").put(payFineController.updatePayFineByID);

router.route("/delete/:payFineID").delete(payFineController.deletePayFineByID);

router.route("/").get(payFineController.getAllPayFines);

module.exports = router;
