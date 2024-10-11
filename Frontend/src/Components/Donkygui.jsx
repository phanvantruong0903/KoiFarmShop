import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Button, ListGroup } from "react-bootstrap";

export default function DonKyGuiPage() {
  const [consignList, setConsignList] = useState([
    {
      id: 1,
      item: "Item 1",
      description: "Description for Item 1",
      state: "In Transit",
      price: "100,000 VND",
      imageUrl: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      id: 2,
      item: "Item 2",
      description: "Description for Item 2",
      state: "Delivered",
      price: "200,000 VND",
      imageUrl: "https://via.placeholder.com/100", // Placeholder image URL
    },
  ]);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1>Ký Gửi</h1>
      </div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <h2>Danh Sách Ký Gửi Của Khách Hàng</h2>
        {consignList.length > 0 ? (
          <ListGroup>
            {consignList.map((consign) => (
              <ListGroup.Item key={consign.id} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex" }}>
                  <h3 style={{ margin: 0, marginRight: "10px" }}>IKoi</h3>
                  <Button variant="primary" style={{ marginRight: "20px" }}>
                    Chat Ngay
                  </Button>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontWeight: "bold" }}>State: {consign.state}</p>
                </div>
                <hr />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={consign.imageUrl}
                    alt={consign.item}
                    style={{
                      width: "100px",
                      height: "auto",
                      marginRight: "20px",
                    }}
                  />
                  <div>
                    <h5 style={{ margin: 0 }}>{consign.item}</h5>
                    <p style={{ margin: 0 }}>{consign.description}</p>
                  </div>
                </div>
                <hr />
                <div style={{ textAlign: "right" }}>
                  <span>TotalPrice: {consign.price}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p>No consign items available.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
