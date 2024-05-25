import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ITEM } from "../Redux/actions";

function Cart() {
    const items = useSelector(state => state.cart.items);
    const dispatch=useDispatch();
    return (
        <div>
            <h3>Cart Component: {items.length} Items in CART</h3>
            <div className="row">
            {
                items.map(product => (
                    <div className="col-md-3">
                        <div className="card">
                            <img src={product.thumbnail} className="card-img-top" alt={product.title}
                            height='250' />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h3 className="card-title">${product.price}</h3>
                                    <p className="card-text">{product.brand}</p>
                                    <button className="btn btn-primary"
                                    onClick={()=>dispatch({type:REMOVE_ITEM,payload:product.id})}>
                                        Remove From Cart</button>
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
}

export default Cart;