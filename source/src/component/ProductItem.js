function Product({product, addCart}){
    return(
        <div className="product">
      <img src= {product.image} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>Giá: {product.price} $</p>
      <button onClick={() => addCart(product)}>Add To Cart</button>
    </div>
    );
}
export default Product;