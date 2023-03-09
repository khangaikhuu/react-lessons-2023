import express from "express";
const admin = express.Router();
import {
  getEmployees,
  hireEmployee,
  getMaxNo,
  fireEmployee,
} from "../services/employee-services.js";

admin.get("/employees", async (request, response) => {
  const result = await getEmployees();
  response.status(200).send(result);
});

admin.put("/employee", async (request, response) => {
  const body = request.body;
  console.log(body);

  response.status(200).send({});
});

admin.delete("/employee", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await fireEmployee(body.empNo);

  response.status(200).send(result);
});

admin.post("/employee", async (request, response) => {
  const { birthDate, firstName, lastName, gender, hireDate } = request.body;
  const { max } = await getMaxNo();
  console.log(max);
  const result = await hireEmployee(
    max + 1,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate
  );
  console.log(result);

  response.status(200).send({});
});

export default admin;
