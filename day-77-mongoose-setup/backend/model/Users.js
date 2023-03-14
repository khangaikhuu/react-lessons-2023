const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  modifiedOn: Date,
  lastLogin: Date,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
