import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import axiosInstance from "../An/Utils/axiosJS";
import { Container } from "react-bootstrap";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const maskEmail = (email) => {
    const atIndex = email.indexOf("@");
    if (atIndex > 2) {
      const firstPart = email.slice(0, 2);
      const maskedPart = "*".repeat(atIndex - 2);
      return `${firstPart}${maskedPart}${email.slice(atIndex)}`;
    }
    return email; // Trả về email gốc nếu không đủ ký tự
  };
  const handleUpdate = async (field, value) => {
    console.log(value);
    console.log(field);
    try {
      await axiosInstance.patch(
        `http://localhost:4000/users/me`,
        {
          [field]: String(value), // Convert value to string
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Cập nhật thành công!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Cập nhật thất bại.");
    }
  };

  useEffect(() => {
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
      <div>
        <Navbar />
      </div>
      <div style={{ backgroundColor: "whitesmoke", paddingTop: "150px" }}>
        <div>
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
                {/* Bảng thông tin người dùng */}
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
                        <td
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            padding: "10px",
                            minWidth: "150px", // Set a minimum width for label cells
                            textAlign: "left", // Align text to the left
                          }}
                        >
                          Tên đăng nhập:
                        </td>
                        <td>
                          <input
                            value={userData.username}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                username: e.target.value,
                              })
                            }
                            style={{
                              width: "100%",
                              backgroundColor: "white",
                              border: "0.5px solid",
                              borderRadius: "4px",
                              padding: "5px",
                            }}
                          />
                        </td>
                        <td>
                          <button
                            style={{
                              backgroundColor: "white",
                              color: "blue",
                              border: "none",
                            }}
                            onClick={() =>
                              handleUpdate("username", userData.username)
                            }
                          >
                            Thay đổi
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            padding: "10px",
                            minWidth: "150px", // Set a minimum width for label cells
                            textAlign: "left", // Align text to the left
                          }}
                        >
                          Tên:
                        </td>
                        <td>
                          <input
                            value={userData.name}
                            onChange={(e) =>
                              setUserData({ ...userData, name: e.target.value })
                            }
                            style={{
                              width: "100%",
                              backgroundColor: "white",
                              border: "0.5px solid",
                              borderRadius: "4px",
                              padding: "5px",
                            }}
                          />
                        </td>
                        <td>
                          <button
                            style={{
                              backgroundColor: "white",
                              color: "blue",
                              border: "none",
                            }}
                            onClick={() => handleUpdate("name", userData.name)}
                          >
                            Thay đổi
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            padding: "10px",
                            minWidth: "150px", // Set a minimum width for label cells
                            textAlign: "left", // Align text to the left
                          }}
                        >
                          Email:
                        </td>
                        <td>
                          <input
                            value={maskedEmail}
                            readOnly
                            style={{
                              width: "100%",
                              backgroundColor: "white",
                              border: "0.5px solid",
                              borderRadius: "4px",
                              padding: "5px",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            padding: "10px",
                            minWidth: "150px", // Set a minimum width for label cells
                            textAlign: "left", // Align text to the left
                          }}
                        >
                          Địa chỉ:
                        </td>
                        <td>
                          <input
                            value={userData.address}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                address: e.target.value,
                              })
                            }
                            style={{
                              width: "100%",
                              backgroundColor: "white",
                              border: "0.5px solid",
                              borderRadius: "4px",
                              padding: "5px",
                            }}
                          />
                        </td>
                        <td>
                          <button
                            style={{
                              backgroundColor: "white",
                              color: "blue",
                              border: "none",
                            }}
                            onClick={() =>
                              handleUpdate("address", userData.address)
                            }
                          >
                            Thay đổi
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            padding: "10px",
                            minWidth: "150px", // Set a minimum width for label cells
                            textAlign: "left", // Align text to the left
                          }}
                        >
                          SĐT:
                        </td>
                        <td>
                          <input
                            value={userData.phone_number}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                phone_number: e.target.value,
                              })
                            }
                            style={{
                              width: "100%",
                              backgroundColor: "white",
                              border: "0.5px solid",
                              borderRadius: "4px",
                              padding: "5px",
                            }}
                          />
                        </td>
                        <td>
                          <button
                            style={{
                              backgroundColor: "white",
                              color: "blue",
                              border: "none",
                            }}
                            onClick={() =>
                              handleUpdate(
                                "phone_number",
                                userData.phone_number
                              )
                            }
                          >
                            Thay đổi
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Hình ảnh profile */}
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
          </Container>
        </div>
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
      <div style={{ paddingTop: "50px", backgroundColor: "whitesmoke" }}>
        <Footer />
      </div>
    </>
  );
}
