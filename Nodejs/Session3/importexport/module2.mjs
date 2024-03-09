export class Student{

    constructor(id,name,email,country){
        this.id=id;
        this.name=name;
        this.email=email;
        this.country=country;
    }

    getData(){
        console.log("----------------------------");
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Country: ${this.country}`);
    }
}