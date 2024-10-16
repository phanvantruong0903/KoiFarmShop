import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col, Input, Button, Modal, Form } from "antd";
import axiosInstance from "../An/Utils/axiosJS";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Hàm kiểm tra tính hợp lệ
const isValidUsername = (username) => /^[a-zA-Z0-9]+$/.test(username);
const isValidNameOrAddress = (input) =>
  /^[\w\s]+$/.test(input) && !/\s{2,}/.test(input);
const isValidPhoneNumber = (phone) => /^\d{10,11}$/.test(phone);
const isValidURL = (urlString) => {
  try {
    new URL(urlString);
    return true;
  } catch (_) {
    return false;
  }
};

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [showImageModal, setShowImageModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [websiteError, setWebsiteError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const toastIdRef = useRef(null);

  useEffect(() => {
    const { message } = location.state || {};
    if (message) {
      if (toastIdRef.current) {
        toast.update(toastIdRef.current, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      } else {
        toastIdRef.current = toast.success(message, {
          autoClose: 5000,
          onClose: () => (toastIdRef.current = null),
        });
      }
    }
  }, [location.state]);

  const maskEmail = (email) => {
    const atIndex = email.indexOf("@");
    if (atIndex > 2) {
      const firstPart = email.slice(0, 2);
      const maskedPart = "*".repeat(atIndex - 2);
      return `${firstPart}${maskedPart}${email.slice(atIndex)}`;
    }
    return email;
  };

  const handleUpdate = async (field) => {
    const newErrors = {};

    switch (field) {
      case "username":
        if (!isValidUsername(userData.username)) {
          newErrors.username = "Tên đăng nhập không được có ký tự đặc biệt.";
        }
        break;
      case "name":
        if (!isValidNameOrAddress(userData.name)) {
          newErrors.name =
            "Tên không được có ký tự đặc biệt và khoảng cách liên tiếp.";
        }
        break;
      case "address":
        if (!isValidNameOrAddress(userData.address)) {
          newErrors.address =
            "Địa chỉ không được có ký tự đặc biệt và khoảng cách liên tiếp.";
        }
        break;
      case "phone_number":
        if (!isValidPhoneNumber(userData.phone_number)) {
          newErrors.phone_number = "Số điện thoại phải từ 10 đến 11 chữ số.";
        }
        break;
      case "website":
        if (!isValidURL(userData.website)) {
          setWebsiteError(
            "Website không hợp lệ. Vui lòng nhập một URL hợp lệ."
          );
          return;
        }
        setWebsiteError(""); // Reset lỗi nếu URL hợp lệ
        break;
      default:
        break;
    }

    if (Object.keys(newErrors).length > 0) {
      setValidationErrors(newErrors);
      return;
    }

    setValidationErrors({}); // Reset lỗi nếu tất cả đều hợp lệ

    if (userData.verify !== 1) {
      setShowVerificationModal(true);
      return;
    } else {
      console.log(
        "Attempting to update:",
        field,
        "with value:",
        userData[field]
      );
      await updateUser(field, userData[field]);
      // Reload page after update
      window.location.reload();
    }
  };

  const updateUser = async (field, value) => {
    try {
      const response = await axiosInstance.patch(
        `http://localhost:4000/users/me`,
        { [field]: String(value) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Update response:", response.data);
      toast.success("Cập nhật thành công.");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Cập nhật thất bại.");
      if (error.response) {
        console.error("Error response data:", error.response.data);
        toast.error(
          `Lỗi: ${error.response.data.message || "Vui lòng thử lại."}`
        );
      }
    }
  };

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("users/me");
      if (response.data) {
        setUserData(response.data.result);
      } else {
        console.error("Dữ liệu không hợp lệ:", response.data);
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi lấy thông tin người dùng:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const maskedEmail =
    userData && userData.email ? maskEmail(userData.email) : "";

  const handleUploadImage = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const handleImageChange = async () => {
    if (userData.verify !== 1) {
      setShowVerificationModal(true);
      return;
    }
    if (selectedFile) {
      const imageUrl = await handleUploadImage(selectedFile);
      setUserData({ ...userData, avatar: imageUrl });
      await updateUser("avatar", imageUrl); // Cập nhật URL hình ảnh lên server
      toast.success("Cập nhật ảnh đại diện thành công!");
      setShowImageModal(false); // Đóng modal sau khi tải ảnh thành công
    } else {
      toast.error("Vui lòng chọn một tệp ảnh.");
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleResendVerification = async () => {
    try {
      await axiosInstance.post("users/resend-verify-email", {});
      toast.success(
        "Email xác minh đã được gửi lại. Sau khi xác nhận vui lòng đăng nhập lại để update"
      );
      setShowVerificationModal(false);
    } catch (error) {
      console.error("Lỗi khi gửi lại email xác minh:", error);
      toast.error("Gửi lại email xác minh thất bại.");
    }
  };

  const handleUpdateAll = async () => {
    const newErrors = {};

    if (!isValidUsername(userData.username)) {
      newErrors.username = "Tên đăng nhập không được có ký tự đặc biệt.";
    }
    if (!isValidNameOrAddress(userData.name)) {
      newErrors.name =
        "Tên không được có ký tự đặc biệt và khoảng cách liên tiếp.";
    }
    if (!isValidNameOrAddress(userData.address)) {
      newErrors.address =
        "Địa chỉ không được có ký tự đặc biệt và khoảng cách liên tiếp.";
    }
    if (!isValidPhoneNumber(userData.phone_number)) {
      newErrors.phone_number = "Số điện thoại phải từ 10 đến 11 chữ số.";
    }
    if (!isValidURL(userData.website)) {
      setWebsiteError("Website không hợp lệ. Vui lòng nhập một URL hợp lệ.");
      return;
    }
    setWebsiteError(""); // Reset lỗi nếu URL hợp lệ

    if (Object.keys(newErrors).length > 0) {
      setValidationErrors(newErrors);
      return;
    }

    setValidationErrors({}); // Reset lỗi nếu tất cả đều hợp lệ

    if (userData.verify !== 1) {
      setShowVerificationModal(true);
      return;
    } else {
      const fieldsToUpdate = [
        "username",
        "name",
        "address",
        "phone_number",
        "website",
      ];
      const updatePromises = fieldsToUpdate.map((field) =>
        updateUser(field, userData[field])
      );
      await Promise.all(updatePromises);
      toast.success("Cập nhật tất cả thông tin thành công!");
      // Reload page after update
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "100px" }}>Loading...</div>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "whitesmoke", paddingTop: "150px" }}>
        <Row justify="center" style={{ paddingTop: "50px" }}>
          <Col
            span={16}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h1>Profile</h1>
            {userData ? (
              <Row gutter={16}>
                <Col span={12}>
                  <Form layout="vertical">
                    <Form.Item
                      label="Tên đăng nhập"
                      validateStatus={validationErrors.username ? "error" : ""}
                      help={validationErrors.username}
                    >
                      <Row gutter={8}>
                        <Col flex="auto">
                          <Input
                            value={userData.username}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                username: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col>
                          <Button
                            type="primary"
                            onClick={() => handleUpdate("username")}
                          >
                            Cập nhật
                          </Button>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Form.Item
                      label="Tên"
                      validateStatus={validationErrors.name ? "error" : ""}
                      help={validationErrors.name}
                    >
                      <Row gutter={8}>
                        <Col flex="auto">
                          <Input
                            value={userData.name}
                            onChange={(e) =>
                              setUserData({ ...userData, name: e.target.value })
                            }
                          />
                        </Col>
                        <Col>
                          <Button
                            type="primary"
                            onClick={() => handleUpdate("name")}
                          >
                            Cập nhật
                          </Button>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input value={maskedEmail} readOnly />
                    </Form.Item>
                    <Form.Item
                      label="Địa chỉ"
                      validateStatus={validationErrors.address ? "error" : ""}
                      help={validationErrors.address}
                    >
                      <Row gutter={8}>
                        <Col flex="auto">
                          <Input
                            value={userData.address}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                address: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col>
                          <Button
                            type="primary"
                            onClick={() => handleUpdate("address")}
                          >
                            Cập nhật
                          </Button>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Form.Item
                      label="SĐT"
                      validateStatus={
                        validationErrors.phone_number ? "error" : ""
                      }
                      help={validationErrors.phone_number}
                    >
                      <Row gutter={8}>
                        <Col flex="auto">
                          <Input
                            value={userData.phone_number}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                phone_number: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col>
                          <Button
                            type="primary"
                            onClick={() => handleUpdate("phone_number")}
                          >
                            Cập nhật
                          </Button>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Form.Item
                      label="Website"
                      validateStatus={websiteError ? "error" : ""}
                      help={websiteError}
                    >
                      <Row gutter={8}>
                        <Col flex="auto">
                          <Input
                            value={userData.website}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                website: e.target.value,
                              });
                              setWebsiteError(""); // Reset lỗi khi đang nhập
                            }}
                          />
                        </Col>
                        <Col>
                          <Button
                            type="primary"
                            onClick={() => handleUpdate("website")}
                          >
                            Cập nhật
                          </Button>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" onClick={handleUpdateAll}>
                        Cập nhật tất cả
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
                <Col
                  span={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={userData.avatar}
                    alt="Profile"
                    onClick={() => setShowImageModal(true)}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </Col>
              </Row>
            ) : (
              <p>Không có thông tin người dùng.</p>
            )}
            {showImageModal && (
              <Modal
                title="Thay đổi ảnh đại diện"
                visible={showImageModal}
                onOk={handleImageChange}
                onCancel={() => setShowImageModal(false)}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Modal>
            )}
            {showVerificationModal && (
              <Modal
                title="Xác nhận"
                visible={showVerificationModal}
                onOk={handleResendVerification}
                onCancel={() => setShowVerificationModal(false)}
              >
                <p>Bạn có muốn gửi lại email xác minh không?</p>
              </Modal>
            )}
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}
