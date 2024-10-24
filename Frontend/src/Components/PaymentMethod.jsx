import React from "react";
import { Typography, Button, Space, message } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const { Title } = Typography;

const PaymentMethod = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = localStorage.getItem("totalPrice");

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
