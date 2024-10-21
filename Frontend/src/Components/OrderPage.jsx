import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Col, Row, Typography, Layout, Spin } from "antd";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Cookies from "js-cookie";

const { Title, Text, Paragraph } = Typography;

const OrderPage = () => {
  const { setOrderId, addKoiToCart } = useOrder();
  const location = useLocation();
  const { selectedItem } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const navigate = useNavigate();
  const [quantityInCart, setQuantityInCart] = useState(0); // Track quantity in cart
  console.log(selectedItem);

  useEffect(() => {
    // Check local storage for existing cart data
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartData.find(
      (item) => item.itemId === selectedItem?._id
    );

    if (existingItem && existingItem.quantity === maxQuantity) {
      setIsAddedToCart(true);
      setQuantityInCart(existingItem.quantity || 0); // Set the quantity already in cart
    }
  }, [selectedItem, maxQuantity]);
  useEffect(() => {
    const sendOrderDetails = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/order/detail/price",
          {
            Size: selectedItem.Size,
            Breed: selectedItem.Breed,
            CategoryID: selectedItem.CategoryID,
          }
        );

        if (response.status === 200) {
          console.log(response.data);
          setMaxQuantity(response.data.result.CategoryName.Quantity); // Cập nhật maxQuantity
          console.log(selectedQuantity);
        }
      } catch (error) {
        console.error("Error sending order details:", error);
      }
    };
    sendOrderDetails();
  }, []);

  const handleAddToCart = async () => {
    if (!selectedItem || loading) return;

    const totalQuantity = quantityInCart + selectedQuantity;

    // Prevent adding if total exceeds maxQuantity
    if (totalQuantity > maxQuantity) {
      toast.error("Số lượng vượt quá giới hạn cho phép.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/order/detail/makes",
        {
          Size: parseInt(selectedItem.Size),
          Breed: selectedItem.Breed,
          CategoryID: selectedItem.CategoryID,
          Quantity: parseInt(selectedQuantity),
        },
        {
          withCredentials: true, // This enables sending cookies with the request
        }
      );

      if (response.status === 200) {
        console.log("Add to cart successfull" + response.data.message);
        console.log(response.data.result);
        console.log("Order id  " + response.data.result.orderDT._id);
        setOrderId(response.data.result.orderDT._id);
      }

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = existingCart.find(
        (item) => item.itemId === selectedItem._id
      );

      if (existingItem) {
        // Update quantity in cart

        existingItem.quantity += parseInt(selectedQuantity);
      } else {
        // Add new item to cart with the current selected quantity
        existingCart.push({
          itemId: selectedItem._id,
          message: "Hàng đã vào giỏ hàng của bạn",
          quantity: parseInt(selectedQuantity),
          koi: selectedItem,
        });
      }

      // Set the cart back to local storage
      localStorage.setItem("cart", JSON.stringify(existingCart));

      // Update the local state quantity
      setQuantityInCart(
        existingItem ? existingItem.quantity : parseInt(selectedQuantity)
      );

      // Check if the new quantity equals the maxQuantity
      if (totalQuantity === maxQuantity) {
        setIsAddedToCart(true); // Set added state if max quantity is reached
      }

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
    <>
      <Navbar />
      <Layout
        style={{
          backgroundColor: "whitesmoke",
          minHeight: "100vh",
          paddingTop: "120px",
        }}
      >
        <div
          style={{
            paddingTop: "150px",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flexGrow: 1,
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
              <Row
                gutter={16}
                style={{ alignItems: "flex-start", marginTop: "20px" }}
              >
                <Col span={12} style={{ textAlign: "center" }}>
                  <img
                    src={selectedItem.Image}
                    alt={selectedItem.KoiName}
                    style={{
                      height: "400px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <video
                    controls
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      borderRadius: "8px",
                    }}
                  >
                    <source src={selectedItem.Video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Col>
                <Col
                  span={12}
                  style={{
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Title level={2} style={{ color: "red", textAlign: "left" }}>
                    {selectedItem.KoiName}
                  </Title>
                  <hr style={{ margin: "10px 0" }} />
                  <Paragraph>
                    <h3 style={{ fontSize: "25px", textAlign: "left" }}>
                      Price:{" "}
                      <span style={{ fontSize: "25px", color: "red" }}>
                        {selectedItem.Price
                          ? (
                              selectedItem.Price * selectedQuantity
                            ).toLocaleString("en-US", {
                              style: "currency",
                              currency: "VND",
                            })
                          : "Contact for Price"}
                      </span>
                    </h3>
                  </Paragraph>
                  <hr style={{ margin: "10px 0" }} />
                  <Paragraph style={{ fontSize: "20px", textAlign: "left" }}>
                    <strong>Description: </strong>
                    {selectedItem.Description}
                  </Paragraph>
                  <Paragraph style={{ fontSize: "20px", textAlign: "left" }}>
                    <div style={{ fontSize: "20px", textAlign: "left" }}>
                      <label>
                        <strong>Quantity: </strong>
                        <select
                          style={{ fontSize: "20px", color: "red" }}
                          value={selectedQuantity}
                          onChange={(e) => setSelectedQuantity(e.target.value)} // Cập nhật giá trị khi chọn
                        >
                          {Array.from({ length: maxQuantity }, (_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </Paragraph>
                  <Paragraph style={{ fontSize: "20px", textAlign: "left" }}>
                    <strong>Certificate ID: </strong>
                    <Text style={{ fontSize: "20px", color: "red" }}>
                      {selectedItem.CertificateID}
                    </Text>
                  </Paragraph>

                  <Paragraph>
                    <div
                      style={{
                        display: "flex",
                        paddingTop: "20px",
                        gap: "10px",
                      }}
                    >
                      <Button
                        type="primary"
                        danger
                        size="large"
                        onClick={handleOrderPlacement}
                        disabled={isAddedToCart}
                        style={{
                          flex: 1,
                          padding: "20px",
                          borderRadius: "8px",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        Mua Ngay
                      </Button>

                      <Button
                        type="primary"
                        danger
                        onClick={handleAddToCart}
                        loading={loading}
                        size="large"
                        disabled={
                          isAddedToCart ||
                          quantityInCart + selectedQuantity > maxQuantity
                        } // Disable if total exceeds max quantity
                        style={{
                          flex: 1,
                          padding: "15px",
                          borderRadius: "8px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        <FaCartPlus style={{ marginRight: "8px" }} />
                        {isAddedToCart ? "Đã Thêm" : "Thêm Vào Giỏ Hàng"}
                      </Button>
                    </div>
                  </Paragraph>
                  {isAddedToCart && (
                    <Paragraph
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      Hàng đã vào giỏ hàng của bạn!
                    </Paragraph>
                  )}
                </Col>
              </Row>
            ) : (
              <Spin tip="Loading..." />
            )}
          </Card>

          {selectedItem && (
            <Card style={{ marginTop: "40px", width: "100%" }}>
              <Title level={2}>
                Chi tiết về cá Koi : {selectedItem.KoiName}
              </Title>
              <Paragraph>
                {selectedItem.Description ||
                  "Thông tin chi tiết về cá Koi không có sẵn."}
              </Paragraph>
              <ul>
                <li>
                  <strong>Age: </strong>
                  <Text>{selectedItem.Age}</Text>
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

          <Card style={{ marginTop: "40px", width: "100%" }}>
            <Title level={4} style={{ color: "red" }}>
              Nguồn gốc, xuất xứ của cá chép Koi Nhật Bản
            </Title>
            <Paragraph>
              Hiện từ đầu thế kỷ 20, năm 1914, để tôn vinh hoàng tử Hirohito,
              Nhật Bản đã cho triển lãm giống cá chép Koi đầu tiên tại Tokyo và
              đảo Niigata chính thức được mang tên Niigata Koi...
            </Paragraph>
            <Title level={4} style={{ color: "red" }}>
              Các chủng loại cá Koi Nhật Bản từ xưa đến nay
            </Title>
            <Paragraph>
              Cá Koi được chia ra làm hai loại: <br /> Koi chuẩn và Koi bướm...
            </Paragraph>
            <Title level={4} style={{ color: "red" }}>
              Màu sắc, tên gọi từng dòng theo màu sắc và cách phân biệt theo
              từng loại tên
            </Title>
            <Paragraph>
              Người Nhật tin rằng những mảng màu trên mình cá chép Koi khi là
              những hình xăm sẽ luôn luôn mang lại sự may mắn...
            </Paragraph>
          </Card>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default OrderPage;
