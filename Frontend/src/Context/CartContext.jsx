import { createContext, useContext, useState } from "react";

// Tạo context
const CartContext = createContext();

// Tạo provider cho context
export const CartProvider = ({ children }) => {
  const [koiList, setKoiList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addKoiToCart = (koi, quantity) => {
    setKoiList((prevList) => {
      const existingKoi = prevList.find((item) => item.itemId === koi._id);
      if (existingKoi) {
        // Cập nhật số lượng nếu cá đã có trong giỏ hàng
        return prevList.map((item) =>
          item.itemId === koi._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Thêm cá mới vào giỏ hàng
        return [...prevList, { itemId: koi._id, koi, quantity }];
      }
    });
    // Cập nhật tổng giá
    setTotalPrice((prevPrice) => prevPrice + koi.Price * quantity);
  };

  const removeKoiFromCart = (itemId) => {
    setKoiList((prevList) => prevList.filter((item) => item.itemId !== itemId));
    // Cập nhật tổng giá
    const itemToRemove = koiList.find((item) => item.itemId === itemId);
    if (itemToRemove) {
      setTotalPrice(
        (prevPrice) =>
          prevPrice - itemToRemove.koi.Price * itemToRemove.quantity
      );
    }
  };

  const clearCart = () => {
    setKoiList([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        koiList,
        addKoiToCart,
        removeKoiFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Tạo custom hook để sử dụng CartContext
export const useCart = () => {
  return useContext(CartContext);
};
