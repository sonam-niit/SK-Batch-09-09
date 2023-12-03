const obj4 = {
    id: 3,
    fname: "Mohd",
    lname: "Ali",
    address: "F-12, Police Line Sultanpur",
    displayinfo: function() {
        return this.fname + " " + this.lname;
    }
};
console.log("Normal Function",obj4.displayinfo());
const obj5 = {
    id: 3,
    fname: "Mohd",
    lname: "Ali",
    address: "F-12, Police Line Sultanpur",
    displayinfo: ()=>{
        return obj5.fname + " " + obj5.lname;
    }
};

console.log("Arrow Function",obj5.displayinfo());