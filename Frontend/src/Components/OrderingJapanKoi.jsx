import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Row, Col, Select, Typography } from "antd";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const { Option } = Select;
const { Title, Paragraph } = Typography;

export default function OrderingJapanKoi() {
  const location = useLocation();
  const { selectedItem } = location.state || {};
  const [selectedSize, setSelectedSize] = useState(""); // Initialize as empty
  const [selectedBreed, setSelectedBreed] = useState(""); // Initialize as empty
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  // Effect to set the size and breed if selectedItem exists
  useEffect(() => {
    if (selectedItem) {
      setSelectedSize(""); // Ensure it's set to empty on load
      setSelectedBreed(selectedItem.Breed || ""); // Set breed from selectedItem
    }
  }, [selectedItem]);

  useEffect(() => {
    const findMinMax = async () => {
      if (!selectedSize || !selectedBreed) return; // Prevent API call if not selected

      try {
        const response = await axios.post(
          "http://localhost:4000/order/detail/price/minmax",
          {
            Size: selectedSize,
            Breed: selectedBreed,
            CategoryID: selectedItem.CategoryID,
          }
        );

        setMin(Number(response.data.result.min) || 0);
        setMax(Number(response.data.result.max) || 0);
      } catch (error) {
        console.error("Error fetching min/max:", error);
      }
    };

    findMinMax();
  }, [selectedSize, selectedBreed, selectedItem.CategoryID]);

  const handleChange = (value) => {
    setPrice(value);
  };

  const generateOptions = () => {
    const options = [];
    for (let i = min; i <= max; i += 100000) {
      options.push(
        <Option key={i} value={i}>
          {i.toLocaleString()} VND
        </Option>
      );
    }
    return options;
  };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <Title level={1} className="text-center mb-4">
          Order Page
        </Title>
        {selectedItem ? (
          <Row gutter={16}>
            <Col md={12} lg={8}>
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
            <Col md={12} lg={4}>
              <Title level={2} style={{ color: "red" }}>
                {selectedItem.KoiName}
              </Title>
              <Paragraph>
                <strong>Origin:</strong> {selectedItem.Origin}
              </Paragraph>
              <div>
                <label style={{ fontWeight: "600", fontSize: "25px" }}>
                  Size:
                </label>
                <Select
                  value={selectedSize}
                  onChange={setSelectedSize}
                  style={{ width: "200px", marginLeft: "10px" }}
                >
                  <Option value="">Select Size</Option>
                  <Option value="10">bé hơn 15cm</Option>
                  <Option value="15">15cm - 18 cm</Option>
                  <Option value="20">20cm</Option>
                  <Option value="25">25cm</Option>
                  <Option value="30">30cm</Option>
                  <Option value="35">35cm</Option>
                  <Option value="40">40cm</Option>
                  <Option value="45">45cm</Option>
                  <Option value="50">50cm</Option>
                  <Option value="55">55cm</Option>
                  <Option value="60">60cm</Option>
                </Select>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "600", fontSize: "25px" }}>
                  Breed:
                </label>
                <Select
                  value={selectedBreed}
                  onChange={setSelectedBreed}
                  style={{ width: "200px", marginLeft: "10px" }}
                >
                  <Option value="">Select Breed</Option>
                  <Option value="Nhat">Nhật</Option>
                </Select>
              </div>
              {selectedSize && selectedBreed && (
                <div>
                  <h4>
                    Price: {min.toLocaleString()} - {max.toLocaleString()} VND
                  </h4>
                  <Select
                    value={price}
                    onChange={handleChange}
                    style={{ width: "200px", marginTop: "10px" }}
                  >
                    {generateOptions()}
                  </Select>
                  <h3>Description: {description}</h3>
                </div>
              )}
              <Button
                type="primary"
                danger
                onClick={() => alert("Order placed!")}
              >
                Order Now
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => alert("Added to cart!")}
                style={{ marginLeft: "20px" }}
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        ) : (
          <p>No item selected.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
