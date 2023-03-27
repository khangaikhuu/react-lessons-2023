const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  createdOn: Date,
  modifiedOn: { type: Date, default: Date.now },
  lastLogin: Date,
});

userSchema.statics.findByUserEmail = function (userEmail) {
  return this.find({ email: userEmail }, "_id name email", {
    sort: "modifiedOn",
  });
};

const User = mongoose.model("user", userSchema);

module.exports = User;
