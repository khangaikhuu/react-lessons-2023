const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

const MONGO_CONNECTION_STRING =
  "mongodb+srv://xxxxxx:xxxxxx@mern-black.kosj6y7.mongodb.net/test";

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("<h1>Hello Environment Variable</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
