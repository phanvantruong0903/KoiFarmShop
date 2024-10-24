import { useState, useEffect } from "react";
import { Layout, Radio, Typography, Spin, Alert, Input, Select } from "antd";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import CardGrid from "./Cardgrid";
import axios from "axios";
import "./Koikygui.css";
import { Container } from "react-bootstrap";

const { Content } = Layout;
const { Title } = Typography;

export default function Koikygui() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryData, setCategoryData] = useState([]);
  const [selectedSize, setSelectedSize] = useState("All");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("20000000");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result);
          setCategoryData(response.data.categoryList);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSizeChange = (value) => setSelectedSize(value);
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  if (loading) return <Spin size="large" />;
  if (error)
    return <Alert message="Error" description={error.message} type="error" />;

  const filteredCards = cardData.filter((card) => {
    const matchesCategory =
      selectedCategory === "All" || card.CategoryID === selectedCategory;
    const matchesSize =
      selectedSize === "All" || card.Size === Number(selectedSize);
    const price = card.Price;
    const matchesPrice =
      price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
    return matchesCategory && matchesSize && matchesPrice;
  });

  return (
    <Layout>
      <Navbar />
      <Content
        style={{
          padding: "20px",
          display: "flex",
          marginTop: "80px", 
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            marginRight: "20px",
            marginLeft: "10px",
            width: "200px",
            padding: "10px",
            position: "relative", 
            top: "0",
            zIndex: "1", 
            border: "none", 
            boxShadow: "none", 
          }}
        >
          <div className="radio-group" style={{ marginTop: "15px" }}>
            <Title level={5}>CHỌN LOÀI CÁ</Title>
            <Radio.Group
              onChange={handleCategoryChange}
              value={selectedCategory}
              style={{ display: "block" }}
            >
              <Radio
                value="All"
                style={{ display: "block", marginBottom: "10px" }}
              >
                All ({cardData.length})
              </Radio>
              {categoryData.map((card) => (
                <Radio
                  key={card._id}
                  value={card._id}
                  style={{ display: "block", marginBottom: "10px" }}
                >
                  {card.CategoryName} ({card.count})
                </Radio>
              ))}
            </Radio.Group>
          </div>

          <div className="price-filter" style={{ marginTop: "20px" }}>
            <Title level={5}>CHỌN GIÁ</Title>
            <Input
              placeholder="Giá tối thiểu"
              value={minPrice}
              onChange={handleMinPriceChange}
              style={{ marginBottom: "10px" }}
              type="number"
            />
            <Input
              placeholder="Giá tối đa"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              type="number"
            />
          </div>

          <div className="size-filter" style={{ marginTop: "20px" }}>
            <Title level={5}>CHỌN KÍCH THƯỚC</Title>
            <Select
              value={selectedSize}
              onChange={handleSizeChange}
              style={{ width: "100%" }}
            >
              <Select.Option value="All">All Sizes</Select.Option>
              {[20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75].map((size) => (
                <Select.Option key={size} value={size}>
                  {size} cm
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>

        <CardGrid cardData={filteredCards} />
      </Content>
      <Footer />
    </Layout>
  );
}
