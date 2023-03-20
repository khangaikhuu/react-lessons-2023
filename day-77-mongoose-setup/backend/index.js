console.log("Day - 77");

const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");

const PORT = 8282;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://khangaikhuu_teacher:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test";

const app = express();
app.use(express.json());
app.use(apiRouter);

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connected succesfully"))
  .catch((error) => console.error(error));

app.get("/", (request, response) => {
  response.send("<h1>Day 77 - Mongoose Application</h1>");
});

app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
