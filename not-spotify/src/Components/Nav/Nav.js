import useWidthQuery from "../../hooks/useWidthQuery";
import "./Nav.css";
import MenuIcon from "./MenuIcon";

function Nav({ id = null, items, vertical = false }) {
  const device = useWidthQuery();
  return (
    <div className={`nav${vertical ? "--vertical" : "--horizontal"}`} id={id}>
      {device !== "desktop" ? <MenuIcon data-testid="nav__menu" /> : ""}
    </div>
  );
}
export default Nav;
