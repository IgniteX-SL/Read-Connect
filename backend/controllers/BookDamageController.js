const BookDamages = require("../models/BookDamages");

const addBookDamage = async (req, res) => {
    const {
        bookID,
        bookName,
        damageReportDate,
        damageReportStaffID,
        damageMemberID,
        damageMemberName,
        damageID
    } = req.body;

    const newBookDamage = new BookDamages({
        bookID,
        bookName,
        damageReportDate,
        damageReportStaffID,
        damageMemberID,
        damageMemberName,
        damageID
    });

    newBookDamage.save()
        .then(() => {
            res.json("Book Damage Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding book damage", message: err.message });
        });
};

const getBookDamageByID = async (req, res) => {
    const bookDamageID = req.params.bookDamageID;

    BookDamages.findOne({ _id: bookDamageID })
        .then((bookDamage) => {
            if (!bookDamage) {
                return res.status(404).json({ error: "Book Damage not found" });
            }
            res.status(200).json({ status: "Book Damage fetched", bookDamage });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching book damage", message: err.message });
        });
};

const updateBookDamageByID = async (req, res) => {
    const bookDamageID = req.params.bookDamageID;

    const updateFields = {
        bookID,
        bookName,
        damageReportDate,
        damageReportStaffID,
        damageMemberID,
        damageMemberName,
        damageID
    } = req.body;

    BookDamages.findOneAndUpdate({ _id: bookDamageID }, updateFields, { new: true })
        .then((updatedBookDamage) => {
            if (!updatedBookDamage) {
                return res.status(404).json({ error: "Book Damage not found" });
            }
            res.status(200).json({ status: "Book Damage updated", bookDamage: updatedBookDamage });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating book damage", message: err.message });
        });
};

const deleteBookDamageByID = async (req, res) => {
    const bookDamageID = req.params.bookDamageID;

    BookDamages.findOneAndDelete({ _id: bookDamageID })
        .then((deletedBookDamage) => {
            if (!deletedBookDamage) {
                return res.status(404).json({ error: "Book Damage not found" });
            }
            res.status(200).json({ status: "Book Damage's data deleted", bookDamage: deletedBookDamage });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting book damage", message: err.message });
        });
};

const getAllBookDamages = async (req, res) => {
    BookDamages.find()
        .then((bookDamages) => {
            res.json(bookDamages);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching book damages", message: err.message });
        });
};

module.exports = {
    addBookDamage,
    getBookDamageByID,
    updateBookDamageByID,
    deleteBookDamageByID,
    getAllBookDamages,
};
