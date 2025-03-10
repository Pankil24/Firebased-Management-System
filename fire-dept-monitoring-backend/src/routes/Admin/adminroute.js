const express = require("express");
const { adminRegister, adminLogin } = require("../../controllers/Admin/authAdminController");

const router = express.Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);

module.exports = router;
