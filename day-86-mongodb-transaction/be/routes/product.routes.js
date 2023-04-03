const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

const router = Router();

router.post("/create", createProduct);

module.exports = router;
