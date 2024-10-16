import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOrder } from "../Context/OrderContext";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import axiosInstance from "../An/Utils/axiosJS";
import { useNavigate } from "react-router-dom";
import { Layout, Table, Typography, Spin } from "antd";

const { Content } = Layout;
const { Title } = Typography;

export default function ShoppingCart() {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { orderId } = useOrder(); // Truy cập thông tin đơn hàng
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      navigate("/formfillinformation", {
        state: {
          message: "Bạn cần điền form này trước khi tới giỏ xem giỏ hàng.",
        },
      });
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/order/detail/${orderId}`
        );
        console.log("Order Data:", response.data); // Log dữ liệu nhận được
        setOrderData(response.data.result);
      } catch (error) {
        console.error(
          "Error fetching order data:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [orderId]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <Spin size="large" />
      </div>
    );
  }

  const columns = [
    {
      title: "Item",
      dataIndex: "KoiID",
      key: "KoiID",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
    },
  ];

  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: "50px", paddingTop: "100px" }}>
        <Title level={2} style={{ textAlign: "center" }}>
          Shopping Cart
        </Title>
        {orderData && orderData.Items && orderData.Items.length > 0 ? (
          <Table
            dataSource={orderData.Items}
            columns={columns}
            rowKey="KoiID"
            pagination={false}
            style={{ margin: "0 auto", maxWidth: "600px" }}
          />
        ) : (
          <Title level={4} style={{ textAlign: "center" }}>
            Giỏ hàng đang trống.
          </Title>
        )}
      </Content>
      <Footer />
    </Layout>
  );
}
