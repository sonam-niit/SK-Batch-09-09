const fs = require('fs');

function deleteFile(fileName){
    fs.unlink(fileName,(err)=>{
        if (err) {
            console.log('Error Occured', err);
            return;
        }
        console.log('File Deleted');
    })
}

function addDataToexisctingFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.log('Error Occured', err);
            return;
        }
    })
    console.log("Data Updated successfully..");
}
function createMyFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Error Occured', err);
            return;
        }
    })
    console.log("Data Written successfully..");
}
function readMyFile(fileName) {
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log('Error Occured', err);
            return;
        }
        console.log(data.toString());
    })
}
//createMyFile('./files/sonam.txt', 'My Name is Sonam Soni, I am Instructor here')
//addDataToexisctingFile('./files/sonam.txt',". I am Having 12+ years of Experience. ")
//readMyFile('./files/sonam.txt')
deleteFile('./files/Hello.txt');