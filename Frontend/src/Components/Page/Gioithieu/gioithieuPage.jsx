import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer";
import NguonGocCuaIKoi from "../../NguonGocCuaIKoi";
import GioiThieuVeKoiNhat from "../../GioiThieuVeKoiNhat";
import GioiThieuVeKoiF1 from "../../GioitThieuVeKoiF1";
import GioiThieuVeKoiViet from "../../GioiThieuVeKoiViet";

export default function Gioithieupage() {
  return (
    <>
      <div>
        <Navbar />
        <div style={{ backgroundColor: "whitesmoke" }}>
          <NguonGocCuaIKoi />
          <GioiThieuVeKoiNhat />
          <GioiThieuVeKoiF1 />
          <GioiThieuVeKoiViet />
          <div
            style={{
              display: "flex",
              backgroundImage: `url("src/assets/e.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh", // Đảm bảo chiều cao đủ để chiếm toàn bộ không gian
            }}
          ></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
