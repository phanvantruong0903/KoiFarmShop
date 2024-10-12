import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Container } from "react-bootstrap";

export default function GioiThieuVeKoiNhat() {
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
            alt="Koi Nhật"
          />
        </div>
        <div style={{ marginTop: "-220px" }}>
          <h1 style={{ textAlign: "center", fontWeight: "800", color: "red" }}>
            Giới Thiệu Về Cá Koi Nhật
          </h1>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Cá Koi Nhật Bản là một trong những giống cá Koi nổi tiếng và được ưa
            chuộng nhất trên thế giới. Với vẻ đẹp độc đáo và màu sắc rực rỡ, cá
            Koi Nhật không chỉ là biểu tượng của sự thịnh vượng mà còn là niềm
            đam mê của nhiều người yêu thích cá.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Chúng tôi tự hào cung cấp cá Koi Nhật Bản được nhập khẩu trực tiếp
            từ các trang trại cá Koi hàng đầu của Nhật. Mỗi con cá đều được chọn
            lựa kỹ càng để đảm bảo sức khỏe và chất lượng tốt nhất.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Cá Koi Nhật có khả năng sống lâu và dễ dàng thích nghi với môi
            trường nuôi dưỡng. Chúng tôi cung cấp đầy đủ thông tin và hướng dẫn
            để bạn có thể chăm sóc cho những chú cá Koi Nhật này một cách hiệu
            quả nhất.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            IKoi cũng tổ chức các sự kiện và buổi hội thảo để giúp khách hàng
            hiểu rõ hơn về cá Koi Nhật và cách chăm sóc chúng. Đây là cơ hội tốt
            để bạn gặp gỡ các chuyên gia và học hỏi nhiều kiến thức bổ ích.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Hãy cùng IKoi khám phá thế giới cá Koi Nhật và trải nghiệm niềm đam
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
