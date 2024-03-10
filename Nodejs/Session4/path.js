const path= require('path');

const mypath=__dirname+'\\path.js';
console.log(mypath);
console.log("File Name:",path.basename(mypath));
console.log("Extention Name:",path.extname(mypath));
console.log("is Absolute?",path.isAbsolute(mypath));
console.log(`Directory Name:`,path.dirname(mypath));

console.log(path.isAbsolute('sonam.txt')); //it is relative path so will give you false

const directoryName='\\user';
const childDirName='local';
const fileName='index.js';
console.log(path.join(directoryName,childDirName,fileName));
console.log(path.resolve('server.js'));
