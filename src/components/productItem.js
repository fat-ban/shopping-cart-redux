import React from 'react';
import formatCurrency from "../util"

const productItem = ({product,addItemToCart}) => {
  return (
    <li key={product._id}>
    <div className="product">
      <a href={"#" + product._id}>
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
      </a>
      <div className="product-price">
        <div>{formatCurrency(product.price)}</div>
        <button className="button primary" onClick={()=>{addItemToCart(product)}}>
          Add To Cart
        </button>
      </div>
    </div>
  </li>
  );
};


export default productItem;
