let express = require("express");
let path = require("path");
let fs = require("fs");
let app = express();

app.use(function (req, res) {
    res.status(404);
    res.send("File not found!");
});
app.use(function (req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
});
app.use(function (req, res, next) {
    let filePath = path.join(__dirname, "static", req.url);
    fs.stat(filePath, function (err, fileInfo) {
        if (err) {
            next();
            return;
        }
        if (fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});
