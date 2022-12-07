require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //mongoose
const userRoutes = require("./routers/userRoute");
const adminRoutes = require("./routers/adminRoute");

const port = 5000;

const app = express();

// app.use(passport.initialize());
// app.use(passport.session());
// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/admin", adminRoutes);
app.use("/", userRoutes);

//  app.use(morgan('dev'));

mongoose
  .connect("mongodb://127.0.0.1:27017/react_aminlogin")
  .then(() => {
    console.log("mongoose connceta ayye ketto");
  })
  .catch((err) => {
    console.log("mongoose entho sean unde");
  });

app.listen(port, () => {
  console.log(`server srt ayye on port 💖 ${port}  🌹`);
});
