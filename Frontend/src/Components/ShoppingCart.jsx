import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";
import { Table, Spin, Empty } from "antd"; // Import Ant Design components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import TableCart from "./TableCart";
export default function ShoppingCart() {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/formfillinformation", {});
  };

  return (
    <>
      <div>
        <Navbar />
        <div>
          <div style={{ flex: 1, padding: "20px" }}>
            <h4 style={{ textAlign: "center" }}>Giỏ hàng của bạn</h4>
            <TableCart />
          </div>
          <div style={{ marginTop: "20px" }}>
            <button onClick={handlePayment}>Tiến Hành Bước Tiếp Theo</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
