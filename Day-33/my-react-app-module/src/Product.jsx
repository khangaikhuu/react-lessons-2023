import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image thumbnail rounded">
          <img src="images/image-aqua.png" className="thumbnail rounded" />
        </div>
        <div className="description-container">
          <div className="description">
            <a>Fort Knight</a>
            <p>Authentic reseanniance actor, deliverd in just two weeks</p>
          </div>
          <div className="extra">
            <span> Submitted By: </span>
            <img className="ui avatar image" src="images/avatars/daniel.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
