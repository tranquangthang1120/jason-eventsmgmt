function ProductSearch({searchValue, onSearch}){
    return(
        <input type="text" placeholder="Seach By Name" 
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}/>
    );
}
export default ProductSearch;
