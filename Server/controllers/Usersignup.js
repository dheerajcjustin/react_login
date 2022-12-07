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
  console.log("indide the login");
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email, password });
  if (user) {
    console.log(user);
    const token = await JWT.sign(
      {
        email,
        userId: user._id,
      },
      "anjdjajjajjehd3fj333",
      {
        expiresIn: 360000,
      }
    );
    console.log("tokenset");
    res.json({
      token,
      email,
      userId: user._id,
    });
  } else {
    res.json(false);
    console.log("no user");
  }
};

const authCheck = async (req, res) => {};

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
