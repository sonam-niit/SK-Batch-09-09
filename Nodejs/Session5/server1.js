const fs= require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/about') {
        return res.end('<h1>About Us Page</h1>');
    }else if (req.url == '/contact') {
        return res.end('<h1>Contact Us Page</h1>');
    }else if (req.url == '/news') {
        return res.end('<h1>News Page</h1>');
    }else{
        fs.readFile('./files/home.html',(err,data)=>{
            if(err){
                return res.end('<h2>Error Occured</h2>')
            }
            return res.end(data.toString());
        })
        
    }
})
server.listen(8080, () => {
    console.log(`Your Server is listening to PORT 8080`);
})