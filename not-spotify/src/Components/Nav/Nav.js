import useWidthQuery from "../../hooks/useWidthQuery";
import useToggle from "../../hooks/useToggle";

import "./Nav.css";
import MenuIcon from "./MenuIcon";
import MenuItems from "./MenuItems";

function Nav({ id = null, items, vertical = false }) {
  const device = useWidthQuery();
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <div className={`nav${vertical ? "--vertical" : "--horizontal"}`} id={id}>
      {device !== "desktop" ? (
        <>
          <MenuIcon isMenuOpen={isMenuOpen} toggle={toggleIsMenuOpen} />
          {isMenuOpen && <MenuItems items={items} />}
          <Profile device={device} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default Nav;
