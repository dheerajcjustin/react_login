const mongoose = require("mongoose");
// const passportLocalMongoose=require("passport-local-mongoose")

const schema = mongoose.Schema;

const userSchema = new schema({
  userName: { type: String, required: true, trim: true },

  email: {
    type: String,
    required: [true, "email is canot be balnk"],
    unique: true,
    trim: true,
  },
  password: { type: String, trim: true },

  todos: [
    {
      todo: {
        type: String,
      },
    },
  ],
});
// userSchema.plugin(passportLocalMongoose);
module.exports;

const User = mongoose.model("User", userSchema);
module.exports = User;
