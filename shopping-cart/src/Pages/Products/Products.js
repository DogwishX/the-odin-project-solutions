import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import "./Products.css";

function Products({ parentState }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = parentState;

  async function fetchProducts() {
    const productList = [
      "bulbasaur",
      "squirtle",
      "charmander",
      "entei",
      "kyogre",
      "blaziken",
    ];
    const request = await Promise.all(
      productList.map(
        async (item) => await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
      )
    );
    const result = await Promise.all(
      request.map(async (item) => await item.json())
    );
    setProducts(result);
    return result;
  }

  function addToCart({ currentTarget }) {
    const currentProduct = JSON.parse(currentTarget.dataset.product);
    const tempCart = [...cart];
    const productInCart = cart.find(
      (product) => product.name === currentProduct.name
    );
    const productIndex = tempCart.indexOf(productInCart);

    if (productInCart) {
      tempCart[productIndex].qty += currentProduct.qty;
      setCart([...tempCart]);
    } else {
      setCart([...cart, currentProduct]);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.length > 1
        ? products.map((product, index) => (
            <Product key={index} {...product} addToCart={addToCart} />
          ))
        : ""}
    </div>
  );
}

export default Products;
