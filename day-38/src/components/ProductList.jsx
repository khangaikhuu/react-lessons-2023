import Product from "./Product";
import products from "../data/seed";
import { useState } from "react";
export default function ProductList() {
  
  function handleProductUpVote(productId) {
    console.log(productId + " was upvoted.");

    const foundProduct = products.filter(product => {
      if(product.id == productId) {
        return product
      }
    })
    console.log(foundProduct[0].votes)
    
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
      stars={product.stars}
    />
  ));
  return <div className="ui unstackable items">{productComponents}</div>;
}
