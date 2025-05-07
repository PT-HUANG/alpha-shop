import { useState, createContext, useContext, useEffect } from "react";

const productList = [
  {
    id: "1",
    name: "破壞補丁修身牛仔褲",
    img: "public/images/product-1.jpg",
    price: 3999,
    quantity: 1,
  },
  {
    id: "2",
    name: "刷色直筒牛仔褲",
    img: "public/images/product-2.jpg",
    price: 1299,
    quantity: 1,
  },
];

const defaultCartContext = {
  productList,
  defaultTotal: null,
  handlePlus: null,
  handleMinus: null,
};

const CartContext = createContext(defaultCartContext);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [products]);

  const handleDelete = (deleteId) => {
    const nextProducts = products.filter((product) => product.id !== deleteId);
    setProducts(nextProducts);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        handlePlus: (id) => {
          const nextProducts = products.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            } else return product;
          });
          setProducts(nextProducts);
        },
        handleMinus: (id) => {
          const { quantity } = products.find((product) => product.id === id);
          if (quantity === 1) {
            handleDelete(id);
            return;
          }
          const nextProducts = products.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            } else return product;
          });
          setProducts(nextProducts);
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
