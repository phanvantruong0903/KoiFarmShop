import React from "react";
import { Typography, Button, Space, message } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const { Title } = Typography;

const PaymentMethod = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [koiList, setKoiList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // Initialize to 0
  const handlePaymentMethodSelect = async (method) => {
    console.log(`Selected payment method: ${method}`);
    console.log(`Total Price: ${totalPrice}`);

    try {
      let response;

      // Gửi yêu cầu thanh toán với số tiền từ localStorage
      if (method === "Zalo Pay") {
        response = await axios.post(
          `http://localhost:4000/payment/paymentZalopay`,
          { total: totalPrice }, // Gửi tổng giá trị từ localStorage
          { withCredentials: true }
        );
      } else if (method === "Momo Pay") {
        response = await axios.post(
          `http://localhost:4000/payment/paymentMomo`,
          { total: totalPrice }, // Gửi tổng giá trị từ localStorage
          { withCredentials: true }
        );
      }

      // Xử lý phản hồi từ server
      if (response.status === 200) {
        message.success(`Payment initiated with ${method}`);
        if (method === "Zalo Pay") {
          window.location.href = response.data.order_url; // Điều hướng đến URL thanh toán
        } else if (method === "Momo Pay") {
          window.location.href = response.data.payUrl; // Điều hướng đến URL thanh toán
        }
      } else {
        throw new Error("Payment processing failed.");
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
      message.error("Payment processing failed. Please try again.");
    }
  };
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get("http://localhost:4000/order/detail", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(response);
        if (response.status === 200) {
          const { koiList, orderDT } = response.data.result;
          const { Items, TotalPrice } = orderDT;
          const koiMap = new Map(koiList.map((koi) => [koi._id, koi]));
          const updatedKoiList = Items.map((item) => {
            const koi = koiMap.get(item.KoiID);
            return koi ? { ...koi, quantity: item.Quantity } : null;
          }).filter((koi) => koi !== null);
          setKoiList(updatedKoiList);
          // Save to localStorage
          // localStorage.setItem("koiList", JSON.stringify(updatedKoiList));
          setTotalPrice(TotalPrice);
          console.log("Order details fetched and stored in localStorage.");
        } else {
          console.error(`API request failed with status: ${response.status}`);
          setError("Failed to fetch order details.");
        }
      } catch (error) {
        // Log thêm thông tin lỗi
        console.error(
          "Error fetching order details:",
          error.response ? error.response.data : error.message
        );
        setError("Error fetching order details.");
      }
    };

    fetchOrderDetails();
  }, []);
  return (
    <>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <Navbar />
        <div style={{ paddingTop: "100px", textAlign: "center" }}>
          <Title level={2} style={{ marginBottom: "30px" }}>
            Chọn Phương Thức Thanh Toán
          </Title>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Button
              type="primary"
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handlePaymentMethodSelect("Zalo Pay")}
            >
              Zalo Pay
            </Button>
            <Button
              type="primary"
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handlePaymentMethodSelect("Momo Pay")}
            >
              Momo Pay
            </Button>
          </Space>
          <div style={{ marginTop: "20px", fontSize: "16px", color: "#555" }}>
            <p>
              Tổng Giá: <strong>{totalPrice} VND</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentMethod;
