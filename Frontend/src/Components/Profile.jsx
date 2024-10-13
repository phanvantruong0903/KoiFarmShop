import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
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
  const message = location.state?.message;

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          "http://localhost:4000/users/me"
        );
        console.log("Data received from API:", response.data);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
      <Container style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1>Profile</h1>
        {userData ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginRight: "50px" }}>
              {[
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  value: userData.email,
                },
                {
                  label: "Tên Đăng Nhập",
                  name: "username",
                  type: "text",
                  value: userData.username,
                },
                {
                  label: "Tên",
                  name: "name",
                  type: "text",
                  value: userData.name,
                },
                {
                  label: "Địa chỉ",
                  name: "address",
                  type: "text",
                  value: userData.address,
                },
                {
                  label: "Số điện thoại",
                  name: "phone_number",
                  type: "tel",
                  value: userData.phone_number,
                },
              ].map((field) => (
                <div
                  key={field.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                    justifyContent: "center",
                  }}
                >
                  <label
                    htmlFor={field.name}
                    style={{
                      marginRight: "20px",
                      width: "150px",
                      textAlign: "right",
                    }}
                  >
                    {field.label}:
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    style={{ flex: 1, padding: "8px" }}
                    value={field.value}
                    onChange={handleInputChange}
                  />
                  <span style={{ color: "orange", marginLeft: "10px" }}>
                    Thay đổi
                  </span>
                </div>
              ))}
            </div>
            <hr
              style={{
                height: "150px",
                width: "1px",
                backgroundColor: "black",
                margin: "0 20px",
              }}
            />
            <div>
              {/* Hiển thị ảnh đại diện */}
              {userData.picture && (
                <img
                  src={userData.picture}
                  alt="Avatar"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
          </div>
        ) : (
          <p>Không có thông tin người dùng.</p>
        )}
      </Container>
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
      <div>
        <Footer />
      </div>
    </>
  );
}
