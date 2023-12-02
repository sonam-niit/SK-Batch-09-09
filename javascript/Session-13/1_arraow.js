
//Arrow Function
const welcome = ()=>console.log("Welcome Function");
const add= (num1,num2)=> num1+num2;
const fullname= (fname,lname)=> `Welcome ${fname} ${lname}`;
const calculate= (n1,n2)=>{
    const add=n1+n2;
    const mul=n1*n2;
    return add+mul;
}

welcome();
console.log('Addition: '+add(12,23));
console.log('Full Name: '+fullname('sonam','soni'));
console.log('Calculate: '+calculate(2,3));