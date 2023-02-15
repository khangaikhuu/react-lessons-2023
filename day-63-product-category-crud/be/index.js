console.log("Day-63 Category CRUD");

/// import necessary packages
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());

app
  .route("/category")
  .post((request, response) => {
    const body = request.body;
    console.log(body);
    const categoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const categoryDataObj = JSON.parse(categoryData);
    const newCategory = {
      id: Date.now().toString(),
      name: body.catName,
    };

    categoryDataObj.push(newCategory);

    const writeCategoryData = fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(categoryDataObj)
    );
    console.log(writeCategoryData);
    if (writeCategoryData) {
      response.json({
        status: "File write Error",
        data: [],
      });
    } else {
      response.json({
        status: "success",
        data: categoryDataObj,
      });
    }
  })
  .get((request, response) => {
    const readCategoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    response.json({
      status: "success",
      data: JSON.parse(readCategoryData),
    });
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
