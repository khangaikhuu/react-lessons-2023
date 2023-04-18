import mongoose from "mongoose";

const BookModel = new mongoose.Schema({
  itemId: { type: Number, required: true },
  name: String,
  address: String,
  pincode: Number,
  linkedin_url: String,
});

export default mongoose.model("Test", BookModel);
