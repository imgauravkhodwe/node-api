const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    type: Number,
    brand: String
},{
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);