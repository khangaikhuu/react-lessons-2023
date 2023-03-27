const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: String,
    imageURL: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
}));

module.exports = Product;