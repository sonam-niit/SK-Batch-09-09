const baseURL = "https://jsonplaceholder.typicode.com/posts/1"

const fetchData = () => {
    fetch(baseURL)
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

fetchData();

const getTodos=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err)=>console.log(err))
}
getTodos();