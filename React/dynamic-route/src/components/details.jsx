import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
    const {pid}= useParams(); //direct destructing of Data
    const [product,setProduct]=useState({});
    const fetchData=async()=>{
        try {
            const resp=await axios.get('https://dummyjson.com/products/'+pid);
            setProduct(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div className="container">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>Price: {product.price}</h4>
            <p>Description: {product.description}</p>
            <h5>Rating:{product.rating}</h5>
            <h5>Brand:{product.brand},Category: {product.category}</h5>

        </div>
     );
}

export default Details;