const PurchaiseAdd = require("../models/PurchaiseAdd");

const addPurchaiseAdd = async (req, res) => {
    const {
        bookID,
        bookName,
        purchaiseAddDate,
        purchaiseAddStaffID,
        price,
    } = req.body;

    const newPurchaiseAdd = new PurchaiseAdd({
        bookID,
        bookName,
        purchaiseAddDate,
        purchaiseAddStaffID,
        price,
    });

    newPurchaiseAdd.save()
        .then(() => {
            res.json("Purchaise Add Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding Purchaise Add", message: err.message });
        });
};

const getPurchaiseAddByID = async (req, res) => {
    const purchaiseAddID = req.params.purchaiseAddID;

    PurchaiseAdd.findOne({ _id: purchaiseAddID })
        .then((purchaiseAdd) => {
            if (!purchaiseAdd) {
                return res.status(404).json({ error: "Purchaise Add not found" });
            }
            res.status(200).json({ status: "Purchaise Add fetched", purchaiseAdd });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching Purchaise Add", message: err.message });
        });
};

const updatePurchaiseAddByID = async (req, res) => {
    const purchaiseAddID = req.params.purchaiseAddID;
    const {
        bookID,
        bookName,
        purchaiseAddDate,
        purchaiseAddStaffID,
        price,
    } = req.body;

    const updateFields = {
        bookID,
        bookName,
        purchaiseAddDate,
        purchaiseAddStaffID,
        price,
    };

    PurchaiseAdd.findOneAndUpdate({ _id: purchaiseAddID }, updateFields, { new: true })
        .then((updatedPurchaiseAdd) => {
            if (!updatedPurchaiseAdd) {
                return res.status(404).json({ error: "Purchaise Add not found" });
            }
            res.status(200).json({ status: "Purchaise Add updated", purchaiseAdd: updatedPurchaiseAdd });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating Purchaise Add", message: err.message });
        });
};

const deletePurchaiseAddByID = async (req, res) => {
    const purchaiseAddID = req.params.purchaiseAddID;

    PurchaiseAdd.findOneAndDelete({ _id: purchaiseAddID })
        .then((deletedPurchaiseAdd) => {
            if (!deletedPurchaiseAdd) {
                return res.status(404).json({ error: "Purchaise Add not found" });
            }
            res.status(200).json({ status: "Purchaise Add's data deleted", purchaiseAdd: deletedPurchaiseAdd });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting Purchaise Add", message: err.message });
        });
};

const getAllPurchaiseAdds = async (req, res) => {
    PurchaiseAdd.find()
        .then((purchaiseAdds) => {
            res.json(purchaiseAdds);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching Purchaise Adds", message: err.message });
        });
};

module.exports = {
    addPurchaiseAdd,
    getPurchaiseAddByID,
    updatePurchaiseAddByID,
    deletePurchaiseAddByID,
    getAllPurchaiseAdds,
};
