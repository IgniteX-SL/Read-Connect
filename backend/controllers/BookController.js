const Book = require("../models/Book");

const addBook = async (req, res) => {
    // Check user role here if needed
    const {
        ISBN,
        genresAndCategories,
        tagsAndKeywords,
        language,
        edition,
        accessionNo,
        dateOfEntry,
        authorName,
        additionalContributors,
        bookName,
        publisherName,
        publish,
        publishedYear,
        price,
        noOfPages,
        supplyID,
        donationID,
        replacementID,
        governmentGrantsID,
        purchasingID,
        removalID,
        noteID,
        borrowalID,
        cupboardNo,
        rowNumber,
        condition,
        damageID,
        reservationID
    } = req.body;

    const newBook = new Book({
        ISBN,
        genresAndCategories,
        tagsAndKeywords,
        language,
        edition,
        accessionNo,
        dateOfEntry,
        authorName,
        additionalContributors,
        bookName,
        publisherName,
        publish,
        publishedYear,
        price,
        noOfPages,
        supplyID,
        donationID,
        replacementID,
        governmentGrantsID,
        purchasingID,
        removalID,
        noteID,
        borrowalID,
        cupboardNo,
        rowNumber,
        condition,
        damageID,
        reservationID
    });

    newBook.save()
        .then(() => {
            res.json("Book Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding book", message: err.message });
        });
};

const getBookByID = async (req, res) => {
    const bookID = req.params.bookID;

    Book.findOne({ _id: bookID })
        .then((book) => {
            if (!book) {
                return res.status(404).json({ error: "Book not found" });
            }
            res.status(200).json({ status: "Book fetched", book });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching book", message: err.message });
        });
};

const updateBookByID = async (req, res) => {
    const bookID = req.params.bookID;

    // Define the fields you want to update here
    const updateFields = {
        ISBN,
        genresAndCategories,
        tagsAndKeywords,
        language,
        edition,
        accessionNo,
        dateOfEntry,
        authorName,
        additionalContributors,
        bookName,
        publisherName,
        publish,
        publishedYear,
        price,
        noOfPages,
        supplyID,
        donationID,
        replacementID,
        governmentGrantsID,
        purchasingID,
        removalID,
        noteID,
        borrowalID,
        cupboardNo,
        rowNumber,
        condition,
        damageID,
        reservationID
    } = req.body;

    Book.findOneAndUpdate({ _id: bookID }, updateFields, { new: true })
        .then((updatedBook) => {
            if (!updatedBook) {
                return res.status(404).json({ error: "Book not found" });
            }
            res.status(200).json({ status: "Book updated", book: updatedBook });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating book", message: err.message });
        });
};

const deleteBookByID = async (req, res) => {
    const bookID = req.params.bookID;

    Book.findOneAndDelete({ _id: bookID })
        .then((deletedBook) => {
            if (!deletedBook) {
                return res.status(404).json({ error: "Book not found" });
            }
            res.status(200).json({ status: "Book's data deleted", book: deletedBook });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting book", message: err.message });
        });
};

const getAllBooks = async (req, res) => {
    Book.find()
        .then((books) => {
            res.json(books);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching books", message: err.message });
        });
};

module.exports = {
    addBook,
    getBookByID,
    updateBookByID,
    deleteBookByID,
    getAllBooks,
};
