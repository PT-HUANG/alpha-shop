import { useCart } from "../../context/CartContext";

export default function Product({ id, name, img, price, quantity }) {
  const { handlePlus, handleMinus } = useCart();

  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
    >
      <img className="img-container" src={img} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <button
              onClick={() => {
                handleMinus(id);
              }}
              className="product-action minus"
              id={id}
              style={{
                background: "none",
                border: "none",
                padding: "0",
                cursor: "pointer",
              }}
            >
              <img src="icons/minus.svg" alt="Minus" className="icon" />
            </button>
            <span className="product-count">{quantity}</span>
            <button
              onClick={() => {
                handlePlus(id);
              }}
              className="product-action plus"
              id={id}
              style={{
                background: "none",
                border: "none",
                padding: "0",
                cursor: "pointer",
              }}
            >
              <img src="icons/plus.svg" alt="Plus" className="icon" />
            </button>
          </div>
        </div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
}
