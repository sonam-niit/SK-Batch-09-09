const mongoose= require('mongoose');

const productSchema=new mongoose.Schema({
    name:{type: String, required:true},
    description:{type: String, required:true},
    price:{type: Number, required:true},
    category:{type: String, required:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
},{timestamps:true})

const productmodel= mongoose.model('product',productSchema);
module.exports=productmodel;