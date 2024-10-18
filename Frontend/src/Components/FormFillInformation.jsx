import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgPacman } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";
export default function FormFillInformation() {
  const location = useLocation();
  const { a } = location.state || {};
  console.log(a);
  const orderID = useOrder().orderId;
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển hướng trang
  const [data, setData] = useState("");
  useEffect(() => {}, [a]);
  console.log(a);
  console.log(orderID);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataToSend = {
      email: formData.get("email"),
      name: formData.get("name"),
      address: formData.get("address"),
      phone_number: formData.get("phone_number"),
      OrderDetailID: orderID,
      ShipAddress: formData.get("ShipAddress"),
    };
    console.log(dataToSend);
    try {
      const response = await axios.post(
        "http://localhost:4000/order/create",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Show success message with toast
        toast.success(response.data.message);
        console.log("Response" + response.data);
        console.log(data);
        // Navigate and pass the message
        navigate("/cart", {
          state: {
            data: response.data,
          },
        });
      } else {
        toast.error(`Có lỗi xảy ra: ${response.data.message}`);
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error:", error.message);
      }
    }
  };
  return (
    <>
      <div>
        <Navbar />
        <div style={{ padding: "50px", paddingTop: "100px" }}>
          <h4 style={{ textAlign: "center" }}>
            Form điền thông tin người dùng
          </h4>
          <Form
            style={{ maxWidth: 600, margin: "auto" }}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                required
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập email hợp lệ.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ và tên"
                required
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập họ và tên.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formShipAddress">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ"
                required
                name="address"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập địa chỉ.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số điện thoại"
                required
                name="phone_number"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập số điện thoại.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Địa chỉ giao hàng</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số địa chỉ giao hàng"
                required
                name="ShipAddress"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập số điện thoại.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group style={{ textAlign: "center" }}>
              <Button type="submit" variant="primary">
                Gửi
              </Button>
            </Form.Group>
          </Form>
        </div>

        <Footer />
      </div>
    </>
  );
}
