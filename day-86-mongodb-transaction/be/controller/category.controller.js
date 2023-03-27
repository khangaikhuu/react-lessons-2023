const Category = require('../models/Category');

export async function getAllCategories(req, res) {
    try {
        const categories = await Category.find();
        res.json({status: true, categories});
    } catch (error) {
        res.json({status: false, error});
    }
}

export async function createCategory(req, res) {
    try {
        const category = await Category.create(req.body);
        res.json({status: true, category});
    } catch (error) {
        res.json({status: false, error});
    }
}

export async function updateCategory(req, res) {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({status: true, category});
    } catch (error) {
        res.json({status: false, error});
    }
}

export async function deleteCategory(req, res) {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.json({status: true, category});
    } catch (error) {
        res.json({status: false, error});
    }
}