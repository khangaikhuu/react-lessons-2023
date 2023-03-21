console.log("Day 80 - File Upload Multer");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
var path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const app = express();
const PORT = 8080;
const upload = multer({ storage: storage });
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cors());

app.get("/files", async (request, response) => {
  const testFolder = "./uploads/";

  fs.readdirSync(testFolder).forEach((file) => {
    console.log(file);
  });

  response.send("<h1>Day - 80: Hello File Upload Multer</h1>");
});

app.get("/", (request, response) => {
  response.send("<h1>Day - 80: Hello File Upload Multer</h1>");
});

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  // console.log(request.file);
  response.json({
    data: [],
  });
});

app.listen(PORT, () => {
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
