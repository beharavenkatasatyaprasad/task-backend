const express = require("express");
const { createAgent } = require("../controllers");
const router = express.Router();

router.post("/createAgent", createAgent);

module.exports = router;
