import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function DonKyGuiPage() {
  const [consignList, setConsignList] = useState([
    // Example initial consign items
    { id: 1, item: "Item 1", description: "Description for Item 1" },
    { id: 2, item: "Item 2", description: "Description for Item 2" },
  ]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ paddingTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Ký Gửi</h1>
      </div>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          margin: "20px",
          background: "#f9f9f9",
        }}
      >
        <h2>Danh Sách Ký Gửi Của Khách Hàng</h2>
        {consignList.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {consignList.map((consign) => (
              <li
                key={consign.id}
                style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
              >
                <strong>{consign.item}</strong>: {consign.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No consign items available.</p>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
