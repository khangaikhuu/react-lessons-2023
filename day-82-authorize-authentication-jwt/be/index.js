const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const Users = require("./models/Users");

const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://khangaikhuu_teacher:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    data: [],
  });
});

app.post("/register", async (request, response) => {
  console.log(request.body.password);
  const hashedPassword = await bcrypt.hash(request.body.password, 10);
  if (hashedPassword) {
    const user = new Users({
      email: request.body.email,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    if (savedUser) {
      response.status(201).send({
        message: "User Created Successfully",
        savedUser,
      });
    } else {
      response.status(500).send({
        message: "Error creating user",
      });
    }
  } else {
    response.status(500).send({
      message: "Password was not hashed successfully",
    });
  }
});

app.post("/login", (request, response) => {
  response.json({
    data: [],
  });
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
