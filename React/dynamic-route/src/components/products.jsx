import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios.get('https://dummyjson.com/products');
            setProducts(resp.data.products);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="row">
            {
                products.map(product => (
                    <div className="col-md-3">
                        <div className="card">
                            <img src={product.thumbnail} className="card-img-top" alt={product.title}
                            height='250' />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h3 className="card-title">${product.price}</h3>
                                    <p className="card-text">{product.brand}</p>
                                    <Link to={`/details/${product.id}`} className="btn btn-primary">View More</Link>
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Products;