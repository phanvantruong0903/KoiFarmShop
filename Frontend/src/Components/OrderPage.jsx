import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Col, Row, Typography, Spin, Layout } from "antd";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";

const { Title, Paragraph } = Typography;

const OrderPage = () => {
  const { setOrderId } = useOrder();
  const location = useLocation();
  const { selectedItem } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = async () => {
    if (!selectedItem || loading) return;
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
      setQuantity(data.result.order.Items);
      setOrderId(data.result.order._id);
      toast.success("Đã thêm vào giỏ hàng!");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                    style={{
                      height: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
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
                      onClick={() => alert("Order placed!")}
                    >
                      Mua Ngay
                    </Button>
                    <Button
                      type="primary"
                      danger
                      onClick={handleAddToCart}
                      loading={loading}
                      style={{ flex: 1 }}
                    >
                      Thêm Vào Giỏ Hàng
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
            Cá Koi được chia ra làm hai loại: <br />
            Koi chuẩn và Koi bướm...
          </Paragraph>
          <Title level={4} style={{ color: "red" }}>
            Màu sắc, tên gọi từng dòng theo màu sắc và cách phân biệt theo từng
            loại tên
          </Title>
          <Paragraph>
            Người Nhật tin rằng những mảng màu trên mình cá chép Koi khi là
            những hình xăm sẽ luôn luôn mang lại sự may mắn...
          </Paragraph>
        </Card>
        <Footer />
        <ToastContainer />
      </Layout>
    </>
  );
};

export default OrderPage;
