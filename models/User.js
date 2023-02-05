const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    firstname: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phone: {
      type: String,
      default: "",
    },
    profilepicture: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "guest",
    },
    street: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    state: {
      type: String,
      max: 50,
    },
    zip: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
