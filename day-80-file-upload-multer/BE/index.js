console.log("Day 80 - File Upload Multer");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("<h1>Day - 80: Hello File Upload Multer</h1>");
});

app.listen(PORT, () => {
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
