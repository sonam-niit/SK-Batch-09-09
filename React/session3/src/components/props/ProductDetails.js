function ProductDetails({selected}) {
    return ( 
        <div>
            <h2>Product Details Page</h2><hr/>
            <h3>Name: {selected.name}</h3>
            <h4>Price: {selected.price}</h4>
            <img src={selected.imageUrl} height='250' width='250' />
        </div>
     );
}

export default ProductDetails;