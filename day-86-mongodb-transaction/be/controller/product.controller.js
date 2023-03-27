const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({status: true, products});
    } catch (error) {
        res.json({status: false, error});
    }
}

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        const result = await product.populate('Category')
        res.json({status: true, result});
    } catch (error) {
        res.json({status: false, error});
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({status: true, product});
    } catch (error) {
        res.json({status: false, error});
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({status: true, product});
    } catch (error) {
        res.json({status: false, error});
    }
}