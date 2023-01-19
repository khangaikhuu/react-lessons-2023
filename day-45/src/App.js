import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accordion from "./components/Accordion";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Header from "./components/Header";
// import ProductList from './components/ProductList';
// import Product from './components/Product';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
      {/* <div className="ui menu">
        <div className="right menu">
          <a className="item active">
            <i className="heart icon ">
             {0} 
            </i>
          </a>
          <a className="item"><i className="shopping basket icon"></i></a>
        </div>
      </div>
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <div id="content"></div>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Outlet />
      </div> */}
    </div>
  );
}

export default App;
