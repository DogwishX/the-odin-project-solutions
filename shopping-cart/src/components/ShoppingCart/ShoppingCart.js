import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart({ cart, setCart }) {
  let total = 0;

  function addTotal(amount) {
    total += amount;
  }

  function deleteProduct({ currentTarget }) {
    const tempCart = [...cart];
    tempCart.splice(currentTarget.dataset.index, 1);
    setCart(tempCart);
  }
  return (
    <div className="cart">
      {cart.map(({ name, weight, sprites, qty, id }, index) => (
        <div
          key={id}
          data-index={index}
          className="cart__item"
          onClick={deleteProduct}
        >
          <div className="cart__item-qty">
            {qty}X {weight * qty}
          </div>
          <img className="cart__image" src={sprites.front_default} />
          <div className="cart__name">{name}</div>
          <div className="cart__price">{weight}</div>
          {addTotal(weight * qty)}
        </div>
      ))}
      <div className="cart__total">Total: {total}</div>
    </div>
  );
}

export default ShoppingCart;
