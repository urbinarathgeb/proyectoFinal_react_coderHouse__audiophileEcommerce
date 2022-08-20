// REACT COMPONENTS
import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCart = (product, qty) => {
    if (cartList.some(ele => ele.id === product.id)) {
      const index = cartList.findIndex(ele => ele.id === product.id);
      const newProduct = cartList[index];
      const newCart = [...cartList];
      newProduct.qty = newProduct.qty + qty;
      newCart.splice(index, 1, newProduct);
      setCartList([...newCart]);
    } else {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.cartImg,
        stock: product.stock,
        qty,
      };
      setCartList([...cartList, newProduct]);
    }
  };

  const removeItemCart = id => {
    const newCart = cartList.filter(ele => ele.id !== id);
    setCartList([...newCart]);
  };

  const clearCart = () => {
    setCartList([]);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (accumPrice, prod) => (accumPrice = accumPrice + prod.qty * prod.price),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addCart,
        removeItemCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
