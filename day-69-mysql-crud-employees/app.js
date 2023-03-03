console.log("Day - 69");
import express from "express";
import emp_router from "./routes/employees.js";
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(emp_router);

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align: center; background-color: orange'>Day-69</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
