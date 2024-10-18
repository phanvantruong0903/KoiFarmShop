import React from "react";
import { Typography, Button, Space } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const { Title } = Typography;

const PaymentMethod = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || {};

  const handlePaymentMethodSelect = (method) => {
    console.log(`Selected payment method: ${method}`);
    console.log(`Total Price: ${totalPrice}`);
    // Navigate to confirmation or another page
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1890ff")
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1890ff")
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
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
