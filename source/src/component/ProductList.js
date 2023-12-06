import ProductItem from "./ProductItem";
import '../css/ProductList.css'
function ProductList({products, getDetails}){
    return(
        <>
       <div><h3 class="list"></h3></div>
       <div class="productlist">
            {products.map(pro => (
                <ProductItem key={pro.id} product={pro} getDetails={getDetails} class="productlist"/>
            ))}
        </div>
        
        </>
    );
}
export default ProductList;