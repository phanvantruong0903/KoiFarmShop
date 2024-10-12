import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const OrderPage = () => {
  const location = useLocation();
  const { selectedItem } = location.state || {}; // Get the selected item from state

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component được render
  }, []);

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
                  Age:
                </span>{" "}
                {selectedItem.Age} years
              </p>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Origin:
                </span>{" "}
                {selectedItem.Origin}
              </p>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Gender:
                </span>{" "}
                {selectedItem.Gender}
              </p>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Size:
                </span>{" "}
                {selectedItem.Size} cm
              </p>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Breed:
                </span>{" "}
                {selectedItem.Breed}
              </p>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Description:
                </span>{" "}
                {selectedItem.Description}
              </p>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Daily Food Amount:
                </span>{" "}
                {selectedItem.DailyFoodAmount} kg
              </p>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Filtering Ratio:
                </span>{" "}
                {selectedItem.FilteringRatio}
              </p>
              <p style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Certificate ID:
                </span>{" "}
                {selectedItem.CertificateID}
              </p>
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

export default OrderPage;
