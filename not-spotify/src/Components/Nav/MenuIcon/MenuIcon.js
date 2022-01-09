import { useState } from "react";
import useToggle from "../../../hooks/useToggle";

import "./MenuIcon.css";

function BurgerIcon() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <>
      <div className="nav__menu" data-testid="nav__menu">
        <div
          className={`nav__menu-icon ${
            isMenuOpen ? "nav__menu-icon--active" : ""
          }`}
          data-testid="nav__menu-icon"
          onClick={toggleIsMenuOpen}
        >
          <span className="nav__menu-icon--top"></span>
          <span className="nav__menu-icon--mid"></span>
          <span className="nav__menu-icon--bot"></span>
        </div>
      </div>
    </>
  );
}

export default BurgerIcon;
