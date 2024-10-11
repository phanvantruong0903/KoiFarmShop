import Navbar from "./Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/trackingorderpayStyle.css";
import Footer from "./Footer";

export default function TrackingOrderPage() {
  const location = useLocation();
  const message = location.state?.message; // Safely access the message

  const [orders, setOrders] = useState([
    { id: 1, status: "Chờ Thanh Toán", details: "Order details for order 1" },
    { id: 2, status: "Vận Chuyển", details: "Order details for order 2" },
    { id: 3, status: "Chờ Giao Hàng", details: "Order details for order 3" },
    { id: 4, status: "Hoàn Thành", details: "Order details for order 4" },
    { id: 5, status: "Đã Hủy", details: "Order details for order 5" },
    { id: 6, status: "Ký gửi", details: "Order details for order 6" },
  ]);
  const [filteredOrders, setFilteredOrders] = useState(orders);

  useEffect(() => {
    if (message) {
      toast.success(message); // Show the toast with the message
    }
  }, [message]);

  const filterOrders = (status) => {
    if (status === "Tất Cả") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(orders.filter((order) => order.status === status));
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1>Tracking Order</h1>

        {/* Button Group with Custom Styles */}
        <div className="button-group mb-3">
          <Button onClick={() => filterOrders("Tất Cả")}>Tất Cả</Button>
          <Button onClick={() => filterOrders("Chờ Thanh Toán")}>
            Chờ Thanh Toán
          </Button>
          <Button onClick={() => filterOrders("Vận Chuyển")}>Vận Chuyển</Button>
          <Button onClick={() => filterOrders("Chờ Giao Hàng")}>
            Chờ Giao Hàng
          </Button>
          <Button onClick={() => filterOrders("Hoàn Thành")}>Hoàn Thành</Button>
          <Button onClick={() => filterOrders("Đã Hủy")}>Đã Hủy</Button>
          <Button onClick={() => filterOrders("Ký gửi")}>Ký gửi</Button>
        </div>

        {/* Orders Table */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Trạng Thái</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.details}</td>
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
