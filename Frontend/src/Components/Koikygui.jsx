import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Form } from "react-bootstrap";
import CardGrid from "./Cardgrid";
import axios from "axios";
import "./Koikygui.css";

export default function Koikygui() {
  const [menu, setMenu] = useState("home");
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState("ALL");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/categories/getCategory"
        );
        // setCardData(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredCards =
    selectedBreed === "ALL"
      ? cardData
      : cardData.filter((card) => card.Breed === selectedBreed);

  // Đếm số lượng cá cho từng giống
  const breedCounts = cardData.reduce((accumlator, card) => {
    accumlator[card.Breed] = (accumlator[card.Breed] || 0) + 1;
    return accumlator;
  }, {});

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
                label={`ALL ${
                  selectedBreed === "ALL" ? `(${cardData.length})` : ""
                }`}
                value="ALL"
                checked={selectedBreed === "ALL"}
                onChange={handleBreedChange}
              />
              {Object.keys(breedCounts).map((a) => (
                <Form.Check
                  key={a}
                  type="radio"
                  label={`${a} ${
                    selectedBreed === a ? `(${breedCounts[a]})` : ""
                  }`}
                  value={a}
                  checked={selectedBreed === a}
                  onChange={handleBreedChange}
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
