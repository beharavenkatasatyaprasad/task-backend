const Agent = require("../models/agents");

const createAgentService = async (data) => {
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

const updateAgentService = async (query, data) => {
  return new Promise(async (resolve, reject) => {
    Agent.findOneAndUpdate(
      query,
      { $set: data },
      { new: true, useFindAndModify: false }
    )
      .then((resp_) => {
        if (!resp_)
          reject({
            message: "Agent Not Found",
          });
        resolve(resp_);
      })
      .catch((err) => reject(err));
  });
};

module.exports = { createAgentService, updateAgentService };
