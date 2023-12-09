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

class ElectricCar extends Car{

    constructor(name,modelNo,color,batteryCapacity){
        super(name,modelNo,color);//pass values to parent class constructor
        this.batteryCapacity=batteryCapacity;
    }
    display(){
        super.display();//call parent class same name function
        console.log(`Battery Capecity: ${this.batteryCapacity}`);
    }
    charge(){
        console.log(`${this.name} Charging..........`);
    }
}

let c1= new Car('Tata Altroz',2020,'golden'); //Creating Object
let c2= new ElectricCar('Tata Nexon EV',2023,'Black','100 Km/h'); //Creating Object
c1.display();
c2.display();
c1.start(); c2.start();
c1.stop();c1.stop();
c2.charge();