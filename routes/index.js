const express = require("express");

// ROUTES HANDLER
const router = express.Router();
console.log("Router Loaded");

// HOME CONTROLLERS FOR ACTIONS
const homeController = require("../controllers/home_controller");

// HOME PAGE
router.get("/", homeController.home);

// ADD TASK
router.post("/add-task", homeController.add);

//DELETE TASK

module.exports = router;
