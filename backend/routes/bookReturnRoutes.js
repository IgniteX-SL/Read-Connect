const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const bookReturnController = require("../controllers/ReturnBookController");

router.use(requireAuth);

router.route("/add").post(bookReturnController.addBookReturn);

router.route("/get/:returnID").get(bookReturnController.getBookReturnByID);

router.route("/update/:returnID").put(bookReturnController.updateBookReturnByID);

router.route("/delete/:returnID").delete(bookReturnController.deleteBookReturnByID);

router.route("/").get(bookReturnController.getAllBookReturns);

module.exports = router;
