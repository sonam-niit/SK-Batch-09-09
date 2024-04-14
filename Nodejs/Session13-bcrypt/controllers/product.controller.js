const productmodel = require('../models/product.model');

const addProduct=async(req,res)=>{
    try {
        const {name,price,description,category}=req.body;
        const id= req.id;
        const newProduct= new productmodel({name,price,description,category,user:id});
        const resp= await newProduct.save();
        res.status(200).send(resp);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Error Occured"})
    }
}
const getAllProduct=async(req,res)=>{

}
const getProductById=async(req,res)=>{
    
}
const getProductsByAuthor=async(req,res)=>{
    
}

module.exports= {
    addProduct
}