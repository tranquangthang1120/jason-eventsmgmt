import Productitem from "../component/Product";

function ProductList(products, addCart){
    return(
        <div>
            {products.map(p => (
            <Productitem key={p.id} product={p} addCart={addCart}/>
            ))}
        </div>
    );
}
export default ProductList;