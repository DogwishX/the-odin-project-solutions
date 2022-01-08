import { Link, Outlet } from "react-router-dom";
import "./Home.css";

function App() {
  function onClick() {
    console.log("test");
  }
  return (
    <div className="Home">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
