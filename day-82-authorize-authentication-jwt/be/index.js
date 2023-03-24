const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminApi = require("./routes/admin-api");
const userApi = require("./routes/user-api");

const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://khangaikhuu_teacher:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", adminApi);
app.use("/api", userApi);

app.get("/", (request, response) => {
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
