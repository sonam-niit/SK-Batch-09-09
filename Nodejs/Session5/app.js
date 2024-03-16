const express= require('express');
const path= require('path');
const students= require('./files/student.json'); //Imported JSON
const app= express(); //created express server

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1>')
})
app.get('/students',(req,res)=>{
    res.status(200).send(students);
})
app.get('/topper',(req,res)=>{
    // let topper=students[0];
    // for(let s of students){
    //     if(topper.cgpa<s.cgpa)
    //         topper=s;
    // }  
    res.status(200).send(students.reduce((prev,curr)=>prev.cgpa<curr.cgpa?curr:prev));
})
//Write a topper api which provides topper student details localhost:5000/topper
app.get('/skill',(req,res)=>{
    //Send File needs an absolute path
    res.status(200).sendFile(path.resolve('./files/home.html'));
    //res.status(200).sendFile(__dirname+'./files/home.html');
})
app.get('/about',(req,res)=>{
    res.status(200).send('<h1>About Page</h1>')
})
app.get('/contact',(req,res)=>{
    res.status(200).send('<h1>Contact Page</h1>')
})
app.listen(5000,()=>{
    console.log("Server started");
})