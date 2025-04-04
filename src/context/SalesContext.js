import React, { createContext, useContext } from "react";
import { useSalesData } from "../hooks/useSalesData";

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const { salesData, loading } = useSalesData();

  return (
    <SalesContext.Provider value={{ salesData, loading }}>
      {children}
    </SalesContext.Provider>
  );
};

export const useSalesContext = () => useContext(SalesContext);
