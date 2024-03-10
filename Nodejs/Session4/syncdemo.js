const fs= require('fs');

console.log('Process started');
fs.writeFileSync('./files/temp.txt',"Hello All...");
console.log('Data Written...');

let data= fs.readFileSync('./files/temp.txt');
console.log(data.toString());

fs.appendFileSync('./files/temp.txt','Hello From Sonam Soni..');
console.log('Data appended successfully');

data= fs.readFileSync('./files/temp.txt');
console.log(data.toString());

console.log('Process completed');