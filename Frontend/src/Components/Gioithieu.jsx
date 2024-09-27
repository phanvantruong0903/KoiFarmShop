import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Gioithieu() {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div>
        <div>
          <Navbar menu={menu} setMenu={setMenu} />
        </div>
        <Container>
          <div>
            <div>
              <h1 style={{ paddingTop: "100px", textAlign: "center" }}>
                Giới Thiệu
              </h1>
              <hr />
            </div>

            <div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "75%" }}>
                  <img
                    src="imagine/467ed1b558d98287dbc8.jpg"
                    style={{
                      width: "100%",
                      paddingLeft: "10px",
                      marginTop: "50px",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "50%",
                    paddingLeft: "20px",
                    marginTop: "50px",
                  }}
                >
                  <h2>KoiVNStore</h2>
                  <p>Giới Thiệu</p>
                  <hr />
                  <p>
                    Koi là một loại cá chép đã được thuần hóa, lai tạo và được
                    nuôi khá phổ biến tại Nhật Bản để làm cảnh. Bên cạnh vẻ đẹp
                    mê hồn, Koi còn được biết đến là một loại cá phong thủy cực
                    tốt, luôn mang lại may mắn cho người chơi. Siêu Thị Cá Koi
                    VN chuyên cung cấp cho khách hàng trên cả nước các loại cá
                    Koi chất lượng tốt với giá thành ưu đãi nhất.
                  </p>
                  <p>
                    Với nhiều năm kinh nghiệm và tầm cỡ phát triển, Siêu Thị Cá
                    Koi VN liên kết với các trang trại nổi tiếng của Nhật Bản
                    như Marusei, Dainichi, Marudo, Sakai,… để trực tiếp lựa lọc
                    ra những chú cá Koi chất lượng với đa dạng chủng loại, kích
                    thước nhập khẩu về Việt Nam theo nhu cầu của khách hàng.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p>
                Sở hữu nguồn hàng chất lượng và ổn định, cùng dịch vụ chăm sóc
                tận tâm, chúng tôi tin: Siêu Thị Cá Koi VN đáp ứng được yêu cầu
                của những vị khách khó tính nhất trong làng cá Koi nước ta.
              </p>
              <ul>
                <li>
                  Ngoài ra, chúng tôi còn cung cấp dịch vụ chăm sóc sân vườn, hồ
                  cá Koi trọn gói dành cho các khách hàng có nhu cầu, các biệt
                  thự, cao ốc, văn phòng, nhà hàng, quán cà phê, khách sạn …
                </li>
                <li>
                  {" "}
                  Với đội ngũ nghệ nhân và nhân viên lành nghề, giàu kinh nghiệm
                  trong lĩnh vực thiết kế và thi công sân vườn, hồ cá Koi, Hồ
                  sinh thái, Thủy cung, tiểu cảnh, hòn non bộ, tranh đá, phù
                  điêu…sẽ đáp ứng các nhu cầu trên cho quý khách với mức giá hợp
                  lí nhất.
                </li>
                <li>
                  {" "}
                  Đến với chúng tôi, quý khách sẽ được các nhân viên dày dặn
                  kinh nghiệm tư vấn miễn phí.
                </li>
                <li>
                  {" "}
                  Các sản phẩm và dịch vụ của chúng tôi có bảo hành và quý khách
                  sẽ được hướng dẫn cách chăm sóc.
                </li>
                <li>
                  Quý khách chỉ cần goi điện thoại sẽ có nhân viên đến tận nhà
                  tư vấn, đo đạc và báo giá.
                </li>
              </ul>
            </div>
            <div>
              <h4>Sản phẩm đa dạng:</h4>
              <ul>
                <li>
                  Chuyên cung cấp phụ kiện cho hồ cá Koi, thiết bị lọc hồ Koi và
                  các hệ thống xử lý nước các hồ cá Koi lớn trên 24m3 nước ao.
                  Thùng lọc ao Koi lớn từ các nhãn hàng cao cấp Sera của Đức,
                  SICCE của Ý hay BOYU của Đài Loan.
                </li>
                <li>
                  Vật liệu lọc nước hồ cá Koi, cá chép Nhật, giúp hệ thống lọc
                  có một chu trình xử lý nước sinh học hoàn thiện với các vật
                  liệu lọc: chổi lọc, bùi nhùi, sứ thanh, nham thạch… và các sản
                  phẩm chăm sóc nước cho Hồ cá Koi khác.
                </li>
                <li>
                  Vấn đề tảo xanh trong ao Koi luôn làm đau đầu người nuôi cá
                  Koi. Tảo gây mất mỹ quan hồ koi, làm đục nước hạn chế tầm
                  nhìn, gây thiếu hụt Oxy nặng trong hồ Koi. Vì thế, bạn có thể
                  sử dụng đèn UV-C hay dung dịch vi sinh diệt tảo mà không hề có
                  hại cho cá Koi hay người dùng, để xử lý tảo một cách hiệu quả.
                </li>
                <li>
                  Vấn đề tảo xanh trong ao Koi luôn làm đau đầu người nuôi cá
                  Koi. Tảo gây mất mỹ quan hồ koi, làm đục nước hạn chế tầm
                  nhìn, gây thiếu hụt Oxy nặng trong hồ Koi. Vì thế, bạn có thể
                  sử dụng đèn UV-C hay dung dịch vi sinh diệt tảo mà không hề có
                  hại cho cá Koi hay người dùng, để xử lý tảo một cách hiệu quả.
                </li>
              </ul>
            </div>
          </div>
        </Container>
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
