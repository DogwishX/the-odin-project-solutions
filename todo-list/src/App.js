import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Header />
        <Nav items={["Inbox", "Today", "This week"]} />
      </>
    );
  }
}

export default App;
