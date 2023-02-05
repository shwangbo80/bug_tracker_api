const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    projectname: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },
    status: {
      type: String,
      max: 50,
      default: "Ongoing",
    },
    overview: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      default: "",
    },
    duedate: {
      type: String,
      default: "",
    },
    budget: {
      type: String,
      default: "",
    },
    members: [],
    comments: [],
    tasks: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
