const usermodel = require('../models/user.model');

const userProfile=async(req,res)=>{
    try {
        const id= req.id;
        const user= await usermodel.findOne({_id:id});
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message:"Internal Error Occured"})
    }
}
const getAllUsers=async(req,res)=>{
    try {
        const users= await usermodel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({message:"Internal Error Occured"})
    }
}
const deleteUserById=async (req,res)=>{
    try {
        const id= req.params.id;
        const user= await usermodel.findByIdAndDelete(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message:"Internal Error Occured"})
    }
}
const getUserById=async(req,res)=>{
    try {
        const id= req.params.id;
        const user= await usermodel.findById(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message:"Internal Error Occured"})
    }
}

module.exports= {
    userProfile,
    getAllUsers,
    deleteUserById,
    getUserById
}