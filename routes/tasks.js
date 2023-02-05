const Task = require("../models/Task");
const router = require("express").Router();

//Add task
router.post("/add", async (req, res) => {
  try {
    const newTask = new Task({
      taskname: req.body.taskname,
      projectid: req.body.projectid,
      projectname: req.body.projectname,
      status: req.body.status,
      priority: req.body.priority,
      overview: req.body.overview,
      startdate: req.body.startdate,
      duedate: req.body.duedate,
      members: req.body.members,
    });

    //save task and respond
    const task = await newTask.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get a single task
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all tasks
router.get("/", async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all tasks by project ID
router.get("/all/:id", async (req, res) => {
  try {
    const task = await Task.find({projectid: req.params.id});
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete one task
router.delete("/delete/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = taskId;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete all task by project ID
router.delete("/delete/project/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = taskId;
    await Task.deleteMany({projectid: req.params.id});
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update task
router.put("/update/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(task);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Geg a task comment
//Get all task comments
//POst a single comment
//Update a single comment
//Delete a single comment

module.exports = router;
