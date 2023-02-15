console.log("Day - 62 - User Login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

/// API user register
app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);
  // fs read from users json
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }

    // when data exists
    const readDataObj = JSON.parse(readData);
    console.log(readDataObj);

    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }

      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "generating salt error",
            data: [],
          });
        }

        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "hashing has error",
              data: [],
            });
          }

          console.log("Hashed Data: ", hashData);
          const newUser = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };

          readDataObj.push(newUser);

          // fs write
          fs.writeFile(
            "./data/users.json",
            JSON.stringify(readDataObj),
            (writeError) => {
              if (writeError) {
                response.json({
                  status: "file write error",
                });
              }
              response.json({
                status: "success",
                data: readDataObj,
              });
            }
          );
        });
      });
    });
  });
});

/// API user login
app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    // Хэрвээ файл уншихад амжилтгүй болвол
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }
    // Хэрвээ файлаа уншаад амжилттай болвол бид нар users.json
    // файлнаасаа тухайн хэрэглэгч байна уу гэдгийг хайна

    // JSON string-ээс object болгохгүй бол болохгүй
    const usersArrayObject = JSON.parse(readData);

    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );

    // хэрвээ хэрэглэгч users.json файл дотор байхгүй бол хэрэглэгч олдсонгүй гэж буцаана
    if (foundUser.length === 0) {
      response.json({
        status: "User Not Found",
        data: [],
      });
    } else {
      // хэрвээ хэрэглэгч олдсон бол
      const foundUserObj = foundUser[0];
      console.log("foundUser", foundUserObj);
      const plainPassword = body.password;
      const savedPassword = foundUserObj.password;

      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "User name or password do not match",
              data: [],
            });
          }

          if (compareResult) {
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstName: foundUserObj.firstname,
                lastName: foundUserObj.lastname,
              },
            });
          } else {
            response.json({
              status: "Username or Password do not match!!",
              data: [],
            });
          }
        }
      );
    }
  });
});

/// API get all users
app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }

    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

/// API get all user roles
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
      });
    }

    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
