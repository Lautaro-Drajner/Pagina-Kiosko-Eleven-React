import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <div style={{ padding: 10 }}>
      <a href="">Catalogo</a>
      <a href="">Quienes Somos</a>
      <a href="">Productos Destacados</a>
      <a href="">Contactenos</a>
      <CartWidget />
    </div>
  );
}
