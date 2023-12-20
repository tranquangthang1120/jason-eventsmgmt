import '../css/ProductDetails.css';

function ProductDetails({product, addCart,}){

    return(
        <div className='productDetails'>
            <div><img src={product.image} width="100%" alt="image"/></div>
            <div class="detail">
               
                <table>
                    <tr>
                <td colspan="2"><h1>{product.name}</h1></td>
                   </tr> 
                <tr>
                <td colspan="2"><h6>{product.description}</h6></td>
                </tr>
                <tr>
                    <td><h3>Price: ${product.price}</h3></td>
                    <td> <button class="buttomdetail" onClick={() => { addCart(product) }}>Thêm vào giỏ</button></td>     
                </tr>
                </table>
            </div>
        </div>
    );
}

export default ProductDetails;