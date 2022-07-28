//REACT COMPONENTS
import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCart = (product, qty) => {
    if (cartList.some((ele) => ele.id === product.id)) {
      let index = cartList.findIndex((ele) => ele.id === product.id);
      let newProduct = cartList[index];
      let newCart = [...cartList];
      newProduct.qty = newProduct.qty + qty;
      newCart.splice(index, 1, newProduct);
      setCartList([...newCart]);
    } else {
      let newProduct = { id: product.id, name: product.name, price: product.price, qty };
      setCartList([...cartList, newProduct]);
    }
  };

  const removeItemCart = (id) => {
    let newCart = cartList.filter((ele) => ele.id !== id);
    setCartList([...newCart]);
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        removeItemCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
