import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function ShoppingCart() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const orderId = query.get("orderid");

  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("Order ID:", orderId);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/order/detail/${orderId}`
        );
        console.log("Order Data:", response.data); // Log dữ liệu nhận được
        setOrderData(response.data.result);
      } catch (error) {
        console.error(
          "Error fetching order data:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Kiểm tra đúng thuộc tính 'Items'
  if (!orderData || !Array.isArray(orderData.Items)) {
    return <div>No order data found.</div>;
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ paddingTop: "100px" }}>
        <h1>Shopping Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orderData.Items.map((item) => (
              <tr key={item.KoiID}>
                <td>{item.KoiID}</td>
                <td>{item.Quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
