const url= require('url');
const link= 'http://localhost:5000/products/index.html?name=sonam&age=34';
//Link with query parameters

const myurl= url.parse(link,true);

console.log(`Prototcol: ${myurl.protocol}`);
console.log(`Host: ${myurl.host}`);
console.log(`HostName: ${myurl.hostname}`);
console.log(`Port No: ${myurl.port}`);
console.log(`Path: ${myurl.path}`);
console.log(`PathName: ${myurl.pathname}`);
console.log(`Query: ${myurl.search}`);
const query=myurl.query;
console.log(`Name: ${query.name}`);
console.log(`Age: ${query.age}`);