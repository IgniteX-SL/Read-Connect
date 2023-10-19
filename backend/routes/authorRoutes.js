const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const authorController = require("../controllers/authorController");

router.use(requireAuth);

router.route("/add").post(authorController.addAuthor);

router.route("/get/:name").get(authorController.getAuthorByName);

router.route("/update/:name").put(authorController.updateAuthorByName);

router.route("/delete/:name").delete(authorController.deleteAuthorByName);

router.route("/").get(authorController.getAllAuthors);

module.exports = router;
