import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ProductFunc from './ProductFunc';
import Product from './Product';
import products from './Seed';
function App() {
  const productList = products.map((product) => {
    return <ProductFunc
      title={product.title}
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
    />
  })

  const productList2 = products.map((product) => {
    return <Product
      title={product.title}
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
    />
  })
  // console.log(productList)
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Product List</h1>
          <hr />
          {/* {productList} */}
          {productList2}
        </div>
      </header>

    </div>
  );
}

export default App;
