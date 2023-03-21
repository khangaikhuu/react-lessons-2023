console.log("Day 81 - Insert Many/Update Many and Delete many");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

const app = express();
const PORT = 8080;

const MONGO_CONNECTION_STRING =
  "mongodb+srv://khangaikhuu_teacher:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test";

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("<h1>Day - 81: Insert/Update/Delete Many</h1>");
});

app.get("/list", async (request, response) => {
  const result = await Todo.find({});

  response.status(200).json({
    data: result,
  });
});

app.post("/create", async (request, response) => {
  const body = request.body;
  const result = await Todo.insertMany(body);

  response.status(200).json({
    data: result,
  });
});

app.put("/update", async (request, response) => {
  const body = request.body;

  const result = await Todo.updateMany(
    { name: body[1].name },
    { $set: { checked: body[0].checked } }
  );

  response.status(200).json({
    data: result,
  });
});

app.delete("/delete", async (request, response) => {
  const body = request.body;

  const result = await Todo.deleteMany(body);

  response.status(200).json({
    data: result,
  });
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
