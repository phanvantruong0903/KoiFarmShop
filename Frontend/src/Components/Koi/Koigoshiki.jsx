import { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
export default function Koigoshiki() {
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
  const handleScroll31 = () => {
    const element = document.getElementById("31");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll32 = () => {
    const element = document.getElementById("32");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll33 = () => {
    const element = document.getElementById("33");

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
              <h1>CÁ KOI GOSHIKI</h1>
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
                      1. Giới thiệu về cá koi Goshiki
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll2}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      2. Cách nhận biết Goshiki Koi
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll3}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      3. Cách chọn Goshiki Koi
                    </span>
                    <ul>
                      <li>
                        <span
                          onClick={handleScroll31}
                          style={{
                            color: "rgb(251, 139, 36)",
                            cursor: "pointer",
                          }}
                        >
                          3.1 Hình dáng
                        </span>
                      </li>
                      <li>
                        {" "}
                        <span
                          onClick={handleScroll32}
                          style={{
                            color: "rgb(251, 139, 36)",
                            cursor: "pointer",
                          }}
                        >
                          3.2 Màu sắc
                        </span>
                      </li>
                      <li>
                        {" "}
                        <span
                          onClick={handleScroll33}
                          style={{
                            color: "rgb(251, 139, 36)",
                            cursor: "pointer",
                          }}
                        >
                          3.3 Tiêu chí để chọn koi Goshiki nhỏ
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll4}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      4. Cách chăm sóc Cá Koi Goshiki
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll5}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      5. Ý nghĩa đối với phong thủy
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll6}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      6. Giá cá koi Goshiki bao nhiêu?
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll7}
                      style={{ color: "rgb(251, 139, 36)", cursor: "pointer" }}
                    >
                      7. Tại sao nên mua Goshiki Koi tại Siêu thị Cá koi VN?
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2>Nội dung chi tiết</h2>
                <p>
                  Xuất xứ từ Nhật với vẻ đẹp thuần khiết và những ưu điểm nổi
                  trội, Cá Koi Goshiki đảm bảo sẽ đem đến cho các bạn những trải
                  nghiệm thú vị với những màu sắc tươi đẹp kết hợp lại tạo sức
                  hút đối với người xem. Hơn nữa, Goshiki Koi còn là giống cá
                  mang lại rất nhiều may mắn cho gia chủ, sẽ là một trải nghiệm
                  thú vị khi sở hữu chúng.
                </p>
              </div>
              <div id="1">
                <h3>1. Giới thiệu về cá koi Goshiki </h3>
                <div>
                  <p>
                    Trong tiếng Nhật, Goshiki có nghĩa là "ngũ sắc". Khi kết hợp
                    một con cá koi Asagi và một con cá koi Kohaku, ta sẽ tạo ra
                    dòng cá koi Goshiki. Điều này khiến cho những nhà tạo giống
                    cảm thấy ấn tượng vì sự phong phú màu sắc của loại cá này.
                    <br />
                    Những con cá koi Goshiki được phát triển bằng cách giảm
                    thiểu đến mức tối đa màu Ai trên các bệt màu Hi. Khi làm như
                    vậy, ta sẽ tạo ra một loại cá koi có màu Ai trải dài từ đầu
                    đến đuôi, nhưng chỉ nằm phía trên vùng Shiroji. Nếu ta bỏ đi
                    Ai trên vùng Shiroji, ta sẽ có một con cá koi Kohaku. Điều
                    này cho thấy rằng một con cá koi Kohaku có thể có sự xuất
                    hiện của Asagi.
                  </p>
                </div>
                <div>
                  <p>Hiện có ba dòng cá koi Goshiki khác nhau.</p>
                  <ul>
                    <li>
                      Dòng đầu tiên mang nhiều đặc điểm của Asagi, với dấu Ai
                      xuất hiện trên toàn thân và cả trên Hi và Shiroji. Vùng Hi
                      trên thân của chúng cũng phải đậm để các vảy có Ai phân bố
                      đều trên toàn thân.
                    </li>
                    <li>
                      Dòng cá koi Goshiki thứ hai, đã được lựa chọn kỹ càng, chỉ
                      có Ai trên vùng Shiroji. Thường thì, chúng có dòng máu của
                      Kohaku, và thiết kế Hi của chúng rất đậm.
                    </li>
                    <li>
                      Dòng cá koi Goshiki thứ ba có thêm dòng máu của Haijiro,
                      cùng huyết hệ với Goshiki. Điều này khiến cho vây ngực của
                      chúng có Motoguro, một đặc tính đến từ Haijiro. Loại cá
                      này được tạo ra thông qua lai tạo với Haijiro, chứ không
                      phải là sự lựa chọn từ Goshiki.
                    </li>
                  </ul>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p>
                    Ginrin Goshiki được tạo ra thông qua việc phối giống giữa
                    một con Ginrin Kohaku và một con Goishiki. Chogoroun là một
                    nhà nhân giống nổi tiếng nhưng chỉ sản xuất được ít con lai
                    đẹp. Loại cá này chỉ thật sự thu hút khi đến 2 tuổi. Goshiki
                    Sanke được tạo ra thông qua việc phối giống giữa một con
                    Asagi và một con Sanke.
                  </p>
                  <img
                    src="src/assets/Koi-Goshiki/ca-koi-goshiki-3 (1).webp"
                    style={{ width: "50%" }}
                  />
                  <p>Cá Koi Goshiki vô cùng nổi bật</p>
                </div>
              </div>

              <div id="2">
                <h3>2. Cách nhận biết Goshiki Koi</h3>
                <div>
                  <p>
                    Để trở thành một con cá koi Goshiki đẹp, nó cần phải có nét
                    đẹp của dòng máu Kohaku với những vết Ai chỉ nên xuất hiện
                    trên vùng Shiroji. Nếu một con cá có nhiều dòng máu Asagi,
                    thì những vệt Ai sẽ xuất hiện trên toàn bộ các vảy của thân
                    cá. Goshiki không được có ánh kim và không nên bị lẫn lộn
                    với một con Kujaku hoặc một con koi Goromo, hai loại cá chỉ
                    có vệt màu khác duy nhất trên vùng Hi.
                  </p>
                  <ul>
                    <li>
                      Điểm đầu tiên để nhận biết một con Goshiki đẹp là khuôn
                      màu của nó giống như Kohaku, với những bệt màu Hi lớn trên
                      vùng Shiroji.
                    </li>
                    <li>
                      Điểm thứ hai là tối thiểu những vảy của vùng Shiroji phải
                      có bong mờ trên gờ vẩy.
                    </li>
                    <li>
                      Điểm thứ ba là màu sắc của những bệt màu là Hi, nhưng đôi
                      khi cũng có bệt màu Ai nằm lên trên.
                    </li>
                  </ul>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src="src/assets/Koi-Goshiki/ca-koi-goshiki-2.webp" />
                  <p>Dòng cá Koi Kuro Goshiki</p>
                </div>
              </div>
              <div id="3">
                <h3>3. Cách chọn mua cá Koi Ginrin</h3>
                <div>
                  <p>
                    Những người đã có kinh nghiệm với việc nuôi và chơi Koi sẽ
                    hiểu được rằng, để đánh giá được phẩm chất tương lai của một
                    con cá Koi Goshiki, ta cần phải quan sát kỹ càng và chăm sóc
                    nó thật tốt.
                  </p>
                  <ul>
                    <li>
                      <span id="31">3.1 Hình dáng</span>
                      <p>
                        Về hình dáng, Koi Goshiki cần có thân hình như một chiếc
                        tàu ngầm, với bụng không quá phệ, phình hay ngắt quãng
                        quá sâu như dáng cá nóc. Điểm đầu và điểm kết thúc của
                        thân cá phải được bơi thẳng và uyển chuyển. Phần đuôi
                        cần đầy đặn, cong tròn và mịn màng khi sờ vào. Đuôi ngắn
                        hoặc không căng sẽ cho thấy con cá không đủ phẩm chất để
                        phát triển độ dài và độ khủng. Da của Koi Goshiki phải
                        sáng, sạch, nhắn, min và trơn bóng. Chọn Koi da nhờ nhợ,
                        mờ nhạt, tróc vẩy hoặc trầy xước là điều tuyệt đối không
                        nên làm.
                      </p>
                    </li>
                    <li>
                      <span id="32">3.2 Màu sắc</span>
                      <p>
                        Về màu sắc, Koi Goshiki cần có khuôn màu đẹp của Kohaku,
                        với khoang màu đậm và rõ nét. Đường biên của các khoang
                        màu cần được xác định rõ ràng, không bị lem nhem. Vệt Ai
                        chỉ nên xuất hiện ở vùng Shiroji và không nên xuất hiện
                        ở vùng Hi.
                      </p>
                    </li>
                    <li>
                      <span id="33">3.3 Tiêu chí để chọn koi Goshiki nhỏ</span>
                      <p>
                        Khi chọn một con Koi Goshiki nhỏ, ta cần chọn con cá
                        mang dòng máu của Kohaku nhiều hơn và điểm Ai nên được
                        giới hạn ở trên vùng Shiroji. Nếu Koi Goshiki mang dòng
                        máu Asagi, các điểm Ai sẽ xuất hiện trên toàn bộ vảy của
                        thân cá. Koi Goshiki không nên có ánh kim, vì điều này
                        sẽ dễ khiến ta nhầm lẫn với Koi Kujaku và Koi Goromo.
                        Vảy của Koi Goshiki nên có màu xám hoặc màu xanh Ai, với
                        sự thống nhất. Tối thiểu, vảy của vùng Shiroji phải có
                        bong mờ trên gờ vẩy.
                        <br />
                        Koi Goshiki có hai biến thể: Goshiki kiểu cũ với vảy tối
                        hơn và có thể xuất hiện trên cả điểm vảy của Hi. Khi
                        nuôi Koi Goshiki kiểu cũ, con cá sẽ có xu hướng tối màu
                        cuối cùng có thể giống với Koi màu xám đen
                      </p>
                    </li>
                  </ul>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src="src/assets/Koi-Goshiki/ca-koi-goshiki-1.webp" />
                  <p>Các dòng Cá Koi Goshiki</p>
                </div>
              </div>
              <div id="4">
                <h3>4. Cách chăm sóc Cá Koi Goshiki</h3>
                <div>
                  <p>
                    Cá Koi Goshiki là dòng cá đẹp xuất xứ từ Nhật bản mang lại
                    sự sung túc, may mắn. Được rất nhiều người yêu thích và nuôi
                    dưỡng trong gia đình, có ý nghĩa về cả phong thủy lẫn thẩm
                    mỹ. Hãy cùng tìm hiểu về cách chăm sóc cho các koi nói chung
                    và Goshiki Koi nói riêng để có thể nuôi dưỡng đàn cá của
                    mình một cách khỏe mạnh nhé:
                  </p>
                  <ul>
                    <li>
                      Yêu cầu phải chuẩn bị hồ nuôi, nguồn nước phù hợp với đàn
                      cá. Không dùng nguồn nước bẩn cũng như diện tích hồ quá
                      nhỏ, quá cạn.
                    </li>
                    <li>
                      Khi đưa cá về thả cần tắm thuốc tím giúp cá phòng và chữa
                      bệnh. Sử dụng thuốc tím trong hồ cũng giúp khử vi khuẩn,
                      diệt tảo giúp cá luôn khỏe mạnh.
                    </li>
                    <li>
                      Thường xuyên vệ sinh hồ nuôi, sử dụng các phương pháp lọc
                      hồ để lọc sạch các chất thải. Dùng rong, tảo lượng vừa đủ
                      thả vào hồ nuôi sẽ tạo nên môi trường sinh thái tốt cho cá
                      phát triển
                    </li>
                    <li>
                      Là giống cá ăn tạp nên Goshiki ăn 1-2 lần / ngày. Mỗi lần
                      cho ăn bạn không nên cho dư thừa sẽ làm ô nhiễm nguồn
                      nước. Thức ăn của cá nên để nơi thoáng mát tránh ảnh hưởng
                      đến sức khỏe của đàn cá.
                    </li>
                    <li>
                      Để phòng bệnh cho Goshiki thì chúng ta cần thường xuyên
                      quan sát hồ nuôi cũng như các biểu hiện của đàn cá. Kiểm
                      tra xử lý rong, tảo kịp thời, kiểm tra hệ thống lọc nước
                      còn ổn định không….
                    </li>
                    <li>
                      Nên tìm hiểu và lựa chọn nguồn thức ăn cho Goshiki có
                      nguồn gốc, đảm bảo an toàn.
                    </li>
                  </ul>
                  <p>
                    Trên đây là một số cách chăm sóc cá koi Goshiki đơn giản và
                    khoa học mà bên siêu thị Cá Koi VN muốn gửi đến quý khách
                    hàng. Chúc bạn sẽ áp dụng và chăm sóc đàn cá khỏe mạnh.
                  </p>
                </div>
              </div>
              <div id="5">
                <h3>5. Ý nghĩa đối với phong thủy </h3>
                <div>
                  <p>
                    Trong văn hóa Nhật Bản, Koi Goshiki được coi là mang lại sự
                    mạnh mẽ, giàu có và sức khỏe cho gia đình chủ nhân. Được tạo
                    ra bằng cách kết hợp giữa bố mẹ Koi Kohaku và Koi Asagi, Koi
                    Goshiki có nền sumi đen và dải vảy màu đỏ trên nền trắng,
                    mang nhiều ý nghĩa phong thủy. Màu sắc của Koi Goshiki bao
                    gồm Hi đỏ (thuộc hành hỏa), Shiro trắng (thuộc hành Kim) và
                    sumi đen (thuộc hành Thủy). Với sự kết hợp này, Koi Goshiki
                    phù hợp với nhiều mệnh khác nhau và là lựa chọn lý tưởng cho
                    những ai yêu thích nuôi cá Koi.
                  </p>
                </div>
              </div>
              <div id="6">
                <h3>6. Giá cá koi Goshiki bao nhiêu? </h3>
                <div>
                  <p>
                    Hiện tại Siêu thị Cá Koi Vn đang cung cấp dòng cá koi
                    Goshiki chuẩn từ cá nhật đến cá F1 với giá cực kỳ ưu đãi. Có
                    thể nói Siêu thị Cá Koi VN là một trong những đơn vị cung
                    cấp cá koi với giá rẻ nhất thị trường, mà chất lượng cũng
                    rất đảm bảo. Giá cá koi nhật và f1 như sau:
                  </p>
                  <ul>
                    <li>
                      Một con cá Koi trưởng thành Nhật Bản như Goshiki koi với
                      kích thước từ 20-25cm sẽ có giá từ 1.600.000 –
                      4.500.000VNĐ/con.
                    </li>
                    <li>
                      Ngoài ra còn có con Goshiki Koi thuần chủng … được xếp vào
                      hàng hiếm có kích thước lớn thì giá cá koi lên đến vài
                      nghìn đến hàng chục nghìn USD. Do đó nếu bạn muốn mua hãy
                      liên hệ với chúng tôi để được tư vấn tận tình.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="7">
                <h3>7. Tại sao nên mua Goshiki Koi tại Siêu thị Cá koi VN?</h3>
                <div>
                  <p>
                    Cá Koi Goshiki và cá koi Karashi không chỉ là loài cá đẹp mà
                    nó còn mang ý nghĩa đem đến sức mạnh, tiền bạc cho chủ nhân.
                    Vì vậy Goshiki được rất nhiều người quan tâm để mua nuôi.
                    Hiện nay có rất nhiều nơi cung cấp giống Goshiki nhưng đều
                    chưa đem lại sự yên tâm cho khách hàng về chất lượng của cá.
                    <br />
                    <img src="src/assets/Koi-Goshiki/ca-koi-goshiki.webp" />
                    Siêu thị Cá Koi VN là nơi cung cấp những chú cá koi Goshiki
                    có chất lượng đẹp và đạt chuẩn. Với nhiều năm kinh nghiệm
                    tiếp cận, cung cấp cho thị trường cá koi thì Cá Koi VN đang
                    là địa điểm đáng tin cậy dành cho bạn.
                    <br />
                    Đến với Siêu thị Cá Koi VN quý khách hàng sẽ được tư vấn tận
                    tình để lựa chọn những chú cá Goshiki có chất lượng đạt
                    chuẩn, phù hợp và giá thành phải chăng. Bên cạnh đó sẽ là
                    chính sách bảo hành cũng như chính sách đồng hành hỗ trợ
                    trong lúc nuôi cá sẽ đem lại cho khách hàng sự yên tâm tuyệt
                    đối.
                    <br />
                    Hy vọng với những thông tin trong bài viết đã giúp các bạn
                    nhận biết được cá Goshiki Koi và các thông tin cơ bản về
                    giống cá “ngũ sắc” này. Nếu cần tư vấn thêm bạn hãy liên hệ
                    ngay Cá Koi VN để để được giải đáp thắc mắc một cách nhanh
                    chóng. Chắc chắn rằng địa chỉ này sẽ mang đến cho bạn những
                    trải nghiệm chất lượng và uy tín.
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
