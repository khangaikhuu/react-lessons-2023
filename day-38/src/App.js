import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'
import ProductList from './components/ProductList';
import products from './data/seed';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [wishList, setWishList] = useState([]) // holds information about product wishlist state

  /// 1. create react state called "productList" variable in App component
  /// 2. create also changing function for productList variable in App component
  /// 3. initialize productList state variable with products seed in App component
  /// 4. change product components products into productList variable in App component

  const [productList, setProductList] = useState(products)
  console.log(wishList)
  return (
    <div>
      <div className="ui menu">
        <div className="right menu">
          <a className="item active">
            <i className="heart icon ">
             {wishList.length} 
            </i>
          </a>
          <a className="item"><i className="shopping basket icon"></i></a>
        </div>
      </div>
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <div id="content"></div>
        <Routes>
          <Route path='/' element={<ProductList wishList={wishList} setWishList={setWishList} />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Outlet />
      </div>
    </div>

  );
}

export default App;
