import React from "react";
import { Layout, Typography, Row, Col, Card } from "antd";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Kyguikoi from "./Kyguikoi";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default function Gioithieusankygui() {
  return (
    <Layout style={{ backgroundColor: "whitesmoke" }}>
      <Navbar />
      <div style={{ paddingTop: "50px" }}>
        <Content style={{ padding: "50px" }}>
          <Card
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            hoverable
            bodyStyle={{
              padding: "20px",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Title level={1} style={{ color: "#e74c3c", marginBottom: "20px" }}>
              Ký Gửi
            </Title>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              99% người nuôi cá Koi đều mong em koi của mình được “gả” vào gia
              đình tốt, đảm bảo cuộc sống, tương lai. Một số người chỉ nuôi Koi
              bằng đam mê không đủ quan hệ rộng để trao đổi, bán các em koi đẹp.
              Vì vậy OnKoi – Quang Minh áp dụng chính sách Ký gửi cá Koi – Bán
              cá Koi hộ.
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              <strong>Quy trình ký gửi cá Koi</strong>
              <ul>
                <li>
                  Ký gửi cá Koi offline: Cung cấp thông tin Koi cần ký gửi bằng
                  hình ảnh, video, giấy chứng nhận…
                </li>
                <li>
                  Ký gửi cá Koi online: Đăng tải thông tin chi tiết của Koi cần
                  ký gửi trên hệ thống website.
                </li>
              </ul>
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              <strong>Lưu ý:</strong> Ký gửi cá Koi Offline phù hợp với người
              nuôi Koi chưa có website. Ký gửi Koi Online dành cho người nuôi
              Koi để kinh doanh, có hệ thống website.
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              <strong>Quy trình ký gửi:</strong>
              <ol>
                <li>Chụp ảnh chi tiết Koi cần ký gửi.</li>
                <li>Cung cấp thông tin: Tên, tuổi, giới tính...</li>
                <li>OnKoi – Quang Minh kiểm tra Koi.</li>
                <li>Thương thảo hợp đồng ký gửi.</li>
                <li>Ký hợp đồng ký gửi.</li>
                <li>Hỗ trợ khách xem cá.</li>
                <li>Cá bán thành công.</li>
              </ol>
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              <h5 style={{ color: "#e74c3c", marginTop: "20px" }}>
                Chính sách Ký gửi cá Koi
              </h5>
              <ul>
                <li>Chỉ nhận Koi khỏe mạnh, có giá trị.</li>
                <li>
                  Koi phải có giấy chứng nhận, ưu tiên các Koi thuần chủng.
                </li>
                <li>Khách hàng ký gửi chịu trách nhiệm về chất lượng Koi.</li>
                <li>Chúng tôi cam kết cung cấp thông tin trung thực.</li>
                <li>Chi phí ký gửi hợp lý.</li>
              </ul>
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              <h5 style={{ color: "#e74c3c", marginTop: "20px" }}>
                Ý nghĩa của việc ký gửi cá Koi
              </h5>
              <ul>
                <li>
                  <strong>Phổ biến tại Nhật Bản:</strong> Dịch vụ rất phổ biến
                  tại Nhật Bản.
                </li>
                <li>
                  <strong>Bắt đầu nở rộ tại Việt Nam:</strong> Người chơi Koi
                  tìm đến các dịch vụ ký gửi.
                </li>
              </ul>
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              OnKoi – Quang Minh là trang trại cá Koi với hệ thống hồ nuôi
              chuyên nghiệp. Nằm giữa lòng Hà Nội...
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              <h5 style={{ color: "#e74c3c", marginTop: "20px" }}>
                Chúng tôi cam kết:
              </h5>
              <ul>
                <li>
                  100% giống F0 và F1 có nguồn gốc từ những trại nổi tiếng.
                </li>
                <li>Koi đã được sàng lọc kỹ lưỡng.</li>
                <li>Cung cấp đầy đủ kiến thức chăm sóc Cá Koi.</li>
                <li>Chỉ bán các em Koi chất lượng.</li>
              </ul>
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              <h5 style={{ color: "#e74c3c", marginTop: "20px" }}>
                Lưu ý: Đối với Koi baby
              </h5>
              <ul>
                <li>Sẵn sàng cung cấp hình ảnh video chi tiết.</li>
                <li>Cam kết bồi thường đền bù gấp 10 lần giá trị cá.</li>
              </ul>
            </Paragraph>
            <Paragraph style={{ color: "#333", marginBottom: "15px" }}>
              <h5 style={{ color: "#e74c3c", marginTop: "20px" }}>
                Về bảo hành Koi:
              </h5>
              <ul>
                <li>Khách tự làm hồ được bảo hành từ 2-5 ngày.</li>
                <li>Khách có hồ đạt chuẩn được bảo hành dài hạn.</li>
              </ul>
            </Paragraph>
          </Card>
          <div style={{ marginTop: "50px" }}>
            <Kyguikoi />
          </div>
        </Content>
      </div>
      <Footer />
    </Layout>
  );
}
