import { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
export default function Koiginrin() {
  const [menu, setMenu] = useState("home");
  const handleScroll1 = () => {
    const element = document.getElementById("1");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll2 = () => {
    const element = document.getElementById("2");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll3 = () => {
    const element = document.getElementById("3");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll4 = () => {
    const element = document.getElementById("4");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll5 = () => {
    const element = document.getElementById("5");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll6 = () => {
    const element = document.getElementById("6");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll7 = () => {
    const element = document.getElementById("7");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div>
        <div>
          <Navbar menu={menu} setMenu={setMenu} />
        </div>
        <Container>
          <div>
            <div style={{ paddingTop: "110px", textAlign: "center" }}>
              <img
                src="src/assets/Red_Modern_Travel_Presentation__6_-removebg-preview.png"
                style={{ paddingLeft: "1000px", marginTop: "-15px" }}
              />
              <h1
                style={{ marginTop: "-330px", fontWeight: "800", color: "red" }}
              >
                CÁ KOI GINRIN
              </h1>
              <hr />
            </div>
            <div>
              <div
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "2px solid rgba(0, 0, 0, 0.1)",
                  border: "1px solid #797979",
                  color: "black",
                }}
              >
                <h2>Nội Dung Bài Viết</h2>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll1}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      1. Giới thiệu về cá Koi Ginrin
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll2}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      2. Cách nhận biết cá Koi Ginrin
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll3}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      3. Cách chọn mua cá Koi Ginrin
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll4}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      4. Cách chăm sóc Koi Ginrin
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll5}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      5. Giá cá koi Ginrin bao nhiêu?
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll6}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      6. Tại sao nên mua cá Koi Ginrin tại Siêu thị Cá Koi VN
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  Nội dung chi tiết
                </h2>
                <p>
                  Cá Koi Ginrin nổi bật với chiếc vảy phản chiếu màu bạc lấp
                  lánh thu hút người chơi ngay lần đầu tiên. Bài viết này chúng
                  ta sẽ đi khám phá các đặc điểm nổi bật và địa chỉ cung cấp cá
                  Koi Ginrin chất lượng giúp bạn chọn mua được chú cá khỏe mạnh,
                  đẹp nhất.
                </p>
              </div>
              <div id="1">
                <h3 style={{ color: "red" }}>1. Giới thiệu về cá Koi Ginrin</h3>
                <p>
                  Cá Koi Ginrin có nguồn gốc chủ yếu từ Nhật Bản và được lai tạo
                  bởi một nhà bác học tên Eizaburo Hoshino vào khoảng năm 1929.
                  Nhà lai tạo Hoshino gặp một ngư dân đã bắt được một con Magoi
                  koi có vảy lấp lánh tuyệt vời. Vì thế mà ông Hoshino đã quyết
                  định sử dụng loài cá này làm nền tảng để lai tạo và nghiên cứu
                  nên loài Koi Ginrin. Sau quá trình nghiên cứu khoa học việc có
                  hiệu ứng lấp lánh trên thân Koi Ginrin chính là nhờ nhiễm sắc
                  thể guanine. cá Koi Ginrin
                </p>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="src/assets/Koi-Ginrin/ca-koi-kin-ginrin-kohaku-1.webp"
                    style={{ width: "50%" }}
                  />
                  <p>Hình ảnh cá Koi Ginrin</p>
                </div>
              </div>

              <div id="2">
                <h3 style={{ color: "red" }}>2.Cách nhận biết cá Koi Ginrin</h3>
                <div>
                  <ul>
                    <li>Koi Ginrin size 15 – 45</li>
                    <li>Kích thước hồ cá tối thiểu: 1000 gallon</li>
                    <li>Mức độ chăm sóc: Dễ dàng</li>
                    <li>Tính cách: Hòa bình</li>
                    <li>Kích thước tối đa: 90 cm</li>
                    <li>Màu sắc: Vảy ánh Kim</li>
                    <li>Chế độ ăn: Ăn tạp</li>
                    <li>Chất lượng: Đẹp xuất sắc với ánh bạc sáng lấp lánh</li>
                  </ul>
                  <div>
                    <p>
                      Đặc điểm dễ nhận biết nhất của cá Koi Ginrin là màu sắc
                      lấp lánh ánh bạc trên thân và được bao phủ bởi sắc tố đỏ
                      Hi. Các vảy Ginrin thường ở phần đầu hoặc phần vai tiếp
                      tục đến gốc đuôi và hàng vảy này được sắp xếp gọn gàng.
                      Dòng Koi Ginrin này có hiệu ứng lấp lánh trên thân mạnh
                      nhất khi còn nhỏ và mất dần khi cá Koi này già đi. Một con
                      cá Ginrin sẽ phải có ít nhật 2 hàng hoàn chỉnh hoặc tối đa
                      là 3 hàng trở lên để có thể được coi là Koi Ginrin.
                    </p>
                  </div>
                </div>
              </div>
              <div id="3">
                <h3 style={{ color: "red" }}>3. Cách chọn mua cá Koi Ginrin</h3>
                <div>
                  <p>
                    Với sự lấp lánh kiêu sa của những chú cá Koi Ginrin đẹp mắt
                    chắc chắn sẽ mang đến cho không gian sống, làm việc của bạn
                    trở nên hấp dẫn hơn. Theo quan niệm phong thủy, sở hữu cho
                    mình những hồ cá Koi Ginrin hay cá koi karashi sẽ giúp gia
                    chủ có sự may mắn, hạnh phúc và phát triển hơn trong cuộc
                    sống và sự nghiệp.
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="src/assets/Koi-Ginrin/showa-grinrin.webp"
                    style={{ width: "50%" }}
                  />
                </div>
                <div>
                  <ul>
                    <li>
                      Không nên chọn kích thước cá lớn bởi không phải gia đình
                      nào cũng có bể cá Koi phù hợp để cá phát triển tốt nhất.
                    </li>
                    <li>
                      Chọn cá có mắc hoa văn rõ ràng, vây không xỉn màu, sắc nét
                      vì Koi Ginrin thuần chủng có sức sống tốt.
                    </li>
                    <li>
                      Hạn chế chọn cá có cơ thể bị trầy xước, không cân đối
                    </li>
                    <li>
                      Nên chọn cá Koi Ginrin có dáng bơi tròn, uyển chuyển, uốn
                      lượn đẹp mắt.
                    </li>
                    <li>
                      Vảy cá Ginrin sẽ bắt đầu ở vai hoặc đầu sau đó kéo dài đến
                      đuôi và ở hai bên da lưng với tỉ lệ hàng vẩy gọn gàng. Nếu
                      là vảy Koi Ginrin sẽ bao phủ bởi sắc tố đỏ, trên thân Koi
                      xuất hiện mảng lấp lánh màu vàng được gọi là Kin Ginrin.
                      Còn vảy Koi Ginrin bao phủ bởi sắc tố đen hoặc trắng còn
                      thân Koi xuất hiện mảng lấp lánh ánh màu bạc thì gọi là
                      Ginrin.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="4">
                <h3 style={{ color: "red" }}>4. Cách chăm sóc Koi Ginrin</h3>
                <div>
                  <p>
                    Để chăm sóc cá Koi Ginrin phát triển khỏe mạnh và toàn diện
                    nhất thì bạn cần phải chú ý đến các yếu tố xung quanh sau:
                  </p>
                  <ul>
                    <li>
                      Dù là dòng cá ăn tạp nhưng cần có chế độ ăn uống phù hợp,
                      chia ra làm các bữa nhỏ, hạn chế để cá ăn quá no.
                    </li>
                    <li>
                      Môi trường nước hơi kiềm, có độ pH từ 7.2 – 7.3 và yêu cầu
                      lượng oxy hòa tan cao nên bạn cần bơm sục khí thường
                      xuyên.
                    </li>
                    <li>
                      Nhiệt độ thích hợp để cá sinh trưởng và phát triển là từ
                      20 – 25 độ C còn mùa đông nếu nhiệt độ quá lạnh thì nên
                      giảm lượng thức ăn đi.
                    </li>
                    <li>
                      Thiết kế hồ cá Koi có diện tích phù hợp theo tập tính
                      thích nghi của cá. Thường xuyên vệ sinh, giữ hồ nước sạch,
                      nhiệt độ thích hợp.
                    </li>
                    <li>
                      Ở hồ cá Koi Ginrin không nên trồng cây thủy sinh vì Koi có
                      thói quen đào thức ăn gây ra ô nhiễm nguồn nước.
                    </li>
                    <li>
                      Hồ cá Koi cũng phải có đầy đủ hệ thống lọc, hút đáy, tạo
                      đồng, hệ thống oxy,.. để giúp tạo nguồn nước sạch, cá sinh
                      trưởng tốt.
                    </li>
                    <li>
                      Thường xuyên theo dõi bể cá để dễ dàng phát hiện cá lười
                      ăn, bơi chậm phải cách ly ngay sang một bể cá khác đã
                      chuẩn bị sẵn. Nếu bạn không có kinh nghiệm xử lý thì liên
                      hệ với những đơn vị chuyên cung cấp các dịch vụ cá Koi để
                      được hỗ trợ và xử lý sớm nhất.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="5">
                <h3 style={{ color: "red" }}>
                  5. Giá cá koi Ginrin bao nhiêu?
                </h3>
                <div>
                  <p>
                    Hiện tại Siêu thị Cá Koi Vn đang cung cấp dòng cá koi Ginrin
                    chuẩn từ cá nhật đến cá F1 với giá cực kỳ ưu đãi. Có thể nói
                    Siêu thị Cá Koi VN là một trong những đơn vị cung cấp cá koi
                    với giá rẻ nhất thị trường, mà chất lượng cũng rất đảm bảo.
                    Giá cá koi nhật và f1 như sau
                    <br />
                    Một con cá Koi trưởng thành Nhật Bản như Ginrin Chagoi,
                    Kohaku, Utsuri với kích thước từ 15cm – 25cm sẽ có giá từ
                    1.200.000 – 4.500.000 VNĐ/con.
                    <br />
                    Ngoài ra các dòng cá koi Ginrin Showa, Sanke, Asagi, Benigoi
                    có kích thước lớn từ 25-30 cm sẽ có giá dao động từ
                    2.200.000 – 6.500.000 VNĐ/con.
                  </p>
                </div>
              </div>
              <div id="6">
                <h3 style={{ color: "red" }}>
                  Tại sao nên mua cá Koi Ginrin tại Siêu thị Cá Koi VN
                </h3>
                <div>
                  <p>
                    Nhu cầu chơi cá Koi ngày càng nhiều trên thị trường, để chọn
                    mua được cá Koi Ginrin khỏe, đẹp là điều không hề dễ dàng.
                    Bởi vì nếu bạn không phải là người “sành ” về dòng cá này sẽ
                    rất dễ mua phải cá kém chất lượng. Một địa chỉ uy tín cho
                    bạn lựa chọn chính là siêu thị cá Koi VN. Đơn vị với nhiều
                    năm kinh nghiệm trong lĩnh vực thiết kế và cung cấp cá Koi
                    chính hãng cho người tiêu dùng.
                    <br />
                    Với đa dạng các mẫu cá Koi đẹp, giá thành tốt, đội ngũ tư
                    vấn nhiệt tình đây sẽ là địa chỉ tốt nhất cho bạn khi có nhu
                    cầu mua cá Koi. Nếu bạn cần tư vấn mua cá Koi Ginrin hãy
                    liên hệ ngay với siêu thị cá Koi VN để được hỗ trợ nhanh
                    chóng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div style={{ display: "flex" }}>
          <div>
            <img src="src/assets/img_4.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="src/assets/img_5.png" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            backgroundImage: `url("src/assets/pexels-quang-nguyen-vinh-222549-2131828.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: "100px",
              color: "white",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                color: "black",
                fontSize: "20px",
                marginTop: "70px",
                marginLeft: "20px",
              }}
            >
              <h1 style={{ color: "white" }}>Điểm nổi bật của KoiStoreVN</h1>

              <ul style={{ fontSize: "16px", color: "white" }}>
                <li style={{ marginTop: "10px" }}>
                  {" "}
                  Cá nhập khẩu chất lượng cao, nhập trực tiếp tại các trang trại
                  Cá Koi Nhật Bản
                </li>
                <li style={{ marginTop: "10px" }}>
                  {" "}
                  Khách hàng yên tâm nuôi cá vì luôn có chuyên gia đồng hành
                </li>
                <li style={{ marginTop: "10px" }}>
                  {" "}
                  Đa dạng sản phẩm, dịch vụ chăm sóc Cá Koi và Hồ Cá Koi
                </li>
                <li style={{ marginTop: "10px" }}>
                  {" "}
                  KoiStoreVN tự hào là đơn vị đầu tiên tại miền bắc được chuyển
                  giao công nghệ mô hình trại SAKAI (Sakai fish farm, Hiroshima,
                  Japan)
                </li>
                <li style={{ marginTop: "10px" }}>
                  Trại gồm 120 hồ lớn chuẩn theo mô hình trại SAKAI
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
