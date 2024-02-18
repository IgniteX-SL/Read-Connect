const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const memberController = require("../controllers/MemberController");

router.use(requireAuth);

router.route("/add").post(memberController.addMember);

router.route("/get/:memberID").get(memberController.getMemberByID);

router.route("/update/:memberID").put(memberController.updateMemberByID);

router.route("/delete/:memberID").delete(memberController.deleteMemberByID);

router.route("/").get(memberController.getAllMembers);

module.exports = router;
