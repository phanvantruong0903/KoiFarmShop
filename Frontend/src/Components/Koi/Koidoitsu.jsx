import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import CardGrid from "../Cardgrid";
import Footer from "../Footer";
import axios from "axios";
export default function Koidoitsu() {
  const [menu, setMenu] = useState("home");
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState("KOI DOITSU");
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
                CÁ KOI DOITSU
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
                      1. Giới thiệu về Cá Koi Doitsu
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
                      2. Cách nhận biết cá Koi Doitsu
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
                      3. Các dòng koi doitsu đẹp trên thị trường
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
                      4. Cách chọn mua Doitsu Koi đẹp, chất lượng
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
                      5. Cách chăm sóc Cá Koi Doitsu
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
                      6. Giá cá koi Doitsu bao nhiêu?
                    </span>
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
                      7. Tại sao nên mua Showa Koi tại siêu thị cá Koi VN:
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
                  Cá Koi Doitsu hay còn có cái tên gọi khác là sexy Koi - một
                  giống cá Koi duy nhất chỉ có hai đường vẩy nhỏ cạnh vây lưng.
                  Có thể nói giống cá Koi da trơn này vô cùng đặc biệt và được
                  đông đảo người chơi cá yêu thích. Cùng tìm hiểu một số thông
                  tin cụ thể về dòng Doitsu Koi ở bài viết sau.
                </p>
              </div>
              <div id="1">
                <h3 style={{ color: "red" }}>1. Giới thiệu về Cá Koi Doitsu</h3>
                <p>
                  Cá Koi Doitsu ra đời vào những năm 1904, với hình dáng độc
                  đáo, là sự kết hợp lai giữa hai dòng cá Koi Nhật Bản và cá da
                  trơn của Đức. Điểm nổi bật của những chú cá Doitsu Koi là
                  không có vảy, hoặc có chỉ dọc theo 2 bên vây lưng bạn có thể
                  quan sát bằng mắt thường. Tuy nhiên, rất ít cá Koi Doitsu
                  không hề có một chiếc vẩy nào, mà chúng vẫn có những đặc điểm
                  giống cá chép Nhật.
                </p>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="src/assets/Koi-Doitsu/doitsui.webp"
                    style={{ width: "50%" }}
                  />
                  <p>Dòng cá Koi Doitsu</p>
                </div>
                <div>
                  <ul>
                    <li>Kích thước hồ cá Doitsu tối thiểu: 1000 gallon</li>
                    <li>Mức độ chăm sóc: Dễ dàng</li>
                    <li>Tính cách: Hòa Bình</li>
                    <li>Điều kiện nước: 36-90◦F, KH 2-12, pH 6,8-7,2</li>
                    <li>Kích thước tối đa: 90 cm</li>
                    <li>Màu sắc: Đỏ, đen, trắng.</li>
                    <li>Chế độ ăn: Ăn tạp</li>
                    <li>Họ: Cyprinidae</li>
                  </ul>
                </div>
              </div>

              <div id="2">
                <h3 style={{ color: "red" }}>2.Cách nhận biết cá Koi Doitsu</h3>
                <div>
                  <p>
                    Để nhận biết cá Koi Doitsu giữa các loại cá Koi khác như
                    shusui koi bạn có thể dựa vào một số đặc điểm nổi bật riêng
                    chỉ có ở dòng cá này như. Vảy cá Doitsu có ít, nhưng những
                    lớp vảy này tạo nên các nét đẹp riêng cho cá. Một lớp vảy
                    bất thường ở sai vị trí có thể phá hỏng hết vẻ đẹp riêng của
                    con cá Koi Doitsu này. Vì thế mà Doitsu Koi thường có vảy ở
                    lưng dọc theo vây và các đường bên cơ thể được sắp xếp gọn
                    gàng theo dọc lưng cá.
                    <br />
                    Tuy nhiên ngày nay các nhà lai tạo đã cố gắng nhân giống
                    Doitsu với càng ít vảy càng tốt để có thẻ tạo ra những con
                    cá đẹp và hoàn hảo nhất. <br />
                    Một điểm để nhận biết Doitsu Koi chính là màu sắc cá. Bạn có
                    thể nhận biết bằng mắt thường bởi dòng Doitsu khác với các
                    dòng Kohaku bởi tỷ lệ màu Hi và Shiroji có sự cân bằng của
                    hai màu. <br />
                    Tuy nhiên dòng Doitsu vẫn có khá nhiều phiên bản khác nhau
                    như Heisei Nishiki ,.. Một vài giống Doitsu mới nhất hiện
                    nay mà bạn có thể quan tâm như là Doitsu Goshiki và Doitsu
                    Metal Ochibashigure. Đây đều là thuộc dòng cá Koi Doitsu
                    nhưng được lai tạo khác đi để tạo ra vẻ đẹp tuyệt vời và
                    hoàn hảo theo cách riêng tạo ra hồ cá Koi tuyệt đẹp.
                  </p>
                </div>
              </div>
              <div id="3">
                <h3 style={{ color: "red" }}>
                  3. Các dòng koi doitsu đẹp trên thị trường
                </h3>
                <div>
                  <p>
                    Cá koi doitsu là kết quả của một cuộc lai tạo giữa cá chép
                    Nhật và cá chép da trơn Đức, nên nó vẫn được phân loại dựa
                    theo màu sắc y hệt như các giống cá koi Nhật có vẩy khác.
                    Sau đây là một số dòng doitsu đẹp sau:
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Cá koi Doitsu Kujaku :
                      </span>{" "}
                      Gồm ba màu trắng, đen xám và đỏ, thoạt nhìn qua khá giống
                      koi sanke tuy nhiên khác ở chỗ là chỉ hai hàng vẩy cạnh
                      vây lưng và phần đầu vai và tiếp giáp đuôi có một chút đốm
                      đen, còn lại là màu trắng và đỏ. Các mảng đỏ (hi) trên
                      lưng lớn và có cả những mảng hi nhỏ ở trên đầu và trên
                      lưng.
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Cá koi Doitsu Kujaku :
                      </span>{" "}
                      Có hai màu trắng và vàng, đặc biệt màu vàng của cá koi
                      Doitsu Hariwake giống với màu vàng kim loại chứ không phải
                      màu vàng thông thường. Đốm vàng (ki) là những đốm nhỏ và
                      có một mảng lớn ở phần tiếp giáp của đuôi. Đây là loại koi
                      doitsu đẹp và hiếm, rất ít người mua Việt Nam có thể sở
                      hữu loại koi này.
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Cá koi Doitsu Kujaku :
                      </span>{" "}
                      Nó có màu vàng sậm (hơi cam), hai hàng vảy nổi rõ bên cạnh
                      vây lưng. Một tính năng đặc trưng của dòng là một màu đồng
                      nhất và làn da mịn màng.
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Cá koi Doitsu Goshiki:
                      </span>{" "}
                      Giống koi hai màu trắng và đỏ tựa như koi kohaku, tuy
                      nhiên khác ở lớp da bóng như cao su cùng mảng màu đồng
                      kích thước nhỏ trên lưng. Màu đỏ của loại koi doitsu này
                      là đỏ đậm, phần hi chiếm đến 60 % toàn bộ thân cá với các
                      mảng lớn liền mạch, không rời rạc..
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Cá koi Doitsu Goshiki:
                      </span>{" "}
                      Giống koi hai màu trắng và đỏ tựa như koi kohaku, tuy
                      nhiên khác ở lớp da bóng như cao su cùng mảng màu đồng
                      kích thước nhỏ trên lưng. Màu đỏ của loại koi doitsu này
                      là đỏ đậm, phần hi chiếm đến 60 % toàn bộ thân cá với các
                      mảng lớn liền mạch, không rời rạc..
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Cá koi Doitsu Ochiba:
                      </span>{" "}
                      Chỉ có 2 màu đỏ, cam và trắng, da cá nhẵn bóng, không có
                      các vệt sumi đen hay đồng trên thân cá. Các đốm đỏ cam/cam
                      phân bố đối xứng, giáp đuôi màu đỏ, trên đầu, mắt và miệng
                      xuất hiện các sọc đỏ.
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Cá koi Doitsu Sanke:
                      </span>{" "}
                      Sự kết hợp giữa màu nền trắng với lông đỏ và đế sumi đen,
                      đầu không chân màu đen và lớp da cao su sáng bóng.
                    </p>
                  </p>
                </div>
              </div>
              <div id="4">
                <h3 style={{ color: "red" }}>
                  4. Cách chọn mua Doitsu Koi đẹp, chất lượng
                </h3>
                <div>
                  <div style={{ textAlign: "center" }}>
                    <img src="src/assets/Koi-Doitsu" style={{ width: "50%" }} />
                    <p>Doitsu Koi đẹp</p>
                  </div>
                </div>
                <p>
                  Để mua được chú cá Koi Doitsu khỏe mạnh, chất lượng tốt bạn
                  cần có những tiêu chí hàng đầu để đánh giá cá sau:
                </p>
                <ul>
                  <li>
                    Vảy
                    <p>
                      Koi Doitsu là dòng cá không có vảy hoặc có ít vảy, và nếu
                      có vảy thì phải ở vị trí đẹp tạo được sự độc đáo riêng cho
                      cá. Thường vảy giáp cá sẽ xuất hiện rõ ràng, mỗi bên vây
                      lưng có 1 hàng.
                    </p>
                  </li>
                  <li>
                    Màu sắc của cá
                    <p>
                      Tránh chọn cá có dáng bơi lắc lư lay động, râu hở, râu
                      không đều, miệng méo, phần cuối thân của cá bị cong hoặc
                      phần trên thân cá có vết trầy xước.{" "}
                    </p>
                  </li>
                  <li>
                    Hình dáng của cá
                    <p>
                      Cá Doitsu có hình thể, có hình dáng giống như một chiếc
                      tàu ngầm, bụng cá không được quá phệ. Nên chọn cá có thân
                      hình vừa phải, không quá dài cũng không quá ngắn giúp cá
                      phát triển tốt nhất.
                    </p>
                  </li>
                  <li>
                    Dáng bơi
                    <p>
                      Cũng là yếu tố khi mua Koi Doitsu cần quan tâm với dáng
                      bơi uốn lượn, khả năng di chuyển hài hòa, nét người khỏe
                      khoắn, nhanh nhẹn của cá Koi.
                    </p>
                  </li>
                </ul>
              </div>

              <div id="5">
                <h3 style={{ color: "red" }}>
                  5. Cách chăm sóc Cá Koi Doitsu:
                </h3>
                <p>
                  Cá Koi Doitsu là dòng cá đẹp và vô cùng đặc biệt và đẹp mắt
                  tuy nhiên việc nuôi dưỡng cá khá khó khăn, nếu không khéo léo
                  có thể trong quá trình nuôi dưỡng cá dễ mắc bệnh.
                </p>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="src/assets/Koi-Doitsu/ca-koi-doitsu-1.webp"
                    style={{ width: "50%" }}
                  />
                </div>
                <p>
                  Khi chăm sóc cá Doitsu Koi cũng như Matsuba koi tốt cần lưu ý:
                </p>
                <ul>
                  <li>
                    Thay nước hồ thường xuyên và nên diễn ra từ từ không nên rút
                    hết nước thay ngay để tránh cá bị bất ngờ, khó thích nghi
                    với điều kiện nước đang sử dụng.
                  </li>
                  <li>
                    Sử dụng hệ thống lọc nước an toàn để duy trì sự trong sạch
                    đảm bảo cá phát triển tốt nhất. Môi trường để cá Koi Doitsu
                    phát triển tốt nhất là có thể tích nước lớn hơn 1000 Gallon
                    nước, có ít cây thủy sinh xung quanh để cá phát triển.
                  </li>
                  <li>
                    Là dòng cá ăn tạp, nhưng khi cho Koi Doitsu ăn bên cũng nên
                    chú ý. Chỉ cho ăn các loại rau củ quả vừa phải, hạn chế ăn
                    quá no ảnh hưởng tới sức khỏe. Bên cạnh đó không nên cho cá
                    Koi ăn vào trời mưa bởi chúng sẽ cần nhiều oxy để tiêu thụ
                    thức ăn hơn bình thường.
                  </li>
                  <li>
                    Nên thường xuyên theo dõi và quan sát cá Koi phát triển có
                    tốt không hay có các biểu hiện lạ như lười ăn, chậm bơi… thì
                    nên liên hệ với đơn vị uy tín để được tư vấn, chăm sóc cá
                    Koi ngay tránh lây bệnh cho các con khác.
                  </li>
                </ul>
              </div>
              <div id="6">
                <h3 style={{ color: "red" }}>
                  6. Giá cá koi Doitsu bao nhiêu?
                </h3>
                <p>
                  Hiện tại Siêu thị Cá Koi Vn đang cung cấp dòng cá koi Doitsu
                  chuẩn từ cá nhật đến cá F1 với giá cực kỳ ưu đãi. Có thể nói
                  Siêu thị Cá Koi VN là một trong những đơn vị cung cấp cá koi
                  với giá rẻ nhất thị trường, mà chất lượng cũng rất đảm bảo.
                  Giá cá koi nhật và f1 như sau:
                </p>
                <ul>
                  <li>
                    Đối với những con Doitsu f1 có kích thước từ 18cm – 40cm,
                    giá cá koi dao động từ 150.000 – 500.000 VNĐ tùy loại.
                  </li>
                  <li>
                    Cao cấp hơn là những con Doitsu f1 có kích thước từ 50cm –
                    55cm, được chia làm loại 1, loại 2 và 3. Giá thành dao động
                    từ 1.800.000 – 3.000.000 VNĐ tùy loại.
                  </li>
                </ul>
              </div>

              <div id="7">
                <h3 style={{ color: "red" }}>
                  7. Tại sao nên mua Showa Koi tại siêu thị cá Koi VN:
                </h3>
                <p>
                  Tự hào là đơn vị chuyên cung cấp cá Doitsu Koi khỏe mạnh, chất
                  lượng và uy tín hàng đầu hiện nay, siêu thị cá Koi VN sẽ bạn
                  lựa chọn được loại cá phù hợp với không gian sống của bạn.
                  Chúng tôi sẽ hỗ trợ tư vấn, hướng dẫn quá trình chăm sóc hồ cá
                  Koi thủy sinh an toàn, đảm bảo chất lượng với chi phí phù hợp
                  nhất. Đến với Siêu thị Cá Koi VN các bạn thoải mái chiêm
                  ngưỡng vẻ đẹp của những chú cá Koi Nhật tuyệt vời nhất. Nếu có
                  thắc mắc hay cần hỗ trợ tư vấn mua cá Koi Doitsu hãy liên hệ
                  ngay với siêu thị cá Koi VN để được phục vụ tốt nhất.
                </p>
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
