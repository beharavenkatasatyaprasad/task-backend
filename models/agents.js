const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agentSchema = new Schema(
  {
    name: {
      type: "string",
    },
    experience: {
      type: "string",
    },
    description: {
      type: "string",
    },
    qualification: {
      type: "string",
    },
    age: {
      type: "string",
    },
    gender: {
      type: "string",
    },
    status: {
      type: "string",
    },
    picture: {
      type: "string",
    },
    email: {
      type: "string",
    },
    mbl: {
      type: "string",
    },
  },
  { timestamps: true }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
