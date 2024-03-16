const http= require('http');

const server= http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Welcome to the World of Node Server</h1>');
    res.write('<hr><h3>Node JS</h3>')
    res.end();//last line of response
})

server.listen(8080,()=>{
    console.log(`Your Server is listening to PORT 8080`);
})