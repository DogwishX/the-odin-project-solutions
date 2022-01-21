import { Link, Outlet } from "react-router-dom";
import "./Home.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="home">
      <Nav items={["Freemium", "Support", "Download"]} />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
