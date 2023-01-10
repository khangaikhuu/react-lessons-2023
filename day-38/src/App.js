import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ProductList from './components/ProductList';

function App() {

  const [isPlaying, setIsPlaying] = useState(false)
  return (
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <div id="content"></div>
        <ProductList />
        <Button />
      </div>
  );
}

export default App;
