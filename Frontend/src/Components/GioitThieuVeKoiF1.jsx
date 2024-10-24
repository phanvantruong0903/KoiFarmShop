import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Container } from "react-bootstrap";

export default function GioiThieuVeKoiF1() {
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
            alt="Koi F1"
          />
        </div>
        <div style={{ marginTop: "-220px" }}>
          <h1 style={{ textAlign: "center", fontWeight: "800", color: "red" }}>
            Giới Thiệu Về Cá Koi F1
          </h1>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Cá Koi F1 là thế hệ đầu tiên được sinh ra từ sự lai tạo giữa các
            giống cá Koi thuần chủng. Những chú cá này không chỉ mang vẻ đẹp độc
            đáo mà còn có sức khỏe tốt và khả năng thích nghi cao.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Chúng tôi tự hào cung cấp cá Koi F1 với chất lượng hàng đầu, được
            lựa chọn kỹ lưỡng từ những trang trại cá Koi uy tín. Mỗi con cá đều
            mang trong mình tiềm năng phát triển thành những chú cá Koi đẹp và
            ấn tượng nhất.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Ngoài việc sở hữu vẻ đẹp bắt mắt, cá Koi F1 còn dễ chăm sóc và nuôi
            dưỡng. Chúng tôi cung cấp đầy đủ thông tin và hướng dẫn để bạn có
            thể chăm sóc cho những chú cá này một cách hiệu quả nhất.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Tại IKoi, chúng tôi tổ chức các sự kiện và buổi hội thảo để giúp
            khách hàng hiểu rõ hơn về quá trình chăm sóc và nuôi dưỡng cá Koi
            F1. Đây là cơ hội tốt để bạn gặp gỡ các chuyên gia và học hỏi nhiều
            kiến thức bổ ích.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Chúng tôi cam kết mang đến những sản phẩm và dịch vụ tốt nhất để bạn
            có thể tạo ra một không gian sống động với những chú cá Koi F1 tuyệt
            đẹp. Hãy cùng IKoi khám phá thế giới cá Koi F1 và trải nghiệm niềm
            đam mê với chúng tôi!
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
          height: "100vh", // Đảm bảo chiều cao đủ để chiếm toàn bộ không gian
        }}
      ></div>
      <div>
        <Footer />
      </div>
    </>
  );
}
