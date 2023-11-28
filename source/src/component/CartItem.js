function CartItem(product, deleteCart){
    return(
        <div>
          <img src= {product.image} />
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Giá: {product.price} $</p>
          <button onClick={() => {deleteCart(product.id)}}>Delete</button>
        </div>
    );
}
export default CartItem;