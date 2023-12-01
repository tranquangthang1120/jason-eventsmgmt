import CartItem from "./CartItem";

function CartList({carts, deleteCart}){
    return(
        <>
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map(c => (
                        <CartItem key={c.id} product={c} deleteCart={deleteCart}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default CartList;