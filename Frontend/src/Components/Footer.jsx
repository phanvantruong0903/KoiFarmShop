import React from "react";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div
          style={{
            display: "flex",
            backgroundImage: `url("src/assets/pexels-quang-nguyen-vinh-222549-2131828.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "100px 20px",
          }}
        >
          <div style={{ color: "white" }}>
            <h1 style={{ paddingLeft: "100px" }}>Điểm nổi bật của IKoi</h1>
            <ul
              style={{ fontSize: "16px", color: "white", paddingLeft: "100px" }}
            >
              <li style={{ marginTop: "10px" }}>
                Cá nhập khẩu chất lượng cao, nhập trực tiếp tại các trang trại
                Cá Koi Nhật Bản
              </li>
              <li style={{ marginTop: "10px" }}>
                Khách hàng yên tâm nuôi cá vì luôn có chuyên gia đồng hành
              </li>
              <li style={{ marginTop: "10px" }}>
                Đa dạng sản phẩm, dịch vụ chăm sóc Cá Koi và Hồ Cá Koi
              </li>
              <li style={{ marginTop: "10px" }}>
                IKoi tự hào là đơn vị đầu tiên tại miền Bắc được chuyển giao
                công nghệ mô hình trại SAKAI (Sakai fish farm, Hiroshima, Japan)
              </li>
              <li style={{ marginTop: "10px" }}>
                Trại gồm 120 hồ lớn chuẩn theo mô hình trại SAKAI
              </li>
            </ul>
          </div>
        </div>

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
            <div style={{ flex: 1, marginRight: "20px" }}>
              <h2 style={{ paddingRight: "300px" }}>Liên hệ</h2>
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

            <div style={{ flex: 1, marginRight: "20px" }}>
              <h2 style={{ paddingRight: "300px" }}>Danh Mục</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>Giới Thiệu</li>
                <li style={{ marginBottom: "10px" }}>Cá Koi Nhật</li>
                <li style={{ marginBottom: "10px" }}>Cá Koi F1</li>
                <li style={{ marginBottom: "10px" }}>Cá Koi Mini</li>
                <li style={{ marginBottom: "10px" }}>Giá Cá Koi</li>
              </ul>
            </div>

            <div style={{ flex: 1 }}>
              <h2 style={{ paddingRight: "250px" }}>Chính Sách</h2>
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
          <hr style={{ marginTop: "20px", borderColor: "white" }} />
          <p
            style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}
          >
            Copyright © 2022 sieuthicakoi.vn. All Rights Reserved. Design Web
            and SEO by FAGO AGENCY
          </p>
        </div>
      </div>
    </>
  );
}
