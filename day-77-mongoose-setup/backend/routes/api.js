const express = require("express");
const User = require("../models/Users");
const Router = express.Router();

Router.post("/user", async (request, response) => {
  const body = request.body;

  const newUser = new User(body);
  const result = await newUser.save();

  response.json({
    data: result,
  });
});

Router.get("/userByName", async (request, response) => {
  const result = await User.findOne(
    { name: "Simon Sinek" }, // users called Simon Sinek
    null, // returning all fields in model
    { sort: { lastLogin: -1 } } // sorted by lastLogin descending
  );

  response.json({
    data: result,
  });
});

Router.get("/userByEmail", async (request, response) => {
  const result = await User.findByUserEmail("simon-sinek@gmail.com");

  response.json({
    data: result,
  });
});

Router.get("/users", async (request, response) => {
  const result = await User.find({});
  console.log(result);
  response.json({ data: result });
});

Router.delete("/user", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await User.findOneAndDelete({ _id: body.id });

  response.json({ data: result });
});

module.exports = Router;
