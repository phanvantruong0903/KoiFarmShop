import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Form } from "react-bootstrap";
import CardGrid from "./Cardgrid";
import axios from "axios";
import "./Koikygui.css";

export default function Koikygui() {
  const [menu, setMenu] = useState("home");
  const [cardData, setCardData] = useState([]); // Dữ liệu danh mục
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        console.log("Data received from API:", response.data); // Kiểm tra dữ liệu
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result); // Lấy mảng từ thuộc tính 'result'
          console.log("Card data set successfully:", response.data.result); // Kiểm tra sau khi set
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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredCards =
    selectedCategory === "ALL"
      ? cardData
      : cardData.filter((card) => card.KoiName === selectedCategory);

  // Đếm số lượng cá cho từng giống
  const breedCounts = cardData.reduce((accumulator, card) => {
    if (card.KoiName) {
      accumulator[card.KoiName] = (accumulator[card.KoiName] || 0) + 1;
    }
    return accumulator;
  }, {});

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", paddingTop: "200px" }}>
        <div style={{ marginRight: "20px" }}>
          <div className="radio-group">
            <Form.Group>
              <Form.Label>CHỌN LOÀI CÁ </Form.Label>
              <Form.Check
                style={{ paddingBottom: "20px" }}
                type="radio"
                label={`ALL (${cardData.length})`}
                value="ALL"
                checked={selectedCategory === "ALL"}
                onChange={handleCategoryChange}
              />
              {Object.keys(breedCounts).map((KoiName) => (
                <Form.Check
                  style={{ paddingBottom: "20px" }}
                  key={KoiName}
                  type="radio"
                  label={`${KoiName} (${breedCounts[KoiName]})`}
                  value={KoiName}
                  checked={selectedCategory === KoiName}
                  onChange={handleCategoryChange}
                />
              ))}
            </Form.Group>
          </div>
        </div>
        <CardGrid cardData={filteredCards} />
      </div>
      <Footer />
    </>
  );
}
