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
        const response = await axios.get(
          "http://localhost:4000/categories/getCategory"
        );
        console.log("Data received from API:", response.data); // Kiểm tra dữ liệu
        if (Array.isArray(response.data.categoryList)) {
          setCardData(response.data.categoryList); // Lấy mảng từ thuộc tính 'categoryList'
          console.log(
            "Card data set successfully:",
            response.data.categoryList
          ); // Kiểm tra sau khi set
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
    console.log("Updated cardData:", cardData); // Ghi lại khi cardData thay đổi
  }, [cardData]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredCards =
    selectedCategory === "ALL"
      ? cardData
      : cardData.filter((card) => card.CategoryID === selectedCategory);

  // Đếm số lượng cá cho từng giống
  // Đếm số lượng cá cho từng giống
  const breedCounts = Array.isArray(cardData)
    ? cardData.reduce((accumulator, card) => {
        if (card.CategoryID) {
          // Kiểm tra xem CategoryID có tồn tại
          accumulator[card.CategoryID] =
            (accumulator[card.CategoryID] || 0) + 1;
        }
        return accumulator;
      }, {})
    : {}; // Nếu không phải là mảng, trả về đối tượng rỗng
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", paddingTop: "200px" }}>
        <div style={{ marginRight: "20px" }}>
          <Form className="radio-group">
            <Form.Group>
              <Form.Label>CHỌN LOÀI CÁ </Form.Label>
              <Form.Check
                type="radio"
                label={`ALL ${`(${cardData.length})`}`}
                value="ALL"
                checked={selectedCategory === "ALL"}
                onChange={handleCategoryChange}
              />
              {Object.keys(breedCounts).map((CategoryID) => (
                <Form.Check
                  key={CategoryID}
                  type="radio"
                  label={`${CategoryID} ${`(${breedCounts[CategoryID]})`}`}
                  value={CategoryID}
                  checked={selectedCategory === CategoryID}
                  onChange={handleCategoryChange}
                />
              ))}
            </Form.Group>
          </Form>
        </div>
        <CardGrid cardData={filteredCards} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
