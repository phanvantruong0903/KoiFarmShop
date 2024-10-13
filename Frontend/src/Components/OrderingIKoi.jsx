import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
const OrderingIKoi = () => {
  const location = useLocation();
  const { selectedItem } = location.state || {}; // Retrieve selected item

  const [selectedSize, setSelectedSize] = useState(selectedItem?.Size || "");
  const [selectedBreed, setSelectedBreed] = useState(selectedItem?.Breed || "");
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Container style={{ paddingTop: "100px" }}>
        <h1 className="text-center mb-4">Order Page</h1>
        {selectedItem ? (
          <Row>
            <Col md={6}>
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
            <Col md={6}>
              <h2 style={{ color: "red" }}>{selectedItem.KoiName}</h2>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Origin:
                </span>{" "}
                {selectedItem.Origin}
              </p>
              <div>
                <label style={{ fontWeight: "600", fontSize: "25px" }}>
                  Size:
                </label>
                <select
                  value={selectedItem.size}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                >
                  {/* Replace these options with actual sizes available */}
                  <option value="">Select Size</option>
                  <option value="10">5cm-15cm</option>
                  <option value="18"> 15cm-18 cm</option>:
                  <option value="20">18cm-20cm</option>
                  <option value="25">20cm-25cm</option>
                  <option value="30">30cm</option>
                  <option value="35">35cm</option>
                  <option value="40">40cm</option>
                  <option value="45">45cm</option>
                  <option value="50">50cm</option>
                  <option value="55">55</option>
                  <option value="60">60</option>
                  <option value="65">65</option>
                  <option value="70">70</option>
                  <option value="75">75</option>
                </select>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "600", fontSize: "25px" }}>
                  Breed:
                </label>
                <select
                  value={selectedBreed}
                  onChange={(e) => setSelectedBreed(e.target.value)}
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                >
                  {/* Replace these options with actual breeds available */}
                  <option value="">Select Breed</option>
                  <option value="Việt">Việt</option>
                  <option value="F1">F1</option>
                </select>
              </div>
              <h3>Price: {selectedItem.Price || "Contact for Price"}</h3>
              <Button variant="danger" onClick={() => alert("Order placed!")}>
                Order Now
              </Button>
              <Button
                variant="danger"
                onClick={() => alert("Order placed!")}
                style={{ marginLeft: "20px" }}
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        ) : (
          <p>No item selected.</p>
        )}
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default OrderingIKoi;
