const express = require("express");
const {
  createAgent,
  updateAgent,
  getAgents,
  deleteAgent,
  getAgentDetails,
  exportAgents,
} = require("../controllers");
const router = express.Router();

router.post("/createAgent", createAgent);

router.get("/getAgents", getAgents);

router.get("/getAgentDetails/:agentId", getAgentDetails);

router.put("/updateAgent/:agentId", updateAgent);

router.delete("/deleteAgent/:agentId", deleteAgent);

router.get("/exportAgents/", exportAgents);

module.exports = router;
