import products from '../../assets/products.json';
function UseCase4() {
    return (
        <div className='row mt-2'>
            <h2 className='p-2 text-center text-bg-warning'>Featured products</h2>
            {
                products.map((item) => (
                    <div className='col'>
                        <div className="card">
                            <img src={item.imageUrl} className="card-img-top" alt={item.name} height='150' width='150'/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <a href="#" className="btn btn-primary">Add To Cart</a>
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default UseCase4;