const express = require('express');
const router = express.Router();
const usermodel = require('../models/user.model');

router.post('/',async (req, res) => {
    try {
        const { name, email, username, password } = req.body; //object destructure
        if(!name || !email || !username || !password){
          return res.status(400).send({message:'All fields are mandatory'})
        }
        const newUser= new usermodel({name, email, username, password});
        const resp=await newUser.save();
        return res.status(201).send({ message: "New User Created",user:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
})
router.post('/login',async (req, res) => {
    try {
        const { email,password } = req.body; //object destructure
        if(!email || !password){
          return res.status(400).send({message:'Email and Password fields are mandatory'})
        }
        const user=await usermodel.findOne({email});
        if(!user){
            return res.status(404).send({message:'EmailId is not registered with Us'});
        }
        if(user.password===password)
            return res.status(200).send({ message: "LoggedIn..!!",user })
        else
            return res.status(400).send({message:'Invalid Credentials..'})
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
})
router.get('/', async (req, res) => {
    try {
        const resp= await usermodel.find();
        res.status(200).send({ users:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
})
router.get('/:id', async (req, res) => {
    try {
        const id= req.params.id;//read params from URL
        const resp= await usermodel.findById(id);
        res.status(200).send({ user:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
})
router.put('/:id', async (req, res) => {
    try {
        const id= req.params.id;//read params from URL
        //for data updation data will come from req.body
        const resp= await usermodel.findByIdAndUpdate(id,req.body);
        res.status(200).send({ user:resp,message:"User Updated" })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
})

module.exports = router;