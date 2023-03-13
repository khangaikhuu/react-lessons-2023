const express = require("express");
const mongoose = require("mongoose");

const PORT = 8080;

const app = express();

const MONGO_CONNECTION_STRING =
  "mongodb+srv://khangaikhuu_teacher:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test";
mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.error(err));

app.get("/", (request, response) => {
  response.send("<h1>Hello MongoDB from NodeJS</h1>");
});
app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
