//imported functionsto use here
const { add, sub, mul, div } = require("./calculator");
const student = require("./object");

console.log('Addition:',add(23,34));
console.log('Subtraction:',sub(23,34));
console.log('Multiplication:',mul(23,34));
console.log('Division:',div(4,2));
student.print();