const BookReturn = require("../models/ReturnBook");

const addBookReturn = async (req, res) => {
    const {
        returnID,
        memberID,
        memberName,
        bookID,
        bookName,
        borrowalID,
        dateOfReturned,
        returnStaffID,
        damageID,
    } = req.body;

    const newBookReturn = new BookReturn({
        returnID,
        memberID,
        memberName,
        bookID,
        bookName,
        borrowalID,
        dateOfReturned,
        returnStaffID,
        damageID,
    });

    newBookReturn.save()
        .then(() => {
            res.json("Book Return Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding Book Return", message: err.message });
        });
};

const getBookReturnByID = async (req, res) => {
    const bookReturnID = req.params.returnID;

    BookReturn.findOne({ returnID: bookReturnID })
        .then((bookReturn) => {
            if (!bookReturn) {
                return res.status(404).json({ error: "Book Return not found" });
            }
            res.status(200).json({ status: "Book Return fetched", bookReturn });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching Book Return", message: err.message });
        });
};

const updateBookReturnByID = async (req, res) => {
    const bookReturnID = req.params.returnID;
    const {
        memberID,
        memberName,
        bookID,
        bookName,
        borrowalID,
        dateOfReturned,
        returnStaffID,
        damageID,
    } = req.body;

    const updateFields = {
        memberID,
        memberName,
        bookID,
        bookName,
        borrowalID,
        dateOfReturned,
        returnStaffID,
        damageID,
    };

    BookReturn.findOneAndUpdate({ returnID: bookReturnID }, updateFields, { new: true })
        .then((updatedBookReturn) => {
            if (!updatedBookReturn) {
                return res.status(404).json({ error: "Book Return not found" });
            }
            res.status(200).json({ status: "Book Return updated", bookReturn: updatedBookReturn });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating Book Return", message: err.message });
        });
};

const deleteBookReturnByID = async (req, res) => {
    const bookReturnID = req.params.returnID;

    BookReturn.findOneAndDelete({ returnID: bookReturnID })
        .then((deletedBookReturn) => {
            if (!deletedBookReturn) {
                return res.status(404).json({ error: "Book Return not found" });
            }
            res.status(200).json({ status: "Book Return's data deleted", bookReturn: deletedBookReturn });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting Book Return", message: err.message });
        });
};

const getAllBookReturns = async (req, res) => {
    BookReturn.find()
        .then((bookReturns) => {
            res.json(bookReturns);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching Book Returns", message: err.message });
        });
};

module.exports = {
    addBookReturn,
    getBookReturnByID,
    updateBookReturnByID,
    deleteBookReturnByID,
    getAllBookReturns,
};
