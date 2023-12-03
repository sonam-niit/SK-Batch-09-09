const baseURL = "https://jsonplaceholder.typicode.com/posts/1"
const fetchData = async() => {
    try {
        const resp= await fetch(baseURL);
        const json= await resp.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}
fetchData();
const getTodos= async()=>{
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await resp.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}
getTodos();