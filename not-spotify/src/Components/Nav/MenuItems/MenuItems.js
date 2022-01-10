import { useEffect } from "react/cjs/react.development";
import Logo from "../../Core/Logo";
import "./MenuItems.css";

function MenuItems({ items, vertical = null }) {
  function applyAnimationDelay() {
    const liNodeList = document.querySelectorAll(".nav__items li");

    liNodeList.forEach(
      (li, index) => (li.style = `animation-delay: ${index * 0.03}s`)
    );
  }

  useEffect(() => {
    applyAnimationDelay();
  }, []);

  return (
    <ul className="nav__items">
      {items.map((item, index) => (
        <li key={index} className="nav__item" data-testid="nav__item">
          {item}
        </li>
      ))}
      <li className="nav__divisor"></li>
      <div className="nav__profile">
        <li className="nav__item">Account</li>
        <li className="nav__item ">Log Out</li>
      </div>
      <li className="nav__item-logo">
        <Logo text="Spotify" />
      </li>
    </ul>
  );
}

export default MenuItems;
