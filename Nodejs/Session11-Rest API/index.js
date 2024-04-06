//Main file from where my project starts its execution
const express= require('express');
const cors= require('cors');//helping you to connect frontend with backend
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/ums')
.then(resp=>console.log('Connected'))
.catch(err=>console.log('Error Occured',err))
const app= express();
app.use(express.json()); //parse data to json
app.use(cors());//allow third party to access my APIS
app.get('/',(req,res)=>res.send('User Management System is Running.'))
app.use('/api/user',require('./routes/user.route'));
app.listen(5000,()=>{
    console.log('Server started in PORT 5000');
})