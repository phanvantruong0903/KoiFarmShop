import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderPage = () => {
  const location = useLocation();
  const { selectedItem } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]); // State để lưu trữ các mục trong giỏ hàng
  const [quantity, setQuantity] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = async () => {
    if (!selectedItem || loading) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/order/detail/make", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ KoiID: selectedItem._id }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      const data = await response.json();

      setQuantity(data.result.order.Items);
      console.log(quantity);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ paddingTop: "120px" }}>
        <Container
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            border: "2px solid rgba(0, 0, 0, 0.1)",
            padding: "10px",
          }}
        >
          <h1 className="text-center mb-4">Order Page</h1>
          {selectedItem ? (
            <Row>
              <Col md={4}>
                <img
                  src={selectedItem.Image}
                  alt={selectedItem.KoiName}
                  style={{ height: "400px", width: "100%" }}
                />
                <div
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "300px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <video
                    controls
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <source src={selectedItem.Video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Col>
              <Col md={8}>
                <h2 style={{ color: "red" }}>{selectedItem.KoiName}</h2>
                <p style={{ fontWeight: "400", fontSize: "20px" }}>
                  <span style={{ fontWeight: "600", fontSize: "25px" }}>
                    Description:
                  </span>
                  <p
                    style={{
                      lineHeight: "30px",
                      fontSize: "20px",
                      fontWeight: "400",
                    }}
                  >
                    {selectedItem.Description}
                  </p>
                </p>
                <p style={{ fontWeight: "400", fontSize: "20px" }}>
                  <span style={{ fontWeight: "600", fontSize: "25px" }}>
                    Quantity:
                  </span>{" "}
                  1
                </p>
                <p style={{ fontWeight: "400", fontSize: "20px" }}>
                  <span style={{ fontWeight: "600", fontSize: "25px" }}>
                    Certificate ID:
                  </span>{" "}
                  {selectedItem.CertificateID}
                </p>
                <h3>Price: {selectedItem.Price || "Contact for Price"}</h3>
                <div style={{ display: "flex", paddingTop: "100px" }}>
                  <Button
                    variant="danger"
                    onClick={() => alert("Order placed!")}
                    style={{ flex: 1, marginRight: "10px", padding: "15px" }}
                  >
                    Mua Ngay
                  </Button>
                  <Button
                    variant="danger"
                    onClick={handleAddToCart}
                    style={{ flex: 1, padding: "15px" }}
                    disabled={loading}
                  >
                    {loading ? "Đang thêm..." : "Thêm Vào Giỏ Hàng"}
                  </Button>
                </div>
              </Col>
            </Row>
          ) : (
            <p>No item selected.</p>
          )}
        </Container>

        {/* New Container for Koi Details */}
        {selectedItem && (
          <Container
            style={{
              marginTop: "40px",
              padding: "20px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <h2>Chi tiết về cá Koi : {selectedItem.KoiName}</h2>
            <p
              style={{
                fontWeight: "400",
                fontSize: "25px",
                padding: "20px",
                lineHeight: "50px",
              }}
            >
              {selectedItem.Description ||
                "Thông tin chi tiết về cá Koi không có sẵn."}
            </p>
            <ul>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Age:{" "}
                </span>
                {selectedItem.Age}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Origin:{" "}
                </span>
                {selectedItem.Origin}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Gender:{" "}
                </span>
                {selectedItem.Gender}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Size:{" "}
                </span>
                {selectedItem.Size}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Breed:{" "}
                </span>
                {selectedItem.Breed}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Daily Food Amount:{" "}
                </span>
                {selectedItem.DailyFoodAmount}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Filtering Ratio:{" "}
                </span>
                {selectedItem.FilteringRatio}
              </li>
            </ul>
          </Container>
        )}

        <Container>
          <span style={{ fontWeight: "600", fontSize: "25px", color: "red" }}>
            Nguồn gốc, xuất xứ của cá chép Koi Nhật Bản
          </span>
          <p
            style={{ fontWeight: "400", fontSize: "20px", lineHeight: "50px" }}
          >
            Hiện từ đầu thế kỷ 20, năm 1914, để tôn vinh hoàng tử Hirohito, Nhật
            Bản đã cho triển lãm giống cá chép Koi đầu tiên tại Tokyo và đảo
            Niigata chính thức được mang tên Niigata Koi...
          </p>
          <span style={{ fontWeight: "600", fontSize: "20px", color: "red" }}>
            Các chủng loại cá Koi Nhật Bản từ xưa đến nay
          </span>
          <p
            style={{ fontWeight: "400", fontSize: "20px", lineHeight: "50px" }}
          >
            Cá Koi được chia ra làm hai loại: <br />
            Koi chuẩn và Koi bướm...
          </p>
        </Container>
        <Container>
          <span style={{ fontWeight: "600", fontSize: "20px", color: "red" }}>
            Màu sắc, tên gọi từng dòng theo màu sắc và cách phân biệt theo từng
            loại tên
          </span>
          <p
            style={{ fontWeight: "400", fontSize: "20px", lineHeight: "50px" }}
          >
            Người Nhật tin rằng những mảng màu trên mình cá chép Koi khi là
            những hình xăm sẽ luôn luôn mang lại sự may mắn...
          </p>
        </Container>
      </div>

      <div style={{ paddingTop: "20px" }}>
        <Footer />
      </div>
    </>
  );
};

export default OrderPage;
