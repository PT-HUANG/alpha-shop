import { useState, createContext, useContext } from 'react';
export const CartContext = createContext();

export function ProductProvider({children}) {
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

  const [products, setProducts] = useState(productList);
  function handlePlusMinus(e) {
    let newProducts = products.map(product => {
      if(product.id === e.currentTarget.id) {
        return {
          ...product,
          quantity: (e.currentTarget.className.includes('plus') ? product.quantity + 1 : product.quantity - 1)
        }
      } else return product
    })
    newProducts = newProducts.filter(product => product.quantity > 0)
    setProducts(newProducts)
  }

  return(
    <CartContext.Provider value={{
      products: products,
      function: handlePlusMinus
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function getProducts() {
  return useContext(CartContext).products
}

export function usePlusMinus() {
  return useContext(CartContext).function
}