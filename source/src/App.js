import { useState, useEffect } from 'react';
import './App.css';
import { Link, Route, Routes, } from 'react-router-dom';
import Home from './component/Home'
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import ProductSearch from './component/ProductSearch';
import CartList from './component/CartList';

function App() {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilerProduct] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [carts, setCarts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        //đọc file json thứ nhất
        const productJson = await fetch('products.json');
        const productData = await productJson.json();
        setProducts(productData);
        setFilerProduct(productData);

        //đọc file json thứ hai
        const userJson = await fetch('user.json');
        const userData = await userJson.json();
        setUsers(userData);

        console.log(users);
      }catch (error){
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);
  const handleSearch = (value) => {
    setSearchValue(value);
    const dataSearch = products.filter
        (pro => pro.name.toLowerCase().includes(value.toLowerCase()));
    setFilerProduct(dataSearch);
  }

  const addCart = (pro) => {
    setCarts([...carts, pro]);
  }
  const handleDeleteCart = (id) => {
    const DeleteCart = carts.filter(c => c.id !== id);
    setCarts(DeleteCart);
  }
  const getDetails = (pro) => {
    setProductDetails(pro);
  }

  return (
    <div className="App">
      <nav>
          <Link to="/home"></Link>
          <Link to="/product">Product</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' 
            element=
            {
              localStorage.getItem (
              <div>
                <ProductSearch searchValue={searchValue} onSearch={handleSearch}/>
                <button onClick={handleSort}>Sort By Name</button>
                <ProductList products={filterProduct} addCart={addCart} getDetails={getDetails}/>
              </div>
              ) 
            }/>
             <Route path='/cart' element={<CartList carts={carts} deleteCart={handleDeleteCart}/>}/>
            <Route path='/details' element={<ProductDetails product={productDetails} addCart={addCart}/>}/>
        </Routes>
    </div>
  );
}

export default App;
