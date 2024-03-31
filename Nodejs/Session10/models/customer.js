const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const CustModel= mongoose.model('Customer',customerSchema);

module.exports= CustModel;