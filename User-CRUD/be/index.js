const express = require("express");
const cors = require("cors");
const fs = require("fs");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.static('public'))
app.use(express.json());

app.use(function(req, res) {
  res.status(400)
  res.send('file not found')
})

app.delete("/user", (request, response) => {
  const body = request.body;
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);
    if (readError) {
      response.json({
        status: "read file error",
      });
    }
    const deletedData = savedData.filter((d) => d.id !== body.userId);
    fs.writeFile(
      "./data/user.json",
      JSON.stringify(deletedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
          });
        }

        response.json({
          status: "success",
          data: deletedData,
        });
      }
    );
  });
});

app.get("/user", (request, response) => {
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);
    if (readError) {
      response.json({
        status: "read file error",
      });
    }
    response.json({
      status: "success",
      data: savedData,
    });
  });
});

app.post("/user", (request, response) => {
  const body = request.body;
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);
    if (readError) {
      response.json({
        status: "read file error",
      });
    }

    const newUser = {
      id: Date.now().toString(),
      username: body.username,
      age: body.age,
    };

    savedData.push(newUser);

    fs.writeFile(
      "./data/user.json",
      JSON.stringify(savedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
          });
        } else {
          response.json({
            status: "success",
            data: savedData,
          });
        }
      }
    );
  });
});

app.put("/user", (request, response) => {
  const body = request.body;
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);
    if (readError) {
      response.json({
        status: "read file error",
      });
    }

    const updatedData = savedData.map((d) => {
      if (d.id === body.id) {
        (d.username = body.username), (d.age = body.age);
      }
      return d;
    });

    fs.writeFile(
      "./data/user.json",
      JSON.stringify(updatedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
          });
        } else {
          response.json({
            status: "success",
            data: updatedData,
          });
        }
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
