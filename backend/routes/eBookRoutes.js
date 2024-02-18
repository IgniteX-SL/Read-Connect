const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const eBookController = require("../controllers/EBookController");

router.use(requireAuth);

router.route("/add").post(eBookController.addEBook);

router.route("/get/:ebookID").get(eBookController.getEBookByID);

router.route("/update/:ebookID").put(eBookController.updateEBookByID);

router.route("/delete/:ebookID").delete(eBookController.deleteEBookByID);

router.route("/").get(eBookController.getAllEBooks);

module.exports = router;
