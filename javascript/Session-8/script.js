let todos=[]; //created Empty Array

function addTodo(task){
    todos.push(task); // add item in empty array using Push
}

function removeTodo(task){

    const index= todos.findIndex(function(item){return item===task});
    todos.splice(index,1);//delete form given index with 1 count
    //another way to remove Task
    // todos= todos.filter(function(item)
    // {return item!==task})
    //filter the data with removed task
}

function display(){
    console.log(todos);
}

