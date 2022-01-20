import useWidthQuery from "../../hooks/useWidthQuery";
import useToggle from "../../hooks/useToggle";

import "./Nav.css";
import MenuIcon from "./MenuIcon";
import MenuItems from "./MenuItems";
import Logo from "../Core/Logo";

function Nav({ id = null, items, vertical = false }) {
  const device = useWidthQuery();
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <div className={`nav${vertical ? "--vertical" : "--horizontal"}`} id={id}>
      <Logo text="Spotify" id="nav__logo" />
      {device !== "desktop" ? (
        <>
          <MenuIcon isMenuOpen={isMenuOpen} toggle={toggleIsMenuOpen} />
          {isMenuOpen && <MenuItems items={items} />}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default Nav;
