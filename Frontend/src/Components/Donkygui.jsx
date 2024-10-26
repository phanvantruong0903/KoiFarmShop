import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Button, List, Typography, Spin, Alert, Layout } from "antd";
import axiosInstance from "../An/Utils/axiosJS";
import { Container } from "react-bootstrap";

const { Title, Text } = Typography;

export default function DonKyGuiPage() {
  const [consignList, setConsignList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsignList = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:4000/users/tat-ca-don-ki-gui"
        );

        if (response.data.result && response.data.result.data) {
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

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message="Error" description={error} type="error" />;

  return (
    <>
      <Layout style={{ backgroundColor: "whitesmoke" }}>
        <Navbar />
        <div style={{ paddingTop: "100px", textAlign: "center" }}>
          <Title>Ký Gửi</Title>
        </div>
        <div style={{ padding: "50px" }}>
          <Title level={2}>Danh Sách Ký Gửi Của Khách Hàng</Title>
        </div>
        <Container>
          {consignList.length > 0 ? (
            <List
              itemLayout="vertical"
              dataSource={consignList}
              renderItem={(item) => {
                const { consign, koi } = item;
                return (
                  <List.Item
                    key={consign._id}
                    style={{
                      marginBottom: "10px",
                      border: "1px solid #d9d9d9", // Light gray border
                      borderRadius: "5px", // Rounded corners
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Box shadow
                      padding: "16px", // Padding inside the item
                      backgroundColor: "#fff", // Background color
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text strong style={{ fontSize: "18px" }}>
                        IKoi
                      </Text>
                      <Button type="primary" style={{ marginLeft: "20px" }}>
                        Chat Ngay
                      </Button>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      {consign.State === 1 && (
                        <Text strong>State: Yêu cầu ký gửi</Text>
                      )}
                      {consign.State === 2 && (
                        <Text strong>State: Đang kiểm tra Koi</Text>
                      )}
                      {consign.State === 3 && (
                        <Text strong>State: Đang thương thảo hợp đồng</Text>
                      )}
                      {consign.State === 4 && (
                        <Text strong>State: Yêu cầu ký gửi</Text>
                      )}
                      {consign.State === 5 && (
                        <Text strong>State: Đang tìm người mua</Text>
                      )}
                    </div>
                    <hr />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={koi?.Image ?? ""}
                        alt={koi?.KoiName ?? ""}
                        style={{
                          width: "300px",
                          height: "auto",
                          marginRight: "20px",
                        }}
                      />
                      <div>
                        <Text strong style={{ fontSize: "25px" }}>
                          {koi?.KoiName ?? ""}
                        </Text>
                        <br />
                        <Text strong style={{ fontSize: "25px" }}>
                          Age: {koi?.Age ?? "N/A"} years
                        </Text>
                        <br />
                        <Text strong style={{ fontSize: "25px" }}>
                          Price: {koi?.Price ?? "N/A"}
                        </Text>
                        <br />
                      </div>
                    </div>
                    <hr />
                    <div style={{ textAlign: "right" }}>
                      <Text>TotalPrice: {consign.TotalPrice || "N/A"}</Text>
                    </div>
                  </List.Item>
                );
              }}
            />
          ) : (
            <Text>No consign items available.</Text>
          )}
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
