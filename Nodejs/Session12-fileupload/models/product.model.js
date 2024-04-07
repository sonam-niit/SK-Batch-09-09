const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true });

const productmodel= mongoose.model('product',productSchema);

module.exports=productmodel;