const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const categoryApi = require("./routes/category.routes");
const productApi = require("./routes/product.routes");
const transactionApi = require("./routes/transaction-routes");

const app = express();
const port = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Day 86 - MongoDB Transaction</h1>");
});

app.use("/product", productApi);
app.use("/category", categoryApi);
app.use("/transaction", transactionApi);

app.listen(port, () => {
  mongoose
    .connect(MONGO_DB_URL)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Example app listening at http://localhost:${port}`);
});
