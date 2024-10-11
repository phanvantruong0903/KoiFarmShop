import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Button, ListGroup } from "react-bootstrap";
import axiosInstance from "../An/Utils/axiosJS";

export default function DonKyGuiPage() {
  const [consignList, setConsignList] = useState([]); // State cho danh sách consign
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsignList = async () => {
      try {
        const response = await axiosInstance(
          "http://localhost:4000/users/tat-ca-don-ki-gui"
        );

        console.log("Data received from API:", response.data);

        if (response.data.result && response.data.result.data) {
          console.log("Consign Data:", response.data.result.data);
          setConsignList(response.data.result.data);
        } else {
          console.error("No data found in result.");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching consign list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConsignList();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1>Ký Gửi</h1>
      </div>
      <div style={{ padding: "100px" }}>
        <h2>Danh Sách Ký Gửi Của Khách Hàng</h2>
        {consignList.length > 0 ? (
          <ListGroup>
            {consignList.map((item) => {
              const { consign, koi } = item; // Giải nén consign và koi từ item

              return (
                <ListGroup.Item
                  key={consign._id}
                  style={{ marginBottom: "10px" }}
                >
                  <div style={{ display: "flex" }}>
                    <h3 style={{ margin: 0, marginRight: "10px" }}>IKoi</h3>
                    <Button variant="primary" style={{ marginRight: "20px" }}>
                      Chat Ngay
                    </Button>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontWeight: "bold" }}>
                      State: {consign.Status}
                    </p>
                  </div>
                  <hr />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={koi.Image} // Sử dụng hình ảnh từ đối tượng koi
                      alt={koi.KoiName}
                      style={{
                        width: "100px",
                        height: "auto",
                        marginRight: "20px",
                      }}
                    />
                    <div>
                      <h5 style={{ margin: 0 }}>{koi.KoiName}</h5>
                      <p style={{ margin: 0 }}>{koi.Description}</p>
                      <p>Age: {koi.Age} years</p>
                      <p>Price: {koi.Price || "N/A"}</p>
                    </div>
                  </div>
                  <hr />
                  <div style={{ textAlign: "right" }}>
                    <span>TotalPrice: {consign.TotalPrice || "N/A"}</span>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        ) : (
          <p>No consign items available.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
