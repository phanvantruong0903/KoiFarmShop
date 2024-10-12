import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Container } from "react-bootstrap";

export default function GioiThieuVeKoiViet() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Container
        style={{
          padding: "20px",
          paddingTop: "100px",
        }}
      >
        <div>
          <img
            src="src/assets/Red_Modern_Travel_Presentation__6_-removebg-preview.png"
            style={{ paddingLeft: "1039px" }}
            alt="Koi Việt"
          />
        </div>
        <div style={{ marginTop: "-220px" }}>
          <h1 style={{ textAlign: "center", fontWeight: "800", color: "red" }}>
            Giới Thiệu Về Cá Koi Việt
          </h1>
          <hr />
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Cá Koi Việt Nam đã dần trở thành một phần không thể thiếu trong văn
            hóa nuôi cá tại Việt Nam. Với khả năng thích nghi tốt và vẻ đẹp tự
            nhiên, cá Koi Việt đang được nhiều người yêu thích và lựa chọn.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Chúng tôi cam kết cung cấp cá Koi Việt chất lượng cao, được nuôi
            dưỡng trong môi trường an toàn và tự nhiên. Mỗi con cá đều được chăm
            sóc kỹ lưỡng để đảm bảo sức khỏe và sự phát triển tốt nhất.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Tại IKoi, chúng tôi không chỉ cung cấp cá Koi Việt mà còn mang đến
            cho khách hàng những kiến thức và kỹ thuật chăm sóc cá tốt nhất. Đội
            ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn để bạn
            có thể chăm sóc cho những chú cá Koi của mình một cách hiệu quả
            nhất.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            IKoi cũng tổ chức các sự kiện và buổi hội thảo để giúp khách hàng
            tìm hiểu thêm về cá Koi Việt và cách chăm sóc chúng. Đây là cơ hội
            tốt để bạn gặp gỡ các chuyên gia và học hỏi nhiều kiến thức bổ ích.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Hãy cùng IKoi khám phá thế giới cá Koi Việt và trải nghiệm niềm đam
            mê với chúng tôi!
          </p>
        </div>
      </Container>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <img src="src/assets/img_4.png" alt="Koi Image 4" />
        </div>
        <div style={{ width: "30%" }}>
          <img src="src/assets/img_5.png" alt="Koi Image 5" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/e.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      ></div>
      <div>
        <Footer />
      </div>
    </>
  );
}
