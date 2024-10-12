import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Form, FormCheck } from "react-bootstrap";
import CardGrid from "./Cardgrid";
import axios from "axios";
import "./Koikygui.css";

export default function Koikygui() {
  const [menu, setMenu] = useState("home");
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryData, setCategoryData] = useState([]);
  const [showForm, setShowForm] = useState(true); // State để điều khiển hiển thị form
  const [lastScrollY, setLastScrollY] = useState(0); // Lưu vị trí cuộn cuối cùng

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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Cuộn lên đầu trang khi selectedCategory thay đổi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      const form = document.querySelector(".radio-group");

      if (footer && form) {
        const footerRect = footer.getBoundingClientRect();
        const formRect = form.getBoundingClientRect();

        // Kiểm tra xem footer có che khuất form không
        if (footerRect.top <= formRect.bottom) {
          setShowForm(false); // Ẩn form khi footer vào trong viewport
        } else {
          setShowForm(true); // Hiển thị lại form khi không còn trong viewport
        }
      }

      // Logic để ẩn form khi cuộn xuống và hiện lại khi cuộn lên
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Nếu cuộn xuống
        setShowForm(false);
      } else {
        // Nếu cuộn lên
        setShowForm(true);
      }

      setLastScrollY(currentScrollY); // Cập nhật vị trí cuộn cuối cùng
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
    <>
      <Navbar />
      <div style={{ display: "flex", paddingTop: "200px" }}>
        {showForm && ( // Chỉ hiển thị form nếu showForm là true
          <div
            style={{ marginRight: "20px", zIndex: "9999", position: "fixed" }}
          >
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
                      label={`${categoryName} (${count})`}
                      value={card._id}
                      checked={selectedCategory === card._id}
                      onChange={handleCategoryChange}
                    />
                  );
                })}
              </Form.Group>
            </div>
          </div>
        )}
        <CardGrid cardData={filteredCards} />
      </div>
      <Footer className="footer" />
    </>
  );
}
