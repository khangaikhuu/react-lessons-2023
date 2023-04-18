var mongoose = require("mongoose");
const counter = require("./counter.model");
var Schema = mongoose.Schema;

const BookModel = new Schema({
  id: { type: Number, unique: true, min: 1 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  someOtherField: { type: String },
});

BookModel.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter(this, next);
});

module.exports = mongoose.model("Books", BookModel);
