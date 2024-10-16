import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormFillInformation() {
  const location = useLocation();
  const message = location.state?.message; // Lấy thông điệp từ state

  useEffect(() => {
    if (message) {
      toast.success(`${message}`);
    }
  }, [message]);
  console.log(message);

  return (
    <>
      <div>
        <Navbar />
        <div style={{ padding: "50px", paddingTop: "100px" }}>
          <h4 style={{ textAlign: "center" }}>
            Form điền thông tin người dùng
          </h4>
          <Form style={{ maxWidth: 600, margin: "auto" }}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập email" required />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập email hợp lệ.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập họ và tên" required />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập họ và tên.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Nhập số điện thoại"
                required
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập số điện thoại.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formShipAddress">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control type="text" placeholder="Nhập địa chỉ" required />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập địa chỉ.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Miêu tả</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Nhập miêu tả"
                required
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập miêu tả.
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
