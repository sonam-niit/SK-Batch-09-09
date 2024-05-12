const usermodel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        if (!name || !email || !username || !password) {
            return res.status(400).send({ message: 'All Fields are mandatory' });
        }
        let user = await usermodel.findOne({ email });
        if (user) {
            return res.status(400).send({ message: 'EmailId is already registered with US' });
        }
        user = await usermodel.findOne({ username });
        if (user) {
            return res.status(400).send({ message: 'Username is already taken by Someone' });
        }
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new usermodel({ name, username, email, password: hashPassword });
        const resp = await newUser.save();
        return res.status(201).send({ message: 'User Registered', user: resp });
    } catch (error) {
        res.status(500).send({ message: 'Internal Error Occured', error })
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ message: 'All Fields are mandatory' });
        }
        let user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: 'EmailId is not registered with US' });
        }
        const match =await bcrypt.compare(password, user.password);
        if (match) {
            const payload = { id: user._id, name: user.name, email: user.email }
            //create token
            const token = jwt.sign(payload, process.env.JWT_SECRET)
            res.cookie('token',token);//added token in cookies
            res.status(200).send({ message: 'User Logged In', user:payload })
            //return res.status(201).send({ message: 'User Logged In', token, user:payload });
        } else {
            return res.status(400).send({ message: 'Invalid Credentials' });
        }

    } catch (error) {
        res.status(500).send({ message: 'Internal Error Occured', error })
    }
}


module.exports = {
    register,
    login
}