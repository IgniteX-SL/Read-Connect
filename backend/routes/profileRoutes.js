const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const profileController = require("../controllers/ProfileController");

router.use(requireAuth);

router.route("/add").post(profileController.addProfile);

router.route("/get/:profileID").get(profileController.getProfileByID);

router.route("/update/:profileID").put(profileController.updateProfileByID);

router.route("/delete/:profileID").delete(profileController.deleteProfileByID);

router.route("/").get(profileController.getAllProfiles);

module.exports = router;
