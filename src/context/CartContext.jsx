import { useState, createContext, useContext, useEffect } from "react";

// 0. 有預設的資料 => useState products, setProducts
// 1. 能夠計算總金額 => useState total, setTotal
// 2. 數目=0的時候自動消失 => handleMinusPlus
// handlePlus
// handleMinus
// handleDelete
// handleCountTotal

const productList = [
  {
    id: "1",
    name: "破壞補丁修身牛仔褲",
    img: "./public/images/product-1.jpg",
    price: 3999,
    quantity: 1,
  },
  {
    id: "2",
    name: "刷色直筒牛仔褲",
    img: "./public/images/product-2.jpg",
    price: 1299,
    quantity: 1,
  },
];

let defaultTotal = 0;
productList.forEach((product) => {
  defaultTotal += product.price;
});

const defaultCartContext = {
  productList,
  defaultTotal,
  handleMinusPlus: null,
};

const CartContext = createContext(defaultCartContext);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);
  const [total, setTotal] = useState(defaultTotal);

  return (
    <CartContext.Provider value={{ products, total, handleMinusPlus: null }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
