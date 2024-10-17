import { useState, useEffect } from "react";
import { Layout, Radio, Typography, Spin, Alert } from "antd";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result);
          setCategoryData(response.data.cateogryList);
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

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message="Error" description={error.message} type="error" />;

  const filteredCards =
    selectedCategory === "All"
      ? cardData
      : cardData.filter((card) => card.CategoryID === selectedCategory);

  const breedCounts = cardData.reduce((accumulator, card) => {
    if (card.CategoryID) {
      accumulator[card.CategoryID] = (accumulator[card.CategoryID] || 0) + 1;
    }
    return accumulator;
  }, {});

  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: "20px", display: "flex", marginTop: "80px", minHeight: "100vh" }}>
        <div
          style={{
            marginRight: "20px",
            marginLeft: "10px",
            zIndex: "9999",
            position: "sticky",
            top: "100px", // Tăng thêm 20px
            width: "200px",
            height: "fit-content", // Đảm bảo chiều cao đủ cho nội dung
            padding: "10px", // Thêm padding cho nội dung không chạm vào cạnh
            backgroundColor: "transparent", // Đặt nền là trong suốt
          }}
        >
          <div className="radio-group" style={{ marginTop: '15px' }}>
            <Title level={5}>CHỌN LOÀI CÁ</Title>
            <Radio.Group onChange={handleCategoryChange} value={selectedCategory} style={{ display: 'block' }}>
              <Radio value="All" style={{ display: 'block', marginBottom: '10px' }}>
                All ({cardData.length})
              </Radio>
              {categoryData.map((card) => {
                const categoryName = card.CategoryName;
                const count = breedCounts[card._id] ?? 0;
                return (
                  <Radio key={card._id} value={card._id} style={{ display: 'block', marginBottom: '10px' }}>
                    {categoryName} ({count})
                  </Radio>
                );
              })}
            </Radio.Group>
          </div>
        </div>
        <CardGrid cardData={filteredCards} />
      </Content>
      <Footer className="footer" />
    </Layout>
  );
}
