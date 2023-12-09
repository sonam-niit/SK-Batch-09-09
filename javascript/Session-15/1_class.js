class Car{
    constructor(name,modelNo,color){
        this.name=name;
        this.modelNo=modelNo;
        this.color=color;
    }
    start(){
        console.log(`${this.name} started`);
    }
    stop(){
        console.log(`${this.name} stopped`);
    }
    display(){
        console.log(`Name: ${this.name}`);
        console.log(`ModelNo: ${this.modelNo}`);
        console.log(`Color: ${this.color}`);
        console.log("------------------------------");
    }
}

let c1= new Car('Tata Altroz',2020,'golden'); //Creating Object
let c2= new Car('Tata Nexon EV',2023,'Black'); //Creating Object
c1.display();
c2.display();
c1.start(); c2.start();
c1.stop();c1.stop();

const cars=[c1,c2];