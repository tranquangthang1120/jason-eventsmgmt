import { useNavigate } from "react-router-dom";
function ProductItem({product, addCart, getDetails}){
    const navigate = useNavigate();
    return(
        <div>
            <div onClick={() => {     
                    //gán giá tri product cho biến productDetails ở App.js
                    getDetails(product);
                    //chuyển route tới /details
                    navigate('/details');
                }}>
            <img src= {product.image} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Giá: {product.price} $</p>
            </div>           
            <button onClick={() => addCart(product)}>Add To Cart</button>
        </div>
    );
}

export default ProductItem;