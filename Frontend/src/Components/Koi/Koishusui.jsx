import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
export default function Koishusui() {
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

  const handleScroll51 = () => {
    const element = document.getElementById("51");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll52 = () => {
    const element = document.getElementById("52");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(71,1,19)",
          color: "#f1be7c",
        }}
      >
        <div>
          <Navbar menu={menu} setMenu={setMenu} />
        </div>
        <Container>
          <div>
            <div style={{ paddingTop: "110px", textAlign: "center" }}>
              <h1>CÁ KOI SHUSUI</h1>
              <hr />
            </div>
            <div>
              <div
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "2px solid rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgb(59, 48, 48)",
                }}
              >
                <h2>Nội Dung Bài Viết</h2>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll1}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      1. Giới thiệu về Cá Koi Shusui
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll2}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      2. Cách nhận biết Cá Koi Shusui
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll3}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      3. Cách chọn Cá Koi Shusui
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll4}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      4. Cách chăm sóc Cá Koi Shusui
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll5}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      5. Giá cá koi Shusui bao nhiêu?
                    </span>
                    <ul>
                      <li style={{ paddingTop: "10px" }}>
                        <span
                          onClick={handleScroll51}
                          style={{
                            color: "rgb(251, 139, 36)",
                            cursor: "pointer",
                          }}
                        >
                          5.1 Giá cá koi Shusui F1
                        </span>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <span
                          onClick={handleScroll52}
                          style={{
                            color: "rgb(251, 139, 36)",
                            cursor: "pointer",
                          }}
                        >
                          5.2 Giá cá koi Shusui Nhật chuẩn
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll6}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      6. Tại sao nên mua Cá Koi Shusui tại Siêu thị Cá Koi VN?
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2>Nội dung chi tiết</h2>
                <div>
                  <p>
                    Cá Koi đã không còn quá xa lạ với cộng đồng những người có
                    niềm đam mê với cá cảnh. Loài cá này thường có ưu điểm là
                    đẹp, dễ dàng cho việc chăm sóc, và nổi bật hơn rất nhiều
                    loài cá khác. Một trong số đó phải kể đến dòng cá Shusui Koi
                    với nhiều đặc điểm nổi bật. Hãy cùng Siêu Thị Cá Koi VN khám
                    phá về dòng cá này qua những thông tin được chia sẻ dưới
                    đây.
                  </p>
                </div>
              </div>
              <div id="1">
                <h3>1. Giới thiệu về Cá Koi Shusui</h3>
                <div>
                  Cá Koi Shusui là dòng cá Koi đẹp đến từ Nhật Bản và có chất
                  lượng tốt hơn so với các dòng cá Koi từ các nước Đông Nam Á
                  khác. Shusui xuất hiện từ năm 1910, trước xuất hiện giống cá
                  Koi Kohaku hay KOI Showa.
                  <br />
                  Koi Shusui là một loại cá tạo ấn tượng từ cái nhìn đầu tiên
                  đối với khách hàng bởi 3 màu mạnh là đen, đỏ và trắng. Đây là
                  một trong số dòng cá có vảy đầu tiên, với làn da trắng trong
                  suốt. Hơn nữa màu sắc chủ đạo của cá còn tạo nên phong thủy
                  cho chủ sở hữu, màu sắc tạo nên sự phú quý, cao sang và đem
                  đến nhiều may mắn, tài lộc.
                  <br />
                  Thuộc dòng cá xuất hiện tương đối sớm cùng với sự nuôi dưỡng
                  và nghiên cứu để cá phát triển toàn diện nhất, nên hiện nay
                  giống Shusui Koi có giá trị kinh tế rất cao và được nhiều
                  người săn đón.
                </div>
                <div>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Tiêu chí</th>
                        <th>Thông tin</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kích thước bể cá tối thiểu</td>
                        <td>1000 gallon</td>
                      </tr>
                      <tr>
                        <td>Mức độ chăm sóc</td>
                        <td>Dễ dàng</td>
                      </tr>
                      <tr>
                        <td>Tính cách</td>
                        <td>Hòa bình</td>
                      </tr>
                      <tr>
                        <td>Điều kiện nước</td>
                        <td>36-90 độ F, KH 2 – 12, pH 6.8 – 7.2</td>
                      </tr>
                      <tr>
                        <td>Kích thước tối đa</td>
                        <td>90cm</td>
                      </tr>
                      <tr>
                        <td>Màu sắc</td>
                        <td>Đen, đỏ, trắng</td>
                      </tr>
                      <tr>
                        <td>Chế độ ăn uống</td>
                        <td>Ăn tạp</td>
                      </tr>
                      <tr>
                        <td>Xuất xứ</td>
                        <td>Nhật Bản</td>
                      </tr>
                      <tr>
                        <td>Thuộc họ</td>
                        <td>Cyprinidae</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>

              <div id="detailed-content">
                <h3>2. Các đặc điểm thường gặp trên cá Koi Kohaku</h3>
                <img />
                <p>
                  Các tiêu chuẩn này chỉ áp dụng cho các loài cá trưng bày tại
                  triển lãm ở Nhật Bản. Các loài cá được giữ làm vật nuôi tại
                  nhà riêng không cần phải tuân thủ các tiêu chuẩn này. Có một
                  số từ được sử dụng để mô tả các đặc điểm trên một con cá
                  Kohaku như sau:
                </p>
                <ul>
                  <li>
                    Akamuji: là một loài cá đỏ thông thường và thường xuất hiện
                    trong quá trình sinh sản của loài Kohaku. Trước đây, ở Nhật
                    Bản, các con cá Akamuji thường bị đánh bại để làm cá bột.
                    Tuy nhiên, từ năm 1990, chúng trở nên phổ biến và thường
                    được trưng bày trong thể loại Kawarimono như Benigoi hoặc
                    Hiaka tại triển lãm. Một con cá Akamuji có các mảng trắng
                    trên đầu vây được gọi là Aka Hajiro.
                  </li>
                  <li>
                    Shiromuji: Shiromuji đối lập với Akamuji khi có thân hình
                    trắng toàn phần và xuất hiện trong quá trình sinh sản của
                    loài Kohaku. Ở Nhật Bản, các con cá Shiromuji không được coi
                    là có giá trị. Thay vào đó, loài cá koi tương tự có vảy kim
                    loại - bạch kim koi lại được ưa chuộng.
                  </li>
                  <li>
                    Komoyō: Với loài cá Komoyō, kích thước của các dấu đỏ rất
                    nhỏ, chỉ chiếm ít hơn ¼ chiều dài của chúng. Chúng không
                    được đánh giá cao.
                  </li>
                  <li>
                    Ōmoyō: Ngược lại với Komoyō, loài cá Ōmoyō có các dấu đỏ
                    lớn, ít nhất là một phần tư chiều dài của cá. Điều này được
                    đánh giá cao và theo lứa tuổi của cá, các dấu hiệu sẽ tách
                    biệt để tạo ra những mô hình thú vị.
                  </li>
                  <li>
                    Dangara: là một mô hình dấu hiệu tách biệt giống như bước đá
                    trong một hồ bơi. Đây là những giá trị rất lớn trong cạnh
                    tranh. Một sọc đơn từ đầu đến đuôi không có giá trị ở Nhật
                    Bản, nhưng nếu nó tạo thành một mô hình zig-zag thì được gọi
                    là inazuma. Tên này bắt nguồn từ triển lãm All Nippon Show
                    năm 1970, khi người chiến thắng đã tạo ra một hình mẫu
                    inazuma nổi bật. Dangara cũng có thể có hai đốm đỏ, được gọi
                    là Hai bước.
                  </li>
                </ul>
              </div>
              <div id="3">
                <h3>3. Các giống kohaku phổ biến nhất</h3>
                <div style={{ textAlign: "center" }}>
                  <img src="src/assets/gioithieukoikohaku.webp" />
                </div>
                <ul>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Menkaburi Kohaku</span>
                    : dấu hiệu nhận biết của giống Kohaku này là toàn bộ phần
                    đầu cá được bao phủ bởi màu đỏ, phần đỏ trên đầu sẽ tách
                    biệt với màu đỏ ờ phần thân
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Hanatsuke Kohaku</span>
                    : cách để phân biệt giống này cũng khá là đơn giản đó là có
                    màu đỏ ở phần mũi của cá kéo dài lên phần đầu và thân.
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/hanatsukekohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Hanatsuke Kohaku Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>Inazuma Kohaku</span>:
                    Vùng đỏ của giống cá này trải dài từ đầu thới đôi theo hình
                    ziczac vô cùng đặc biệt
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/inazumakohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Inazuma Kohaku Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Goten Sakura Kohaku
                    </span>
                    : Phần đỏ trên đầu tương đối giống tancho kohaku. Ngoài ra
                    trên thân còn có các đốm đỏ phân bổ đều trên thân
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/gotensakurakohaku.webpp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Goten Kohaku Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>Tancho Kohaku</span>:
                    Dòng cá này rất được coi trọng ở nhật vì nó trong giống là
                    quốc kỳ của họ. Toàn thân cá có màu trắng, không có một vết
                    gì, đồng thời trên đầu có khoang đỏ với nhiều hình dạng khác
                    nhau rất dễ phân biệt
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/tanchokohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Tancho Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>Kuchibeni kohaku</span>
                    : giống cá này đặc biệt ở chỗ khi có một chấm đỏ ở mũi, tách
                    biệt với các khoang đỏ khác trên thân cá. Điều này khác với
                    Hanatsuke Kohaku Koi khi có chấm đỏ ở mũi và kéo dài lên
                    phần đầu
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/kuchibenikohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Kuchibeni Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Straight Hi Kohaku
                    </span>
                    : Điểm đặc biệt của giống cá này là phần đỏ chiếm nhiều trên
                    thân cá, không ngắt quãng từ phần đầu cho tới phần chân.
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/straighthikohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Straight Hi Kohaku Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>Nidan Kohaku</span>:
                    Cũng giống như Straight Hi Kohaku khi màu đỏ chiếm đa số
                    trên thân. Tuy nhiên dòng cá này khác biệt ở chỗ sẽ có phần
                    trắng ở giữa thân chia phần đỏ thành 2 phần
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/nidankohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Nidan Kohaku Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>Sandan Kohaku</span>:
                    phần màu đỏ sẽ chia thành 3 khoang riêng biệt là đầu, thân
                    và đuôi
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/sandankohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Sandan Kohaku Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Yondan Kohaku Koi
                    </span>
                    : Phần khoang đỏ sẽ chia thành 4 phần khác với Sandan Kohaku
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/yandankohakukoi.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Yondan Kohaku Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>Kanoko Kohaku</span>:
                    Vùng đầu của cá là một khoang màu đỏ sẫm khá đậm, trên thân
                    cá xuất hiện những chấm đỏ li ti.
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/kanokokohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Kanoko Kohaku Koi</p>
                    </div>
                  </li>

                  <li>
                    <span style={{ fontWeight: "bold" }}>Maruten Kohaku</span>:
                    Cơ thể giống loài cá này có 3-4 ngăn màu đỏ nằm cách xa nhau
                    hoặc thông với nhau. Chấm đỏ trên đầu không được tiếp giáp
                    với khoang đỏ trên cơ thể.
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="src/assets/marutenkohaku.webp"
                        style={{ width: "50%" }}
                      />
                      <p>Giống Maruten Kohaku Koi</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="4">
                <h3>4. Sự khác nhau giữa Koi Kohaku Nhật , Koi Kohaku F1</h3>
                <p style={{ fontWeight: "bold" }}>Về nguồn gốc</p>
                <ul>
                  <li style={{ fontWeight: "bold" }}>
                    Cá koi kohaku nhật nhập khẩu: là dòng cá thuần chủng được
                    nuôi ở các trại cá ở Nhật Bản và được Siêu Thị Cá Koi VN
                    nhập khẩu trực tiếp về
                  </li>
                  <li>
                    Cá koi kohaku F1: là dòng cá được lai tạo từ cặp cá bố mẹ là
                    cá koi nhật thuần chủng và nuôi lớn ỏ Việt Nam theo quy
                    trình của Nhật Bản
                  </li>
                </ul>
                <p style={{ fontWeight: "bold" }}>Về nguồn gốc</p>
                <ul>
                  <li>
                    Kohaku Nhật: Cơ thể có 2 màu trắng đỏ, các khoang đỏ thì có
                    màu đỏ như máu, còn khoang trắng thì màu trắng sáng, có vảy
                    ánh bạc. Màu sắc của cá koi Nhật rất tươi sáng và có ranh
                    giới rõ ràng, các đốm to và đều ở hai bên (khi nhìn từ trên
                    xuống, dọc theo sống lưng).
                  </li>
                  <li>
                    Kohaku koi F1: Màu sắc của các khoang trên cơ thể sẽ nhạt
                    hơn, thường là màu đỏ cam. Ranh giới giữa các ngăn đỏ và
                    trắng bị mờ, không rõ ràng.
                  </li>
                </ul>
                <p style={{ fontWeight: "bold" }}>Về hình dáng</p>
                <ul>
                  <li>
                    Kohaku Nhật có cặp râu dài và cứng, đầu cá hơi gù, Kohaku F1
                    cũng có râu nhưng nhỏ và ngắn hơn cá koi nhật.
                  </li>
                  <li>
                    {" "}
                    Vây ngực, vây lưng và vây đuôi của koi Nhật Bản thường rất
                    dày và mờ đục (ánh sáng không xuyên qua nhiều được), còn Vây
                    của cá F1, nhỏ, ít mềm và dẻo hơn và ánh sáng dễ chiếu qua
                    hơn.
                  </li>
                  <li>
                    Kohaku Nhật khi nhìn từ trên xuống sẽ mập hơn cá koi F1 ở
                    phần đầu và vai. Nhìn ngang sẽ thấy Koi kohaku Nhật có phần
                    hông hơi ngắn tuy nhiên thân hình thì thuôn dài hơn so với
                    koi F1.
                  </li>
                </ul>
              </div>
              <div id="5">
                <h2>5. Cách chọn cá Koi Kohaku</h2>
                <p>
                  Cách chọn cá Koi Kohaku đẹp thì bạn cần phải dựa vào màu sắc
                  và dáng bơi để chọn mua cá chuẩn.
                </p>
                <ul>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Màu sắc cá</span>
                    <br />
                    <p>
                      Đây là yếu tố quan trọng để đánh giá vẻ đẹp của dòng cá
                      Kohaku. Nếu cá Koi có màu sắc rõ ràng, đường ranh giữa các
                      mảng màu trên cá tách biệt rõ ràng, không bị phân lẫn và
                      chồng lên nhau thì đó là một chú cá đẹp nên chọn
                    </p>
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Dáng bơi</span>
                    <br />
                    <p>
                      Bơi là hoạt động hàng ngày của Kohaku koi vì thế để chọn
                      cá Koi tốt bạn nên nhìn dáng bơi của chúng phải uyển
                      chuyển, dáng bơi thẳng, khỏe mạnh lao vun vút về phía
                      trước.
                    </p>
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Chất lượng da, vảy
                    </span>
                    <br />
                    <p>
                      Đừng nhầm lẫn màu sắc với da bởi một con cá Kohaku trưởng
                      thành sẽ có màu cam đỏ đậm rất đẹp, còn cá Kohaku nhỏ thì
                      màu sắc không rõ ràng. Da cá sẽ là yếu tố quyết định đến
                      vảy cá, nên chọn da cá nhẵn mịn, trơn bóng thì vảy cá
                      Kohaku sẽ đều đặn và chất lượng hơn.
                    </p>
                  </li>
                </ul>
                <div>
                  <img />
                </div>
                <div>
                  Ngoài ra bạn có thể dựa vào một số đặc điểm sau khi chọn cá
                  Koi Kohaku gồm:
                  <ul>
                    <li>
                      Màu rõ ràng là màu trắng tinh như tuyệt, đỏ đậm, lớn.
                    </li>
                    <li>
                      Chú ý phần đầu phải có 2 màu không thể toàn bộ là đỏ hoặc
                      trắng.
                    </li>
                    <li>
                      Màu đỏ ở đầu không nên phủ mắt hoặc chỉ phủ một bên mắt
                    </li>
                    <li>
                      Màu mắt của cá Koi Kohaku phải là màu trắng không phải màu
                      xanh.
                    </li>
                    <li>Phân bố các khoang màu đỏ đều đặn trên cơ thể</li>
                    <li>Màu của mũi và vùng chóp đuôi là màu trắng</li>
                  </ul>
                </div>
              </div>
              <div id="6">
                <h3>5. Cách chăm sóc cá Koi Kohaku</h3>
                <p>
                  Vì Kohaku koi là loài thông minh có thể sống trong nhiều thập
                  kỷ vì thế khi chăm sóc cá Koi Kohaku bạn cần lưu ý về điều
                  kiện môi trường và yếu tố xung quanh sẽ làm ảnh hưởng tới quá
                  trình phát triển của chúng.
                </p>
                <ul>
                  <li>
                    Cá koi có thể tồn tại trong nhiều nhiệt độ nước, khả năng
                    chịu lạnh tốt. Tuy nhiên không nên để đáy hồ bị đóng băng để
                    hạn chế ảnh hưởng cá phát triển.
                  </li>
                  <li>
                    Hạn chế để cá Koi Kohaku tiếp xúc trực tiếp với ánh sáng mặt
                    trời, bạn nên tạo không gian thoáng mát để cá koi thư giãn
                    bên trong.
                  </li>
                  <li>
                    Kohaku koi là dòng ăn tạp nên chúng có thể ăn bất cứ thứ gì
                    như tảo, giun, ốc, côn trùng,.. Tuy nhiên không nên cho cá
                    Koi ăn quá nhiều sẽ dẫn tới thừa cân, gây ô nhiễm môi trường
                    nước trong ao.
                  </li>
                  <li>
                    Nên theo dõi bể cá Koi thường xuyên để biết cá sinh trưởng
                    thế nào, có gặp vấn đề gì không. Nếu bạn không có nhiều kinh
                    nghiệm có thể liên hệ siêu thị cá Koi VN để được tư vấn hỗ
                    trợ, giải đáp thắc mắc nhanh chóng.
                  </li>
                  <li>
                    Luôn giữ độ pH trong bể nuôi trong khoảng 7 - 7,5. Nhiệt độ
                    nước: 20 - 27 độ C. Hàm lượng oxy tối thiểu trong bể nuôi
                    duy trì khoảng 2,5 mg / l.
                  </li>
                  <li>
                    Nếu trong nước có nồng độ Nitrite quá cao hoặc cần thay nước
                    hồ thì không nên thay một lần mà thay dần dần, cứ sau 2 ngày
                    thì rút đi mỗi lần khoảng 1/3 thể tích hồ cho đến khi nước
                    hồ trong. .
                  </li>
                  <li>
                    Cá koi sinh trưởng và phát triển mạnh trong hồ cá koi có thể
                    tích nước trên 1000 Gallon nước, nền tốt, ít cây thủy sinh
                    vì chúng sẽ phá hoại thực vật, ảnh hưởng đến chất lượng nước
                    của hồ. Không nên trang trí quá nhiều thứ trong hồ cá Koi
                    như sỏi, đá cứng,..Bởi cá Kahoku phần lớn ở dưới đáy ao nên
                    thường xuyên tiếp xúc với bề mặt đó. Nếu hồ cá Koi gồ ghề có
                    thể làm xước hoặc nhiễm trùng cá koi.
                  </li>
                </ul>
              </div>
              <div id="7">
                <h3>7. Giá cá Koi Kohaku bao nhiêu ? </h3>
                <p>
                  Hiện tại Siêu thị Cá Koi Vn đang cung cấp dòng cá koi Kohaku
                  chuẩn từ cá nhật đến cá F1 với giá cực kỳ ưu đãi. Có thể nói
                  Siêu thị Cá Koi VN là một trong những đơn vị cung cấp cá koi
                  với giá rẻ nhất thị trường, mà chất lượng cũng rất đảm bảo.
                  Giá cá koi nhật và f1 như sau
                </p>
                <div id="71">
                  <h4>7.1 Giá Koi Kohaku F1</h4>
                  <p>
                    Đối với những con Kohaku f1 có kích thước từ 18cm – 40cm,
                    giá cá koi dao động từ 150.000 – 500.000 VNĐ tùy loại. Cao
                    cấp hơn là những con Kohaku f1 có kích thước từ 50cm – 55cm,
                    được chia làm loại 1, loại 2 và 3. Giá thành dao động từ
                    1.800.000 – 3.000.000 VNĐ tùy loại.
                  </p>
                </div>
                <div id="72">
                  <h4>7.2 Giá cá koi Kohaku Nhật chuẩn</h4>
                  <p>
                    Một con cá Koi trưởng thành Nhật Bản như Kohaku koi với kích
                    thước từ 10-15cm sẽ có giá từ 600.000 – 2.000.000VNĐ/con.
                    Ngoài ra còn có con Kohaku Koi thuần chủng … được xếp vào
                    hàng hiếm có kích thước lớn thì giá cá koi lên đến vài nghìn
                    đến hàng chục nghìn USD. Do đó nếu bạn muốn mua hãy liên hệ
                    với chúng tôi để được tư vấn tận tình.
                  </p>
                </div>
              </div>
              <div id="8">
                <h3>8. Tại sao nên mua Koi Kohaku ở shop chúng tôi ? </h3>
                <p>
                  Hiện nay có khá nhiều đơn vị cung cấp các dòng Koi Kohaku giá
                  thành và chất lượng trên thị trường. Đặc biệt là người mới bắt
                  đầu chơi cá Koi Kohaku sẽ rất khó khăn khi lựa chọn đơn vị
                  cung cấp cá Koi uy tín cho mình.
                  <br />
                  KoiVNStore một trong những địa chỉ vàng uy tín để bạn lựa chọn
                  mua bán – thiết kế hồ cá Koi chính hãng cho người tiêu dùng.
                  Chúng tôi tự hào mang đến cho bạn nhiều loại cá Koi, trong đó
                  có Koi Kohaku đẹp, giá thành tốt cho bạn. Chưa kể tại đây
                  chúng tôi có đội ngũ chuyên gia giàu kinh nghiệm, tư vấn hỗ
                  trợ lựa chọn mua và chăm sóc cá Koi đúng cách. Vì vậy, nếu có
                  nhu cầu tư vấn, tìm hiểu các dòng cá Koi Kohaku hãy liên hệ
                  ngay với siêu thị cá Koi VN để được giải đáp nhanh chóng.
                  <br />
                  Một con cá Koi trưởng thành Nhật Bản như Kohaku koi với kích
                  thước từ 10-15cm sẽ có giá từ 600.000 – 2.000.000VNĐ/con.
                  Ngoài ra còn có con Kohaku Koi thuần chủng … được xếp vào hàng
                  hiếm có kích thước lớn thì giá cá koi lên đến vài nghìn đến
                  hàng chục nghìn USD. Do đó nếu bạn muốn mua hãy liên hệ với
                  chúng tôi để được tư vấn tận tình.
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
          <Footer />
        </div>
      </div>
    </>
  );
}
