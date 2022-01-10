import "./MenuIcon.css";

function MenuIcon({ isMenuOpen, toggle }) {
  function handleClick() {
    if (isMenuOpen) {
      setTimeout(toggle, 50);
      const navItems = document.querySelector(".nav__items");
      navItems.classList.add("nav__items--hide");
      return;
    }
    toggle();
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={`nav__menu-icon${
          isMenuOpen ? " nav__menu-icon--active" : ""
        }`}
        data-testid="nav__menu"
      >
        <span className="nav__menu-icon--top"></span>
        <span className="nav__menu-icon--mid"></span>
        <span className="nav__menu-icon--bot"></span>
      </div>
    </>
  );
}

export default MenuIcon;
