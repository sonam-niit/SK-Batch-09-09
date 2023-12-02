function print(...num){
    console.log(num);
}
print(1);
print(1,2,3,4,5,6);
print(10,20,30,40,50,60,70,80,90,100);
//rest parameter you can pass number of parameters to it.

function sum(...num){
    const sum= num.reduce((acc,val)=>acc+val);
    return sum;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8));
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12,13));