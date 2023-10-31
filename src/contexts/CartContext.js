import React from "react";
import { createContext,useState } from "react";


export const CartContext = createContext();

export default function CartProvider ({ children }){
    const [cart, setCart] = useState([])
    const addItem = (item) => {
      setCart([...cart, item]);
    };  

    const deleteItem = (itemId,itemIndex) => {
        const newCart = cart.toSpliced(itemIndex,1);
        setCart(newCart);
      };  
    
  
  return (
    <CartContext.Provider value={{ cart,addItem,deleteItem }}>
        {children}
    </CartContext.Provider>
  );
};
