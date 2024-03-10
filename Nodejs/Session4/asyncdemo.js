const fs= require('fs');

console.log("File Writing started");

fs.writeFile('./files/sonam.txt',"Hello My name is Sonam Soni. ",
(err)=>{
    if(err){
        console.log(`Error Occured`,err);
        return;
    }
    console.log("Data Written");
})

console.log("File Writing stopped");