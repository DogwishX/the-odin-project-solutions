import { Link, Outlet } from "react-router-dom";
import "./Home.css";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="home">
      <Nav items={["Freemium", "Support", "Download"]} />
      <Outlet />
    </div>
  );
}

export default App;
