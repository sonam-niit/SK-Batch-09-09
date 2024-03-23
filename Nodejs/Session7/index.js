const express= require('express');
const cors= require('cors');
const { UserAuthentication, isAdmin } = require('./authenticated');

const app= express();
app.use(cors()); //Third Party Middle ware
app.use(express.json());//Inbuilt Middleware JSON Parser

app.set('view engine','pug'); //set View Engine

app.get('/welcome',(req,res)=>{
    res.render('index');
})
app.get('/message',(req,res)=>{
    res.render('message',{title:'Greeting',message:'Welcome and Good evening to all'});
})
app.get('/users',(req,res)=>{
    res.render('users',{
        users:[
            {id:1,name:'alex',email:'alex@gmail.com',country:'US'},
            {id:2,name:'Bob',email:'bob@gmail.com',country:'UK'},
            {id:3,name:'Jenny',email:'jen@gmail.com',country:'India'}
        ]
    })
})
app.get('/api/users',async (req,res)=>{
    const resp=await fetch('https://jsonplaceholder.typicode.com/users');
    const json=await resp.json();
    res.render('apiusers',{users:json})
})

app.use((req,res,next)=>{
    console.log('General Middleware');
    next();
}) //Custome Middleware
//2nd option is called as middleware
app.get('/profile',UserAuthentication,(req,res)=>{
    res.send('Profile Page')
})
app.get('/sales',UserAuthentication,isAdmin,(req,res)=>{
    res.send('UserSales Page')
})
app.get('/',(req,res)=>{
    res.send('Home Page')
})
app.use('/info',express.static('website'));

app.use('/api/product', require('./productroute'));

app.listen(5000,()=>{
    console.log('Server started');
})