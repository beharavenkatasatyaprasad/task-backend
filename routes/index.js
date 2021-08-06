const express = require("express");
const { createAgent, updateAgent } = require("../controllers");
const router = express.Router();

router.post("/createAgent", createAgent);

router.put("/updateAgent/:agentId", updateAgent);

module.exports = router;
