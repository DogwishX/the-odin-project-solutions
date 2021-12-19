import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav" data-testid="nav">
        <ul className="nav__items">
          {this.props.items.map((item, index) => (
            <li key={index} data-testid={item.toLowerCase()}>
              {item}
            </li>
          ))}
        </ul>
        <Projects />
      </div>
    );
  }
}

class Projects extends Nav {
  render() {
    return (
      <div className="projects">
        <div className="projects__title">Projects</div>
        <button className="projects__add" data-testid="projects__add">
          Add Project
        </button>
        <ul className="projects__list"></ul>
      </div>
    );
  }
}

export default Nav;
