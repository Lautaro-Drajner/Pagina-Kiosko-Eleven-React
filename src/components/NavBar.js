import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Ecommerce</h3>
      <div>
        <button>Alfajores</button>
        <button>Alfajores</button>
        <button>Alfajores</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
