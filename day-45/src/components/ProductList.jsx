import Product from "./Product";
import products from "../data/seed";

export default function ProductList() {
  const productComponents = products.map((product, index) => {
    return <Product key={index} product={product} />;
  });

  return <div className="ui unstackable items">{productComponents}</div>;
}
