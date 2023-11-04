const Librarian = require("../models/Librarian");

const addLibrarian = async (req, res) => {
    // Check user role here if needed
    const {
        name,
        NIC,
        email,
        phoneNumber,
        age,
        whatsappNumber,
        address,
        password,
        confirmPassword,
        profilePicture,
        assignedDate,
        isActiveUser,
    } = req.body;

    const newLibrarian = new Librarian({
        name,
        NIC,
        email,
        phoneNumber,
        age,
        whatsappNumber,
        address,
        password,
        confirmPassword,
        profilePicture,
        assignedDate,
        isActiveUser,
    });

    newLibrarian.save()
        .then(() => {
            res.json("Librarian Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding Librarian", message: err.message });
        });
};

const getLibrarianByID = async (req, res) => {
    const librarianID = req.params.librarianID;

    Librarian.findOne({ _id: librarianID })
        .then((librarian) => {
            if (!librarian) {
                return res.status(404).json({ error: "Librarian not found" });
            }
            res.status(200).json({ status: "Librarian fetched", librarian });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching Librarian", message: err.message });
        });
};

const updateLibrarianByID = async (req, res) => {
    const librarianID = req.params.librarianID;

    const updateFields = {
        name,
        NIC,
        email,
        phoneNumber,
        age,
        whatsappNumber,
        address,
        password,
        confirmPassword,
        profilePicture,
        assignedDate,
        isActiveUser,
    } = req.body;

    Librarian.findOneAndUpdate({ _id: librarianID }, updateFields, { new: true })
        .then((updatedLibrarian) => {
            if (!updatedLibrarian) {
                return res.status(404).json({ error: "Librarian not found" });
            }
            res.status(200).json({ status: "Librarian updated", librarian: updatedLibrarian });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating Librarian", message: err.message });
        });
};

const deleteLibrarianByID = async (req, res) => {
    const librarianID = req.params.librarianID;

    Librarian.findOneAndDelete({ _id: librarianID })
        .then((deletedLibrarian) => {
            if (!deletedLibrarian) {
                return res.status(404).json({ error: "Librarian not found" });
            }
            res.status(200).json({ status: "Librarian's data deleted", librarian: deletedLibrarian });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting Librarian", message: err.message });
        });
};

const getAllLibrarians = async (req, res) => {
    Librarian.find()
        .then((librarians) => {
            res.json(librarians);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching Librarians", message: err.message });
        });
};

module.exports = {
    addLibrarian,
    getLibrarianByID,
    updateLibrarianByID,
    deleteLibrarianByID,
    getAllLibrarians,
};
