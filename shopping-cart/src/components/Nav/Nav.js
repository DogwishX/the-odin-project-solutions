import { useState } from "react";
import { Link } from "react-router-dom";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Nav.css";

function Nav({ items, cart, setCart }) {
  const [displayCart, setDisplayCart] = useState(false);

  function toggleDisplayCart() {
    setDisplayCart(!displayCart);
  }

  return (
    <div className="nav">
      {items.map((item, index) => (
        <div className="nav__item" key={index}>
          <Link to={`/${item}`}>{item}</Link>
        </div>
      ))}
      <div className="nav__item nav__cart" onClick={toggleDisplayCart}>
        <p>Cart</p>
        <p className="nav__counter">{cart.length}</p>
      </div>
      {displayCart && <ShoppingCart cart={cart} setCart={setCart} />}
    </div>
  );
}

export default Nav;
