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
    <>
      <div>
        <Navbar />
        <Container>
          <div style={{ paddingTop: "150px" }}>
            <h4 style={{ textAlign: "center" }}>Giỏ hàng của bạn</h4>
            <TableCart />
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Button
                variant="danger"
                onClick={handlePayment}
                style={{
                  marginTop: "-55px",
                  marginBottom: "55px",
                  borderRadius: "51px",
                  height: "57px",
                }}
              >
                Tiến Hành Bước Tiếp Theo
              </Button>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
