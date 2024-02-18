const BookBorrowal = require("../models/BookBorrowal");

const addBookBorrowal = async (req, res) => {
    const {
        memberID,
        memberName,
        bookID,
        bookName,
        dateOfBorrowal,
        dateOfReturnToBe,
        borrowalStaffID,
        returnID
    } = req.body;

    const newBookBorrowal = new BookBorrowal({
        memberID,
        memberName,
        bookID,
        bookName,
        dateOfBorrowal,
        dateOfReturnToBe,
        borrowalStaffID,
        returnID
    });

    newBookBorrowal.save()
        .then(() => {
            res.json("Book Borrowal Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding book borrowal", message: err.message });
        });
};

const getBookBorrowalByID = async (req, res) => {
    const bookBorrowalID = req.params.bookBorrowalID;

    BookBorrowal.findOne({ _id: bookBorrowalID })
        .then((bookBorrowal) => {
            if (!bookBorrowal) {
                return res.status(404).json({ error: "Book Borrowal not found" });
            }
            res.status(200).json({ status: "Book Borrowal fetched", bookBorrowal });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching book borrowal", message: err.message });
        });
};

const updateBookBorrowalByID = async (req, res) => {
    const bookBorrowalID = req.params.bookBorrowalID;

    const updateFields = {
        memberID,
        memberName,
        bookID,
        bookName,
        dateOfBorrowal,
        dateOfReturnToBe,
        borrowalStaffID,
        returnID
    } = req.body;

    BookBorrowal.findOneAndUpdate({ _id: bookBorrowalID }, updateFields, { new: true })
        .then((updatedBookBorrowal) => {
            if (!updatedBookBorrowal) {
                return res.status(404).json({ error: "Book Borrowal not found" });
            }
            res.status(200).json({ status: "Book Borrowal updated", bookBorrowal: updatedBookBorrowal });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating book borrowal", message: err.message });
        });
};

const deleteBookBorrowalByID = async (req, res) => {
    const bookBorrowalID = req.params.bookBorrowalID;

    BookBorrowal.findOneAndDelete({ _id: bookBorrowalID })
        .then((deletedBookBorrowal) => {
            if (!deletedBookBorrowal) {
                return res.status(404).json({ error: "Book Borrowal not found" });
            }
            res.status(200).json({ status: "Book Borrowal's data deleted", bookBorrowal: deletedBookBorrowal });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting book borrowal", message: err.message });
        });
};

const getAllBookBorrowals = async (req, res) => {
    BookBorrowal.find()
        .then((bookBorrowals) => {
            res.json(bookBorrowals);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching book borrowals", message: err.message });
        });
};

module.exports = {
    addBookBorrowal,
    getBookBorrowalByID,
    updateBookBorrowalByID,
    deleteBookBorrowalByID,
    getAllBookBorrowals,
};
