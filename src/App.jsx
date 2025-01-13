import "./App.css";
import "bamboo.css";
import products from "../data";
import ItemCount from "./components/ItemCount";
import CardProduct from "./components/CardProduct";
import React from "react";

function App() {
  const list = products.map((prod) => (
    <CardProduct
      key={prod.id}
      title={prod.title}
      price={prod.price}
      text={prod.category}
      img={prod.img}
    />
  ));

  return (
    <>
      <section>{list}</section>
      <section></section>
    </>
  );
}

export default App;
