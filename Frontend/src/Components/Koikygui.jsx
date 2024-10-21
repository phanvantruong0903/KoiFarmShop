import { useState, useEffect } from "react";
import { Layout, Radio, Typography, Spin, Alert, Input, Select } from "antd";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import CardGrid from "./Cardgrid";
import axios from "axios";
import "./Koikygui.css";

const { Content } = Layout;
const { Title } = Typography;

export default function Koikygui() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryData, setCategoryData] = useState([]);
  const [selectedSize, setSelectedSize] = useState("All");
  const [minPrice, setMinPrice] = useState("0"); // Default minimum price
  const [maxPrice, setMaxPrice] = useState("20000000"); // Default maximum price

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result);
          setCategoryData(response.data.categoryList);
        } else {
          console.error("Dữ liệu không phải là mảng:", response.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSizeChange = (value) => {
    setSelectedSize(value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  if (loading) return <Spin size="large" />;
  if (error)
    return <Alert message="Error" description={error.message} type="error" />;

  const filteredCards = cardData.filter((card) => {
    const matchesCategory =
      selectedCategory === "All" || card.CategoryID === selectedCategory;

    const matchesSize =
      selectedSize === "All" || card.Size === Number(selectedSize); // Adjust according to your size property

    const price = card.Price; // Assuming card has a Price property
    const matchesPrice =
      price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);

    return matchesCategory && matchesSize && matchesPrice;
  });

  const breedCounts = cardData.reduce((accumulator, card) => {
    if (card.CategoryID) {
      accumulator[card.CategoryID] = (accumulator[card.CategoryID] || 0) + 1;
    }
    return accumulator;
  }, {});

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
            zIndex: "9999",
            position: "sticky",
            top: "100px",
            width: "200px",
            height: "fit-content",
            padding: "10px",
            backgroundColor: "transparent",
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
              {categoryData.map((card) => {
                const categoryName = card.CategoryName;
                const count = breedCounts[card._id] ?? 0;
                return (
                  <Radio
                    key={card._id}
                    value={card._id}
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    {categoryName} ({count})
                  </Radio>
                );
              })}
            </Radio.Group>
          </div>

          <div className="price-filter" style={{ marginTop: "20px" }}>
            <Title level={5}>CHỌN GIÁ</Title>
            <Input
              placeholder="Giá tối thiểu (19.000)"
              value={minPrice}
              onChange={handleMinPriceChange}
              style={{ marginBottom: "10px" }}
              type="number"
              min={19000}
              max={20000000}
            />
            <Input
              placeholder="Giá tối đa (20.000.000)"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              type="number"
              min={19000}
              max={20000000}
            />
          </div>
          <div className="size-filter" style={{ marginTop: "20px" }}>
            <Title level={5}>CHỌN KÍCH THƯỚC</Title>
            <Select
              value={selectedSize}
              onChange={handleSizeChange}
              style={{ width: "100%" }}
            >
              <Option value="All">All Sizes</Option>
              <Option value="20">20cm</Option>
              <Option value="25">25cm</Option>
              <Option value="30">30cm</Option>
              <Option value="35">35cm</Option>
              <Option value="40">40cm</Option>
              <Option value="45">45cm</Option>
              <Option value="50">50cm</Option>
              <Option value="55">55cm</Option>
              <Option value="60">60cm</Option>
              <Option value="65">65cm</Option>
              <Option value="70">70cm</Option>
              <Option value="75">75cm</Option>
              {/* Add more size options as needed */}
            </Select>
          </div>
        </div>
        <CardGrid cardData={filteredCards} />
      </Content>
      <Footer className="footer" />
    </Layout>
  );
}
