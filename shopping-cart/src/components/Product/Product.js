import React, { useState } from "react";
import "./Product.css";

function Product({ name, weight, sprites, id, addToCart }) {
  const [productQty, setProductQty] = useState(0);

  function addQty() {
    setProductQty(productQty + 1);
  }
  function subtractQty() {
    if (productQty > 0) setProductQty(productQty - 1);
  }

  function changeInputValue({ currentTarget }) {
    setProductQty(currentTarget.value);
  }
  return (
    <div className="products__card">
      <img className="products__image" src={sprites.front_default} />
      <h4 className="product__name">{name}</h4>
      <h4 className="product__price">{weight}</h4>
      <div className="product__qty">
        <button onClick={subtractQty}>-</button>
        <input type="text" onChange={changeInputValue} value={productQty} />
        <button onClick={addQty}>+</button>
      </div>
      <button
        className="product__add"
        data-product={JSON.stringify({
          name,
          weight,
          sprites,
          qty: productQty,
        })}
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
