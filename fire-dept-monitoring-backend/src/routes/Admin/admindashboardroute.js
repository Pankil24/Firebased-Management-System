const express = require("express");
const router = express.Router();
const { getDashboardData } = require("../../controllers/Admin/dashboardAdminController");

router.get("/dashboard", getDashboardData);

module.exports = router;