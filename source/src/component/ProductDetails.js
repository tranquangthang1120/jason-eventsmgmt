import '../css/ProductDetails.css';

function ProductDetails({product, addCart}){
    return(
        <div className='productDetails'>
            <div><img src={product.image} width="100%" alt="image"/></div>
            <div>
                <h1>{product.name}</h1>
                <h3>Giá: ${product.price}</h3>
                <h5>{product.description}</h5>
                <button onClick={() => addCart(product)}>Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductDetails;