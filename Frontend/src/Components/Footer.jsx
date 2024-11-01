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
                <a href="/gioithieu" style={{ color: "white" }}>
                  Giới thiệu{" "}
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/gioithieuvekoinhat" style={{ color: "white" }}>
                  Cá Koi Nhật
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                {" "}
                <a href="/gioithieuvekoif1" style={{ color: "white" }}>
                  Cá Koi F1
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                {" "}
                <a href="/gioithieuvekoiviet" style={{ color: "white" }}>
                  Cá Koi Việt
                </a>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <a href="/chinhsach">
              <h2
                style={{
                  paddingRight: "140px",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                Chính Sách
              </h2>
            </a>
            <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                <a href="/chinhsachmuahang" style={{ color: "white" }}>
                  Chính sách mua hàng
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/chinhsachvanchuyen" style={{ color: "white" }}>
                  Chính sách vận chuyển
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/chinhsachdoitra" style={{ color: "white" }}>
                  Chính sách đổi trả
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/chinhsachbaohanh" style={{ color: "white" }}>
                  Chính sách bảo hành
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/chinhsachbaomatthongtin" style={{ color: "white" }}>
                  Chính sách bảo mật thông tin
                </a>
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
