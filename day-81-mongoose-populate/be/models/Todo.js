const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
