//immediately Invoked function Expression
(function test(name){
    console.log("I am IIFE function "+name);
})('sonam');

(()=>console.log("I am IIFE  Arrow Function"))();