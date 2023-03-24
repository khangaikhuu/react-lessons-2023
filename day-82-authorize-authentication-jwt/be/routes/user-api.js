const express = require("express");
const userApi = express.Router();
const auth = require("../middleware/auth");

userApi.post("/protected", auth, (req, res, next) => {
  res.status(200).json({
    data: "successful got the protected route",
  });
});

userApi.post("/unprotected", (req, res, next) => {
  res.status(200).json({
    data: "successful got the unprotected route",
  });
});

module.exports = userApi;
