function test(para1,para2,...para3){
    console.log(para1);
    console.log(para2);
    console.log(para3);
}

test(1,2,3);
test(1,2,3,4,5);
test(1,2,3,4,5,7,8);
//Rest Parameter must keep at last
//Default and Rest also not suggested to use Together
//You can use in only those cases where you want to pass nothing to default

function displayInfo(name="Guest",...hobbies){
    console.log("Name: "+name);
    console.log("Hobbies: "+hobbies.join(", "));
}
displayInfo();
displayInfo("Sonam","Programming","Reading")
displayInfo("Alex","Drawing","Painting","Reading","Driving")