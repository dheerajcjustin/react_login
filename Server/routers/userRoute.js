const express = require("express");
const userController = require("../controllers/Usersignup");
const router = express.Router();

router.post("/signup", userController.signup);

router.post("/login", userController.login);
router.get("/", userController.authCheck);
router.post("/upload/:id", userController.imageUpload);

module.exports = router;
