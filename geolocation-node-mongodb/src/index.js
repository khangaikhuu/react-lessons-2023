import express from "express";
import { config } from "dotenv";
import { executeLocations } from "./studentsCrud.js";

const app = express();

app.get("/", async (req, res) => {
  const result = await executeLocations();
  res.json(result);
});

app.listen(3000, () => {
  config();
  console.log("Server listening on port 3000");
});
