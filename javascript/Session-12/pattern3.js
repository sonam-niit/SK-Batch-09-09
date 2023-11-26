let pattern= new RegExp("[9876]{3}[0-9]{7}");

console.log(pattern.test(9898562345)); //matching with number
console.log(pattern.test(98768562345));
console.log(pattern.test(9456562345));

let phone= new RegExp("[6-9]{3}-[0-9]{3}-[0-9]{4}");
console.log(phone.test("978-656-2345")); 
//this matching is with string because its including -
console.log(phone.test("678-656-2345"));
console.log(phone.test("345-656-2345"));