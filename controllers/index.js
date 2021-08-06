const {
  createAgentService,
  updateAgentService,
  deleteAgentService,
  readAgentsService,
} = require("../services");

const createAgent = (req, res) => {
  const {
    name,
    experience,
    description,
    qualification,
    age,
    gender,
    status,
    picture,
    email,
    mbl,
  } = req.body;
  const data = {
    name,
    experience,
    description,
    qualification,
    age,
    gender,
    status,
    picture,
    email,
    mbl,
  };
  createAgentService(data)
    .then((r) => {
      res.status(200).json(r);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
};

const getAgents = (req, res) => {
  readAgentsService()
    .then((r) => {
      res.status(200).json(r);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
};

const updateAgent = (req, res) => {
  const { agentId } = req.params;

  updateAgentService({ _id: agentId }, req.body)
    .then((r) => {
      res.status(200).json(r);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
};

const deleteAgent = (req, res) => {
  const { agentId } = req.params;

  deleteAgentService({ _id: agentId })
    .then((r) => {
      res.status(200).json(r);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
};

module.exports = { createAgent, updateAgent, deleteAgent, getAgents };
