import { useState } from "react";

function ProductForm({addproduct}) {
    const [product,setProduct]=useState({name:'',price:'',category:''});
    const handleSubmit=(e)=>{
        e.preventDefault();
        product.id=Date.now();//set some unique id
        addproduct(product);//call parent class method to set product
        setProduct({name:'',price:'',category:''});//clearing form
    }
    return ( 
        <div>
            <h3 className="text-bg-secondary p-2 text-center">Product Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label>Name</label>
                    <input type="text" placeholder="Product Name" className="form-control"
                    value={product.name} 
                    onChange={(e)=>setProduct({...product,name:e.target.value})}/>
                </div>
                <div className="form-group mt-3">
                    <label>Price</label>
                    <input type="text" placeholder="Product price" className="form-control"
                    value={product.price}
                    onChange={(e)=>setProduct({...product,price:e.target.value})} />
                </div>
                <div className="form-group mt-3">
                    <label>Category</label>
                    <input type="text" placeholder="Product Category" className="form-control"
                    value={product.category}
                    onChange={(e)=>setProduct({...product,category:e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Add Product</button>
            </form>
        </div>
     );
}

export default ProductForm;