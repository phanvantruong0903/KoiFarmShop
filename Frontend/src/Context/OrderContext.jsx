// src/contexts/OrderContext.js
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderId, setOrderId] = useState(null);
  const [addedKoiIds, setAddedKoiIds] = useState([]);
  const addKoiToCart = (koiId) => {
    setAddedKoiIds((prev) => [...prev, koiId]);
  };
  return (
    <OrderContext.Provider
      value={{ orderId, setOrderId, addedKoiIds, addKoiToCart }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
