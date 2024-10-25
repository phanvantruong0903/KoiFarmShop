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
import Koikohaku from "./Koi/Koikohaku";
import Koiogon from "./Koi/Koiogon";
import Koishowa from "./Koi/Koishowa";
import Koitancho from "./Koi/Koitancho";
import Koibekko from "./Koi/Koibekko";
import Koidoitsu from "./Koi/Koidoitsu";
import Koiginrin from "./Koi/Koiginrin";
import Koigoshiki from "./Koi/Koigoshiki";
import Koibenigoi from "./Koi/Koibenigoi";
import Koiasagi from "./Koi/Koiasagi";
import Koiplatinum from "./Koi/Koiplatinum";
import Koishusui from "./Koi/Koishusui";
import { Container } from "react-bootstrap";
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
  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState(null);
  const [idKohaku, setIdKohaku] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [id, setID] = useState();
  const [categoryName, setCategoryName] = useState();
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
    window.scrollTo(0, 0);
  }, []);

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        console.log("Data received from API:", response.data); // Kiểm tra dữ liệu
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result); // Lấy mảng từ thuộc tính 'result'
          setCategoryData(response.data.categoryList);
          console.log("CategoryData" + categoryData);
          console.log("Card data set successfully:", response.data.result); // Kiểm tra sau khi set
          console.log(
            "Category Data set successfully:",
            response.data.categoryList
          );
        } else {
          console.error("Dữ liệu không phải là mảng:", response.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err); // Ghi lại lỗi
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const card = categoryData.find(
      (card) => card._id === selectedItem.CategoryID
    );
    if (card) {
      setCategoryName(card.CategoryName);
      console.log("Categoryname" + categoryName);
    }
  }, [categoryData]); // Run this effect when categoryData changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
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
        <Container>
          <div
            style={{
              padding: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <Card
              title={
                <Title level={1} style={{ textAlign: "center", color: "red" }}>
                  Thông tin
                </Title>
              }
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                width: "80%",
                maxWidth: "1000px",
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
                    <Title
                      level={2}
                      style={{ color: "red", textAlign: "left" }}
                    >
                      {selectedItem.KoiName}
                    </Title>
                    <hr style={{ margin: "10px 0" }} />
                    <Paragraph style={{ paddingTop: "18px" }}>
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
                      <Text>
                        Tình trạng: Sẵn hàng, xem và lựa chọn cá trực tiếp tại
                        trại{" "}
                        <span
                          style={{
                            fontWeight: "600",
                            color: "red",
                            fontSize: "25px",
                          }}
                        >
                          IKoi
                        </span>
                        .
                      </Text>
                    </Paragraph>
                    <hr style={{ margin: "10px 0" }} />
                    <Paragraph>
                      <strong>Description: </strong>
                      {selectedItem.Description}
                    </Paragraph>
                    <Paragraph style={{ fontSize: "20px", textAlign: "left" }}>
                      <div style={{ fontSize: "20px", textAlign: "left" }}>
                        <label>
                          <strong>Quantity: </strong>
                          <input
                            type="number"
                            style={{
                              fontSize: "14px",
                              color: "red",
                              width: "48%",
                            }}
                            value={selectedQuantity}
                            onChange={(e) =>
                              setSelectedQuantity(e.target.value)
                            } // Update value on change
                            min="1" // Set minimum value to 1
                            max={maxQuantity} // Set maximum value
                          />
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
          </div>
        </Container>
        {categoryName === "Kohaku" && <Koikohaku />}
        {categoryName === "Ogon" && <Koiogon />}
        {categoryName === "Showa" && <Koishowa />}
        {categoryName === "Tancho" && <Koitancho />}
        {categoryName === "Bekko" && <Koibekko />}
        {categoryName === "Ginrin" && <Koiginrin />}
        {categoryName === "Doitsu" && <Koidoitsu />}
        {categoryName === "Goshiki" && <Koigoshiki />}
        {categoryName === "Benigoi" && <Koibenigoi />}
        {categoryName === "Asagi" && <Koiasagi />}
        {categoryName === "Platinum" && <Koiplatinum />}
        {categoryName === "Shusui" && <Koishusui />}
      </Layout>
      <Footer />
    </>
  );
};

export default OrderPage;
