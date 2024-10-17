import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
const OrderingIKoi = () => {
  const location = useLocation();
  const { selectedItem } = location.state || {}; // Retrieve selected item
  const [selectedSize, setSelectedSize] = useState(selectedItem?.Size || "");
  const [selectedBreed, setSelectedBreed] = useState(selectedItem?.Breed || "");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const sendOrderDetails = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/order/detail/price",
          {
            Size: selectedSize,
            Breed: selectedBreed,
            CategoryID: selectedItem.CategoryID,
          }
        );

        console.log("Response:", response.data);

        console.log(response.data.result.CategoryName.Price);
        setPrice(response.data.result.CategoryName.Price);

        setDescription(response.data.result.CategoryName.Description);
        // Xử lý phản hồi nếu cần
      } catch (error) {
        console.error("Error sending order details:", error);
        // Xử lý lỗi nếu cần
      }
    };

    // Gọi hàm gửi dữ liệu
    sendOrderDetails();
  }, [selectedSize, selectedBreed, selectedItem.CategoryID]); // Chạy lại khi size, breed hoặc categoryID thay đổi
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Container style={{ paddingTop: "100px" }}>
        <h1 className="text-center mb-4">Order Page</h1>
        {selectedItem ? (
          <Row>
            <Col md={6}>
              <img
                src={selectedItem.Image}
                alt={selectedItem.KoiName}
                style={{ height: "600px", width: "100%" }}
              />
              <video controls style={{ width: "100%", marginTop: "20px" }}>
                <source src={selectedItem.Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col md={6}>
              <h2 style={{ color: "red" }}>{selectedItem.KoiName}</h2>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Origin:
                </span>{" "}
                {selectedItem.Origin}
              </p>
              <div>
                <label style={{ fontWeight: "600", fontSize: "25px" }}>
                  Size:
                </label>
                <select
                  value={selectedItem.size}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                >
                  {/* Replace these options with actual sizes available */}
                  <option value="">Select Size</option>
                  <option value="14">bé hơn 15cm</option>
                  <option value="15"> 15cm - 18 cm</option>:
                  <option value="18">18cm-20cm</option>
                  <option value="20">20cm-25cm</option>
                  <option value="30">30cm</option>
                  <option value="35">35cm</option>
                  <option value="40">40cm</option>
                  <option value="45">45cm</option>
                  <option value="50">50cm</option>
                  <option value="55">55</option>
                  <option value="60">60</option>
                  <option value="65">65</option>
                  <option value="70">70</option>
                  <option value="75">75</option>
                </select>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "600", fontSize: "25px" }}>
                  Breed:
                </label>
                <select
                  value={selectedBreed}
                  onChange={(e) => setSelectedBreed(e.target.value)}
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                >
                  {/* Replace these options with actual breeds available */}
                  <option value="">Select Breed</option>
                  <option value="Việt">Việt</option>
                  <option value="F1">F1</option>
                </select>
              </div>
              <div>
                <h3>Price: {price}</h3>
              </div>
              <div>
                <h3>Decscription:{description}</h3>
              </div>
              <Button variant="danger" onClick={() => alert("Order placed!")}>
                Order Now
              </Button>
              <Button
                variant="danger"
                onClick={() => alert("Order placed!")}
                style={{ marginLeft: "20px" }}
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        ) : (
          <p>No item selected.</p>
        )}
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default OrderingIKoi;
