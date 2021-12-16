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

  render() {
    return (
      <div className="header">
        <img
          data-testid="header__logo"
          className="header__logo"
          src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
          alt="site logo"
        />
        <div data-testid="header__title" className="header__title">
          Todo List
        </div>
        {this.state.windowWidth <= 650 ? (
          <div data-testid="header__menu" className="header__menu">
            Menu
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Header;
