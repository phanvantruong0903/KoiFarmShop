import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import axiosInstance from "../An/Utils/axiosJS";
import { Container } from "react-bootstrap";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const navigate = useNavigate();
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

  const handleUpdate = async (field, value) => {
    if (userData.verify !== 1) {
      setCurrentField(field);
      setShowModal(true);
      return;
    } else if (userData.verify === 1) {
      console.log("Attempting to update:", field, "with value:", value);
      updateUser(field, value);
    }
  };

  const updateUser = async (field, value) => {
    try {
      console.log(
        "Updating field:",
        field,
        "with value:",
        value,
        "User verify status:",
        userData.verify
      );

      const response = await axiosInstance.patch(
        `http://localhost:4000/users/me`,
        { [field]: String(value) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Update response:", response.data); // Log phản hồi từ server
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Cập nhật thất bại.");
      // Log thông tin lỗi để kiểm tra lý do
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        alert(`Lỗi: ${error.response.data.message || "Vui lòng thử lại."}`); // Hiển thị thông điệp lỗi từ server
      }
    }
  };

  const handleResendVerification = async () => {
    try {
      await axiosInstance.post("users/resend-verify-email", {});
      toast.success("Email xác minh đã được gửi lại.");
      setShowModal(false);
    } catch (error) {
      console.error("Lỗi khi gửi lại email xác minh:", error);
      toast.error("Gửi lại email xác minh thất bại.");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("users/me");
        if (response.data) {
          setUserData(response.data.result);
          if (response.data.result.verify === 1) {
            const isReloaded = localStorage.getItem("isReloaded");
            if (!isReloaded) {
              localStorage.setItem("isReloaded", "true");
              window.location.reload();
            }
          }
        } else {
          console.error("Dữ liệu không hợp lệ:", response.data);
        }
      } catch (error) {
        console.error("Có lỗi xảy ra khi lấy thông tin người dùng:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const maskedEmail =
    userData && userData.email ? maskEmail(userData.email) : "";

  if (loading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "100px" }}>Loading...</div>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "whitesmoke", paddingTop: "150px" }}>
        <Container
          style={{
            paddingTop: "50px",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1>Profile</h1>
          {userData ? (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div style={{ flex: 2, marginRight: "20px" }}>
                <table
                  style={{
                    width: "100%",
                    margin: "20px 0",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={cellStyle}>Tên đăng nhập:</td>
                      <td>
                        <input
                          value={userData.username}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              username: e.target.value,
                            })
                          }
                          style={inputStyle}
                        />
                      </td>
                      <td>
                        <button
                          style={buttonStyle}
                          onClick={() =>
                            handleUpdate("username", userData.username)
                          }
                        >
                          Thay đổi
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={cellStyle}>Tên:</td>
                      <td>
                        <input
                          value={userData.name}
                          onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                          }
                          style={inputStyle}
                        />
                      </td>
                      <td>
                        <button
                          style={buttonStyle}
                          onClick={() => handleUpdate("name", userData.name)}
                        >
                          Thay đổi
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={cellStyle}>Email:</td>
                      <td>
                        <input
                          value={maskedEmail}
                          readOnly
                          style={inputStyle}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={cellStyle}>Địa chỉ:</td>
                      <td>
                        <input
                          value={userData.address}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              address: e.target.value,
                            })
                          }
                          style={inputStyle}
                        />
                      </td>
                      <td>
                        <button
                          style={buttonStyle}
                          onClick={() =>
                            handleUpdate("address", userData.address)
                          }
                        >
                          Thay đổi
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={cellStyle}>SĐT:</td>
                      <td>
                        <input
                          value={userData.phone_number}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              phone_number: e.target.value,
                            })
                          }
                          style={inputStyle}
                        />
                      </td>
                      <td>
                        <button
                          style={buttonStyle}
                          onClick={() =>
                            handleUpdate("phone_number", userData.phone_number)
                          }
                        >
                          Thay đổi
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td style={cellStyle}>Website</td>
                      <td>
                        <input
                          value={userData.website}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              website: e.target.value,
                            })
                          }
                          style={inputStyle}
                        />
                      </td>
                      <td>
                        <button
                          style={buttonStyle}
                          onClick={() =>
                            handleUpdate("phone_number", userData.website)
                          }
                        >
                          Thay đổi
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src={userData.picture}
                  alt="Profile"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ) : (
            <p>Không có thông tin người dùng.</p>
          )}
          {showModal && (
            <div style={modalStyle}>
              <div style={modalContentStyle}>
                <h3>Xác nhận</h3>
                <p>Bạn có muốn gửi lại email xác minh không?</p>
                <button onClick={handleResendVerification}>Xác nhận</button>
                <button onClick={() => setShowModal(false)}>Hủy</button>
              </div>
            </div>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
}

// Styles
const cellStyle = {
  fontWeight: "bold",
  fontSize: "20px",
  padding: "10px",
  minWidth: "150px",
  textAlign: "left",
};
const inputStyle = {
  width: "100%",
  backgroundColor: "white",
  border: "0.5px solid",
  borderRadius: "4px",
  padding: "5px",
};
const buttonStyle = {
  backgroundColor: "white",
  color: "blue",
  border: "none",
};
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const modalContentStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
};
