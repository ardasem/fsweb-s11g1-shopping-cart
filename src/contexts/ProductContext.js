import React from "react";
import { createContext,useState } from "react";
import {data} from '../data'

export const ProductContext = createContext();

export default function ProductProvider ({ children }){
    const [products] = useState(data);
    
  
  return (
    <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>
  );
};
