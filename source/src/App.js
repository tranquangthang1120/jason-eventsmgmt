import { useState, useEffect } from 'react';
import './App.css';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './component/Home';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import ProductSearch from './component/ProductSearch';
import ProductDetails from './component/ProductDetails';
import AboutUs from './component/AboutUs';
import Login from './component/Login';
import SingUp from'./component/Singup';
import Paycart from './component/Paycart';
import Logocart from './image/Cart.png';
import Logo from './image/logo.png'
import Footer from './component/footer'


function App() {
  //products chứa toàn bộ dữ liệu từ file json
  const [products, setProducts] = useState([]);
  //filerProduct chứa dữ liệu sau khi search
  const [filterProduct, setFilerProduct] = useState([]);
  //searchValue chứa giá trị người dùng nhập để search
  const [searchValue, setSearchValue] = useState('');
  //carts dùng để chứa sản phẩm trong giỏ hàng
  const [carts, setCarts] = useState([]);
  //productDetails dùng để chứa thông tin 1 sản phẩm
  const [productDetails, setProductDetails] = useState(null);
  //uses dùng để chứa danh sách user.json
  const [users, setUsers] = useState([]);
  //sử dụng để điều hướng route
  const navigate = useNavigate();
  //sử dụng để chứa lỗi
  const [errorLogin, setErrorLogin] = useState('');


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

  // useEffect(()=>{
  //   fetch('products.json')
  //   .then(response => response.json())
  //   .then(data => {      
  //     setProducts(data);
  //     setFilerProduct(data);
  //   })
  //   .catch(error => console.log('error reading json' ,error));

    
  // }, []);

  // useEffect(()=>{
  //   fetch('user.json')
  //   .then(response => response.json())
  //   .then(data => {      
  //     setUsers(data);
  //     console.log(users);
  //   })
  //   .catch(error => console.log('error reading json' ,error));
  // }, []);
  
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


  const handleSort = () => {
    const sortedProduct = 
      [...filterProduct].sort((a,b) => a.name.localeCompare(b.name));
    setFilerProduct(sortedProduct);
  }

  const checkLogin = (checkUser) => {
    const findUser = users.find(u => u.username == checkUser.username 
            && u.password == checkUser.password);
    if(findUser != null){
      //tim thay user
      console.log("login thanh cong");
      //dang ky localStorage
      localStorage.setItem('username', checkUser.username);
      //chuyển đến route Paycart
      navigate('/Pay');
    }else{
      //khong tim thay user
      console.log("login khong thanh cong");
      //alert('login khong thanh cong');     
      setErrorLogin('Invalid username or password');
    }
  }

  const deleteLocalStorage = () => {
    localStorage.clear();
  }
  return (
    <div className="App">
      <div class="name">     
      <img src={Logo} width="130px" height="70px"/>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/aboutus">AboutUs</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contactus">ContactUs</Link>
        <Link to="/review">Review</Link>
        <Link to="/cart"><a><img src={Logocart} height={"50px"}/></a></Link>
        {localStorage.getItem('username')? 
          (<span>
            Hello {localStorage.getItem('username')},
            <Link to="/login" onClick={() => deleteLocalStorage()}>
                Logout
            </Link>
           </span>) :
          (<Link to="/login">Login</Link> )
        }
      </nav>
      <Routes>
        <Route path='/' element={
          <div>
            <ProductSearch searchValue={searchValue} onSearch={handleSearch}/>
                <button onClick={handleSort}>Search</button>
        <Home/>
        <ProductList products={filterProduct} addCart={addCart} getDetails={getDetails}/>
        <Footer/>
        </div>
        }/>
       <Route path='/product' 
            element=
            {
              <div>
                <ProductSearch searchValue={searchValue} onSearch={handleSearch}/>
                <button onClick={handleSort}>Search</button>
                <ProductList products={filterProduct} addCart={addCart} getDetails={getDetails}/>
                <Footer/>
              </div>
            }/>
            <Route path='/Pay' element={
            localStorage.getItem('username') ? (
            <div>
            <Paycart/> 
            <Footer/>
            </div>
            ): (<Navigate to='/login'/>)
            }/>
        <Route path='/cart' element={
        <div>
        <CartList carts={carts} deleteCart={handleDeleteCart}/>
        <Footer/>
        </div>
        }/>
        <Route path='/details' element={
          <div>
        <ProductSearch searchValue={searchValue} onSearch={handleSearch}/>
        <button onClick={handleSort}>Search</button>
        <ProductDetails product={productDetails} addCart={addCart}/>
        <Footer/>
        </div>
      }/>
        <Route path='/login' element={
        <div>
        <Login checkLogin={checkLogin} errorLogin={errorLogin} />
        <Footer/>
      </div>
      }
        />
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='/aboutus' element={
        <div>
        <AboutUs />
        <Footer/>
        </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;
