const express = require("express");
const mongoose = require("mongoose");
const booksModel = require("./models/books.model");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_DB_URL;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user", async (req, res) => {
  const body = req.body;
  const model = new booksModel();
  const result = await model.save();

  res.send(result);
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error(err);
    });
  console.log(`Server is running on port ${PORT}`);
});
