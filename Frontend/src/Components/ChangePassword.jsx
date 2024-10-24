import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Card, Layout, Row, Col, Input, Form, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import axiosInstance from "../An/Utils/axiosJS";
import { useState } from "react";

export default function ChangePassword() {
  const [form] = Form.useForm(); // Tạo form instance

  const handleChangePassword = async (values) => {
    try {
      const { old_password, password, confirm_password } = values;

      // Ensure new password and confirm password match
      if (password !== confirm_password) {
        alert("Mật khẩu mới và xác nhận mật khẩu không khớp.");
        return;
      }

      const dataToSend = {
        old_password,
        password,
        confirm_password,
      };

      const response = await axiosInstance.put(
        "http://localhost:4000/users/change-password",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check for success response
      if (response.data && response.data.success) {
        alert(response.data.message);
        form.resetFields(); // Reset fields after successful update
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      // Handle the error response
      if (error.response) {
        console.error("Error updating password:", error.response.data);
        alert(error.response.data.message || "Cập nhật thất bại.");
      } else {
        console.error("Error updating password:", error.message);
        alert("Cập nhật thất bại.");
      }
    }
  };

  const onSubmit = async () => {
    try {
      const values = await form.validateFields(); // Validate fields
      await handleChangePassword(values); // Call the handler with validated values
    } catch (error) {
      console.error("Validation Failed:", error);
    }
  };

  return (
    <>
      {/* Navbar Component */}
      <Layout>
        <Navbar />

        <div style={{ paddingTop: "100px", backgroundColor: "smokegrey" }}>
          <Row justify="center">
            <Col>
              <Content style={{ padding: "50px" }}>
                <Card
                  title="Thay đổi mật khẩu"
                  bordered={false}
                  style={{ width: 800 }}
                >
                  <Form
                    form={form} // Pass form instance
                    id="change-password-form"
                    onFinish={onSubmit} // Use onSubmit function
                  >
                    <Form.Item
                      label="Mật khẩu cũ"
                      name="old_password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your old password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      label="Mật khẩu mới"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your new password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      label="Xác nhận mật khẩu"
                      name="confirm_password"
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your new password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item style={{ textAlign: "center" }}>
                      <Button type="primary" htmlType="submit">
                        Thay đổi mật khẩu
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Content>
            </Col>
          </Row>
        </div>
        {/* Footer Component */}
        <Footer />
      </Layout>
    </>
  );
}
