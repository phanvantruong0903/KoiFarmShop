import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import TableCart from "./TableCart";

import { Form, Button, Spinner, Container } from "react-bootstrap";
export default function ShoppingCart() {
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate("/formfillinformation");
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Container
        style={{ flex: "1", paddingTop: "130px", textAlign: "center" }}
      >
        <h4 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Giỏ hàng của bạn
        </h4>
        <TableCart />
        <button
          onClick={handlePayment}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#FF6F61", // Màu chủ đạo
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Mua Hàng
        </button>
      </Container>
      <Footer />
    </div>
  );
}
