const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const noteController = require("../controllers/NoteController");

router.use(requireAuth);

router.route("/add").post(noteController.addNote);

router.route("/get/:noteID").get(noteController.getNoteByID);

router.route("/update/:noteID").put(noteController.updateNoteByID);

router.route("/delete/:noteID").delete(noteController.deleteNoteByID);

router.route("/").get(noteController.getAllNotes);

module.exports = router;
