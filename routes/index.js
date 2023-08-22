// REQUIRING THE EXPRESS FRAMEWORK
const express = require("express");

// ROUTES HANDLER
const router = express.Router();
console.log("Router Loaded");

// TODO LIST CONTROLLERS ACTIONS
const homeController = require("../controllers/home_controller");

// HOME PAGE
router.get("/", homeController.home);

// ADD TASK
router.post("/add-task", homeController.add);

//DELETE TASK
router.get("/delete_task", homeController.delete);

module.exports = router;
