import NavBar from "./NavBar.jsx";
import CardProduct from "./CardProduct.jsx";
import FlexContainer from "./FlexContainer.jsx";

export default function ItemListContainer(props) {
  return (
    <div>
      <h1>{props.greetings}</h1>
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
    </div>
  );
}
