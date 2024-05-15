import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (

      <CartContext.Provider value={{ open, setOpen }}>
        {children}
      </CartContext.Provider>

  );
};

export default CartProvider;
