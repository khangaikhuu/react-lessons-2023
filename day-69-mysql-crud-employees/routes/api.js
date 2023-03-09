import express from "express";
const apiRouter = express.Router();

import { getPopularCategories } from "../services/category-services.js";
import { getParentMenus } from "../services/menus-service.js";
import { getChildrenMenus } from "../services/menus-service.js";

apiRouter.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});

apiRouter.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();

  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id);
      parent.children = children;
      return parent;
    })
  );

  response.status(200).send(parentMenus);
});

export default apiRouter;
