const BookRemoval = require("../models/BookRemoval");

const addBookRemoval = async (req, res) => {
    const {
        bookID,
        bookName,
        removalStaffID,
        removalDate,
        removalReason,
        price
    } = req.body;

    const newBookRemoval = new BookRemoval({
        bookID,
        bookName,
        removalStaffID,
        removalDate,
        removalReason,
        price
    });

    newBookRemoval.save()
        .then(() => {
            res.json("Book Removal Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding book removal", message: err.message });
        });
};

const getBookRemovalByID = async (req, res) => {
    const bookRemovalID = req.params.bookRemovalID;

    BookRemoval.findOne({ _id: bookRemovalID })
        .then((bookRemoval) => {
            if (!bookRemoval) {
                return res.status(404).json({ error: "Book Removal not found" });
            }
            res.status(200).json({ status: "Book Removal fetched", bookRemoval });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching book removal", message: err.message });
        });
};

const updateBookRemovalByID = async (req, res) => {
    const bookRemovalID = req.params.bookRemovalID;

    const updateFields = {
        bookID,
        bookName,
        removalStaffID,
        removalDate,
        removalReason,
        price
    } = req.body;

    BookRemoval.findOneAndUpdate({ _id: bookRemovalID }, updateFields, { new: true })
        .then((updatedBookRemoval) => {
            if (!updatedBookRemoval) {
                return res.status(404).json({ error: "Book Removal not found" });
            }
            res.status(200).json({ status: "Book Removal updated", bookRemoval: updatedBookRemoval });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating book removal", message: err.message });
        });
};

const deleteBookRemovalByID = async (req, res) => {
    const bookRemovalID = req.params.bookRemovalID;

    BookRemoval.findOneAndDelete({ _id: bookRemovalID })
        .then((deletedBookRemoval) => {
            if (!deletedBookRemoval) {
                return res.status(404).json({ error: "Book Removal not found" });
            }
            res.status(200).json({ status: "Book Removal's data deleted", bookRemoval: deletedBookRemoval });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting book removal", message: err.message });
        });
};

const getAllBookRemovals = async (req, res) => {
    BookRemoval.find()
        .then((bookRemovals) => {
            res.json(bookRemovals);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching book removals", message: err.message });
        });
};

module.exports = {
    addBookRemoval,
    getBookRemovalByID,
    updateBookRemovalByID,
    deleteBookRemovalByID,
    getAllBookRemovals,
};
