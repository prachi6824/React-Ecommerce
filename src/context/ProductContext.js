import React, { createContext, useContext } from "react";
import useProducts from "../hooks/useProducts";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { products, loading, error, createProduct, editProduct, removeProduct } = useProducts();

  return (
    <ProductContext.Provider value={{ products, loading, error, createProduct, editProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
