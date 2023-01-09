import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
      <div class="main ui text container">
        <h1 class="ui dividing centered header">Popular Products</h1>
        <div id="content"></div>
        <ProductList />
      </div>
  );
}

export default App;
