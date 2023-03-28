const mongoose = require('mongoose');

const ShippingAddress = mongoose.model('ShippingAddress', new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}));

module.exports = ShippingAddress;