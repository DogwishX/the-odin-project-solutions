import React from "react";
import { render } from "react-dom";
import "./Nav.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = { displayProjectsForm: false }
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
        <Projects {...this.props} />
      </div>
    );
  }
}

class Projects extends Nav {
  constructor() {
    super();
    this.displayProjectsForm = this.displayProjectsForm.bind(this);
  }
  displayProjectsForm() {
    this.setState({ displayProjectsForm: true })
  }

  render() {
    return (
      <div className="projects">
        <div className="projects__title">Projects</div>
        <ul className="projects__list">
          {this.state.displayProjectsForm ? <Form {...this.props} projectsSetState={(p) => this.setState(p)} /> : <li className="projects__add" onClick={this.displayProjectsForm} data-testid="projects__add">
            Add Project
          </li>}
          {this.props.projects && this.props.projects.map((project, index) =>
            <div key={index} className='project__project'>{project.name}</div>)}
        </ul>
      </div>
    );
  }
}

class Form extends Projects {
  constructor() {
    super();
    this.addProject = this.addProject.bind(this);
  }

  addProject() {
    const input = document.querySelector('.form__input');

    this.props.setState({ projects: [...this.props.projects, { name: input.value, todos: [] }] })
    this.props.projectsSetState({ displayProjectsForm: false })
  }

  render() {
    return <div className='form'>
      <input className='form__input' data-testid='form__input'></input>
      <button className='form__button' data-testid='form__button' onClick={this.addProject}>Add</button>
    </div>
  }
}



export default Nav;
