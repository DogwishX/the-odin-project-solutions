import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Project from './Pages/Project/Project'

class App extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] }
  }

  render() {
    return (
      <>
        <Header />
        <Nav items={["Inbox", "Today", "This week"]} projects={this.state.projects} setState={(p) => this.setState(p)} />
        <Project name='lol' todos={[{ todoName: 'wash dishes', due: '01/01/2021' }]} />
      </>
    );
  }
}

export default App;
