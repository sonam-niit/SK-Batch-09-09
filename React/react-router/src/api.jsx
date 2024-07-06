import axios from "axios";

const instance= axios.create({
    //baseURL:'http://localhost:5000/',
    baseURL:'https://sk-batch-09-09.onrender.com'
})
export default instance;