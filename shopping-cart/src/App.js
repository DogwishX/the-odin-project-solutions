import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Nav
        items={["home", "products"]}
        cart={cart}
        setCart={setCart}
        logo="images/logo.png"
      />
      <Routes>
        <Route
          path="/products"
          element={<Products parentState={[cart, setCart]} />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
