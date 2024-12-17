export default function CardProduct({ price, title, text, img }) {
  return (
    <div className="card">
      <img src={img} width="200" height="200" alt="" />
      <div className="card-body">
        <h3 className="card-title"> {title} </h3>
        <p className="card-text">{text}</p>
        <div>
          <p className="card-price">$ {price}</p>
        </div>

        <button>Hola mundo</button>
      </div>
    </div>
  );
}
