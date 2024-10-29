import React from "react";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div
        id="footer"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "50px 20px",
        }}
      >
        <div
          className="footer-content"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              flex: 1,
              marginRight: "20px",
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            <img
              src="src/assets/logo.png"
              alt="Logo"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div style={{ flex: 1, marginRight: "60px" }}>
            <h2 style={{ paddingRight: "200px", marginBottom: "20px" }}>
              Liên hệ
            </h2>
            <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                <FaLocationDot />: Phường Bến Thành, Quận 1, Hồ Chí Minh
              </li>
              <li style={{ marginBottom: "10px" }}>
                <FaPhone />: 090 456 789
              </li>
              <li style={{ marginBottom: "10px" }}>
                <SiGmail />: IKoi@gmail.com
              </li>
            </ul>
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ paddingRight: "200px", marginBottom: "20px" }}>
              Danh Mục
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <a href="/gioithieu">Giới thiệu</a>
              </li>
              <li style={{ marginBottom: "10px" }}>Cá Koi Nhật</li>
              <li style={{ marginBottom: "10px" }}>Cá Koi F1</li>
              <li style={{ marginBottom: "10px" }}>Cá Koi Mini</li>
              <li style={{ marginBottom: "10px" }}>Giá Cá Koi</li>
            </ul>
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ paddingRight: "140px", marginBottom: "20px" }}>
              Chính Sách
            </h2>
            <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "10px" }}>Chính Sách Mua Hàng</li>
              <li style={{ marginBottom: "10px" }}>Chính Sách Vận Chuyển</li>
              <li style={{ marginBottom: "10px" }}>Chính Sách Đổi Trả</li>
              <li style={{ marginBottom: "10px" }}>Chính Sách Bảo Hành</li>
              <li style={{ marginBottom: "10px" }}>
                Chính Sách Bảo Mật Thông Tin
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ marginTop: "50px", borderColor: "white" }} />
        <p style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
          Copyright © 2024. All Rights Reserved. Design Web and SEO by IKoi
        </p>
      </div>
    </div>
  );
};

export default React.memo(Footer);
