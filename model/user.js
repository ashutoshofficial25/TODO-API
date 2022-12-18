const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userModel.pre("save", async function encryptPass(next) {
  const salt = await bcrypt.genSalt(12);

  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;

  next();
});

const User = mongoose.model("User", userModel);
module.exports = User;
