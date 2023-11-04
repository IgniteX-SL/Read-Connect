const PayFine = require("../models/PayFine");

const addPayFine = async (req, res) => {
    const {
        bookID,
        bookName,
        memberID,
        memberName,
        borrowalID,
        returnID,
        fineAmount,
        paidAmount,
        paidDate,
        dueDate,
        fineStatus,
    } = req.body;

    const newPayFine = new PayFine({
        bookID,
        bookName,
        memberID,
        memberName,
        borrowalID,
        returnID,
        fineAmount,
        paidAmount,
        paidDate,
        dueDate,
        fineStatus,
    });

    newPayFine.save()
        .then(() => {
            res.json("Fine Payment Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding Fine Payment", message: err.message });
        });
};

const getPayFineByID = async (req, res) => {
    const payFineID = req.params.payFineID;

    PayFine.findOne({ _id: payFineID })
        .then((payFine) => {
            if (!payFine) {
                return res.status(404).json({ error: "Fine Payment not found" });
            }
            res.status(200).json({ status: "Fine Payment fetched", payFine });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching Fine Payment", message: err.message });
        });
};

const updatePayFineByID = async (req, res) => {
    const payFineID = req.params.payFineID;
    const {
        bookID,
        bookName,
        memberID,
        memberName,
        borrowalID,
        returnID,
        fineAmount,
        paidAmount,
        paidDate,
        dueDate,
        fineStatus,
    } = req.body;

    const updateFields = {
        bookID,
        bookName,
        memberID,
        memberName,
        borrowalID,
        returnID,
        fineAmount,
        paidAmount,
        paidDate,
        dueDate,
        fineStatus,
    };

    PayFine.findOneAndUpdate({ _id: payFineID }, updateFields, { new: true })
        .then((updatedPayFine) => {
            if (!updatedPayFine) {
                return res.status(404).json({ error: "Fine Payment not found" });
            }
            res.status(200).json({ status: "Fine Payment updated", payFine: updatedPayFine });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating Fine Payment", message: err.message });
        });
};

const deletePayFineByID = async (req, res) => {
    const payFineID = req.params.payFineID;

    PayFine.findOneAndDelete({ _id: payFineID })
        .then((deletedPayFine) => {
            if (!deletedPayFine) {
                return res.status(404).json({ error: "Fine Payment not found" });
            }
            res.status(200).json({ status: "Fine Payment data deleted", payFine: deletedPayFine });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting Fine Payment", message: err.message });
        });
};

const getAllPayFines = async (req, res) => {
    PayFine.find()
        .then((payFines) => {
            res.json(payFines);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching Fine Payments", message: err.message });
        });
};

module.exports = {
    addPayFine,
    getPayFineByID,
    updatePayFineByID,
    deletePayFineByID,
    getAllPayFines,
};
