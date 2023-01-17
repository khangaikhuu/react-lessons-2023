import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'
import ProductList from './components/ProductList';
import products from './data/seed';
import Product from './components/Product';
import {Routes, Route} from 'react-router-dom'

function App() {

  /// 1. create react state called "productList" variable in App component
  /// 2. create also changing function for productList variable in App component

  /// 3. initialize productList state variable with products seed in App component
  /// 4. change product components products into productList variable in App component

  const [productList, setProductList] = useState(products)

  function handleProductUpVote(productId) {

    console.log(products)
    const newProducts = productList.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product;
      }

    })
    console.log(newProducts)

    setProductList(newProducts)

  }

  const productComponents = productList.map((product) => {
    return (
      <Product
        key={"product-" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={handleProductUpVote}
        stars={product.stars}
      />
    )
  });


  return (
    <div className="main ui text container">
      <h1 className="ui dividing centered header">Popular Products</h1>
      <div id="content"></div>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Outlet />
      
    </div>
  );
}

export default App;
