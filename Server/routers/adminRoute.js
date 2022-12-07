const express = require("express");
const adminController = require("../controllers/Admin");
const router = express.Router();

router.post("/login", adminController.login);
router.get("/", adminController.dashboard);
router.get("user/:id", adminController.userView);
router.post("/edit/:id", adminController.editUser);
router.post("/delete/:id", adminController.deleteUser);

module.exports = router;
