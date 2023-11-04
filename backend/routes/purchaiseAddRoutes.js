const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const purchaiseAddController = require("../controllers/PurchaiseAddController");

router.use(requireAuth);

router.route("/add").post(purchaiseAddController.addPurchaiseAdd);

router.route("/get/:purchaiseAddID").get(purchaiseAddController.getPurchaiseAddByID);

router.route("/update/:purchaiseAddID").put(purchaiseAddController.updatePurchaiseAddByID);

router.route("/delete/:purchaiseAddID").delete(purchaiseAddController.deletePurchaiseAddByID);

router.route("/").get(purchaiseAddController.getAllPurchaiseAdds);

module.exports = router;
