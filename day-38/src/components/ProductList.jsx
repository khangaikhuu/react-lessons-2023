import Product from "./Product";
import products from "../data/seed";
import { Link } from "react-router-dom";
export default function ProductList() {
  function handleProductUpVote(productId) {
    
    const foundProduct = products.filter((product) => {
      if (product.id == productId) {
        return product;
      }
    });

    // console.log(productsList)
    // const nextProducts = productsList.map((product) => {
    //   if (product.id === productId) {
    //     return Object.assign({}, product, {
    //       votes: product.votes + 1,
    //     });
    //   } else {
    //     return product;
    //   }
    // });

    // setProductsList(nextProducts)
    // console.log(nextProducts)
  }

  const productComponents = products.map((product, index) => (
    <Link key={index} to={`/product/${product.id}`}>
      <Product product={product}/>
    </Link>
  ));
  return <div className="ui unstackable items">{productComponents}</div>;
}
