import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Col, Row, Typography, Layout } from "antd";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

const OrderPage = () => {
  const { setOrderId, addKoiToCart } = useOrder(); // Ensure you have addKoiToCart from context
  const location = useLocation();
  const { selectedItem } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(selectedItem);
  const handleAddToCart = async () => {
    if (!selectedItem || loading || isAddedToCart) return;
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/order/detail/make",
        { KoiID: selectedItem._id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to add to cart");
      }
      const data = response.data;
      setOrderId(data.result.orderDT._id);
      addKoiToCart(selectedItem._id); // Add to cart tracking
      setIsAddedToCart(true);
      toast.success("Đã thêm vào giỏ hàng!");
      setTimeout(() => {
        navigate("/koikygui");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra! " + (error.response?.data?.message || ""));
    } finally {
      setLoading(false);
    }
  };

  const handleOrderPlacement = () => {
    alert("Order placed!"); // Implement actual order placement logic here
  };

  return (
    <Layout style={{ backgroundColor: "whitesmoke" }}>
      <Navbar />
      <div
        style={{
          paddingTop: "150px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card
          title={<Title level={1}>Order Page</Title>}
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            width: "100%",
            maxWidth: "1500px",
          }}
        >
          {selectedItem ? (
            <Row gutter={16} style={{ alignItems: "flex-start" }}>
              <Col span={12}>
                <img
                  src={selectedItem.Image}
                  alt={selectedItem.KoiName}
                  style={{ height: "400px", width: "100%", objectFit: "cover" }}
                />
                <video controls style={{ width: "100%", marginTop: "10px" }}>
                  <source src={selectedItem.Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Col>
              <Col span={12} style={{ paddingLeft: "20px" }}>
                <Title level={2} style={{ color: "red" }}>
                  {selectedItem.KoiName}
                </Title>
                <Paragraph style={{ fontSize: "25px" }}>
                  <strong>Description: </strong>
                  {selectedItem.Description}
                </Paragraph>
                <Paragraph style={{ fontSize: "25px" }}>
                  <strong>Quantity: </strong>1
                </Paragraph>
                <Paragraph style={{ fontSize: "25px" }}>
                  <strong>Certificate ID: </strong>
                  {selectedItem.CertificateID}
                </Paragraph>
                <h3>Price: {selectedItem.Price || "Contact for Price"}</h3>
                <div style={{ display: "flex", paddingTop: "20px" }}>
                  <Button
                    type="primary"
                    danger
                    style={{ flex: 1, marginRight: "10px" }}
                    onClick={handleOrderPlacement}
                    disabled={isAddedToCart}
                  >
                    Mua Ngay
                  </Button>
                  <Button
                    type="primary"
                    danger
                    onClick={handleAddToCart}
                    loading={loading}
                    disabled={isAddedToCart}
                    style={{ flex: 1 }}
                  >
                    {isAddedToCart ? "Đã Thêm" : "Thêm Vào Giỏ Hàng"}
                  </Button>
                </div>
              </Col>
            </Row>
          ) : (
            <p>No item selected.</p>
          )}
        </Card>
      </div>
      {/* Koi Details */}
      {selectedItem && (
        <Card style={{ marginTop: "40px" }}>
          <Title level={2}>Chi tiết về cá Koi : {selectedItem.KoiName}</Title>
          <Paragraph>
            {selectedItem.Description ||
              "Thông tin chi tiết về cá Koi không có sẵn."}
          </Paragraph>
          <ul>
            <li>
              <strong>Age: </strong>
              {selectedItem.Age}
            </li>
            <li>
              <strong>Origin: </strong>
              {selectedItem.Origin}
            </li>
            <li>
              <strong>Gender: </strong>
              {selectedItem.Gender}
            </li>
            <li>
              <strong>Size: </strong>
              {selectedItem.Size}
            </li>
            <li>
              <strong>Breed: </strong>
              {selectedItem.Breed}
            </li>
            <li>
              <strong>Daily Food Amount: </strong>
              {selectedItem.DailyFoodAmount}
            </li>
            <li>
              <strong>Filtering Ratio: </strong>
              {selectedItem.FilteringRatio}
            </li>
          </ul>
        </Card>
      )}

      <Card style={{ marginTop: "40px" }}>
        <Title level={4} style={{ color: "red" }}>
          Nguồn gốc, xuất xứ của cá chép Koi Nhật Bản
        </Title>
        <Paragraph>
          Hiện từ đầu thế kỷ 20, năm 1914, để tôn vinh hoàng tử Hirohito, Nhật
          Bản đã cho triển lãm giống cá chép Koi đầu tiên tại Tokyo và đảo
          Niigata chính thức được mang tên Niigata Koi...
        </Paragraph>
        <Title level={4} style={{ color: "red" }}>
          Các chủng loại cá Koi Nhật Bản từ xưa đến nay
        </Title>
        <Paragraph>
          Cá Koi được chia ra làm hai loại: <br /> Koi chuẩn và Koi bướm...
        </Paragraph>
        <Title level={4} style={{ color: "red" }}>
          Màu sắc, tên gọi từng dòng theo màu sắc và cách phân biệt theo từng
          loại tên
        </Title>
        <Paragraph>
          Người Nhật tin rằng những mảng màu trên mình cá chép Koi khi là những
          hình xăm sẽ luôn luôn mang lại sự may mắn...
        </Paragraph>
      </Card>
      <Footer />
    </Layout>
  );
};

export default OrderPage;
