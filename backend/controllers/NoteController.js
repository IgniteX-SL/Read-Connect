const Note = require("../models/note");

const addNote = async (req, res) => {
    const { bookID, note } = req.body;

    const newNote = new Note({
        bookID,
        note,
    });

    newNote.save()
        .then(() => {
            res.json("Note Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding Note", message: err.message });
        });
};

const getNoteByID = async (req, res) => {
    const noteID = req.params.noteID;

    Note.findOne({ _id: noteID })
        .then((note) => {
            if (!note) {
                return res.status(404).json({ error: "Note not found" });
            }
            res.status(200).json({ status: "Note fetched", note });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching Note", message: err.message });
        });
};

const updateNoteByID = async (req, res) => {
    const noteID = req.params.noteID;
    const { bookID, note } = req.body;

    const updateFields = {
        bookID,
        note,
    };

    Note.findOneAndUpdate({ _id: noteID }, updateFields, { new: true })
        .then((updatedNote) => {
            if (!updatedNote) {
                return res.status(404).json({ error: "Note not found" });
            }
            res.status(200).json({ status: "Note updated", note: updatedNote });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating Note", message: err.message });
        });
};

const deleteNoteByID = async (req, res) => {
    const noteID = req.params.noteID;

    Note.findOneAndDelete({ _id: noteID })
        .then((deletedNote) => {
            if (!deletedNote) {
                return res.status(404).json({ error: "Note not found" });
            }
            res.status(200).json({ status: "Note's data deleted", note: deletedNote });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting Note", message: err.message });
        });
};

const getAllNotes = async (req, res) => {
    Note.find()
        .then((notes) => {
            res.json(notes);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching Notes", message: err.message });
        });
};

module.exports = {
    addNote,
    getNoteByID,
    updateNoteByID,
    deleteNoteByID,
    getAllNotes,
};
