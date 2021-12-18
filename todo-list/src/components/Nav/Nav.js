import React from "react";

class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav">
        <ul className="nav__items">
          {this.props.items.map((item, index) => (
            <li key={index} data-testid={item.toLowerCase()}>
              {item}
            </li>
          ))}
        </ul>
        {this.Projects()}
      </div>
    );
  }
}

class Projects extends Nav {
  render() {
    return (
      <div className="projects">
        <div className="projects__title">Projects</div>;
        {/* TODO Add project button */}
      </div>
    );
  }
}

export default Nav;
