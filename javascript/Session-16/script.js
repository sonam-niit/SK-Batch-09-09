class Todo{

    constructor(){
        this.todos=[];
    }

    addTodo(item){
        this.todos.push({id:Date.now(),name:item});
        console.log("Added Item",item);
    }
    removeTodo(id){
        const index= this.todos.findIndex((item)=>item.id==id);
        this.todos.splice(index,1);
       // const newArray= this.todos.filter((item)=>item.id!=id);
       // this.todos=newArray;
       console.log('Removed Item');
    }
    getAllTodos(){
        return this.todos;
    }
}
//Main structure of MY Script
