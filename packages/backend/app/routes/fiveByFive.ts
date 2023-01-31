const express = require("express");
const router = express.Router();
const fiveByFiveController = require("../controllers/fiveByFiveController");

router.post("/", fiveByFiveController.calc);

module.exports = router;
