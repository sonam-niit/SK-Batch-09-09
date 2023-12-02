let arr1=[1,2,3,4,5];
const arr2=[6,7,8,9];

//const arr3=arr1.concat(arr2);

const arr3= [...arr1,...arr2];//merging arrays

console.log(arr3);

arr1= [...arr1,10,12];
console.log(arr1);

const obj1={id:1,name:'sonam'};
const obj2={email:'sonam@gmail.com',country:'india'};

let user={...obj1,...obj2}; //merging objects
console.log(user);
user={...user,country:'Canada'}; //updating object
console.log(user);
user={...user,password:"Sonam@123"};
console.log(user);