import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
const { Title, Text, Paragraph } = Typography;
import { Container } from "react-bootstrap";
import { Spin } from "antd"; // Import the Spin component
import Layout from "antd/es/layout/layout";
import { Typography } from "antd";
import axios from "axios";

export default function CaKoiNhat() {
  const handleScroll1 = () => {
    const element = document.getElementById("1");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 80; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll2 = () => {
    const element = document.getElementById("2");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 80; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll3 = () => {
    const element = document.getElementById("3");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 80; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll4 = () => {
    const element = document.getElementById("4");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 100; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll5 = () => {
    const element = document.getElementById("5");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 100; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll6 = () => {
    const element = document.getElementById("6");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 100; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll71 = () => {
    const element = document.getElementById("71");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 100; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll72 = () => {
    const element = document.getElementById("72");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 100; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll7 = () => {
    const element = document.getElementById("7");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 100; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll8 = () => {
    const element = document.getElementById("8");

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = 100; // Khoảng cách nhích lên từ trên cùng

      // Tính toán vị trí chính xác để cuộn
      const targetPosition = elementRect.top + window.scrollY - offset;

      // Cuộn đến vị trí đã tính toán
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <div>
            <div className="body_StyleKoiOfPage">
              <Title level={2} style={{ color: "red" }}>
                Nội Dung Bài Viết
              </Title>
              <ul style={{ marginTop: "10px" }}>
                <li style={{ paddingTop: "10px" }}>
                  <Text
                    onClick={handleScroll1}
                    className="contentBox"
                    style={{ cursor: "pointer" }}
                  >
                    1. Tìm hiểu về cá Koi là cá gì
                  </Text>
                  <ul>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll71}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        1.1. Nguồn gốc của cá Koi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        1.2. Đặc điểm của cá koi thuần chủng
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        1.3. Đặc tính sinh sản, sinh trưởng của cá koi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        1.4. Phân loại cá koi
                      </Text>
                    </li>
                  </ul>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Text
                    onClick={handleScroll2}
                    className="contentBox"
                    style={{ cursor: "pointer" }}
                  >
                    2. Các loại cá Koi phổ biến được ưa chuộng trên thị trường
                  </Text>
                  <ul>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll71}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.1. Tìm hiểu về Cá koi Kohaku
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.2. Tìm hiểu về cá koi Chagoi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.3. Tìm hiểu về cá koi Taisho Sanke
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.4. Tìm hiểu về cá koi showa sanshoku (showa)
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.5. Tìm hiểu về cá koi showa sanshoku (showa)
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.6. Tìm hiểu về cá koi Hikari Utsuri
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.7. Tìm hiểu cá koi Bekko
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.8. Tìm hiểu về cá koi Asagi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.9. Tìm hiều về cá koi Goshiki
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.10. Tìm hiểu Cá koi Karashi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.11. Tìm hiểu về cá koi Benigoi (mud pond)
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.12. Cá Koi Hikarimuji mono
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.13. Cá koi Hikarimoyo
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.14. Tìm hiểu về cá koi Shiro Utsuri(Bò Sữa)
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.15. Tìm hiểu về cá koi Shusui
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.16. Cá Koi Tancho
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.17. Tìm hiểu cá koi Bướm
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        2.18. Tìm hiểu về cá koi Kin/Ginrin
                      </Text>
                    </li>
                  </ul>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Text
                    onClick={handleScroll3}
                    className="contentBox"
                    style={{ cursor: "pointer" }}
                  >
                    3. Các giống Koi Kohaku phổ biến nhất
                  </Text>
                  <ul>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll71}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        3.1. Ý nghĩa của cá Koi trong văn hóa các quốc gia
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        3.2. Ý nghĩa phong thủy của cá Koi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        3.3. Ý nghĩa của cá chép koi theo màu sắc
                      </Text>
                    </li>
                  </ul>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Text
                    onClick={handleScroll4}
                    className="contentBox"
                    style={{ cursor: "pointer" }}
                  >
                    4. Sự khác nhau giữa Koi Kohaku Nhật, Koi Kohaku F1
                  </Text>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Text
                    onClick={handleScroll5}
                    className="contentBox"
                    style={{ cursor: "pointer" }}
                  >
                    5. Cách chọn cá Koi Kohaku
                  </Text>
                  <ul>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll71}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        5.1. Dựa vào nguồn gốc xuất xứ
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        5.2. Dựa trên màu sắc
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        5.3. Dựa trên độ sức khỏe của cá koi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        5.4. Dựa trên thân hình của cá
                      </Text>
                    </li>
                  </ul>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Text
                    onClick={handleScroll6}
                    className="contentBox"
                    style={{ cursor: "pointer" }}
                  >
                    6. Cách chăm sóc Koi Kohaku
                  </Text>
                  <ul>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll71}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        6.1. Đặc điểm về màu sắc
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        6.2. Dựa vào hình dáng
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        6.3. Dựa vào đặc tính
                      </Text>
                    </li>
                  </ul>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Text
                    onClick={handleScroll7}
                    className="contentBox"
                    style={{ cursor: "pointer" }}
                  >
                    7. Chăm sóc cá Koi như thế nào cho lên màu đẹp và mau lớn
                  </Text>
                  <ul>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll71}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        7.1. Hồ nuôi cá koi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        7.2. Thức ăn của cá koi
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        7.3. Cách chăm sóc và cách nuôi cá koi chuẩn nhất
                      </Text>
                    </li>
                  </ul>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Text
                    onClick={handleScroll8}
                    className="contentBox"
                    style={{ cursor: "pointer" }}
                  >
                    8. Các bệnh thường gặp ở cá koi
                  </Text>
                  <ul>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll71}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        8.1. Cá Koi bị đỏ mình
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        8.2. Bệnh Cá Koi nằm đáy, co mình, hay nhảy khỏi mặt
                        nước.
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        8.3. Cá Koi bị stress
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        8.4. Cá koi bị nhát người
                      </Text>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Text
                        onClick={handleScroll72}
                        className="contentBox"
                        style={{ cursor: "pointer" }}
                      >
                        8.5. Cá Koi bị đục mắt
                      </Text>
                    </li>
                  </ul>
                  <li style={{ paddingTop: "10px" }}>
                    <Text
                      onClick={handleScroll7}
                      className="contentBox"
                      style={{ cursor: "pointer" }}
                    >
                      9. Giá cá Koi bao nhiêu tại Siêu thị Cá Koi VN
                    </Text>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <Text
                      onClick={handleScroll7}
                      className="contentBox"
                      style={{ cursor: "pointer" }}
                    >
                      10. Mua cá Koi Nhật ở đâu đẹp, đảm bảo chất lượng uy tín
                    </Text>
                  </li>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="noidungchitiet">Nội dung chi tiết</h2>
              <Paragraph style={{ fontSize: "20px", fontWeight: "400" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Cá Koi{" "}
                </span>
                được coi là dòng cá cảnh yêu thích nhất trên thế giới. Để tìm
                hiểu thêm về đặc điểm và cách chăm sóc của dòng cá này, hãy đọc
                bài viết sau của Siêu Thị Cá Koi VN.
              </Paragraph>
            </div>
            <div id="1">
              <h3 style={{ color: "red" }}>1. Tìm hiểu về cá Koi là cá gì</h3>
              <div>
                <Paragraph className="paragraph-Style">
                  Cá Koi là một tên gọi của một giống cá có quan hệ gần với cá
                  chép vàng. Nó còn có tên gọi khác là: cá chép Koi (Tiếng Nhật:
                  鯉 / こい) hoặc cá chép Nhật theo cách gọi quen thuộc của Việt
                  Nam. Dòng cá này có xuất xứ từ Nhật với cái tên Nishikigoi.
                  Trải qua sự thuần hóa và lai tạo, thời điểm hiện tại dòng cá
                  này đã trở thành một vật nuôi làm cảnh được rất nhiều gia đình
                  yêu thích.
                  <br />
                  <br />
                  Theo{" "}
                  <a
                    href="https://vi.wikipedia.org/wiki/Koi"
                    style={{ fontSize: "20px" }}
                  >
                    Wikipedia
                  </a>
                  , giống cá koi này thuộc:
                </Paragraph>

                <div>
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    1.1. Nguồn gốc của cá Koi{" "}
                  </span>
                  <Paragraph className="paragraph-Style">
                    <br />
                    Cá koi ban đầu được xem là xuất xứ từ Trung Quốc, nhưng sau
                    đó đã được nhập vào Nhật Bản từ đầu thế kỉ 19. Tại đây,
                    chúng đã được thuần hóa, lai tạo qua nhiều đời để nuôi làm
                    cá cảnh. Tên gọi ban đầu của chúng là "cá chép Nishikigoi"
                    (tiếng Nhật: 錦鯉/ にしきこい), có nghĩa là cá chép thổ cẩm
                    hoặc cá chép có nhiều màu sắc.
                  </Paragraph>
                  <div style={{ textAlign: "center" }}>
                    <img src="src/assets/CaKoiNhat/1.webp" />
                    <Paragraph className="paragraph-Style">
                      Cá Koi có nguồn gốc từ Nhật Bản
                    </Paragraph>
                  </div>
                  <Paragraph className="paragraph-Style">
                    Để tôn vinh hoàng tử Hirohito, năm 1914 Nhật Bản cho tổ chức
                    triển lãm các giống cá Koi tại Tokyo và đảo Niigata. Từ đó,
                    cá Koi Nhật Bản được biết đến rộng rãi và tên cá Koi được
                    công nhận. Trong tiếng Nhật, "Koi" có nghĩa là cá chép, đồng
                    âm khác nghĩa với nó là tình yêu và yêu mến.
                  </Paragraph>
                </div>
                <div>
                  {" "}
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    1.2. Đặc điểm của cá koi thuần chủng
                  </span>
                  <Paragraph className="paragraph-Style">
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Kích thước
                    </span>
                    : Cá chép koi là loài cá cảnh tương đối lớn, chiều dài trung
                    bình khi trưởng thành khoảng 1m. Cân nặng thay đổi dao động
                    từ 6 đến 8 kg. Tuy nhiên vẫn có những chú cá koi có kích
                    thước dài tới 2m và cân nặng tới
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Tuổi thọ
                    </span>
                    : {""}Cá Koi thông thường có thể sống trong khoảng từ 40 đến
                    60 năm. Tuy nhiên, nếu chúng được nuôi trong điều kiện tốt:
                    nguồn nước đảm bảo, đầy đủ thức ăn, không có kẻ thù, cá Koi
                    có thể sống tới 230 năm
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Thân hình:
                    </span>
                    <ul>
                      <li>
                        Cá Koi có thân tương đối tròn, dài và thu nhỏ ở phần
                        đuôi. Phần lưng có vây tia mềm và một cặp vây gần mang.
                        Đặc điểm này giúp cho cá Koi có thể bơi lội một cách
                        linh hoạt.
                      </li>
                      <li>
                        Đuôi của cá Koi thường ngắn, chia đôi ở giữa, chỉ có một
                        màu và không có hoa văn.
                      </li>
                      <li>
                        Đầu cá Koi nhỏ với miệng rộng, đẹp và có một đôi râu ở
                        hai bên mép. Cá Koi có kích thước mắt vừa phải và không
                        bao giờ nhắm.
                      </li>
                    </ul>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Màu sắc
                    </span>
                    <ul>
                      <li>Màu Kohaku: có màu trắng pha với màu đỏ</li>
                      <li>Màu Showa Sanke: kết hợp giữa màu đỏ và đen</li>
                      <li>Màu Utsurimono: kết hợp giữa màu trắng và đen</li>
                      <li>Màu Shiro Bekko: màu đen trộn với màu trắng</li>
                      <li>Màu Ki Utsuri: kết hợp giữa màu vàng và màu đen</li>
                      <li>Màu Kinginrin: màu bạch kim pha với màu vàng kim</li>
                      <li>
                        Màu Tancho: màu trắng toàn thân và trên đỉnh đầu có vòng
                        tròn màu đỏ, tương đồng với quốc kỳ của Nhật Bản.
                      </li>
                    </ul>
                    <div style={{ textAlign: "center" }}>
                      <img src="src/assets/CaKoiNhat/2.webp" />
                      <Paragraph className="paragraph-Style">
                        Cá Koi có tuổi thọ cao
                      </Paragraph>
                    </div>
                  </Paragraph>
                </div>
                <div>
                  {" "}
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    1.3. Đặc tính sinh sản, sinh trưởng của cá koi
                  </span>
                  <Paragraph className="paragraph-Style">
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Tập tính ăn uống của cá koi:
                    </span>
                    Cá Koi là một loại cá ăn tạp và phàm ăn. Tuy nhiên, thức ăn
                    cho chúng phải đảm bảo vệ sinh và sạch sẽ, cần chú ý đến
                    nguồn gốc thức ăn để tránh ảnh hưởng đến hình dáng và màu
                    sắc cá sau này. Ngoài ra, hãy chú ý đến số lượng thức ăn cho
                    chúng vì không nên cho quá nhiều ăn.
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Tập tính sinh sản của cá koi:
                    </span>
                    Cá chép koi sống trong hồ nhân tạo, trong điều kiện tốt sẽ
                    sống được tới 25 - 35 năm. Sau khoảng 1 năm koi bắt đầu đẻ
                    trứng, cá koi cái 2-3 tuổi có thể đẻ khoảng 150-200 nghìn
                    trứng mỗi lần. Cá thường đẻ vào khoảng 4 - 5 giờ sáng, sau
                    khoảng 26 - 48 giờ ở nhiệt độ 28 đến 30 độ C cá sẽ nở.
                    <br />
                    Khi tuổi tác và nhiệt độ của môi trường thay đổi, màu sắc và
                    hình dạng của cá kiểng cá koi sẽ liên tục thay đổi, giống
                    như một bức tranh màu mà bạn tự vẽ lên. Nếu cá koi pha quá
                    nhiều màu, bị lem hoặc bị biến dạng thì sẽ bị loại và không
                    được chọn.
                    <div style={{ textAlign: "center" }}>
                      <img src="src/assets/CaKoiNhat/3.webp" />
                      <Paragraph className="paragraph-Style">
                        Cá Koi có nhiều loại với vẻ đẹp khác nhau
                      </Paragraph>
                    </div>
                  </Paragraph>
                </div>
                <div>
                  {" "}
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    1.4. Phân loại cá koi
                  </span>
                  <Paragraph className="paragraph-Style">
                    <br />
                    Hiện nay, trên thị trường mua bán các dòng cá chép Koi đẹp
                    các dân chơi cá Koi chia cá làm hai loại cá Koi chính và hai
                    loại này có những đặc điểm khác nhau như:
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Cá Koi chuẩn:
                    </span>
                    Là dòng cá cảnh cá Koi có hình thể giống như cá nguyên thủy.
                    Điểm khác duy nhất là trên thân cá phần dọc sống lưng pha
                    trộn nhiều màu sắc đa dạng hơn và khi nhìn từ trên xuống có
                    một vẻ đẹp đặc biệt ấn tượng. Do đó dòng cá koi chuẩn này
                    chỉ thích hợp nuôi ở cá ao hồ
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Cá Koi bướm
                    </span>
                    Là loại cá cảnh Koi còn được gọi với cái tên mỹ miều là cá
                    chép rồng. Loại cá này còn phần vi, vây và đuôi dài hơn cùng
                    dáng bơi uyển chuyển rất đẹp mắt. Thông thường, cá Koi bướm
                    sẽ chọn nuôi trong tủ kiếng và các loại ao lớn. Dòng cá này
                    bắt đầu được nhân giống vào năm 1980 tại Nhật Bản
                  </Paragraph>
                </div>
              </div>
              <div id="detailed-content">
                <h3 style={{ color: "red" }}>
                  2. Các loại cá Koi phổ biến được ưa chuộng trên thị trường
                </h3>
                <Paragraph className="paragraph-Style">
                  Trong quá trình lai tạo và phát triển cá koi kiểng, đã sản
                  sinh ra rất nhiều dòng cá koi đẹp. Tuy nhiên không phải ai
                  cũng biết cá koi có bao nhiêu loại và phân biệt được các loại
                  cá koi cảnh này. Cùng tìm hiểu các dòng cá được ưa chuộng và
                  phổ biến tại Việt Nam
                  <div>
                    <span id="21">2.1. Tìm hiểu về Cá koi Kohaku</span>
                    <span style={{ fontWeight: "bold", color: "blue" }}>
                      Cá Koi Kohaku
                    </span>{" "}
                    là dòng cá koi được ưa thích và phổ biến nhất trên thị
                    trường. Với đặc điểm trên thân sẽ có màu đỏ và màu trắng là
                    dòng cá đặc trưng có khả năng sinh sản rất tốt, và cũng là
                    một trong những dòng cá có tuổi thọ cao. Chính vì vậy mà nó
                    còn được gọi là “Cá Trường Thọ”.
                    <div style={{ textAlign: "center" }}>
                      <img src="src/assets/CaKoiNhat/4-1.jpg" />
                      <Paragraph>Cá koi Kohaku</Paragraph>
                    </div>
                  </div>
                  <div>
                    <span id="22">2.2. Tìm hiểu về cá koi Chagoi</span>
                    <span style={{ fontWeight: "bold", color: "blue" }}>
                      Cá koi chagoi
                    </span>{" "}
                    được mệnh danh là loài cá koi dẫn đàn, loài cá này có sức
                    sống rất mạnh, có khả năng bơi nhanh, đuôi vẫy mạnh, thân
                    thiện và giản dị nên là loài cá được nuôi phổ biến. Loại cá
                    koi chagoi này có đặc điểm là màu sắc đặc, không có màu.
                    Giống cá này khá phàm ăn, do đó chúng lớn nhanh chóng và dễ
                    dàng đạt được kích thước lớn sau một thời gian ngắn nuôi.
                    <div style={{ textAlign: "center" }}>
                      <img src="src/assets/CaKoiNhat/4-2.jpg" />
                      <Paragraph>
                        Cá Koi Chagoi là một dòng cá được nuôi phổ biến
                      </Paragraph>
                    </div>
                    Vây ngực, vây lưng và đuôi của cá koi chagoi khá dày và
                    cứng, râu dài và cứng. Cá koi chagoi được chia làm 3 loại
                    theo màu sắc: chagoi nâu, chagoi xanh nhạt, chagoi xanh xám.
                  </div>
                  <div>
                    <span id="23">2.3. Tìm hiểu về cá koi Taisho Sanke</span>
                    Sanke là một trong ba giống koi thuần chủng phổ biến nhất –
                    Gosanke. Gosanke bao gồm 3 dòng là Kohaku koi, Showa và
                    Sanke. Do đó, đặc điểm của cá là cơ thể vẫn giữ màu đỏ,
                    trắng giống Kohaku, và xen lẫn với màu đen. Vẻ đẹp và giá
                    trị của cá koi Taisho Sanke được đánh giá bằng các mảng màu
                    trắng trên thân. Được mệnh danh là “tam hùng” trong các loại
                    cá, giống cá koi Taisho Sanke được ưa chuộng ở khắp nơi trên
                    thế giới, mảng trắng càng nhiều, cá càng sạch, càng đẹp và
                    giá trị sẽ tăng
                  </div>
                  <div>
                    <span id="24">
                      2.4. Tìm hiểu về cá koi showa sanshoku (showa)
                    </span>
                    Đặc điểm của Cá koi Showa trên thân sẽ có màu đỏ - trắng -
                    đen giống dòng Taisho Sanke, tuy nhiên lại sở hữu sắc đen,
                    thường gọi là sumi hoàn toàn khác biệt. cá koi showa
                    sanshoku có phần sumi nhiều hơn, xuất hiện ở đầu xuống tới
                    miệng còn Taisho Sanke thì hoàn toàn không có.
                    <div style={{ textAlign: "center" }}>
                      <img src="src/assets/CaKoiNhat/5.webp" />
                      <Paragraph>Phân biệt cá koi Showa và Sanke</Paragraph>
                    </div>
                    Cá koi showa sanshoku còn được gọi là "cá chép may mắn". Cá
                    sẽ có một nắp đen lớn trên đầu, khi đó 3 màu đỏ, đen, trắng
                    sẽ được phân bổ đồng đều, sẽ có nhiều màu đen hơn giống cá
                    koi sanke. Người ta tin rằng màu đen sẽ giết chết tà ma, xua
                    đuổi vận đen và mang lại may mắn. Vì vậy, nhiều thương lái,
                    chủ cửa hàng đã chọn loại cá này để nuôi. Chính vì vậy mà
                    chú cá koi Showa được mọi người đặc biệt ưa chuộng.
                    <br />
                    Showa được chia thành nhiều dòng khác nhau, phổ biến nhất
                    là: Hi Showa, Tancho Showa, Maruten Showa, Ginrin Showa,
                    Kindai Showa
                  </div>
                  <div>
                    <span id="25">2.5. Tìm hiểu về cá koi Goromo </span>
                    Cá koi Nhật Bản Goromo chính là sự lai tạo phát triển lên từ
                    hai loại cá Koi nhật là Kohaku và Asagi. Cá koi Goromo có
                    thân hình nổi bật là các đường nét hoa văn nổi trên màu
                    trắng hoặc màu sắc trắng sữa, xen lẫn vào là màu đỏ hết sức
                    đặc biệt
                    <div style={{ textAlign: "center" }}>
                      <img src="src/assets/CaKoiNhat/6.jpg" />
                      <Paragraph>Cá koi Goromo</Paragraph>
                    </div>
                  </div>
                  <div>
                    <span id="26">2.6. Tìm hiểu về cá koi Hikari Utsuri</span>
                    Là loại cá Koi được lai tạo từ cá koi utsuri. Cá koi Hikari
                    Utsuri thuộc dòng cá kim loại có màu sắc cơ bản bao gồm là
                    đen - vàng, đen - trắng, đen - cam…
                    <div style={{ textAlign: "center" }}>
                      <img src="Frontend/src/assets/CaKoiNhat/7.jpg" />
                      <Paragraph>Cá koi Hikari Utsuri</Paragraph>
                    </div>
                  </div>
                  <span id="27">2.7. Tìm hiểu cá koi Bekko</span>
                  Cá koi bekko có hình dạng tương đối giống Utsuri, trên thân
                  chỉ có 2 màu sắc là: Shiro Bekko (trắng – đen), Aka Bekko (đỏ
                  – đen) hoặc Ki Bekko (vàng – đen).
                  <br />
                  Đặc điểm của cá koi bekko là mắt to, mình rong và vảy đục
                  không có ánh kim, phần vai và bụng thường mập và có xu hướng
                  bầu và tròn hơn các loại Koi khác.
                  <span id="28">2.8. Tìm hiểu về cá koi Asagi</span>
                  Cá koi asagi có thể nói là một trong những dòng koi đầu tiên
                  xuất hiện tại Nhật. Trải qua một khoảng thời gian dài khoảng
                  160 năm, Asagi với hai dòng Narumi Asagi và Kongo Asagi đã cho
                  ra những hậu duệ của giống Asagi Magoi (Narumi là tên của ngôi
                  làng sản sinh ra toàn bộ giống Asagi)..
                  <div style={{ textAlign: "center" }}>
                    <img src="Frontend/src/assets/CaKoiNhat/8.jpg" />
                    <Paragraph>Cá koi Asagi</Paragraph>
                  </div>
                  <span id="29">2.9. Tìm hiều về cá koi Goshiki </span>
                  Về cá koi Goshiki trong tiếng nhật có nghĩa là “ngũ sắc”, cũng
                  được mệnh danh là những “kẻ đánh cắp ánh đèn sân khấu. Từ đó
                  ta có thể thấy được màu sắc đặc biệt của cá Koi đẹp này. Nếu
                  thả loại cá koi này vào nước lạnh thì màu của nó có khả năng
                  sẽ tối hơn so với bình thường
                  <div style={{ textAlign: "center" }}>
                    <img src="Frontend/src/assets/CaKoiNhat/9.jpg" />
                    <Paragraph>
                      Cá koi Goshiki - kẻ đánh cắp ánh đèn sân khấu
                    </Paragraph>
                  </div>
                  <span id="210">2.10. Tìm hiểu Cá koi Karashi</span>
                  <span style={{ fontWeight: "bold", color: "blue" }}>
                    Karashi Koi
                  </span>{" "}
                  là dòng cá được gây giống từ 2 giống cá cha mẹ là Kigoi và
                  Chagoi, có màu sắc biến đổi từ màu be, màu vàng nhạt đến màu
                  vàng đậm. Thời điểm mới được lai tạo những chú cá Koi Karashi
                  bị nhiều người coi là kỳ lạ. Trải qua nhiều năm, giá trị của
                  cá koi Karashi dần dần mới được công nhận, và nhanh chóng trở
                  nên nổi tiếng và được nhiều người yêu thích.
                  <div style={{ textAlign: "center" }}>
                    <img src="Frontend/src/assets/CaKoiNhat/10.jpg" />
                    <Paragraph>
                      Đây là loại cá lớn nhanh, dễ đạt kích cỡ lớn sau 2-3 năm
                      nuôi thích hợp, cá có khả năng thích nghi cao với môi
                      trường và dạn người.
                    </Paragraph>
                  </div>
                  <span id="211">
                    2.11. Tìm hiểu về cá koi Benigoi (mud pond)
                  </span>
                  <span style={{ fontWeight: "bold", color: "blue" }}>
                    Cá koi Benigoi
                  </span>{" "}
                  thuộc dòng cá koi đơn sắc với tông màu đỏ nổi bật. Toàn bộ
                  vảy, vây và từ chóp mũi đến đuôi đều là màu đỏ, hoàn toàn
                  không có vạch hay mảng màu trắng nào. Vì vậy, trông loại cá
                  này giống như một quả ớt khổng lồ.
                  <br />
                  Khá nhiều người nhầm lẫn cá chép koi Benigoi và Higoi với nhau
                  bởi đều cùng màu đỏ. Tuy nhiên, nếu để ý kỹ thì dễ dàng nhận
                  thấy, koi Higoi có tông màu đỏ hơi cam, còn koi Benigoi thì
                  toàn thân đỏ sậm. Đặc biệt, với dòng koi Ginrin (kích thước
                  nhỏ) thì chỗ vảy sẽ phát quang lấp lánh, óng ánh. Đây là loại
                  cá có khá dễ sống, có khả năng thích nghi cao với môi trường
                  <div style={{ textAlign: "center" }}>
                    <img src="Frontend/src/assets/CaKoiNhat/11.jpg" />
                    <Paragraph>
                      Koi Benigoi toàn thân màu đỏ như một quả ớt khổng lồ, phần
                      vây có thể phản quang nếu thuộc biến thể Ginrin
                    </Paragraph>
                  </div>
                  <span id="212">2.12. Cá Koi Hikarimuji mono</span>
                  <span style={{ fontWeight: "bold", color: "blue" }}>
                    Cá koi Benigoi
                  </span>{" "}
                  Hikarimuji mono được yêu thích do đặc điểm có ánh kim loại ở
                  mặt sau và chỉ có 1 màu sắc duy nhất trên thân mình. Các dòng
                  koi Hikarimuji mono phổ biến: platinum ogon (màu trắng bạc),
                  hi ogon (màu đỏ), nezu ogon (màu đen), yamabuki ogon (màu
                  vàng), orenji ogon (màu cam) và mukashi ogon (màu xám
                  bạc).Hikarimuji mono được yêu thích do đặc điểm có ánh kim
                  loại ở mặt sau và chỉ có 1 màu sắc duy nhất trên thân mình.
                  Các dòng koi Hikarimuji mono phổ biến: platinum ogon (màu
                  trắng bạc), hi ogon (màu đỏ), nezu ogon (màu đen), yamabuki
                  ogon (màu vàng), orenji ogon (màu cam) và mukashi ogon (màu
                  xám bạc).
                </Paragraph>
              </div>
              <div id="3">
                <h3 style={{ color: "red" }}>
                  3. Các giống kohaku phổ biến nhất
                </h3>
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <img
                    src="src/assets/gioithieukoikohaku.webp"
                    style={{ objectFit: "cover", width: "70%" }}
                  />
                </div>
                <ul>
                  <li>
                    <span className="span-Style">Menkaburi Kohaku</span>
                    <Text className="text-Style">
                      : dấu hiệu nhận biết của giống Kohaku này là toàn bộ phần
                      đầu cá được bao phủ bởi màu đỏ, phần đỏ trên đầu sẽ tách
                      biệt với màu đỏ ờ phần thân
                    </Text>
                  </li>
                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Hanatsuke Kohaku</span>
                    <Text className="text-Style">
                      : cách để phân biệt giống này cũng khá là đơn giản đó là
                      có màu đỏ ở phần mũi của cá kéo dài lên phần đầu và thân.
                    </Text>
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/hanatsukekohaku.webp"
                        style={{
                          width: "50%",
                          paddingTop: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Hanatsuke Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Inazuma Kohaku</span>
                    <Text className="text-Style">
                      : Vùng đỏ của giống cá này trải dài từ đầu thới đôi theo
                      hình ziczac vô cùng đặc biệt
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/inazumakohaku.webp"
                        style={{
                          width: "30%",
                          paddingTop: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Inazuma Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Goten Sakura Kohaku</span>
                    <Text className="text-Style">
                      : Phần đỏ trên đầu tương đối giống tancho kohaku. Ngoài ra
                      trên thân còn có các đốm đỏ phân bổ đều trên thân
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/gotensakurakohaku.webpp"
                        style={{ width: "50%", paddingTop: "20px" }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Goten Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Tancho Kohaku</span>
                    <Text className="text-Style">
                      : Dòng cá này rất được coi trọng ở nhật vì nó trong giống
                      là quốc kỳ của họ. Toàn thân cá có màu trắng, không có một
                      vết gì, đồng thời trên đầu có khoang đỏ với nhiều hình
                      dạng khác nhau rất dễ phân biệt
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/tanchokohaku.webp"
                        style={{ width: "50%", paddingTop: "20px" }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">Giống Tancho Koi</Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Kuchibeni kohaku</span>
                    <Text className="text-Style">
                      : giống cá này đặc biệt ở chỗ khi có một chấm đỏ ở mũi,
                      tách biệt với các khoang đỏ khác trên thân cá. Điều này
                      khác với Hanatsuke Kohaku Koi khi có chấm đỏ ở mũi và kéo
                      dài lên phần đầu
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/kuchibenikohaku.webp"
                        style={{
                          width: "30%",
                          paddingTop: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">Giống Kuchibeni Koi</Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Straight Hi Kohaku</span>
                    <Text className="text-Style">
                      : Điểm đặc biệt của giống cá này là phần đỏ chiếm nhiều
                      trên thân cá, không ngắt quãng từ phần đầu cho tới phần
                      chân.
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/straighthikohaku.webp"
                        style={{ width: "30%", paddingTop: "20px" }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Straight Hi Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Nidan Kohaku</span>
                    <Text className="text-Style">
                      : Cũng giống như Straight Hi Kohaku khi màu đỏ chiếm đa số
                      trên thân. Tuy nhiên dòng cá này khác biệt ở chỗ sẽ có
                      phần trắng ở giữa thân chia phần đỏ thành 2 phần
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/nidankohaku.webp"
                        style={{
                          width: "30% ",
                          paddingTop: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Nidan Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Sandan Kohaku</span>
                    <Text text-Style>
                      : phần màu đỏ sẽ chia thành 3 khoang riêng biệt là đầu,
                      thân và đuôi
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/sandankohaku.webp"
                        style={{
                          width: "30%",
                          paddingTop: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Sandan Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Yondan Kohaku Koi</span>
                    <Text className="text-Style">
                      Phần khoang đỏ sẽ chia thành 4 phần khác với Sandan Kohaku
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/yandankohakukoi.webp"
                        style={{ width: "30%", paddingTop: "20px" }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Yondan Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Kanoko Kohaku</span>
                    <Text className="text-Style">
                      : Vùng đầu của cá là một khoang màu đỏ sẫm khá đậm, trên
                      thân cá xuất hiện những chấm đỏ li ti.
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/kanokokohaku.webp"
                        style={{ width: "30%", paddingTop: "20px" }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Kanoko Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>

                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <span className="span-Style">Maruten Kohaku</span>
                    <Text className="text-Style">
                      : Cơ thể giống loài cá này có 3-4 ngăn màu đỏ nằm cách xa
                      nhau hoặc thông với nhau. Chấm đỏ trên đầu không được tiếp
                      giáp với khoang đỏ trên cơ thể.
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/marutenkohaku.webp"
                        style={{ width: "30%", paddingTop: "20px" }}
                      />
                      <div style={{ textAlign: "center" }}>
                        <Text className="text-Style">
                          Giống Maruten Kohaku Koi
                        </Text>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="4">
                <h3 style={{ color: "red", fontWeight: "600" }}>
                  4. Sự khác nhau giữa Koi Kohaku Nhật , Koi Kohaku F1
                </h3>
                <p>
                  <span className="span-Style">Về nguồn gốc Kohaku</span>
                </p>
                <ul>
                  <li>
                    <Text className="text-Style">
                      Cá koi kohaku nhật nhập khẩu: là dòng cá thuần chủng được
                      nuôi ở các trại cá ở Nhật Bản và được IKoi nhập khẩu trực
                      tiếp về
                    </Text>
                  </li>
                  <li>
                    <Text className="text-Style">
                      Cá koi kohaku F1: là dòng cá được lai tạo từ cặp cá bố mẹ
                      là cá koi nhật thuần chủng và nuôi lớn ỏ Việt Nam theo quy
                      trình của Nhật Bản
                    </Text>
                  </li>
                </ul>
                <span className="span-Style">Về nguồn gốc</span>
                <ul>
                  <li>
                    <Text className="text-Style">
                      Kohaku Nhật: Cơ thể có 2 màu trắng đỏ, các khoang đỏ thì
                      có màu đỏ như máu, còn khoang trắng thì màu trắng sáng, có
                      vảy ánh bạc. Màu sắc của cá koi Nhật rất tươi sáng và có
                      ranh giới rõ ràng, các đốm to và đều ở hai bên (khi nhìn
                      từ trên xuống, dọc theo sống lưng).
                    </Text>
                  </li>
                  <li>
                    <Text className="text-Style">
                      Kohaku koi F1: Màu sắc của các khoang trên cơ thể sẽ nhạt
                      hơn, thường là màu đỏ cam. Ranh giới giữa các ngăn đỏ và
                      trắng bị mờ, không rõ ràng.
                    </Text>
                  </li>
                </ul>
                <span className="span-Style">Về hình dáng</span>
                <ul style={{ fontWeight: "400", fontSize: "15px" }}>
                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    <Text className="text-Style ">
                      Kohaku Nhật có cặp râu dài và cứng, đầu cá hơi gù, Kohaku
                      F1 cũng có râu nhưng nhỏ và ngắn hơn cá koi nhật.
                    </Text>
                  </li>
                  <li style={{ fontWeight: "400", fontSize: "15px" }}>
                    {" "}
                    <Text className="text-Style">
                      Vây ngực, vây lưng và vây đuôi của koi Nhật Bản thường rất
                      dày và mờ đục (ánh sáng không xuyên qua nhiều được), còn
                      Vây của cá F1, nhỏ, ít mềm và dẻo hơn và ánh sáng dễ chiếu
                      qua hơn.
                    </Text>
                  </li>
                  <li>
                    <Text className="text-Style">
                      Kohaku Nhật khi nhìn từ trên xuống sẽ mập hơn cá koi F1 ở
                      phần đầu và vai. Nhìn ngang sẽ thấy Koi kohaku Nhật có
                      phần hông hơi ngắn tuy nhiên thân hình thì thuôn dài hơn
                      so với koi F1.
                    </Text>
                  </li>
                </ul>
              </div>
              <div id="5">
                <h3 style={{ color: "red", fontWeight: "600" }}>
                  5. Cách chọn cá koi kohaku
                </h3>
                <Text className="text-Style">
                  Cách chọn cá Koi Kohaku đẹp thì bạn cần phải dựa vào màu sắc
                  và dáng bơi để chọn mua cá chuẩn.
                </Text>
                <ul>
                  <li>
                    <span className="span-Style">Màu sắc cá</span>
                    <br />
                    <Paragraph className="paragraph-Style">
                      Đây là yếu tố quan trọng để đánh giá vẻ đẹp của dòng cá
                      Kohaku. Nếu cá Koi có màu sắc rõ ràng, đường ranh giữa các
                      mảng màu trên cá tách biệt rõ ràng, không bị phân lẫn và
                      chồng lên nhau thì đó là một chú cá đẹp nên chọn
                    </Paragraph>
                  </li>
                  <li>
                    <span className="span-Style">Dáng bơi</span>

                    <Paragraph className="paragraph-Style">
                      Bơi là hoạt động hàng ngày của Kohaku koi vì thế để chọn
                      cá Koi tốt bạn nên nhìn dáng bơi của chúng phải uyển
                      chuyển, dáng bơi thẳng, khỏe mạnh lao vun vút về phía
                      trước.
                    </Paragraph>
                  </li>
                  <li>
                    <span className="span-Style">Chất lượng da, vảy</span>
                    <Paragraph className="paragraph-Style ">
                      Đừng nhầm lẫn màu sắc với da bởi một con cá Kohaku trưởng
                      thành sẽ có màu cam đỏ đậm rất đẹp, còn cá Kohaku nhỏ thì
                      màu sắc không rõ ràng. Da cá sẽ là yếu tố quyết định đến
                      vảy cá, nên chọn da cá nhẵn mịn, trơn bóng thì vảy cá
                      Kohaku sẽ đều đặn và chất lượng hơn.
                    </Paragraph>
                  </li>
                </ul>
                <Paragraph className="paragraph-Style ">
                  Ngoài ra bạn có thể dựa vào một số đặc điểm sau khi chọn cá
                  Koi Kohaku gồm:
                </Paragraph>
                <ul>
                  <li>
                    <Text className="text-Style">
                      Màu rõ ràng là màu trắng tinh như tuyệt, đỏ đậm, lớn
                    </Text>
                  </li>
                  <li>
                    <Text className="text-Style">
                      Chú ý phần đầu phải có 2 màu không thể toàn bộ là đỏ hoặc
                      trắng.
                    </Text>
                  </li>
                  <li>
                    <Text className="text-Style">
                      Màu đỏ ở đầu không nên phủ mắt hoặc chỉ phủ một bên mắt
                    </Text>
                  </li>
                  <li>
                    <Text className="text-Style">
                      Màu mắt của cá Koi Kohaku phải là màu trắng không phải màu
                      xanh.
                    </Text>
                  </li>
                  <li>
                    <Text className="text-Style">
                      Phân bố các khoang màu đỏ đều đặn trên cơ thể
                    </Text>
                  </li>
                  <li>
                    <Text className="text-Style">
                      Màu của mũi và vùng chóp đuôi là màu trắng
                    </Text>
                  </li>
                </ul>
              </div>
              <div id="6">
                <h3 style={{ color: "red" }}>6. Cách chăm sóc cá Koi Kohaku</h3>
                <Paragraph className="paragraph-Style">
                  Vì Kohaku koi là loài thông minh có thể sống trong nhiều thập
                  kỷ vì thế khi chăm sóc cá Koi Kohaku bạn cần lưu ý về điều
                  kiện môi trường và yếu tố xung quanh sẽ làm ảnh hưởng tới quá
                  trình phát triển của chúng.
                </Paragraph>
                <ul>
                  <li>
                    <Paragraph className="paragraph-Style">
                      Cá koi có thể tồn tại trong nhiều nhiệt độ nước, khả năng
                      chịu lạnh tốt. Tuy nhiên không nên để đáy hồ bị đóng băng
                      để hạn chế ảnh hưởng cá phát triển.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph className="paragraph-Style">
                      Hạn chế để cá Koi Kohaku tiếp xúc trực tiếp với ánh sáng
                      mặt trời, bạn nên tạo không gian thoáng mát để cá koi thư
                      giãn bên trong.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph className="paragraph-Style">
                      Kohaku koi là dòng ăn tạp nên chúng có thể ăn bất cứ thứ
                      gì như tảo, giun, ốc, côn trùng,.. Tuy nhiên không nên cho
                      cá Koi ăn quá nhiều sẽ dẫn tới thừa cân, gây ô nhiễm môi
                      trường nước trong ao.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph className="paragraph-Style">
                      Nên theo dõi bể cá Koi thường xuyên để biết cá sinh trưởng
                      thế nào, có gặp vấn đề gì không. Nếu bạn không có nhiều
                      kinh nghiệm có thể liên hệ siêu thị cá Koi VN để được tư
                      vấn hỗ trợ, giải đáp thắc mắc nhanh chóng.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph className="paragraph-Style">
                      Luôn giữ độ pH trong bể nuôi trong khoảng 7 - 7,5. Nhiệt
                      độ nước: 20 - 27 độ C. Hàm lượng oxy tối thiểu trong bể
                      nuôi duy trì khoảng 2,5 mg / l.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph className="paragraph-Style">
                      Nếu trong nước có nồng độ Nitrite quá cao hoặc cần thay
                      nước hồ thì không nên thay một lần mà thay dần dần, cứ sau
                      2 ngày thì rút đi mỗi lần khoảng 1/3 thể tích hồ cho đến
                      khi nước hồ trong. .
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph className="paragraph-Style">
                      Cá koi sinh trưởng và phát triển mạnh trong hồ cá koi có
                      thể tích nước trên 1000 Gallon nước, nền tốt, ít cây thủy
                      sinh vì chúng sẽ phá hoại thực vật, ảnh hưởng đến chất
                      lượng nước của hồ. Không nên trang trí quá nhiều thứ trong
                      hồ cá Koi như sỏi, đá cứng,..Bởi cá Kahoku phần lớn ở dưới
                      đáy ao nên thường xuyên tiếp xúc với bề mặt đó. Nếu hồ cá
                      Koi gồ ghề có thể làm xước hoặc nhiễm trùng cá koi
                    </Paragraph>
                  </li>
                </ul>
              </div>
              <div id="7">
                <h3 style={{ color: "red" }}>
                  7. Giá cá Koi Kohaku bao nhiêu ?{" "}
                </h3>
                <Paragraph className="paragraph-Style">
                  Hiện tại IKoi đang cung cấp dòng cá koi Kohaku chuẩn từ cá
                  nhật đến cá F1 với giá cực kỳ ưu đãi. Có thể nói IKoi là một
                  trong những đơn vị cung cấp cá koi với giá rẻ nhất thị trường,
                  mà chất lượng cũng rất đảm bảo. Giá cá koi nhật và f1 như sau
                </Paragraph>
                <div id="71">
                  <h4 style={{ color: "red" }}>7.1 Giá Koi Kohaku F1</h4>
                  <Paragraph className="paragraph-Style">
                    Đối với những con Kohaku f1 có kích thước từ 18cm – 40cm,
                    giá cá koi dao động từ 150.000 – 500.000 VNĐ tùy loại. Cao
                    cấp hơn là những con Kohaku f1 có kích thước từ 50cm – 55cm,
                    được chia làm loại 1, loại 2 và 3. Giá thành dao động từ
                    1.800.000 – 3.000.000 VNĐ tùy loại.
                  </Paragraph>
                </div>
                <div id="72">
                  <h4 style={{ color: "red" }}>
                    7.2 Giá cá koi Kohaku Nhật chuẩn
                  </h4>
                  <Paragraph className="paragraph-Style">
                    Một con cá Koi trưởng thành Nhật Bản như Kohaku koi với kích
                    thước từ 10-15cm sẽ có giá từ 600.000 – 2.000.000VNĐ/con.
                    Ngoài ra còn có con Kohaku Koi thuần chủng … được xếp vào
                    hàng hiếm có kích thước lớn thì giá cá koi lên đến vài nghìn
                    đến hàng chục nghìn USD. Do đó nếu bạn muốn mua hãy liên hệ
                    với chúng tôi để được tư vấn tận tình.
                  </Paragraph>
                </div>
              </div>
              <div id="8">
                <h3 style={{ color: "red" }}>
                  8. Tại sao nên mua Koi Kohaku ở shop chúng tôi ?{" "}
                </h3>
                <Paragraph className="paragraph-Style">
                  Hiện nay có khá nhiều đơn vị cung cấp các dòng Koi Kohaku giá
                  thành và chất lượng trên thị trường. Đặc biệt là người mới bắt
                  đầu chơi cá Koi Kohaku sẽ rất khó khăn khi lựa chọn đơn vị
                  cung cấp cá Koi uy tín cho mình.
                  <br />
                  IKoi một trong những địa chỉ vàng uy tín để bạn lựa chọn mua
                  bán – thiết kế hồ cá Koi chính hãng cho người tiêu dùng. Chúng
                  tôi tự hào mang đến cho bạn nhiều loại cá Koi, trong đó có Koi
                  Kohaku đẹp, giá thành tốt cho bạn. Chưa kể tại đây chúng tôi
                  có đội ngũ chuyên gia giàu kinh nghiệm, tư vấn hỗ trợ lựa chọn
                  mua và chăm sóc cá Koi đúng cách. Vì vậy, nếu có nhu cầu tư
                  vấn, tìm hiểu các dòng cá Koi Kohaku hãy liên hệ ngay với IKoi
                  để được giải đáp nhanh chóng.
                  <br />
                  Một con cá Koi trưởng thành Nhật Bản như Kohaku koi với kích
                  thước từ 10-15cm sẽ có giá từ 600.000 – 2.000.000VNĐ/con.
                  Ngoài ra còn có con Kohaku Koi thuần chủng … được xếp vào hàng
                  hiếm có kích thước lớn thì giá cá koi lên đến vài nghìn đến
                  hàng chục nghìn USD. Do đó nếu bạn muốn mua hãy liên hệ với
                  chúng tôi để được tư vấn tận tình.
                </Paragraph>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%" }}>
              <img src="src/assets/img_4.png" />
            </div>
            <div>
              <img
                src="src/assets/img_5.png"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
