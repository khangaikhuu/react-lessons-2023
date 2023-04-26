const express = require('express')
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;

const MONGO_CONNECTION_STRING =
  "mongodb+srv://khangaikhuu_teacher:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connected succesfully"))
  .catch((error) => console.error(error))

app.get('/', (req, res) => {
  res.send('<h1>Hello Rendered.com</h1>');
})

app.listen(PORT,() => {
  console.log('Application started');
})
