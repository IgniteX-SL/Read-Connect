const LibraryStaff = require("../models/LibraryStaff");

const addLibraryStaff = async (req, res) => {
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

    const newLibraryStaff = new LibraryStaff({
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

    newLibraryStaff.save()
        .then(() => {
            res.json("LibraryStaff Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding LibraryStaff", message: err.message });
        });
};

const getLibraryStaffByID = async (req, res) => {
    const libraryStaffID = req.params.libraryStaffID;

    LibraryStaff.findOne({ _id: libraryStaffID })
        .then((libraryStaff) => {
            if (!libraryStaff) {
                return res.status(404).json({ error: "LibraryStaff not found" });
            }
            res.status(200).json({ status: "LibraryStaff fetched", libraryStaff });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching LibraryStaff", message: err.message });
        });
};

const updateLibraryStaffByID = async (req, res) => {
    const libraryStaffID = req.params.libraryStaffID;

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

    LibraryStaff.findOneAndUpdate({ _id: libraryStaffID }, updateFields, { new: true })
        .then((updatedLibraryStaff) => {
            if (!updatedLibraryStaff) {
                return res.status(404).json({ error: "LibraryStaff not found" });
            }
            res.status(200).json({ status: "LibraryStaff updated", libraryStaff: updatedLibraryStaff });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating LibraryStaff", message: err.message });
        });
};

const deleteLibraryStaffByID = async (req, res) => {
    const libraryStaffID = req.params.libraryStaffID;

    LibraryStaff.findOneAndDelete({ _id: libraryStaffID })
        .then((deletedLibraryStaff) => {
            if (!deletedLibraryStaff) {
                return res.status(404).json({ error: "LibraryStaff not found" });
            }
            res.status(200).json({ status: "LibraryStaff's data deleted", libraryStaff: deletedLibraryStaff });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting LibraryStaff", message: err.message });
        });
};

const getAllLibraryStaff = async (req, res) => {
    LibraryStaff.find()
        .then((libraryStaff) => {
            res.json(libraryStaff);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching LibraryStaff", message: err.message });
        });
};

module.exports = {
    addLibraryStaff,
    getLibraryStaffByID,
    updateLibraryStaffByID,
    deleteLibraryStaffByID,
    getAllLibraryStaff,
};
