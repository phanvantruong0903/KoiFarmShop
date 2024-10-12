import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Form, FormCheck } from "react-bootstrap";
import CardGrid from "./Cardgrid";
import axios from "axios";
import "./Koikygui.css";

export default function Koikygui() {
  const [menu, setMenu] = useState("home");
  const [cardData, setCardData] = useState([]); // Dữ liệu danh mục
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        console.log("Data received from API:", response.data); // Kiểm tra dữ liệu
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result); // Lấy mảng từ thuộc tính 'result'
          setCategoryData(response.data.cateogryList);
          console.log("Card data set successfully:", response.data.result9); // Kiểm tra sau khi set
          console.log(
            "Category Data set successfully:",
            response.data.cateogryList
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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredCards =
    selectedCategory === "All"
      ? cardData
      : cardData.filter((card) => card.CategoryID === selectedCategory); // So sánh với selectedCategory
  const breedCounts = cardData.reduce((accumulator, card) => {
    if (card.CategoryID) {
      accumulator[card.CategoryID] = (accumulator[card.CategoryID] || 0) + 1;
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
                label={`All (${cardData.length})`}
                value="All"
                checked={selectedCategory === "All"}
                onChange={handleCategoryChange}
              />
              {categoryData.map((card) => {
                const categoryName = card.CategoryName;
                const count = breedCounts[card._id] ?? 0;
                return (
                  <FormCheck
                    style={{ paddingBottom: "20px" }}
                    key={card._id}
                    type="radio"
                    label={`${categoryName} (${count})`} // Sử dụng count ở đây
                    value={card._id} // Sử dụng _id làm value
                    checked={selectedCategory === card._id}
                    onChange={handleCategoryChange}
                  />
                );
              })}
            </Form.Group>
          </div>
        </div>
        <CardGrid cardData={filteredCards} />
      </div>
      <Footer />
    </>
  );
}
