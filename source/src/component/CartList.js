import CartItem from "./CartItem";
import '../css/CartList.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CartList({carts, deleteCart}){
    const navigate = useNavigate();
    const [tongtien, setTongtien] = useState(0);
    const tinhtongtien = () => {
        let tt = 0;
        carts.map((c) => {
          tt += c.price * 1;
        });
        setTongtien(tt);
      };
    
      //ham tinh tong tien tinh khi component dc render xong
      useEffect(() => {
        tinhtongtien();
      });
    return(
        <div>
           <div>
  <h2>Cart List</h2>
  <div class="cart">
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>

      <tbody>
        {carts.map(c => (
          <CartItem key={c.id} product={c} deleteCart={deleteCart}/>
        ))}
      </tbody>

      <tfoot>
        <td colSpan="4"><hr/></td>
        <tr>
          <td colSpan="2"><h5>Money to pay: </h5></td>
          <td><h6>${tongtien}</h6></td>
          <td><button onClick={() => navigate('/Pay')}>Pay</button></td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

        </div>
    );
}

export default CartList;