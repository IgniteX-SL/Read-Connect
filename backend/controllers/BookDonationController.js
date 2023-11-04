const BookDonation = require("../models/BookDonation");

const addBookDonation = async (req, res) => {
    const {
        bookID,
        bookName,
        donatorName,
        BookDonationDate,
        donatorEmail,
        donationStaffID,
        price
    } = req.body;

    const newBookDonation = new BookDonation({
        bookID,
        bookName,
        donatorName,
        BookDonationDate,
        donatorEmail,
        donationStaffID,
        price
    });

    newBookDonation.save()
        .then(() => {
            res.json("Book Donation Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding book donation", message: err.message });
        });
};

const getBookDonationByID = async (req, res) => {
    const bookDonationID = req.params.bookDonationID;

    BookDonation.findOne({ _id: bookDonationID })
        .then((bookDonation) => {
            if (!bookDonation) {
                return res.status(404).json({ error: "Book Donation not found" });
            }
            res.status(200).json({ status: "Book Donation fetched", bookDonation });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching book donation", message: err.message });
        });
};

const updateBookDonationByID = async (req, res) => {
    const bookDonationID = req.params.bookDonationID;

    const updateFields = {
        bookID,
        bookName,
        donatorName,
        BookDonationDate,
        donatorEmail,
        donationStaffID,
        price
    } = req.body;

    BookDonation.findOneAndUpdate({ _id: bookDonationID }, updateFields, { new: true })
        .then((updatedBookDonation) => {
            if (!updatedBookDonation) {
                return res.status(404).json({ error: "Book Donation not found" });
            }
            res.status(200).json({ status: "Book Donation updated", bookDonation: updatedBookDonation });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating book donation", message: err.message });
        });
};

const deleteBookDonationByID = async (req, res) => {
    const bookDonationID = req.params.bookDonationID;

    BookDonation.findOneAndDelete({ _id: bookDonationID })
        .then((deletedBookDonation) => {
            if (!deletedBookDonation) {
                return res.status(404).json({ error: "Book Donation not found" });
            }
            res.status(200).json({ status: "Book Donation's data deleted", bookDonation: deletedBookDonation });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting book donation", message: err.message });
        });
};

const getAllBookDonations = async (req, res) => {
    BookDonation.find()
        .then((bookDonations) => {
            res.json(bookDonations);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching book donations", message: err.message });
        });
};

module.exports = {
    addBookDonation,
    getBookDonationByID,
    updateBookDonationByID,
    deleteBookDonationByID,
    getAllBookDonations,
};
