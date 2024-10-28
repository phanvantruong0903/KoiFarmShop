import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import {
  Button,
  Typography,
  Spin,
  Alert,
  Layout,
  Divider,
  Row,
  Col,
  Breadcrumb,
  Tooltip,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import axiosInstance from "../An/Utils/axiosJS";
import { Container } from "react-bootstrap";

const { Title, Text } = Typography;

export default function DonKyGuiPage() {
  const [consignList, setConsignList] = useState([]);
  const [userData, setUserData] = useState({});
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

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("users/me");
      if (response.data) {
        setUserData(response.data.result);
        console.log("Fetched user data:", response.data.result); // Debug log
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message="Error" description={error} type="error" />;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Layout style={{ backgroundColor: "whitesmoke" }}>
        <Navbar />
        <Container style={{ paddingTop: "50px", paddingBottom: "10px" }}>
          <Breadcrumb style={{ padding: "16px", marginTop: "10px" }}>
            <Breadcrumb.Item href="/">
              <HomeOutlined />
              <span>Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/donkygui">
              <span>Ký Gửi</span>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row gutter={16}>
            <Col span={24}>
              <Title
                level={4}
                style={{
                  textAlign: "left",
                  marginBottom: "5px",
                  marginLeft: "15px",
                  marginTop: "20px",
                }}
              >
                Danh Sách Ký Gửi Của Khách Hàng
              </Title>
            </Col>
          </Row>
          <Divider style={{ margin: "20px 0" }} />
          <Row gutter={16}>
            {consignList.length > 0 ? (
              consignList.map((item) => {
                const { consign, koi } = item;
                return (
                  <Col
                    span={24}
                    key={consign._id}
                    style={{ marginBottom: "20px" }}
                  >
                    <div
                      style={{
                        padding: "20px",
                        border: "1px solid #d9d9d9",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Text strong style={{ fontSize: "17px" }}>
                        {koi?.KoiName}
                      </Text>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginTop: "20px" }}>
                          <Text>Age: {koi?.Age ?? "N/A"} years</Text>
                          <div style={{ marginBottom: "8px" }}></div>
                          <Text>Price: {koi?.Price ?? "N/A"}</Text>
                        </div>
                        <div style={{ marginLeft: "300px", marginTop: "22px" }}>
                          <Text>
                            Trình trạng:{" "}
                            {(() => {
                              const statusText = [
                                "Yêu cầu ký gửi",
                                "Đang kiểm tra Koi",
                                "Đang thương thảo hợp đồng",
                                "Đang tìm người mua",
                                "Đã bán",
                              ][consign.State - 1];

                              let color;
                              if (consign.State === 1) {
                                color = "black";
                              } else if (
                                consign.State >= 2 &&
                                consign.State <= 4
                              ) {
                                color = "gold";
                              } else if (consign.State === 5) {
                                color = "green";
                              }

                              return (
                                <Text style={{ color }}>{statusText}</Text>
                              );
                            })()}
                          </Text>
                          <div style={{ marginTop: "10px" }}>
                            <Text strong>
                              Ngày giao hàng:{" "}
                              {consign.ShippedDate
                                ? new Date(
                                    consign.ShippedDate
                                  ).toLocaleDateString()
                                : "N/A"}
                            </Text>
                          </div>
                        </div>
                      </div>

                      <Divider />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Tooltip title="Đây là ID cho đơn hàng của bạn, xin không cung cấp cho người khác.">
                          <Text
                            strong
                            style={{
                              display: "inline-block",
                              maxWidth: "200px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Đơn gửi: {consign._id}{" "}
                            <span style={{ color: "#999" }}>?</span>
                          </Text>
                        </Tooltip>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Text style={{ marginLeft: "10px" }}>
                            TotalPrice: {consign.TotalPrice || "N/A"}
                          </Text>
                          <Button type="primary" style={{ marginLeft: "10px" }}>
                            Chat Ngay
                          </Button>
                        </div>
                      </div>

                      <Divider style={{ margin: "20px 0" }} />
                      <Text strong style={{ fontSize: "17px" }}>
                        Thông tin người dùng
                      </Text>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginTop: "20px" }}>
                          <Text>Name: {userData?.name ?? "N/A"} years</Text>
                          <div style={{ marginBottom: "8px" }}></div>
                          <Text>Email: {userData?.email ?? "N/A"}</Text>
                        </div>
                        <div style={{ marginLeft: "220px", marginTop: "22px" }}>
                          <Text>
                            Phone Number:{userData?.phone_number ?? "N/A"}
                          </Text>
                          <div style={{ marginTop: "10px" }}>
                            <Text>Address:{userData?.address ?? "N/A"}</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })
            ) : (
              <Col span={24}>
                <Text>No consign items available.</Text>
              </Col>
            )}
          </Row>
        </Container>
        <Footer />
      </Layout>
    </div>
  );
}
