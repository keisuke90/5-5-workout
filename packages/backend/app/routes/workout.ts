const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController");

router.post("/5x5", workoutController.fiveByFive);

module.exports = router;
