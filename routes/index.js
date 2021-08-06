const express = require("express");
const { createAgent, updateAgent, getAgents, deleteAgent, getAgentDetails } = require("../controllers");
const router = express.Router();

router.post("/createAgent", createAgent);

router.get("/getAgents", getAgents);

router.get("/getAgentDetails", getAgentDetails);

router.put("/updateAgent/:agentId", updateAgent);

router.delete("/deleteAgent/:agentId", deleteAgent);

module.exports = router;
