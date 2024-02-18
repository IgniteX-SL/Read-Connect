const EBook = require("../models/EBook");

const addEBook = async (req, res) => {
    // Check user role here if needed
    const {
        bookName,
        bookID,
        bookObject,
        authorName,
        additionalContributors,
        genresAndCategories,
        tagsAndKeywords,
        language,
        edition,
        dateOfEntry,
        approvedByStaff
    } = req.body;

    const newEBook = new EBook({
        bookName,
        bookID,
        bookObject,
        authorName,
        additionalContributors,
        genresAndCategories,
        tagsAndKeywords,
        language,
        edition,
        dateOfEntry,
        approvedByStaff
    });

    newEBook.save()
        .then(() => {
            res.json("EBook Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding Ebook", message: err.message });
        });
};

const getEBookByID = async (req, res) => {
    const ebookID = req.params.ebookID;

    EBook.findOne({ _id: ebookID })
        .then((ebook) => {
            if (!ebook) {
                return res.status(404).json({ error: "EBook not found" });
            }
            res.status(200).json({ status: "EBook fetched", ebook });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching EBook", message: err.message });
        });
};

const updateEBookByID = async (req, res) => {
    const ebookID = req.params.ebookID;

    const updateFields = {
        bookName,
        bookID,
        bookObject,
        authorName,
        additionalContributors,
        genresAndCategories,
        tagsAndKeywords,
        language,
        edition,
        dateOfEntry,
        approvedByStaff
    } = req.body;

    EBook.findOneAndUpdate({ _id: ebookID }, updateFields, { new: true })
        .then((updatedEBook) => {
            if (!updatedEBook) {
                return res.status(404).json({ error: "EBook not found" });
            }
            res.status(200).json({ status: "EBook updated", ebook: updatedEBook });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating EBook", message: err.message });
        });
};

const deleteEBookByID = async (req, res) => {
    const ebookID = req.params.ebookID;

    EBook.findOneAndDelete({ _id: ebookID })
        .then((deletedEBook) => {
            if (!deletedEBook) {
                return res.status(404).json({ error: "EBook not found" });
            }
            res.status(200).json({ status: "EBook's data deleted", ebook: deletedEBook });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting EBook", message: err.message });
        });
};

const getAllEBooks = async (req, res) => {
    EBook.find()
        .then((ebooks) => {
            res.json(ebooks);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching EBooks", message: err.message });
        });
};

module.exports = {
    addEBook,
    getEBookByID,
    updateEBookByID,
    deleteEBookByID,
    getAllEBooks,
};
