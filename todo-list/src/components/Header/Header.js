import React from "react";
import { render } from "react-dom";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { windowWidth: window.innerWidth };
    this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    // this.updateWindowSize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }
  updateWindowSize() {
    this.setState({ windowWidth: window.innerWidth });
  }
  showMenu({ currentTarget }) {
    currentTarget.classList.toggle("header__menu--active");
  }

  render() {
    return (
      <div className="header">
        <div data-testid="header__title" className="header__title">
          <img
            data-testid="header__logo"
            className="header__logo"
            src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
            alt="site logo"
          />
          Todo List
        </div>
        {this.state.windowWidth <= 650 ? (
          <div
            className="header__menu"
            onClick={this.showMenu}
            data-testid="header__menu"
          >
            <div className="header__menu--top">
              <span></span>
              <span></span>
            </div>
            <div className="header__menu--mid">
              <span></span>
              <span></span>
            </div>
            <div className="header__menu--bot">
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Header;
