const express = require("express");
const { createAgent, updateAgent, getAgents } = require("../controllers");
const router = express.Router();

router.post("/createAgent", createAgent);

router.post("/getAgents", getAgents);

router.put("/updateAgent/:agentId", updateAgent);

router.delete("/deleteAgent/:agentId", updateAgent);

module.exports = router;
