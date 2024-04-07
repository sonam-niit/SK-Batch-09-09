const productmodel= require('../models/product.model');

const addProduct=async(req,res)=>{
    try {
        const {name,price,description}=req.body;
        const filename=req.file.filename;
        const newProduct=new productmodel({
            name,price,description,image:filename
        })
        const resp= await newProduct.save();
        res.status(201).send({
            message:'New Product created',
            product:resp
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
}
const getAllProducts=async (req, res) => {
    try {
        const resp= await productmodel.find();
        res.status(200).send({ products:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
}


module.exports={
    addProduct,
    getAllProducts
}