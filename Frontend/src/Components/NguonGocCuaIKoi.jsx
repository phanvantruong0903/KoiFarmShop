import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Container } from "react-bootstrap";
export default function NguonGocCuaIKoi() {
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
          />
        </div>
        <div style={{ marginTop: "-300px" }}>
          <h1 style={{ textAlign: "center", fontWeight: "800", color: "red" }}>
            Nguồn Gốc Của IKoi
          </h1>
          <hr />
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            IKoi được thành lập với sứ mệnh mang đến cho những người yêu thích
            cá Koi những sản phẩm chất lượng cao, đáp ứng nhu cầu về cả thẩm mỹ
            và sức khỏe của cá. Chúng tôi tự hào là một trong những nhà cung cấp
            cá Koi hàng đầu tại Việt Nam, với nguồn gốc và chất lượng được đảm
            bảo.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Nguồn gốc của IKoi xuất phát từ những trang trại cá Koi nổi tiếng
            tại Nhật Bản, nơi được biết đến với việc nuôi dưỡng và phát triển
            các giống cá Koi đẹp và độc đáo nhất thế giới. Chúng tôi đã hợp tác
            chặt chẽ với các chuyên gia và nhà sản xuất cá Koi hàng đầu để đảm
            bảo rằng mỗi con cá mà chúng tôi cung cấp đều mang trong mình vẻ đẹp
            và sức sống mạnh mẽ.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Tại IKoi, chúng tôi không chỉ cung cấp cá Koi mà còn mang đến cho
            khách hàng những kiến thức và kỹ thuật chăm sóc cá tốt nhất. Đội ngũ
            chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn để bạn có
            thể chăm sóc cho những chú cá Koi của mình một cách hiệu quả nhất.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Chúng tôi cam kết mang đến những sản phẩm và dịch vụ tốt nhất, giúp
            bạn tạo ra không gian sống động và đầy màu sắc với những chú cá Koi
            tuyệt đẹp. Hãy cùng IKoi khám phá thế giới cá Koi và trải nghiệm
            niềm đam mê với chúng tôi!
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Chúng tôi cũng tổ chức các sự kiện định kỳ, nơi bạn có thể gặp gỡ
            các chuyên gia trong ngành và tìm hiểu thêm về cách nuôi và chăm sóc
            cá Koi. Bên cạnh đó, bạn sẽ có cơ hội tham gia các buổi hội thảo và
            khóa học trực tiếp, giúp bạn nâng cao kiến thức và kỹ năng trong
            việc chăm sóc cá.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            IKoi không ngừng mở rộng danh mục sản phẩm của mình để phục vụ nhu
            cầu đa dạng của khách hàng. Chúng tôi cung cấp các loại thức ăn chất
            lượng cao, thiết bị lọc nước, và các sản phẩm hỗ trợ chăm sóc cá
            Koi, tất cả đều được lựa chọn kỹ lưỡng để đảm bảo sức khỏe và sự
            phát triển tốt nhất cho cá.
          </p>
          <p style={{ fontWeight: "400", fontSize: "15px" }}>
            Hãy theo dõi chúng tôi trên các kênh truyền thông xã hội để cập nhật
            thông tin về các sản phẩm mới, chương trình khuyến mãi và các sự
            kiện thú vị liên quan đến cá Koi. IKoi luôn sẵn sàng đồng hành cùng
            bạn trong hành trình khám phá thế giới cá Koi đầy màu sắc!
          </p>
        </div>
      </Container>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <img src="src/assets/img_4.png" />
        </div>
        <div style={{ width: "30%" }}>
          <img src="src/assets/img_5.png" />
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
