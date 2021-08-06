const Agent = require("../models/agents");
const {
  createAgentService,
  updateAgentService,
  deleteAgentService,
  readAgentsService,
  readAgentDetailsService,
} = require("../services");
const excel = require("exceljs");
const moment = require("moment");
const path = require("path")

const createAgent = (req, res) => {
  const {
    name,
    experience,
    description,
    qualification,
    age,
    gender,
    status,
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
    email,
    mbl,
  };
  createAgentService(data)
    .then((r) => {
      console.log(r);
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

const exportAgents = async (req, res) => {
  const allAgents = await Agent.find({}).sort({
    updatedAt: -1,
  });
  let workbook = new excel.Workbook();
  let worksheet = workbook.addWorksheet("Agents");

  worksheet.columns = [
    { header: "Id", key: "_id", width: 10 },
    { header: "Name", key: "name", width: 30 },
    { header: "Age", key: "age", width: 10, outlineLevel: 1 },
    { header: "Experience", key: "experience", width: 30 },
    { header: "description", key: "description", width: 60 },
    { header: "qualification", key: "qualification", width: 30 },
    { header: "gender", key: "gender", width: 30 },
    { header: "status", key: "status", width: 30 },
    { header: "email", key: "email", width: 30 },
    { header: "mbl", key: "mbl", width: 30 },
  ];

  worksheet.addRows(allAgents);

  const filename = `agents-${moment().format("MMM-Do-YY")}.xlsx`;

  workbook.xlsx
    .writeFile(filename)
    .then((response) => {
      console.log(path.join(__dirname, `../${filename}`));
      res.sendFile(path.join(__dirname, `../${filename}`));
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAgentDetails = (req, res) => {
  readAgentDetailsService({ _id: req.params.agentId })
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

module.exports = {
  createAgent,
  updateAgent,
  deleteAgent,
  getAgents,
  getAgentDetails,
  exportAgents,
};
