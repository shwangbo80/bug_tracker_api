const Project = require("../models/Project");
const router = require("express").Router();

//Add project
router.post("/add", async (req, res) => {
  try {
    //create new project
    const newProject = new Project({
      projectname: req.body.projectname,
      status: req.body.status,
      overview: req.body.overview,
      startdate: req.body.startdate,
      duedate: req.body.duedate,
      budget: req.body.budget,
      members: req.body.members,
    });

    //save user and respond
    const project = await newProject.save();
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update project
router.put("/update/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(project);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Delete one project
router.delete("/delete/:id", async (req, res) => {
  const projectId = req.params.id;
  try {
    const project = projectId;
    await Project.findByIdAndDelete(projectId);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all projects
router.get("/all", async (req, res) => {
  try {
    const project = await Project.find();
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
