import '../css/CartItem.css'
function CartItem({product, deleteCart}){
  return(
      <tr>
          <td><img src={product.image} alt="image" width="300px"/></td>
          <td><h5>{product.name}</h5></td>
          <td><h6>{product.price} vnđ</h6></td>
          <td><button onClick={() => deleteCart(product.id)}>Xóa</button></td>
      </tr>

  );
}

export default CartItem;