import "./App.css";
import "bamboo.css";
import NavBar from "./components/NavBar.jsx";
import CardProduct from "./components/CardProduct.jsx";
import FlexContainer from "./components/FlexContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer greetings={"Bienvenidos"} />
      <section>
        <FlexContainer>
          <CardProduct
            price={25.0}
            title="Alfajor"
            text="El mejor alfajor"
            img="/images/rasta_blanco.jpg"
          />
          <CardProduct
            price={25.0}
            title="Gorra React"
            text="El mejor alfajor"
            img="/images/rasta_blanco.jpg"
          />
          <CardProduct
            price={25.0}
            title="Rasta Blanco"
            text="El mejor alfajor"
            img="/images/rasta_blanco.jpg"
          />
        </FlexContainer>
      </section>
    </>
  );
}

export default App;
