import "./App.css";
import "bamboo.css";
import Button from "./components/Button.jsx";
import CardProduct from "./components/CardProduct.jsx";
import FlexContainer from "./components/FlexContainer.jsx";
//import NavBar from "./components/NavBar/NavBar.js";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <>
      <section>
        <h2>Clase 4 -Componentes</h2>
        <Button text="Iniciar sesion" size="24" color="purple" />
        <Button text="Iniciar sesion" disabled={true} />
        <Button text="Iniciar sesion" size="24" color="yellow" />
      </section>
      <section>
        <FlexContainer>
          <CardProduct
            price={25.0}
            title="Remera Coder"
            text="best remera"
            img="/images/rasta_blanco.jpg"
          />
          <CardProduct
            price={25.0}
            title="Gorra React"
            text="best gorra"
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
