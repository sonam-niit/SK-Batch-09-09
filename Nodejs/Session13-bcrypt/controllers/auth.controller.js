const usermodel= require('../models/user.model');
const bcrypt= require('bcrypt');

const register=async (req,res)=>{
    try {
        const {name,username,email,password}= req.body;
        if(!name || !email || !username || !password){
           return res.status(400).send({message:'All Fields are mandatory'});
        }
        let user= await usermodel.findOne({email});
        if(user){
            return res.status(400).send({message:'EmailId is already registered with US'});
        }
        user= await usermodel.findOne({username});
        if(user){
            return res.status(400).send({message:'Username is already taken by Someone'});
        }
        const hashPassword=await bcrypt.hash(password,12);
        const newUser= new usermodel({name,username,email,password:hashPassword});
        const resp= await newUser.save();
        return res.status(201).send({message:'User Registered',user:resp});
    } catch (error) {
        res.status(500).send({message:'Internal Error Occured',error})
    }
}
const login=async (req,res)=>{
    try {
        const {email,password}= req.body;
        if(!email || !password){
           return res.status(400).send({message:'All Fields are mandatory'});
        }
        let user= await usermodel.findOne({email});
        if(!user){
            return res.status(400).send({message:'EmailId is not registered with US'});
        }
        const match= bcrypt.compare(password,user.password);
        if(match){
            return res.status(201).send({message:'User Logged In',user});
        }else{
            return res.status(201).send({message:'Invalid Credentials'});
        }
        
    } catch (error) {
        res.status(500).send({message:'Internal Error Occured',error})
    }
}


module.exports={
    register,
    login
}