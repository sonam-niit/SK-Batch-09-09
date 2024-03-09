const student={
    id:1,
    name:'Sonam Soni',
    email:'sonam@gmail.com',
    print:function(){
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`email: ${this.email}`);
    }
}

module.exports= student;