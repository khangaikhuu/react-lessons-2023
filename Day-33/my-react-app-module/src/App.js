import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Product from './Product';
import { ProductFunc, ProductFunc2 } from './ProductFunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Product List</h1>
          <hr />
          {/* <img src="images/image.png" className="thumbnail rounded"/>
          <i className='fab fa-react'>Test</i>
          <i className="bi bi-caret-up-fill">Tes</i>
           */}
          <Product />
         <ProductFunc/>
         <ProductFunc2 />

        </div>
      </header>

    </div>
  );
}

export default App;
