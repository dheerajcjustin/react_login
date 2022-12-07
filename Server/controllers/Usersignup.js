const User = require("../models/userModel");
const JWT = require("jsonwebtoken");
const mongoose = require("mongoose");
const signup = async (req, res) => {
  console.log("🚀 ~ file: Usersignup.js:7 ~ signup ~ req.body", req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
};
const login = async (req, res) => {
  // const user = new User(req.body);
  // try {
  //   await user.save();
  //   res.json({ status: true });
  // } catch (error) {
  //   console.log(error);
  // }
  res.json({ status: true });
};

const authCheck = async (req, res) => {
  // const user = new User(req.body);
  // try {
  //   await user.save();
  //   res.json({ status: true });
  // } catch (error) {
  //   console.log(error);
  // }
  res.json({ status: true });
};

const imageUpload = async (req, res) => {
  // const user = new User(req.body);
  // try {
  //   await user.save();
  //   res.json({ status: true });
  // } catch (error) {
  //   console.log(error);
  // }
  res.json({ status: true });
};

exports.signup = signup;
exports.login = login;
exports.authCheck = authCheck;
exports.imageUpload = imageUpload;
