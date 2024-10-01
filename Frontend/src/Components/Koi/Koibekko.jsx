import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
export default function Koibekko() {
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

  const handleScroll21 = () => {
    const element = document.getElementById("21");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll22 = () => {
    const element = document.getElementById("22");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll23 = () => {
    const element = document.getElementById("23");

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
                CÁ KOI BEKKO
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
                      1. Cá Koi Bekko là giống cá gì?
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
                      2. Đặc điểm của cá Koi Bekko
                      <ul>
                        <li style={{ paddingTop: "10px" }}>
                          <span
                            onClick={handleScroll21}
                            style={{
                              color: "blue",
                              cursor: "pointer",
                              fontWeight: "600",
                            }}
                          >
                            2.1 Giá cá koi Shusui F1
                          </span>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <span
                            onClick={handleScroll22}
                            style={{
                              color: "blue",
                              cursor: "pointer",
                              fontWeight: "600",
                            }}
                          >
                            2.2 Giá cá koi Shusui Nhật chuẩn
                          </span>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <span
                            onClick={handleScroll23}
                            style={{
                              color: "blue",
                              cursor: "pointer",
                              fontWeight: "600",
                            }}
                          >
                            2.3 Giá cá koi Shusui Nhật chuẩn
                          </span>
                        </li>
                      </ul>
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
                      3. Cách phân biệt giữa Shiro Bekko và Shiro Utsuri
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
                      4. Cách lựa chọn cá Koi Bekko đẹp nhất
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
                      5. Nên mua cá Koi bekko ở đâu.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 style={{ textAlign: "center", color: "red" }}>
                  Nội dung chi tiết
                </h2>
                <div>
                  <p>
                    <span style={{ fontWeight: "bold", color: "blue" }}>
                      Cá Koi Bekko
                    </span>{" "}
                    là loài cá cảnh được nhiều người yếu thích và săn tìm. Tuy
                    nhiên, bên cạnh cũng vẫn có những người chưa hề biết về loài
                    cá này. Vậy nhân đây, hãy tìm hiểu về nguồn gốc của cá Koi
                    Bekko cũng như những đặc biệt và cách chọn cá Koi Bekko đẹp
                    nhất nhé!
                  </p>
                </div>
              </div>
              <div id="1">
                <h3 style={{ color: "red" }}>
                  1. Cá Koi Bekko là giống cá gì?
                </h3>
                <div>
                  Với những người có đam mê lớn với loài cá chép Koi thì chắc
                  chắn không còn quá xa lại với cái tên Cá Koi Bekko. Nhưng với
                  những người mới bắt đầu nuôi cá Koi thì đây lại được xem là
                  “khái niệm” khá mới mẻ. Vậy cá Koi Bekko là giống cá gì? Có
                  nguồn gốc từ đâu? Cùng tìm hiểu ngay sau đây nhé:
                  <br />
                  Cá Koi Bekko vốn là loại cá Koi thuần chủng, có được gốc từ
                  Koi Sanke. Qua quá trình lai tạo mang màu sắc riêng biệt, nên
                  được gọi là Koi Bekko. Bekko là hoa văn trên mai của 1 loài
                  đồi mồi, cái tên Koi Bekko cũng là vì loài Koi này có những
                  hoa văn trên lưng giống như loài đồi mồi trong mô tả.
                  <br />
                  Cá Koi Bekko còn được phân loại ra thành 3 loại khác nhau đó
                  là: Shi Bekko, Aka Bekko, Ki Bekko
                  <div style={{ textAlign: "center" }}>
                    <img src="src/assets/Koi Bekko/ca-koi-bekko.webp" />
                    <p>Cá Koi Bekko</p>
                  </div>
                </div>
              </div>

              <div id="detailed-content">
                <h3 style={{ color: "red" }}>2. Đặc điểm của cá Koi Bekko</h3>

                <p>
                  Như ở phần trên đã nói cá Koi Bekko được chia ra làm 3 loại
                  khác nhau. Mỗi loại lại có đặc điểm về thân hình và màu sắc
                  khác nhau. Cụ thể là:
                </p>
                <ul>
                  <li>
                    <span id="21" style={{ color: "red", fontWeight: "bold" }}>
                      2.1 Aka Bekko
                    </span>
                    Akamuji: là một loài cá đỏ thông thường và thường xuất hiện
                    trong quá trình sinh sản của loài Kohaku. Trước đây, ở Nhật
                    Bản, các con cá Akamuji thường bị đánh bại để làm cá bột.
                    Tuy nhiên, từ năm 1990, chúng trở nên phổ biến và thường
                    được trưng bày trong thể loại Kawarimono như Benigoi hoặc
                    Hiaka tại triển lãm. Một con cá Akamuji có các mảng trắng
                    trên đầu vây được gọi là Aka Hajiro.
                  </li>
                  <li>
                    <span id="22" style={{ color: "red", fontWeight: "bold" }}>
                      2.2 Ki Bekko
                    </span>
                    Cũng giống như Aka Bekko, Ki Bekko cũng là giống cá Koi
                    Bekko được lai tạo từ Sanke. Tuy nhiên, nền da lại là màu
                    vàng với những đốm đen. Điều này được tạo bởi gen lặn của Ki
                    Bekko, được đánh giá là hiếm hơn rất nhiều so với Aka Bekko.
                    Từ đó có thể thấy những con Ki Bekko đời đầu sẽ được đánh
                    giá rất cao và cực kỳ quý hiếm.
                  </li>
                  <li>
                    <span id="23" style={{ color: "red", fontWeight: "bold" }}>
                      2.3 Shiro Bekko
                    </span>
                    Shiro Bekko là loại cá Koi Bekko có làn da trắng nổi bật với
                    những đốm sumi đen quanh thân mình. Người Nhật Bản cho rằng
                    Shiro Bekko, Aka Bekko và Ki Bekko đều xuất hiện từ Sanke cổ
                    điển. Tất cả những cá Koi Bekko hiện tại đều được sinh sản
                    từ Snake, là sản phẩm phụ của Sanke.
                  </li>
                </ul>
              </div>
              <div id="3">
                <h3 style={{ color: "red" }}>
                  3. Cách phân biệt giữa Shiro Bekko và Shiro Utsuri
                </h3>
                <p>
                  Trong các màu sắc của cá Koi thì cá Koi Bekko Shiro và cá Koi
                  Utsuri Shiro có dáng vẻ khác giống nhau. Vậy làm thế nào để có
                  thể phân biệt được 2 loài này. Cùng tìm hiểu ngay sau đây nhé:
                  <br />
                  Nền da của cá Koi Bekko Shiro là nền da trắng hoàn toàn còn cá
                  Koi Utsuri Shiro có nền da hơi thiên đen.
                  <br />
                  Sumi (đốm đen) trên cá Koi Bekko Shiro thường nhỏ, nhạt và
                  phân tán hơn so với cá Koi Utsuri Shiro. Cá Koi Utsuri Shiro
                  có những đốm sumi to bản, đen đậm hơn nhiều.
                  <br />
                  Koi Bekko Shiro không có sumi đến đầu và Koi Utsuri Shiro có
                  sumi trên đầu. Đây được xem là đặc điểm lớn nhất để phân loại
                  2 loại này.{" "}
                </p>
              </div>
              <div id="4">
                <h3 style={{ color: "red" }}>
                  4. Cách lựa chọn cá Koi Bekko đẹp nhất
                </h3>
                <p>
                  Để lựa chọn được 1 con cá Koi Bekko đẹp, cần dựa vào những
                  tiêu chí sau. Chúng ta hãy cùng tìm hiểu nhé:{" "}
                </p>
                <ul>
                  <li>
                    Điểm nổi bật nhất của một con cá Koi Bekko đó chính là màu
                    da và các đốm sumi trên cơ thể. Như đã nói ở trên cá Koi
                    Bekko có 3 màu cơ bản đó là trắng mịn bóng, vàng và đỏ. Cá
                    Koi Bekko có nền da đỏ rất ít và có nền da vàng lại càng
                    thuộc dạng quý hiếm hơn.{" "}
                  </li>
                  <li>
                    Cá Koi Bekko thường không có sumi ở trên đầu và đuôi, những
                    đốm sumi thường nhỏ nhắn, tái đều cơ thể, con nào có sumi
                    càng đậm con đó càng quý hiếm. Đặc điểm quyến rũ độc đáo
                    nhất của cá Koi Bekko là vệ sumi trên vai và ít sọc ở vây.{" "}
                  </li>
                  <li>
                    Nên chọn những cá Koi Bekko có độ dài từ 30cm - 40cm, thân
                    hình mập mạp, dáng bơi thẳng, đẹp, khỏe mạnh, đôi mắt tinh
                    anh.{" "}
                  </li>
                  <li>
                    Ngoài ra, thân hình cá phải thon dài, cân đối, vai to, đầu
                    nhỏ, bụng không sệ, đuôi thon gọn, các đường cong trên cơ
                    thể mượt mà, đặc biệt là mang cá không được mở to.{" "}
                  </li>
                  <li>
                    Ngoài ra, có thể phân biệt giữa cá Koi Bekko thuần chủng và
                    cá Koi Bekko lai. Koi bekko thuần chủng những chấm đen sumi
                    trên lưng chúng rất rõ nét, màu đỏ máu/đỏ ớt /đỏ cam hoặc
                    màu vàng, màu trắng không bị lẫn lộn bởi các đốm màu nhỏ. Cá
                    koi lai thì ít khi đạt được màu đỏ sắc nét này (hầu hết là
                    màu cam). Ngoài ra cá Koi bekko của Nhật thường có phần đầu
                    sạch, trắng, không xuất hiện điểm đen sumi.
                  </li>
                </ul>
              </div>
              <div id="5">
                <h3 style={{ color: "red" }}>
                  5. Nên mua cá Koi bekko ở đâu.{" "}
                </h3>
                <p>
                  Siêu thị cá Koi là đơn vị cung cấp cá Koi Bekko thuần chủng
                  chất lượng uy tín trên toàn quốc. Cá Koi Bekko tại Siêu thị cá
                  Koi có màu sắc rõ nét vàng, đỏ hoặc trắng, các đốm sumi sậm,
                  phân biệt hoàn toàn với màu sắc tổng thể của cá. Đặc biệt phần
                  đầu sạch, không xuất hiện bất cứ vệt sumi nào.
                  <br />
                  Bên cạnh đó mã cá đẹp, thân hình to lớn, dáng bơi uyển chuyển,
                  cam kết cá hoàn toàn khỏe mạnh, được dưỡng kỹ lưỡng trước khi
                  đến tay người nuôi.
                  <br />
                  Siêu thị cá Koi có những chính sách bán hàng có lợi cho người
                  mua, đã và đang được nhiều khách hàng tin tưởng. Ngoài ra,
                  chúng tôi còn có dịch vụ tư vấn và thi công xây hồ cá Koi đẹp
                  với nhiều kích thước, trên nhiều công trình nhà ở khác nhau.
                  <br />
                  Trên đây là các thông tin vô cùng thú vị về loài cá Koi Bekko.
                  Hy vọng với những thông tin sẽ giúp bạn có thể tích lũy thêm
                  nhiều kiến thức trong lĩnh vực nuôi cá Koi. Đặc biệt hơn là có
                  thể tự mình lựa chọn một con cá Koi bekko đẹp mã, ưng ý. Chúc
                  bạn thành công!
                </p>
                <div>
                  <img src="src/assets/Koi Bekko/ca-koi-bekko-4.webp" />
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
