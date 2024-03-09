import { greetings, welcome } from "./Module1.mjs";
import { Student } from "./module2.mjs";

welcome();
greetings("Sonam Soni");

let stu1= new Student(101,'Sonam Soni','sonam@gmail.com','India');
let stu2= new Student(102,'John Doe','john.doe@gmail.com','US');

stu1.getData();
stu2.getData();