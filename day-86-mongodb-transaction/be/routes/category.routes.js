const {Router} = require('express');

const {getAllCategories, createCategory, updateCategory, deleteCategory} = require("../controller/category.controller");

const router = Router();

router.get('/category', getAllCategories);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);


module.exports = router;