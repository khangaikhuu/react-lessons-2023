const express = require("express");
const User = require("../model/Users");

const Router = express.Router();

const userOne = User({ name: "Khangaikhuu" });
const userTwo = User({ name: "Richard" });

module.export = Router;
