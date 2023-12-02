(()=>{
    let count=0;

    const increment=()=>{
        count++;
        console.log(`Counter: ${count}`);
    }
    const decrement=()=>{
        count--;
        console.log(`Counter: ${count}`);
    }

    console.log(count);
    increment();
    decrement();
})();
