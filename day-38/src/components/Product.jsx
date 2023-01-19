import { Rating } from "react-simple-star-rating";
import products from "../data/seed";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Product(props) {
  const [liked, setLiked] = useState(props.liked);
  const { id } = useParams();
  let foundProduct = {};
  if (id) {
    foundProduct = products.filter((product) => {
      if (product.id == id) {
        return product;
      }
    })[0];
  }
  if (Object.keys(props).length > 0) {
    foundProduct = props.product;
  }

  const product = foundProduct;
  return (
    <div className="item">
      <div className="image">
        <img src={product.productImageUrl} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={() => product.onVote(product.id)}>
            <i className="large caret up icon" />
          </a>
          {product.votes}
          <a
            onClick={() => {
              setLiked(!liked)
              if (liked !== true) {
                let likedProduct = {
                  id: product.id,
                  liked: true,
                };
                props.setWishList([...props.wishList, likedProduct]);
              } else {
                props.setWishList(
                  props.wishList.filter((w) => w.id !== product.id)
                );
              }
              console.log(props.wishList);
            }}
          >
            {!liked ? <i className="heart outline icon"></i> : <i className="heart icon"></i> }
          </a>
        </div>
        <div className="description">
          <a href={product.url}>{product.title}</a>
          <p>{product.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={product.submitterAvatarUrl} />
        </div>
        <Rating initialValue={5} />
      </div>
    </div>
  );
}
