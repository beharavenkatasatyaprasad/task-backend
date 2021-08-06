const express = require("express");
const {
  createAgent,
  updateAgent,
  getAgents,
  deleteAgent,
  getAgentDetails,
  exportAgents,
  importAgents,
} = require("../controllers");
const upload = require("../middlewares/upload");
const router = express.Router();

router.post("/createAgent", createAgent);

router.get("/getAgents", getAgents);

router.get("/getAgentDetails/:agentId", getAgentDetails);

router.put("/updateAgent/:agentId", updateAgent);

router.delete("/deleteAgent/:agentId", deleteAgent);

router.get("/exportAgents/", exportAgents);

router.post('/importAgents', upload.single("uploadfile"),importAgents );

module.exports = router;
