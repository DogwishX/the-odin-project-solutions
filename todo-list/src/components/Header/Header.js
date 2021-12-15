import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          data-testid="header__logo"
          className="header__logo"
          src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
          alt="site logo"
        />
      </div>
    );
  }
}

export default Header;
