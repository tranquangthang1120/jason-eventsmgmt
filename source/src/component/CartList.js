import CartItem from '../component/CartItem'
function CartList(Carts, addCart){
    return(
        <div>
            {Carts.map(c => (
            <CartItem key={c.id} product={c} addCart={addCart}/>
            ))}
        </div>
    );
}
export default CartList;