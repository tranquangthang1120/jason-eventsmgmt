import "../css/ProductDetails.css"
function ProductDetails({product, addCart}){
    return(
        <div className='productDetails'>
            <div><img src={product.image} width="100%" alt="image"/></div>
            <div>
            <img src= {product.image} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Giá: {product.price} $</p>
                <button onClick={() => addCart(product)}>Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductDetails;