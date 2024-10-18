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
  const { totalPrice } = location.state || {};

  const handlePaymentMethodSelect = async (method) => {
    console.log(`Selected payment method: ${method}`);
    console.log(`Total Price: ${totalPrice}`);

    try {
      let response;

      if (method === "Zalo Pay") {
        response = await axios.post(
          `http://localhost:4000/payment/paymentZalopay`,
          { total: 100000 } // Ensure totalPrice is an integer
        );
      } else if (method === "Momo Pay") {
        response = await axios.post(
          `http://localhost:4000/payment/paymentMomo`,
          { total: 100000 } // Ensure totalPrice is an integer
        );
      }

      // Handle success - navigate to confirmation page or show success message
      if (response.status === 200) {
        message.success(`Payment initiated with ${method}`);
        if (method === "Zalo Pay") {
          console.log(response.data); // Log the response for debugging
          window.location.href = response.data.order_url;
        } // Redirect to the external URL}
        else if (method === "Momo Pay") {
          console.log(response.data); // Log the response for debugging
          console.log(response.data.payUrl);
          window.location.href = response.data.payUrl;
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
