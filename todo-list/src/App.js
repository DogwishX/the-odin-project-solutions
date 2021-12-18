import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav items={['Inbox', 'Today', 'This week']}/>
    </>
  );
}

export default App;
