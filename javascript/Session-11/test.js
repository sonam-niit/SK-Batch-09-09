function test1(cb){
    setTimeout(function(){
        print();
        cb();
        console.log("Test1 completed");
    },2000);
    //wait for 2 seconds and then call print function
    //passing function as argument called callback
}
function print(){
    console.log("Timer Completed");
}
function callback(){
    console.log("My Test Function");
}
test1(callback);