var mongoose = require("mongoose");
var CounterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
var counter = mongoose.model("counter", CounterSchema);

var entitySchema = mongoose.Schema({
  sort: { type: String },
});

entitySchema.pre("save", function (next) {
  var doc = this;
  counter
    .findByIdAndUpdateAsync(
      { _id: "entityId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    .then(function (count) {
      console.log("...count: " + JSON.stringify(count));
      doc.sort = count.seq;
      next();
    })
    .catch(function (error) {
      console.error("counter error-> : " + error);
      throw error;
    });
});
module.exports = counter;
