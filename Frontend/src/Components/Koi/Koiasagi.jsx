import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CardGrid from "../Cardgrid";
import Footer from "../Footer";
import axios from "axios";
export default function Koiasagi() {
  const [menu, setMenu] = useState("home");
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState("KOI ASAGI"); // Thay thế với giống cá bạn muốn lọc
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
  const handleScroll61 = () => {
    const element = document.getElementById("61");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll62 = () => {
    const element = document.getElementById("62");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66fd0298c3a184a84d18b799.mockapi.io/Koi"
        );
        setCardData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const filteredCards = cardData.filter((card) => card.Breed === selectedBreed); // Ví dụ: lọc theo độ tuổi lớn hơn 20000
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
                CÁ KOI ASAGI
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
                <h2 style={{ color: "red" }}>Nội Dung Bài Viết</h2>
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
                      1. Giới thiệu về cá Koi Asagi
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
                      2. Cách nhận biết Asagi Koi
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
                      3. Cách chọn mua Cá Asagi Koi
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
                      4. Cách chăm sóc cá Koi Asagi Doitsu
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
                      5. Các dòng cá Asagi koi trên thị trường
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
                      6. Giá cá koi Asagi bao nhiêu?
                    </span>
                    <ul>
                      <li style={{ paddingTop: "10px" }}>
                        <span
                          onClick={handleScroll61}
                          style={{
                            color: "blue",
                            cursor: "pointer",
                            fontWeight: "600",
                          }}
                        >
                          6.1 Giá cá koi Asagi F1
                        </span>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <span
                          onClick={handleScroll62}
                          style={{
                            color: "blue",
                            cursor: "pointer",
                            fontWeight: "600",
                          }}
                        >
                          6.2 Giá cá koi Asagi Nhật chuẩn
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll7}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      7. Tại sao nên mua cá Koi Asagi Doitsu tại Siêu thị Cá Koi
                      VN
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 style={{ color: "red", textAlign: "center" }}>
                  Nội dung chi tiết
                </h2>
                <p style={{}}>
                  Trong các loại cá Koi thì giống cá Koi Asagi được xếp hạng là
                  một trong những nhà vô địch của triển lãm cá Koi trên thế
                  giới. Với lịch sử lâu đời, Asagi Koi đã trở thành cá chép cảnh
                  nguyên bản với màu sắc nổi bật thu hút người nhìn ngay lần
                  đầu. Cùng theo dõi bài viết sau để tìm hiểu kỹ hơn về loại cá
                  Koi này.
                </p>
              </div>
              <div id="1">
                <h3 style={{ color: "red" }}>1. Giới thiệu về cá Koi Asagi</h3>
                <p>
                  Asagi là 1 trong những dòng cá Koi xuất hiện sớm nhất ở Nhật
                  Bản. Cái tên của nó bắt nguồn từ ngôi làng sinh ra toàn bộ
                  giống cá Koi Asagi này làm nghề dệt vải giống hoa văn trên
                  người những con cá. Giống cá này được coi là tổ tiên của các
                  loại cá Koi Nishikigoi ra đời từ khoảng 160 năm trước, với hai
                  dòng Kongo Asagi koi và Narumi Asagi đã lai tạo và cho ra
                  những hậu duệ của giống Asagi Magoi (Narumi: tên của ngôi làng
                  sản sinh ra toàn bộ giống Asagi).
                </p>
                <div>
                  <img src="src/assets/Koi-Asagi/ca-koi-asagi.webp" />
                  <p>Hình ảnh cá Koi Asagi</p>
                </div>
                <p>
                  Và cho đến nay thì dòng Asagi đang được nhiều người ưa chuộng
                  bởi sự độc đáo trên những vảy vàng lấp lánh trên lưng vô cùng
                  đặc biệt mà các dòng Koi các không có.
                </p>
              </div>

              <div id="detailed-content">
                <h3 style={{ color: "red" }}>2. Cách nhận biết Asagi Koi</h3>
                <img />

                <div>
                  <p>
                    Cùng tìm hiểu các thông số kỹ thuật của dòng Asagi Koi hiện
                    nay trên thị trường
                  </p>
                  <ul>
                    <li>Size kích thước : 10 – 55cm</li>
                    <li>Nguồn gốc: Oya, Yamaju</li>
                    <li>Loại: Thuần chủng Nhật Bản</li>
                    <li>Xuất xứ: Nhật Bản</li>
                    <li>Chất lượng: Đẹp xuất sắc</li>
                  </ul>
                </div>
                <div>
                  <p>
                    Asagi Koi cùng với giống Goshiki koi là một trong những dòng
                    cá Koi có lịch sử lâu đời hiện nay, chúng được coi là tổ
                    tiên của các loài loài cá Koi Nishikigoi. Cá Koi Asagi có
                    hình dáng và màu sắc riêng dễ phân biệt với các dòng cá Koi
                    khác bởi lớp vẩy đậm màu ở lưng tạo thành hình trám hoặc kết
                    mạng Fukurin.
                  </p>
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Hình dáng: </span>
                      <br />
                      <p>
                        Asagi koi có hình dáng cơ bản giống như cá chép, thân
                        dày hơn cá chép. Đầu của koi luôn có màu trắng sáng,
                        phần má có màu sắc khác, xương vây có thể nhìn thấy bằng
                        mắt thường.
                      </p>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Hình dáng: </span>
                      <br />
                      <p>
                        Asagi koi có hình dáng cơ bản giống như cá chép, thân
                        dày hơn cá chép. Đầu của koi luôn có màu trắng sáng,
                        phần má có màu sắc khác, xương vây có thể nhìn thấy bằng
                        mắt thường.
                      </p>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Màu sắc: </span>
                      <br />
                      <ul>
                        <li>
                          Lưng hoàn toàn không có hiện tượng pha màu như các
                          dòng cá koi khác. Koi Asagi có vảy màu xanh lam hoàn
                          toàn trong suốt từ đầu đến đuôi. Toàn thân chia thành
                          2 phần riêng biệt, đầu và lưng có màu trắng.
                        </li>
                        <li>
                          Viền xung quanh đầu và dưới của cá koi asagi có màu đỏ
                          cam, đỏ hoặc vàng cam.
                        </li>
                        <li>
                          Lưới vảy màu xanh trên nền trắng là chi tiết bắt mắt
                          nhất của Koi Asagi.
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Vây: </span>
                      <br />
                      <p>
                        Màu sắc của vây sẽ trùng màu với phần bụng dưới của
                        chúng. Nếu bụng màu đỏ cam thì phần vây của chúng cũng
                        sẽ có màu đỏ cam và có màu trắng ở viền, tương tự với
                        các màu cam, vàng.
                      </p>
                    </li>
                    <li>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Râu và mắt: </span>
                      <br />
                      <p>
                        Mắt của cá Koi Asagi tròn và lớn, 2 râu dài, to hơn so
                        với cá chép bình thường, phần đầu trắng quan sát được cả
                        mũi của cá.
                      </p>
                    </li>
                    <li>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Vẩy: </span>
                      <br />
                      <ul>
                        <li>
                          Cá koi asagi có vảy màu xanh ánh kim, các vảy trên
                          thân cá nổi rõ. Nhìn từ xa, asagi-koi trông giống như
                          nó đang mặc một bộ giáp bạc sáng bóng.
                        </li>
                        <li>
                          Phần lớp vẩy lưới xanh này đi đến cuối đường viền cơ
                          thể của cá. Ánh kim xuất hiện ở cuối mỗi chiếc vẩy màu
                          xanh đậm.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="3">
                <h3 style={{ color: "red" }}>3. Cách chọn mua Cá Asagi Koi</h3>
                <div style={{ textAlign: "center" }}>
                  <p>
                    Cá Koi Asagi Doitsu và cá koi ginrin được nhiều người quan
                    tâm bởi yếu tố phong thủy mà loài cá này mang lại vô cùng
                    đặc biệt. Theo người Nhật thì những khoang màu xanh, đỏ,
                    trắng trên cá sẽ biểu tượng cho sự may mắn, tài lộc và thịnh
                    vượng. Vì thế mà khi chọn mua cá Asagi Doitsu bạn cần lưu ý
                    đến một số điều sau:
                  </p>
                </div>
                <ul>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Chọn cá có tính cân xứng
                    </span>
                    Một con cá Koi Asagi lý tưởng thì tính cân xứng khá quan
                    trọng, nó được biểu hiện bởi những mảng màu đỏ Hi. Các mảng
                    màu đỏ Hi này sẽ chạy dọc từ phần đầu cho tời phần đuôi ở
                    hai bên lưng của Asagi.
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Mắt cá</span>
                    <br />
                    <p>
                      Cá Koi Asagi được người chơi cá cảnh đánh giá cao là do nó
                      có đôi mắt màu đỏ. Phần mang cá của nó cũng phải có viền
                      đỏ Hi
                    </p>
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Đầu cá</span>
                    <br />
                    <p>
                      Nên chọn cá Koi có cái đầu trắng muốt thuần khiết đôi lúc
                      đầu của nó phát triển sẽ có sắc tố đỏ. Đặc biệt khi chọn
                      Asagi non thì nên kiểm tra chop mũi để nhận biết sau này
                      cá Koi lớn lên có mang vẻ màu đẹp và chất lượng không.
                    </p>
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Phần lưng</span>: Phần
                    đỏ trên đầu tương đối giống tancho kohaku. Ngoài ra trên
                    thân còn có các đốm đỏ phân bổ đều trên thân
                    <br />
                    <p>
                      Phần lưng Asagi chính là bộ phận quan trọng quyết định
                      phần lớn vẻ đẹp của nó. Và sẽ được bao phủ trong lớp vảy
                      màu xanh với tông xanh nhạt dần đến gần gốc của vảy kết
                      hợp hài hòa với màu tối hơn.
                    </p>
                  </li>
                </ul>
              </div>
              <div id="4">
                <h3 style={{ color: "red" }}>
                  4. Cách chăm sóc cá Koi Asagi Doitsu
                </h3>
                <div>
                  <p>
                    Để mua được Koi Asagi đạt tiêu chuẩn rất khó bởi phải từ 3
                    năm tuổi bạn mới có thể nhận biết nó đẹp hay không. Chính vì
                    thế mà việc chăm sóc một em cá Koi là vô cùng khó và cần
                    phải đảm bảo đầy đủ các tiêu chí sau:
                  </p>
                  <ul>
                    <li>
                      Để cá phát triển tốt cần duy trì độ pH trong hồ từ 7 – 7.5
                      đạt chuẩn
                    </li>
                    <li>
                      Nhiệt độ nước nên ổn định từ 20 – 27 độ C trong các mùa để
                      cá có thể bơi lượn tự do.
                    </li>
                    <li>
                      Hàm lượng oxy trong hồ nuôi tối thiểu: 2,5mg/l giúp cá dễ
                      dàng hô hấp nhanh chóng.
                    </li>
                    <li>
                      Cần thay nước thường xuyên khi nồng độ Nitrite quá cao để
                      cá có thể phát triển toàn diện nhất trong quá trình sống.
                    </li>
                    <li>
                      Chú ý thường xuyên theo dõi, nếu phát hiện cá lười ăn, bơi
                      chậm cần cách ly cá bệnh sau đó liên hệ đến các đơn vị uy
                      tín, có kinh nghiệm để được hướng dẫn, hỗ trợ xử lý kịp
                      thời.
                    </li>
                    <li>
                      Cá Koi Asagi ăn tạp nên thức ăn khá đơn giản, không nên
                      cho cá ăn quá no. Nên chia 1 ngày thành 2-3 bữa để cá có
                      thể đảm bảo nhu cầu hoạt động.
                    </li>
                    <li>
                      Hệ thống lọc nước chuyên nghiệp, hiện đại đảm bảo nước ở
                      hồ cá Koi luôn an toàn và đúng theo yêu cầu.
                    </li>
                    <li>
                      Cá Koi Asagi sinh trưởng và phát triển tốt với hồ có thể
                      tích lớn hơn 1000 Gallon. Vì thế bạn cần đảm bảo nền hồ
                      tốt, hạn chế trồng các cây thủy sinh bởi chúng ảnh hưởng
                      tới chất lượng nước và quá trình bơi của cá Koi.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="5">
                <h3 style={{ color: "red" }}>
                  5. Các dòng cá Asagi koi trên thị trường
                </h3>
                <div>
                  <p>
                    Trên thị trường hiện nay có nhiều loại cá koi Asagi, phổ
                    biến như:
                  </p>
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Ginrin Asagi: </span>
                      <br />
                      <p>
                        có lớp vẩy mày xanh ánh kim kết hợp cùng với xanh dương
                        tạo cảm giác bóng bẩy, rõ nét, lấp lánh. Đây là dòng cá
                        nỗi bật nhất trong các dòng Asagi
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Asagi/ginrin-asagi.jpg" />
                        <p>Ginrin Asagi</p>
                      </div>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Konjo Asagi: </span>
                      <br />
                      <p>
                        Đặc điểm là màu xanh dương đậm nhất, cùng với điểm Hi đỏ
                        cam, tực rỡ, nổi bật, rõ các đường biên.
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Asagi/konjo-asagi.jpg" />
                        <p>Konjo Asagi</p>
                      </div>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Narumi Asagi: </span>
                      <br />
                      <p>
                        Vẩy màu xanh nhạt, ở giữa màu xanh đậm, viền ngoài nhạt
                        dần.
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Asagi/narumi-asagi.jpg" />
                        <p>Narumi Asagi</p>
                      </div>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Asaki Sanke: </span>
                      <br />
                      <p>Vảy màu vàng nhạt/ xám nhạt nhất của nhà Asagi.</p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Asagi/4789c7fd1367ba7ae35a271f1b912a8c.png" />
                        <p>Asaki Sanke</p>
                      </div>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Mizu Sanke: </span>
                      <br />
                      <p>
                        Lưng có màu xanh nhạt, bụng dưới có màu trắng, đầu và
                        bụng trên có màu đỏ cam.{" "}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Asagi/mizu-asagi.jpg" />
                        <p>Mizu Sanke</p>
                      </div>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Hi Sanke: </span>
                      <br />
                      <p>
                        Màu đỏ từ bụng kéo dài lên phía trên đường biên, Vây,
                        đầu có thê toàn bộ là màu Hi đỏ cam
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Asagi/hi-asagi.jpg" />
                        <p>Hi Asagi</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="6">
                <h3 style={{ color: "red" }}>6. Giá cá koi Asagi bao nhiêu?</h3>
                <div>
                  <p>
                    Hiện tại Siêu thị Cá Koi Vn đang cung cấp dòng cá koi Asagi
                    chuẩn từ cá nhật đến cá F1 với giá cá koi cực kỳ ưu đãi. Có
                    thể nói Siêu thị Cá Koi VN là một trong những đơn vị cung
                    cấp cá koi với giá rẻ nhất thị trường, mà chất lượng cũng
                    rất đảm bảo. Giá cá koi nhật và f1 như sau
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold" }} id="61">
                        6.1 Giá cá koi Asagi F1
                      </span>
                      <br />
                      Cá koi có thể tồn tại trong nhiều nhiệt độ nước, khả năng
                      chịu lạnh tốt. Tuy nhiên không nên để đáy hồ bị đóng băng
                      để hạn chế ảnh hưởng cá phát triển.
                      <img src="src/assets/Koi-Asagi/ca-koi-asagi-1.webp" />
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }} id="61">
                        6.2 Giá cá koi Asagi Nhật chuẩn
                      </span>
                      <br />
                      Ngoài ra còn có con Asagi Koi thuần chủng … được xếp vào
                      hàng hiếm có kích thước lớn thì giá cá koi lên đến vài
                      nghìn đến hàng chục nghìn USD. Do đó nếu bạn muốn mua hãy
                      liên hệ với chúng tôi để được tư vấn tận tình.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="7">
                <h3 style={{ color: "red" }}>
                  7. Tại sao nên mua cá Koi Asagi Doitsu tại Siêu thị Cá Koi VN
                </h3>
                <div>
                  <div style={{ textAlign: "center" }}>
                    <img src="src/assets/Koi-Asagi/ca-koi-asagi-2.webp" />
                  </div>
                  <p>
                    Siêu thị cá Koi VN một trong những địa chỉ uy tín cung cấp
                    cho bạn đa dạng các mẫu cá Koi chất lượng, khỏe mạnh. Trong
                    đó, nổi bật là dòng cá Koi Asagi đẹp mắt đang được ưa chuộng
                    hiện nay. Đến với chúng tôi bạn sẽ được tư vấn, chọn lựa và
                    giải đáp mọi thắc mắc về dòng Koi Asagi đầy đủ nhất từ đội
                    ngũ chuyên gia giỏi. Chưa kể, Siêu thị cá Koi VN cũng sẽ hỗ
                    trợ bạn quá trình thiết kế hồ cá Koi đẹp, hợp phong thủy
                    mang lại may mắn cho gia chủ. Nếu có thắc mắc hay cần hỗ trợ
                    tư vấn mua cá Koi Asagi Doitsu hãy liên hệ ngay với siêu thị
                    cá Koi VN để được phục vụ nhanh chóng nhất.
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
          <CardGrid cardData={filteredCards} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
