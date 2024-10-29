import Navbar from "./Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Table } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/trackingorderpayStyle.css";
import Footer from "./Footer";
import axiosInstance from "../An/Utils/axiosJS";
import axios from "axios";

export default function TrackingOrderPage() {
  const location = useLocation();
  const message = location.state?.message; // Safely access the message

  const [orders, setOrders] = useState([]);
  const [userData, setUserData] = useState(null);
  const [id, setID] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          "http://localhost:4000/users/me"
        );
        if (response.data) {
          setUserData(response.data.result);

          console.log(response.data.result._id);
          setID(response.data.result._id);
          console.log("Fetched user data:", response.data.result); // Debug log
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log("User Data:", userData);

    const fetchOrders = async () => {
      if (!userData) return;

      const userId = userData._id; // Assuming userData has _id property
      console.log("Fetching orders for User ID:", userId);

      try {
        const response = await axiosInstance.get(
          "http://localhost:4000/users/get-orders",
          { params: { userID: userId } } // Gửi userID qua query parameters
        );

        console.log("API Response:", response); // Log the entire response

        if (response.status === 200) {
          setOrders(response.data.orderDetails);
          console.log("Fetched Orders:", response.data.orderDetails); // Log fetched orders
        } else {
          console.error(
            "Failed to fetch orders, status code:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userData]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1>Tracking Order</h1>

        {/* Orders Table */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Trạng Thái</th>
              <th>Chi Tiết</th>
              <th>Ngày Đặt</th>
              <th>Tổng Tiền</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {/* Display status directly based on the first item status */}
                  {order.Items.length > 0
                    ? order.Items[0].KoiInfo.Status
                    : "Không có trạng thái"}
                </td>
                <td>
                  {order.Items.map((item, idx) => (
                    <div key={idx}>
                      <p>
                        {item.KoiInfo.KoiName} - Số lượng: {item.Quantity}
                      </p>
                    </div>
                  ))}
                </td>
                <td>{new Date(order.OrderDate).toLocaleString()}</td>
                <td>{order.TotalPrice.toLocaleString()} VND</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
