const Member = require("../models/Member");

const addMember = async (req, res) => {
    // Check user role here if needed
    const {
        name,
        registrationNumber,
        NIC,
        grade,
        classRoom,
        phoneNumber,
        age,
        whatsappNumber,
        address,
        password,
        confirmPassword,
        createdDate,
        isActiveUser,
    } = req.body;

    const newMember = new Member({
        name,
        registrationNumber,
        NIC,
        grade,
        classRoom,
        phoneNumber,
        age,
        whatsappNumber,
        address,
        password,
        confirmPassword,
        createdDate,
        isActiveUser,
    });

    newMember.save()
        .then(() => {
            res.json("Member Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding Member", message: err.message });
        });
};

const getMemberByID = async (req, res) => {
    const memberID = req.params.memberID;

    Member.findOne({ _id: memberID })
        .then((member) => {
            if (!member) {
                return res.status(404).json({ error: "Member not found" });
            }
            res.status(200).json({ status: "Member fetched", member });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching Member", message: err.message });
        });
};

const updateMemberByID = async (req, res) => {
    const memberID = req.params.memberID;

    const updateFields = {
        name,
        registrationNumber,
        NIC,
        grade,
        classRoom,
        phoneNumber,
        age,
        whatsappNumber,
        address,
        password,
        confirmPassword,
        createdDate,
        isActiveUser,
    } = req.body;

    Member.findOneAndUpdate({ _id: memberID }, updateFields, { new: true })
        .then((updatedMember) => {
            if (!updatedMember) {
                return res.status(404).json({ error: "Member not found" });
            }
            res.status(200).json({ status: "Member updated", member: updatedMember });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating Member", message: err.message });
        });
};

const deleteMemberByID = async (req, res) => {
    const memberID = req.params.memberID;

    Member.findOneAndDelete({ _id: memberID })
        .then((deletedMember) => {
            if (!deletedMember) {
                return res.status(404).json({ error: "Member not found" });
            }
            res.status(200).json({ status: "Member's data deleted", member: deletedMember });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting Member", message: err.message });
        });
};

const getAllMembers = async (req, res) => {
    Member.find()
        .then((members) => {
            res.json(members);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching Members", message: err.message });
        });
};

module.exports = {
    addMember,
    getMemberByID,
    updateMemberByID,
    deleteMemberByID,
    getAllMembers,
};
