import Product from "./Product";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { products } = useCart();
  return (
    <>
      {/* cart */}
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物車</h3>
        <section className="product-list col col-12" data-total-price={0}>
          {products.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </section>
        <Shipping />
        <Total />
      </section>
    </>
  );
}

function Shipping() {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">運費</div>
      <div className="price">免費</div>
    </section>
  );
}

function Total() {
  const { total } = useCart();
  return (
    <section className="cart-info total col col-12">
      <div className="text">小計</div>
      <div className="price">${total}</div>
    </section>
  );
}
