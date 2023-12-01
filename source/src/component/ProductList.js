import ProductItem from "./ProductItem";

function ProductList({products, addCart, getDetails}){
    return(
        <div>
            <h3>Product List</h3>
            {products.map(pro => (
                <ProductItem key={pro.id} product={pro} addCart={addCart} getDetails={getDetails}/>
            ))}
        </div>
    );
}
export default ProductList;