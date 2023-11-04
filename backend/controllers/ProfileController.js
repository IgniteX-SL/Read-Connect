const Profile = require("../models/Profile");

const addProfile = async (req, res) => {
    const {
        name,
        role,
        profilePicture,
        email,
        phoneNumber,
    } = req.body;

    const newProfile = new Profile({
        name,
        role,
        profilePicture,
        email,
        phoneNumber,
    });

    newProfile.save()
        .then(() => {
            res.json("Profile Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Error adding Profile", message: err.message });
        });
};

const getProfileByID = async (req, res) => {
    const profileID = req.params.profileID;

    Profile.findOne({ _id: profileID })
        .then((profile) => {
            if (!profile) {
                return res.status(404).json({ error: "Profile not found" });
            }
            res.status(200).json({ status: "Profile fetched", profile });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with fetching Profile", message: err.message });
        });
};

const updateProfileByID = async (req, res) => {
    const profileID = req.params.profileID;
    const {
        name,
        role,
        profilePicture,
        email,
        phoneNumber,
    } = req.body;

    const updateFields = {
        name,
        role,
        profilePicture,
        email,
        phoneNumber,
    };

    Profile.findOneAndUpdate({ _id: profileID }, updateFields, { new: true })
        .then((updatedProfile) => {
            if (!updatedProfile) {
                return res.status(404).json({ error: "Profile not found" });
            }
            res.status(200).json({ status: "Profile updated", profile: updatedProfile });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with updating Profile", message: err.message });
        });
};

const deleteProfileByID = async (req, res) => {
    const profileID = req.params.profileID;

    Profile.findOneAndDelete({ _id: profileID })
        .then((deletedProfile) => {
            if (!deletedProfile) {
                return res.status(404).json({ error: "Profile not found" });
            }
            res.status(200).json({ status: "Profile data deleted", profile: deletedProfile });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error with deleting Profile", message: err.message });
        });
};

const getAllProfiles = async (req, res) => {
    Profile.find()
        .then((profiles) => {
            res.json(profiles);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ error: "Error fetching Profiles", message: err.message });
        });
};

module.exports = {
    addProfile,
    getProfileByID,
    updateProfileByID,
    deleteProfileByID,
    getAllProfiles,
};
