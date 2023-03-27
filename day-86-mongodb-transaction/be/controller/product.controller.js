const Product = require('../models/Product');

export async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.json({status: true, products});
    } catch (error) {
        res.json({status: false, error});
    }
}

export async function createProduct(req, res) {
    try {
        const product = await Product.create(req.body);
        const result = await product.populate('Category')
        res.json({status: true, result});
    } catch (error) {
        res.json({status: false, error});
    }
}

export async function updateProduct(req, res) {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({status: true, product});
    } catch (error) {
        res.json({status: false, error});
    }
}

export async function deleteProduct(req, res) {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({status: true, product});
    } catch (error) {
        res.json({status: false, error});
    }
}