const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const app = express();
try {
  mongoose.connect(MONGO_DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
} catch (error) {
  console.error(error);
}

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
let bucket;
mongoose.connection.on("connected", async () => {
  console.log("MongoDB connected");
  var client = mongoose.connections[0].client;
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket",
  });
  const result = await bucket.find({}).toArray();
  console.log(result);
});

const storage = new GridFsStorage({
  url: MONGO_DB_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: "newBucket",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({
  storage,
});

app.get("/fileinfo/:filename", (req, res) => {
  const file = bucket
    .find({
      filename: req.params.filename,
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist",
        });
      }
      bucket.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).send("File uploaded successfully");
});

app.get("/buildings", async (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(
      "/Users/khangaikhuu-teacher/Downloads/Test.geojson",
      "utf-8"
    )
  );

  console.log(data);

  res.send("success");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
