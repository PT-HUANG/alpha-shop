import { useState } from "react";
import Product from "./Product";

const productList = [
  {
    id: '1',
    name: '破壞補丁修身牛仔褲',
    img: './public/images/product-1.jpg',
    price: 3999,
    quantity: 1,
  },
  {
    id: '2',
    name: '刷色直筒牛仔褲',
    img: './public/images/product-2.jpg',
    price: 1299,
    quantity: 1,
  },
]

export default function Cart() {
  const [products, setProducts] = useState(productList)
  function handlePlusMinus(e) {
    let newProducts = products.map(product => {
      if(product.id === e.currentTarget.id) {
        return {
          ...product,
          quantity: (e.currentTarget.className.includes('plus') ? product.quantity+1 : product.quantity-1)
        }
      } else return product
    })
    newProducts = newProducts.filter(product => product.quantity > 0)
    setProducts(newProducts)
  }
  return (
    <>
      {/* cart */}
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          {products.map(item =>
            <Product 
              {...item} 
              key={item.id}
              handlePlusMinus={handlePlusMinus}
            />
          )}
        </section>
        <Shipping />
        <Total products={products}/>
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

function Total({products}) {
  return (
    <section className="cart-info total col col-12">
      <div className="text">小計</div>
      <div className="price">
        $<TotalPrice data={products}/>
      </div>
    </section>
  );
}

function TotalPrice({data}) {
  let sum = 0
  data.forEach(item => {
    sum += item.price * item.quantity
  });
  return sum
}
