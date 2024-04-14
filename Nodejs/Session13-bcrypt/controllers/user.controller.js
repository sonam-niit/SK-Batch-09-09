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

module.exports= {
    userProfile
}