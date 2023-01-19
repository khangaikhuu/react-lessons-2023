import Product from "./Product";
import products from "../data/seed";

export default function ProductList(props) {
  const productComponents = products.map((product, index) => {
    const foundProduct = props.wishList.filter((w) => w.id === product.id);
    const liked = foundProduct.length > 0;
    return (
      <Product
        key={index}
        product={product}
        wishList={props.wishList}
        setWishList={props.setWishList}
        liked={liked}
      />
    );
  });

  return <div className="ui unstackable items">{productComponents}</div>;
}
