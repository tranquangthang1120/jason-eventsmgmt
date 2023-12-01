function CartItem({product, deleteCart}){
  return(
      <tr>
          <td><img src={product.image} alt="image" width="100px"/></td>
          <td>{product.name}</td>
          <td>Giá: ${product.price}</td>
          <td><button onClick={() => deleteCart(product.id)}>Delete</button></td>
      </tr>
  );
}

export default CartItem;