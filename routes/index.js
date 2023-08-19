const express = require("express");

// ROUTES
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);

module.exports = router;
