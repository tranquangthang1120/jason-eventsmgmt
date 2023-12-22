import { useNavigate } from "react-router-dom";
import '../css/ProductItem.css'

function ProductItem({product, getDetails}){
    const navigate = useNavigate();
    return(
        <div class="productitem">
             <div onClick={() => {     
                    //gán giá tri product cho biến productDetails ở App.js
                    getDetails(product);
                    //chuyển route tới /details
                   
                }}>
               
                <img src={product.image} alt="image" width="100%" />
                 <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                   
            <button onClick={() =>  navigate('/details')}>View</button>
             </div>    
        </div>
    );
}

export default ProductItem;