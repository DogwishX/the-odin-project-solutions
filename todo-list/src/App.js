import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

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
      </>
    );
  }
}

export default App;
