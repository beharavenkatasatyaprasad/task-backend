const Agent = require("../models/agents");

const createAgentService = async (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const agentInstance = new Agent(data);
      await agentInstance.save().save((res) => {
        resolve(res);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { createAgentService };
