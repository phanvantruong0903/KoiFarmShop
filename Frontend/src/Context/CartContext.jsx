import { createContext, useContext, useState } from "react";

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the KoiContext
export const useCart = () => {
  return useContext(CartContext);
};
