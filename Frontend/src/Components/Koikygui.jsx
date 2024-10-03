import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Container, Form } from "react-bootstrap";
import CardGrid from "./Cardgrid";
import axios from "axios";
import "./Koikygui.css";
export default function Koikygui() {
  const [menu, setMenu] = useState("home");
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState("ALL"); // Mặc định giống cá là ALL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66fd0298c3a184a84d18b799.mockapi.io/Koi"
        );
        setCardData(response.data);
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
                label="ALL"
                value="ALL"
                checked={selectedBreed === "ALL"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI KOHAKU"
                value="KOI KOHAKU"
                checked={selectedBreed === "KOI KOHAKU"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI OGON"
                value="KOI OGON"
                checked={selectedBreed === "KOI OGON"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI SHOWA"
                value="KOI SHOWA"
                checked={selectedBreed === "KOI SHOWA"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI TANCHO"
                value="KOI TANCHO"
                checked={selectedBreed === "KOI TANCHO"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI BEKKO"
                value="KOI BEKKO"
                checked={selectedBreed === "KOI BEKKO"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI DOITSU"
                value="KOI DOITSU"
                checked={selectedBreed === "KOI DOITSU"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI GINRIN"
                value="KOI GINRIN"
                checked={selectedBreed === "KOI GINRIN"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI GOSHIKI"
                value="KOI GOSHIKI"
                checked={selectedBreed === "KOI GOSHIKI"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI BENIGOI"
                value="KOI BENIGOI"
                checked={selectedBreed === "KOI BENIGOI"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI ASAGI"
                value="KOI ASAGI"
                checked={selectedBreed === "KOI ASAGI"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI PLATINUM"
                value="KOI PLATINUM"
                checked={selectedBreed === "KOI PLATINUM"}
                onChange={handleBreedChange}
              />
              <Form.Check
                type="radio"
                label="KOI SHUSUI"
                value="KOI SHUSUI"
                checked={selectedBreed === "KOI SHUSUI"}
                onChange={handleBreedChange}
              />
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
