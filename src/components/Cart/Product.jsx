export default function Product({id, name, img, price, quantity}){
  return (
    <div
            className="product-container col col-12"
            data-count={quantity}
            data-price={price}
          >
      <img
        className="img-container"
        src={img}
      />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <object
              className="product-action minus"
              data="./public/icons/minus.svg"
            />
            <span className="product-count">{quantity}</span>
            <object
              className="product-action minus"
              data="./public/icons/plus.svg"
            />
          </div>
        </div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
}