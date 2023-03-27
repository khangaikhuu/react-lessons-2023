const {Router} = require('express');
const {getAllProducts, createProduct, updateProduct, deleteProduct} = require("../controller/product.controller");

const router = Router();

router.get('/product', getAllProducts)
router.post('/product', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router;