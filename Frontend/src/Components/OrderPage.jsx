import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Col, Row, Typography, Layout, Spin } from "antd";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Kohaku from "./ThongTinCaKoi/Kohaku";
import Asagi from "./ThongTinCaKoi/Asagi";
import Bekko from "./ThongTinCaKoi/Bekko";
import Benigoi from "./ThongTinCaKoi/Benigoi";
import Doitsu from "./ThongTinCaKoi/Doitsu";
import Ginrin from "./ThongTinCaKoi/Ginrin";
import Goshiki from "./ThongTinCaKoi/Goshiki";
import Ogon from "./ThongTinCaKoi/Ogon";
import Platinum from "./ThongTinCaKoi/Platinum";
import Showa from "./ThongTinCaKoi/Showa";
import Shusui from "./ThongTinCaKoi/Shusui";
import Tancho from "./ThongTinCaKoi/Tancho";

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
  const [comboQuantity, setComboQuantity] = useState(1); // Track combo quantity
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
          let maxQty;
          if (selectedItem.Size >= 5 && selectedItem.Size <= 14) {
            maxQty = 39;
            setSelectedQuantity(39); // Default to 39
          } else if (selectedItem.Size >= 15 && selectedItem.Size <= 17) {
            maxQty = 25;
            setSelectedQuantity(25); // Default to 25
          } else if (selectedItem.Size >= 18 && selectedItem.Size <= 20) {
            maxQty = 12; // Default to 12, with an extra 3
            setSelectedQuantity(12);
          } else {
            maxQty = response.data.result.CategoryName.Quantity; // Fallback for other sizes
            setSelectedQuantity(1); // Default to 1 for other sizes
          }
          setMaxQuantity(maxQty); // Update maxQuantity
        }
      } catch (error) {
        console.error("Error sending order details:", error);
      }
    };
    sendOrderDetails();
  }, [selectedItem]);

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
      const price = 500000; // Fixed price for all combinations

      const response = await axios.post(
        "http://localhost:4000/order/detail/makes",
        {
          Size: parseInt(selectedItem.Size),
          Breed: selectedItem.Breed,
          CategoryID: selectedItem.CategoryID,
          Quantity: parseInt(selectedQuantity),
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Add to cart successful: " + response.data.message);
        setOrderId(response.data.result.orderDT._id);
      }

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = existingCart.find(
        (item) => item.itemId === selectedItem._id
      );

      if (existingItem) {
        existingItem.quantity += parseInt(selectedQuantity);
      } else {
        existingCart.push({
          itemId: selectedItem._id,
          message: "Hàng đã vào giỏ hàng của bạn",
          quantity: parseInt(selectedQuantity),
          koi: selectedItem,
          price: price, // Store fixed price in the cart
        });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      setQuantityInCart(
        existingItem ? existingItem.quantity : parseInt(selectedQuantity)
      );

      if (totalQuantity === maxQuantity) {
        setIsAddedToCart(true);
      }

      toast.success("Đã thêm vào giỏ hàng!");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra! " + (error.response?.data?.message || ""));
    } finally {
      setLoading(false);
    }
  };
  const handleOrderPlacement = async () => {
    if (!selectedItem || loading) return;

    const totalQuantity = quantityInCart + selectedQuantity;

    // Prevent adding if total exceeds maxQuantity
    if (totalQuantity > maxQuantity) {
      toast.error("Số lượng vượt quá giới hạn cho phép.");
      return;
    }

    setLoading(true);
    try {
      const price = 500000; // Fixed price for all combinations

      const response = await axios.post(
        "http://localhost:4000/order/detail/makes",
        {
          Size: parseInt(selectedItem.Size),
          Breed: selectedItem.Breed,
          CategoryID: selectedItem.CategoryID,
          Quantity: parseInt(selectedQuantity),
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Add to cart successful: " + response.data.message);
        setOrderId(response.data.result.orderDT._id);
      }

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = existingCart.find(
        (item) => item.itemId === selectedItem._id
      );

      if (existingItem) {
        existingItem.quantity += parseInt(selectedQuantity);
      } else {
        existingCart.push({
          itemId: selectedItem._id,
          message: "Hàng đã vào giỏ hàng của bạn",
          quantity: parseInt(selectedQuantity),
          koi: selectedItem,
          price: price, // Store fixed price in the cart
        });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      setQuantityInCart(
        existingItem ? existingItem.quantity : parseInt(selectedQuantity)
      );

      if (totalQuantity === maxQuantity) {
        setIsAddedToCart(true);
      }
      navigate("/formfillinformation");
      toast.success("Đã thêm vào giỏ hàng!");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra! " + (error.response?.data?.message || ""));
    } finally {
      setLoading(false);
    }
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
                    <Paragraph
                      style={{
                        fontSize: "20px",
                        textAlign: "left",
                        color: "red",
                      }}
                    >
                      <strong>Description: </strong>
                      {selectedItem.Description}
                    </Paragraph>
                    <Paragraph
                      style={{
                        fontSize: "20px",
                        textAlign: "left",
                        color: "red",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "20px",
                          textAlign: "left",
                          color: "red",
                        }}
                      >
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
                      <div
                        style={{
                          fontSize: "20px",
                          textAlign: "left",
                          color: "red",
                        }}
                      >
                        {selectedItem.Size < 20 && (
                          <Paragraph
                            style={{
                              fontSize: "20px",
                              textAlign: "left",
                              color: "red",
                            }}
                          >
                            <strong>Combo: </strong>
                            <input
                              type="number"
                              style={{
                                fontSize: "14px",
                                color: "red",
                                width: "48%",
                              }}
                              value={comboQuantity}
                              onChange={(e) => {
                                const value = Math.max(e.target.value, 1); // Ensure minimum value is 1
                                setComboQuantity(value); // Update combo quantity
                                setSelectedQuantity(value * 25); // Multiply by the base quantity (25 in this case)
                              }}
                              min="1" // Set minimum value to 1
                            />
                          </Paragraph>
                        )}
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
        {categoryName === "Kohaku" && <Kohaku />}
        {categoryName === "Ogon" && <Ogon />}
        {categoryName === "Showa" && <Showa />}
        {categoryName === "Tancho" && <Tancho />}
        {categoryName === "Bekko" && <Bekko />}
        {categoryName === "Ginrin" && <Ginrin />}
        {categoryName === "Doitsu" && <Doitsu />}
        {categoryName === "Goshiki" && <Goshiki />}
        {categoryName === "Benigoi" && <Benigoi />}
        {categoryName === "Asagi" && <Asagi />}
        {categoryName === "Platinum" && <Platinum />}
        {categoryName === "Shusui" && <Shusui />}
      </Layout>
      <Footer />
    </>
  );
};

export default OrderPage;
