import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Footer from "../Footer";
export default function Koitancho() {
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
  const handleScroll22 = () => {
    const element = document.getElementById("22");

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
  const handleScroll23 = () => {
    const element = document.getElementById("23");

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
  const handleScroll8 = () => {
    const element = document.getElementById("8");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div style={{}}>
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
                CÁ KOI TANCHO
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
                      1. Giới thiệu cá Koi Tancho
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
                      2. Các loại cá koi Tancho đẹp
                    </span>
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
                          2.1 Tancho Kohaku
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
                          2.2 Tancho Sanke
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
                          2.3 Tancho Showa
                        </span>
                      </li>
                    </ul>
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
                      3. Phân biệt các loại cá koi Tancho có trên thị trường
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
                      4. Cách chọn cá koi tancho
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
                      5. Cách chăm sóc cá koi tancho
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
                      6. Cách chăm sóc Koi Kohaku
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
                          6.1 Giá cá koi Tancho F1
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
                          6.2 Tại sao nên mua Tancho koi tại siêu thị Cá koi VN?
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
                      7. Giá coi Koi Kohaku bao nhiêu?
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll8}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      8. Tại sao nên mua Koi Kohaku tại KoiVNStore
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
                <p style={{}}>
                  Hiện nay, cá koi là dòng cá được ưa chuộng để làm cảnh cũng
                  như trang trí cho không gian sống của bạn. Cá koi có nhiều
                  giống loài, kích thước và màu sắc và dòng cá Koi Tancho là một
                  trong những dòng cá đó. Đây loại cá có hình dáng bắt mắt và
                  khá đẹp, khiến nhiều người quan tâm đến dòng cá này. Bài viết
                  hôm nay chúng tôi sẽ giúp bạn hiểu kỹ hơn cũng như cách chăm
                  sóc về dòng cá này qua bài viết dưới đây.
                </p>
              </div>
              <div id="1">
                <h3 style={{ color: "red" }}>1. Giới thiệu cá Koi Tancho </h3>
                <img />
                <div>
                  <p>
                    Cá Koi Tancho hiện đang là sự chú ý của nhiều dân chơi cá,
                    đặc điểm nổi bật của dòng cá này đó là tượng trưng cho quốc
                    kỳ Nhật Bản. Đặc điểm của Tancho koi là có chấm tròn màu đỏ
                    nằm chính giữa trung tâm đầu của chúng. Chấm màu đỏ trên đầu
                    có nhiều hình dạng như vuông, hình thoi, bầu dục, tim,
                    chéo,.....Nhưng cá có chấm đỏ hình tròn sẽ được xem như là
                    hoàn hảo và được tìm kiếm nhiều nhất. Đây là loại cá được
                    nhiều người tìm kiếm nhất hiện đây và giá cá Koi Tancho cũng
                    sẽ không rẻ
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <img src="src/assets/Koi-Tancho/ca-koi-tancho-nhat.jpg" />
                    <p>Đàn cá Koi Tancho đẹp</p>
                  </div>
                </div>
              </div>

              <div id="detailed-content">
                <h3 style={{ color: "red" }}>2. Các loại cá koi Tancho đẹp</h3>
                <div>
                  Bạn có thể phân biệt cá Koi Tancho với một số những giống cá
                  koi Nhật khác bằng cách nhìn vào dấu chấm tròn trên đầu. Ba
                  loại cá Koi Tancho thông thường đều có hình dáng giống nhau.
                  Nhưng những loại cá koi có vảy đục , vây đẹp có thể nhìn rõ
                  được các tia vây, màu sắc rực rỡ , mắt to, người tròn và đầu
                  hơi gù được nhiều dân chơi cá tìm kiếm. Hiện nay có 3 loại
                  Tancho koi đẹp điển hình đó là Kohaku, Sanke, Showa. Dưới đây
                  là một số những đặc điểm của loại cá này.
                </div>
                <div>
                  <ul>
                    <li>
                      <span id="21" style={{ fontWeight: "bold" }}>
                        2.1 Tancho Kohaku
                      </span>
                      <br />
                      <p>
                        Cá Koi Tancho Kohaku được ví như quốc kỳ của Nhật Bản,
                        chúng có thân và phần bụng màu trắng như tuyết, tất cả
                        các vây cũng có màu trắng. Chỉ có duy nhất một chấm màu
                        đỏ lớn trên đầu.
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Tancho/08e242e22db6eae8b3a7-225x300.jpg" />
                        <p>Tancho Kohaku</p>
                      </div>
                    </li>

                    <li>
                      <span
                        id="21"
                        style={{ fontWeight: "bold", color: "red" }}
                      >
                        2.2 Tancho Sanke
                      </span>
                      <br />
                      <p>
                        Tancho koi Sanke ngoài có chấm đỏ trên đầu thì đặc điểm
                        nổi bật của nó cũng khá giống với cá koi sanke bình
                        thường. Đó là sự xuất hiện của chấm sumi trên nền trắng
                        ở phần lưng cá. Và một điểm lưu ý đó là phần đầu của
                        tancho sanke chỉ có chấm đen rất nhỏ trên chấm đỏ.
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Tancho/Tancho-Sanke.png" />
                        <p>Tancho Sanke</p>
                      </div>
                    </li>
                    <li>
                      <span
                        id="23"
                        style={{ fontWeight: "bold", color: "red" }}
                      >
                        2.3 Tancho Showa
                      </span>
                      <br />
                      <p>
                        Cá Koi Tancho Showa là giống cá giống ý như sankoku.
                        Nhưng có điều sẽ khác đó là chỉ chấm đỏ trên đầu. Tancho
                        showa cả phần đầu và phần thân có xuất hiện vệt đen lớn
                        và màu trắng sẽ ít hơn. Ở phần đầu tancho showa cũng sẽ
                        xuất hiện sumi hoặc những đốm đen này còn nằm trên cả
                        chấm đỏ. Một đặc điểm nữa đó là vây của cá koi tancho
                        showa có màu đen, còn 2 loại kohaku và sanke sẽ có vây
                        màu trắng.
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img src="src/assets/Koi-Tancho/Tancho-Showa.png" />
                        <p>Tancho Showa</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="3">
                <h3 style={{ color: "red" }}>
                  3. Phân biệt các loại cá koi Tancho có trên thị trường
                </h3>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Tiêu chí</th>
                      <th>Tancho Nhật thuần chủng</th>
                      <th>Tancho Nhật nuôi vỗ ao bùn</th>
                      <th>Tancho F1</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nguồn gốc</td>
                      <td>
                        Tancho Nhật được lựa chọn và nhập trực tiếp từ các trang
                        trại cá koi lớn ở Nhật Bản.
                      </td>
                      <td>
                        Tancho nuôi vỗ ao bùn là dòng cá được nhập từ bé ở Nhật
                        đem về Việt Nam nuôi dưỡng.
                      </td>
                      <td>
                        Là dòng cá được lai tạo từ cá koi Nhật thuần chủng và
                        được nuôi dưỡng tại Việt Nam theo quy trình Nhật Bản.
                      </td>
                    </tr>
                    <tr>
                      <td>Hình dáng</td>
                      <td>
                        Phần đầu Tancho Nhật hơi gù, vai rộng, mắt linh hoạt,
                        thân mập, phần hông hơi ngắn nhưng thân thuôn dài.
                      </td>
                      <td>Hình dáng đẹp, chuẩn như cá koi thuần chủng.</td>
                      <td>
                        Vây ngực, lưng, đuôi nhỏ, dáng bơi không mềm mại và uyển
                        chuyển như dòng koi thuần chủng.
                      </td>
                    </tr>
                    <tr>
                      <td>Màu sắc</td>
                      <td>
                        Màu sắc toàn thân đồng đều và hài hòa từ đầu đến phần
                        đuôi.
                      </td>
                      <td>Màu sắc, khoang cắt sắc nét, hài hòa.</td>
                      <td>
                        Màu sắc trên thân Tancho F1 sẽ nhạt và không rõ nét như
                        cá koi Nhật.
                      </td>
                    </tr>
                    <tr>
                      <td>Giá cả</td>
                      <td>Rất đắt đỏ.</td>
                      <td>Rẻ hơn koi thuần chủng do được nuôi tại Việt Nam.</td>
                      <td>Hợp túi tiền với nhiều đối tượng.</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div id="4">
                <h3 style={{ color: "red" }}>4. Cách chọn cá koi tancho</h3>
                <div>
                  <p>
                    Đối với những người chơi Tancho koi đều mong muốn cá của
                    mình có giá trị và có thể tham gia được các cộng đồng chơi
                    cá koi. Vậy nên, việc lựa chọn cá Koi Tancho đẹp để nuôi
                    được xem là bước quyết định trong tương lai.
                    <br />
                    Cách chọn Tancho koi chuẩn đó là chấm đỏ trên đầu có khoảng
                    cách với các nhãn mảng màu khác trên thân koi. Dưới đây là 3
                    kinh nghiệm để lựa chọn cá Koi Tancho đẹp bạn nên biết:
                  </p>
                </div>

                <div>
                  <ul>
                    <li>
                      Các em cá koi chỉ cần có dấu hiệu hình đỏ trên đầu đều
                      thuộc dòng koi tancho. Tuy nhiên, đối với những loại
                      Tancho koi có hình tròn đỏ trên đầu mới được đánh giá cao.{" "}
                    </li>
                    <li>
                      Vị trí điểm đỏ sẽ đúng trọng tâm ở đỉnh cầu cá koi, khoảng
                      cách giữa miệng, mắt và điểm đầu sống lưng.
                    </li>
                    <li>
                      Lớp da nền mỏng thì cơ thể cá sẽ bị nổi gân máu. Từ đó
                      giảm đi giá trị thẩm mỹ của cá.
                    </li>
                    <li>
                      Giá của cá Koi Tancho hiện nay khá đắt hơn so với dòng cá
                      koi khác. Để có thể tìm được một em cá Koi đẹp và chất
                      lượng, đạt chuyển là việc không dễ dàng. Bạn chọn cá koi
                      không nên ham rẻ mà mua những loại cá bị bệnh hoặc có vấn
                      đề về sức khỏe.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div id="5">
                <h3 style={{ color: "red" }}>5. Cách chăm sóc cá koi tancho</h3>
                <div>
                  <p>
                    Cá Koi Tancho được nuôi trong một môi trường từ 18 - 26 độ
                    C. Nước nuôi cá thường là nước cứng có tính kiềm yếu và phải
                    sạch sẽ. Nhưng đây là một loại cá dễ nuôi hơn so với một số
                    dòng cá khác. Thức ăn cho Tancho koi thông thường là trùn
                    chỉ và những loại thức ăn ở dạng hạt. Tập tính dễ nuôi nên
                    thích hợp đối với những người yêu thích chơi cá koi nhưng
                    không có quá nhiều thời gian để chăm sóc.
                    <br />
                    Bạn cũng nên theo dõi thường xuyên hoạt động, môi trường
                    nước trong quá trình mới bắt đầu nuôi cá. Nên hỏi những kinh
                    nghiệm của người đi trước để có cách chăm sóc tốt nhất.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <img src="src/assets/Koi-Tancho/Tancho-Kohaku-Sanke-Showa.jpg" />
                  </div>
                </div>
              </div>
              <div id="6">
                <h3 style={{ color: "red" }}>
                  6. Giá cá koi Tancho bao nhiêu?
                </h3>
                <div>
                  <p>
                    Vì Kohaku koi là loài thông minh có thể sống trong nhiều
                    thập kỷ vì thế khi chăm sóc cá Koi Kohaku bạn cần lưu ý về
                    điều kiện môi trường và yếu tố xung quanh sẽ làm ảnh hưởng
                    tới quá trình phát triển của chúng.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <span id="61">6.1 Giá cá koi Tancho F1</span>
                      <br />
                      <p>
                        Đối với những con Tancho f1 có kích thước từ 18cm –
                        40cm, giá cá koi dao động từ 150.000 – 500.000 VNĐ tùy
                        loại.
                        <br />
                        Cao cấp hơn là những con Tancho f1 có kích thước từ 50cm
                        – 55cm, được chia làm loại 1, loại 2 và 3. Giá thành dao
                        động từ 1.800.000 – 3.000.000 VNĐ tùy loại.
                      </p>
                    </li>
                    <li id="62">
                      <span>6.2 Giá cá koi Tancho Nhật chuẩn</span>
                      <br />
                      <p>
                        Một con cá Koi trưởng thành Nhật Bản như Tancho koi với
                        kích thước từ 10-15cm sẽ có giá từ 600.000 –
                        2.000.000VNĐ/con.
                        <br />
                        Ngoài ra còn có con Tancho Koi thuần chủng … được xếp
                        vào hàng hiếm có kích thước lớn thì giá cá koi lên đến
                        vài nghìn đến hàng chục nghìn USD. Do đó nếu bạn muốn
                        mua hãy liên hệ với chúng tôi để được tư vấn tận tình.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="7">
                <h3 style={{ color: "red" }}>
                  7. Tại sao nên mua Tancho koi tại siêu thị Cá koi VN?
                </h3>
                <div>
                  <p>
                    Bên cạnh đó, siêu thị Cá Koi VN có đội ngũ chuyên gia nhiều
                    kinh nghiệm sẽ tư vấn và hỗ trợ cho bạn lựa chọn mua cũng
                    như chăm sóc cá Koi đúng cách. Vậy nên, nếu bạn có nhu cầu
                    tư vấn hoặc muốn tìm hiểu các loại Tancho koi khác. Hãy liên
                    hệ với chúng tôi để được hỗ trợ và giải đáp nhanh chóng.
                    <br />
                    Trên đây là những thông tin giúp bạn có thêm thông tin hữu
                    ích về Tancho koi . Hy vọng điều này sẽ giúp bạn có thêm
                    kiến thức và cách chọn cá Koi Tancho đẹp để sở hữu cho mình
                    những loại cá đẹp và phù hợp nhất.
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
