import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import TableCart from "./TableCart";

export default function ShoppingCart() {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/formfillinformation");
  };

  return (
    <>
      <div>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <h4 style={{ textAlign: "center" }}>Giỏ hàng của bạn</h4>
          <TableCart />
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button onClick={handlePayment}>Tiến Hành Bước Tiếp Theo</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
