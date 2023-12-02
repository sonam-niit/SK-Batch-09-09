(function(){
    let count=0;

    function increment(){
        count++;
        console.log(`Counter: ${count}`);
    }
    function decrement(){
        count--;
        console.log(`Counter: ${count}`);
    }

    console.log(count);
    increment();
    decrement();
})();

// console.log(count);
// increment();