const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Account has been updated");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete user
router.delete("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get a user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all users
router.get("/all", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
