import Product from "./Product";
import products from "../data/seed";
export default function ProductList() {
  function handleProductUpVote(productId) {
    console.log(productId + " was upvoted.");
  }
  const productComponents = products.map((product) => (
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
    />
  ));
  return <div className="ui unstackable items">{productComponents}</div>;
}
