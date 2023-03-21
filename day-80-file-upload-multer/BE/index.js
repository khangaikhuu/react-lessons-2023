console.log("Day 80 - File Upload Multer");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

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
  const imgs = [];

  fs.readdirSync(testFolder).forEach((file) => {
    console.log(file);
    const imgURl = `http://localhost:8080/uploads/${file}`;
    imgs.push(imgURl);
  });

  response.status(200).json({
    data: imgs,
  });
});

app.get("/", (request, response) => {
  response.send("<h1>Day - 80: Hello File Upload Multer</h1>");
});

app.get("/files", (request, response) => {
  const filesPath = [];

  fs.readdirSync("./uploads/").forEach((file) => {
    console.log(file);
    const url = `http://localhost:8080/uploads/${file}`;
    filesPath.push(url);
  });

  response.send({
    data: filesPath,
  });
});

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  // console.log(request.file);
  const filesPath = [];
  fs.readdirSync("./uploads/").forEach((file) => {
    console.log(file);
    const url = `http://localhost:8080/uploads/${file}`;
    filesPath.push(url);
  });
  response.json({
    data: filesPath,
  });
});

app.listen(PORT, () => {
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
