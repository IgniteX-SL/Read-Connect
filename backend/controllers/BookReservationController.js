const BookReservation = require("../models/BookReservation");

const addBookReservation = async (req, res) => {
    const {
        memberID,
        memberName,
        bookID,
        bookName,
        reservationStartDate,
        reservationEndDate,
        reservationStaffID
    } = req.body;

    const newBookReservation = new BookReservation({
        memberID,
        memberName,
        bookID,
        bookName,
        reservationStartDate,
        reservationEndDate,
        reservationStaffID
    });

    newBookReservation.save()
        .then(() => {
            res.json("Book Reservation Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding book reservation", message: err.message });
        });
};

const getBookReservationByID = async (req, res) => {
    const bookReservationID = req.params.bookReservationID;

    BookReservation.findOne({ _id: bookReservationID })
        .then((bookReservation) => {
            if (!bookReservation) {
                return res.status(404).json({ error: "Book Reservation not found" });
            }
            res.status(200).json({ status: "Book Reservation fetched", bookReservation });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching book reservation", message: err.message });
        });
};

const updateBookReservationByID = async (req, res) => {
    const bookReservationID = req.params.bookReservationID;

    const updateFields = {
        memberID,
        memberName,
        bookID,
        bookName,
        reservationStartDate,
        reservationEndDate,
        reservationStaffID
    } = req.body;

    BookReservation.findOneAndUpdate({ _id: bookReservationID }, updateFields, { new: true })
        .then((updatedBookReservation) => {
            if (!updatedBookReservation) {
                return res.status(404).json({ error: "Book Reservation not found" });
            }
            res.status(200).json({ status: "Book Reservation updated", bookReservation: updatedBookReservation });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating book reservation", message: err.message });
        });
};

const deleteBookReservationByID = async (req, res) => {
    const bookReservationID = req.params.bookReservationID;

    BookReservation.findOneAndDelete({ _id: bookReservationID })
        .then((deletedBookReservation) => {
            if (!deletedBookReservation) {
                return res.status(404).json({ error: "Book Reservation not found" });
            }
            res.status(200).json({ status: "Book Reservation's data deleted", bookReservation: deletedBookReservation });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting book reservation", message: err.message });
        });
};

const getAllBookReservations = async (req, res) => {
    BookReservation.find()
        .then((bookReservations) => {
            res.json(bookReservations);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching book reservations", message: err.message });
        });
};

module.exports = {
    addBookReservation,
    getBookReservationByID,
    updateBookReservationByID,
    deleteBookReservationByID,
    getAllBookReservations,
};
