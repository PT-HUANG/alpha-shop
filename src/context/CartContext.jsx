import { useState, createContext, useContext, useEffect } from 'react';

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

let initialTotal = 0
productList.forEach(item => {
  initialTotal += item.price * item.quantity
});

const ProductsContext = createContext();
const ToggleContext = createContext();
const TotalContext = createContext();

export function ProductProvider({children}) {
  const [products, setProducts] = useState(productList);
  const [total, setTotal] = useState(initialTotal);

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

  useEffect(() => {
    let sum = 0;
    products.forEach(item => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [products]);


  return(
    <ProductsContext.Provider value={products}>
      <ToggleContext.Provider value={handlePlusMinus}>
        <TotalContext.Provider value={total}>
          {children}
          </TotalContext.Provider>
      </ToggleContext.Provider>
    </ProductsContext.Provider>
  );
}

export function getProducts() {
  return useContext(ProductsContext)
}

export function usePlusMinus() {
  return useContext(ToggleContext)
}

export function getTotal() {
  return useContext(TotalContext)
}