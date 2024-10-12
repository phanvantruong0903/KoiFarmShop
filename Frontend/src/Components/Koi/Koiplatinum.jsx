import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import CardGrid from "../Cardgrid";
import Footer from "../Footer";
import axios from "axios";
export default function Koiplatinum() {
  const [menu, setMenu] = useState("home");
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idPlatinum, setIDPlatinum] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
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
  const handleScroll6 = () => {
    const element = document.getElementById("6");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        console.log("Data received from API:", response.data); // Kiểm tra dữ liệu
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result); // Lấy mảng từ thuộc tính 'result'
          setCategoryData(response.data.cateogryList);
          console.log("Card data set successfully:", response.data.result9); // Kiểm tra sau khi set
          console.log(
            "Category Data set successfully:",
            response.data.cateogryList
          );
        } else {
          console.error("Dữ liệu không phải là mảng:", response.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err); // Ghi lại lỗi
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const platinumCard = categoryData.find(
      (card) => card.CategoryName === "Platinum"
    );

    if (platinumCard) {
      setIDPlatinum(platinumCard._id);
    }
  }, [categoryData]); // Run this effect when categoryData changes

  useEffect(() => {
    if (idPlatinum) {
      const filtered = cardData.filter(
        (card) => card.CategoryID === idPlatinum
      );
      setFilteredCards(filtered);
    }
  }, [idPlatinum, cardData]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
                CÁ KOI PLATINUM
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
                  fontWeight: "600",
                }}
              >
                <h2 style={{ fontWeight: "bold", color: "red" }}>
                  Nội Dung Bài Viết
                </h2>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll1}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      1. Giới thiệu về cá Platinum Koi
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll2}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      2. Cách nhận biết cá Koi Platinum
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll3}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      3. Cách chọn cá Platinum Koi
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll4}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      4. Cách chăm sóc cá koi Platinum
                    </span>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll5}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      5. Giá cá koi Platinum bao nhiêu?
                    </span>
                    <ul>
                      <li style={{ paddingTop: "10px" }}>
                        <span
                          onClick={handleScroll51}
                          style={{
                            color: "blue",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "20px",
                          }}
                        >
                          5.1 Giá cá koi Platinum F1
                        </span>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <span
                          onClick={handleScroll52}
                          style={{
                            color: "blue",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "20px",
                          }}
                        >
                          5.2 Giá cá koi Platinum Nhật chuẩn
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <span
                      onClick={handleScroll6}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      6. Tại sao nên mua cá Platinum Koi tại Siêu thị Cá Koi VN?
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  Nội dung chi tiết
                </h2>
                <p style={{ fontSize: "15px", fontWeight: "400" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "red",
                    }}
                  >
                    Cá Koi{" "}
                  </span>
                  là giống cá được ưa chuộng để làm cảnh, trang trí không gian
                  sống trở lên hoàn hảo cho người đam mê cá cảnh. Với đa dạng
                  giống loài, màu sắc và kích thước nổi bật trong đó là dòng{" "}
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "red",
                    }}
                  >
                    Cá Platinum Koi{" "}
                  </span>
                  à một trong những loài cá Koi được nhiều người yêu thích bởi
                  vẻ ngoài đặc trưng của nó. Hãy cùng Siêu thị Cá Koi VN tìm
                  hiểu rõ hơn về loài cá này ngay trong bài viết dưới đây.
                </p>
              </div>
              <div id="1">
                <h3 style={{ color: "red" }}>
                  {" "}
                  1. Giới thiệu về cá Platinum Koi
                </h3>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="src/assets/Koi-Ogon/ca-koi-platinum-3.webp"
                    style={{ width: "50%" }}
                  />
                  <p style={{ fontSize: "15px", fontWeight: "400" }}>
                    Giới thiệu về cá Platinum Koi
                  </p>
                </div>
                <p style={{ fontSize: "15px", fontWeight: "400" }}>
                  Cá koi bạch kim Platinum là dòng điển hình nhất của Hikarimuji
                  Mono - là dòng Cá Koi duy nhất có một màu. Thông thường, các
                  loài cá Koi Nhật sẽ có hai màu trở lên nhưng chỉ duy nhất có
                  cá koi Platinum có một màu nhưng lại không đơn điệu vì toàn
                  thân cá có phủ một lớp ánh kim loại bắt mắt. Cá koi Platinum
                  có thân cá nhỏ hơn, phần râu khá ngắn. Vây ngực - lưng - đuôi
                  cá khá nhỏ, khi bơi kém phần mềm mại và uyển chuyển.
                </p>
                <ul style={{ fontSize: "15px", fontWeight: "400" }}>
                  <li>Kích thước hồ cá tối thiểu: 1000 gallon</li>
                  <li>Mức độ chăm sóc: Dễ dàng</li>
                  <li>Tính cách: Hòa Bình</li>
                  <li>Điều kiện nước: 36 - 90 F, PH 6,8 - 7,2</li>
                  <li>Kích thước tối đa: 90cm</li>
                  <li>Chế độ ăn: Ăn tạp</li>
                </ul>
              </div>

              <div id="2">
                <h3 style={{ color: "red" }}>
                  2.Cách nhận biết cá Koi Platinum
                </h3>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="src/assets/Koi-Ogon/2.webp"
                    style={{ width: "50%" }}
                  />
                  <p>Cách nhận biết cá Koi Platinum</p>
                </div>
                <p style={{ fontSize: "15px", fontWeight: "400" }}>
                  Platinum Koi được xem là ngôi sao của hồ cá Koi. Màu trắng
                  bạch kim của cá như phát sáng như “thỏi bạc” di động dưới làn
                  nước trong xanh. Đặc điểm nhận dạng loài cá koi bạch kim
                  Platinum khác với goromo koi chính là tính nữ, hậu môn lồi lên
                  còn cá đực sẽ có phần hậu môn lõm vào bên trong. Mỗi lần sinh
                  sản, loài cá này có thể sinh tới hàng nghìn trứng và thụ tinh
                  từ 4 - 7 ngày.
                  <br /> Mắt cá Platinum Koi khá linh hoạt, nhanh nhạy. Thân cá
                  mập, phần hông có hơi ngắn nhưng thân thuôn dài, phần đầu và
                  vai rộng. Loài cá này có phần râu khá dài, cứng, đầu cá hơi
                  gù. Phân vây ngực, vây lưng và vây đuôi khá dày, đục mà ánh
                  sáng không thể xuyên qua được.
                </p>
              </div>
              <div id="3">
                <h3 style={{ color: "red" }}>3. Cách chọn cá Platinum Koi</h3>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="src/assets/Koi-Ogon/3.webp"
                    style={{ width: "50%" }}
                  />
                </div>
                <p style={{ fontSize: "15px", fontWeight: "400" }}>
                  Một trong những cách chọn cá koi bạch kim Platinum đẹp, đẳng
                  cấp cần đáp ứng những điều kiện sau:
                </p>
                <ul style={{ fontSize: "15px", fontWeight: "400" }}>
                  <li>
                    Cá có màu sắc trắng bạc đẹp và đều màu, không được có các
                    màu khác xen lẫn.
                  </li>
                  <li>
                    Chọn cá có thân hình như một chiếc tàu ngầm, bụng cá không
                    phệ, không ngắt quãng như dáng cá nóc. Nếu lựa chọn con mập
                    quá thì thân cá sẽ bụng ngắn, còn nếu như chọn cá có bụng
                    dài ngoằn thì khi cá phát triển như con lươn, sau này không
                    khủng về độ lớn.
                  </li>

                  <li>
                    Bạn cần phải quan sát thật kỹ dáng cá bơi, điểm bắt đầu và
                    kết thúc của cá, lúc bơi cao và lúc bơi thấp thì dáng cá như
                    thế nào. Quan sát thật kỹ dáng cá để bạn có thể xác định
                    được cá khỏe hay không. Nếu như cá bơi không thẳng, không
                    uyển chuyển thì không nên chọn.
                  </li>

                  <li>
                    Chọn cá có phần đuôi cong, tròn, sờ vào mịn. Trường hợp đuôi
                    không cong tròn mà kết thúc đuôi bằng hình trái tim cũng
                    được. Nếu đuôi cá ngắn, không căng thì trong tương lai cá sẽ
                    khó phát triển đến độ dài và sức mạnh cần thiết.
                  </li>

                  <li>
                    Chọn cá có lớp da phải sáng, sạch, nhẵn mịn và trơn bóng bởi
                    da cá đẹp, tốt sẽ tác động đến vẻ đẹp của vảy cá, làm cho
                    vảy cá đều đặn hơn. Tránh chọn những con cá có màu sắc mờ
                    nhạt, da tróc vảy, trầy xước,...
                  </li>

                  <li>
                    Không nên chọn những con cá có dáng bơi lắc lư, lay động, cá
                    bị hở râu, râu cá không đều, miệng cá méo, phân thân của cá
                    bị cong,...cũng là điều mà bạn nên lưu ý.
                  </li>

                  <li>
                    Không nên chọn những con cá có phần mang bị đỏ có thể chúng
                    bị nhiễm sán
                  </li>
                </ul>
                <p style={{ fontSize: "15px", fontWeight: "400" }}>
                  Người Nhật rất tôn thờ loài cá koi bạch kim Platinum. Đây là
                  biểu tượng của ánh sáng, may mắn, sự thanh sạch và thanh cao
                  nên rất được quan lại xưa ưa chuộng. Nhiều người mua Platinum
                  Koi để mua quà tặng biếu nhau, tượng trưng cho cốt cách thanh
                  tao.
                  <br />
                  Trong phong thủy Platinum Koi có màu bạch kim nên rất phù hợp
                  với những người mệnh Kim. Mà trong phong thủy, Kim sinh Thủy
                  nên người mệnh Thủy cũng hợp mệnh. Người Việt cũng ưa chuộng
                  các con số 6,8,9 nên thường chọn số lượng con cá như vậy để
                  nuôi. Lựa chọn cá koi Platinum hợp phong thủy trong nhà, tư
                  tưởng sẽ mang lại những điều tích cực trong cuộc sống, công
                  việc thuận buồm xuôi gió.
                </p>
              </div>
              <div id="4">
                <h3 style={{ color: "red" }}>
                  4. Cách chăm sóc cá koi Platinum
                </h3>
                <div>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="src/assets/Koi-Ogon/4.webp"
                      style={{ width: "50%" }}
                    />
                    <p style={{ fontSize: "15px", fontWeight: "400" }}>
                      Cách chăm sóc cá koi Platinum Ogon
                    </p>
                  </div>
                  <p></p>
                </div>
                <p style={{ fontSize: "15px", fontWeight: "400" }}>
                  Khi nuôi cá Platinum Koi cũng như asagi koi, bạn cũng nên tìm
                  hiểu cách chăm sóc cụ thể:
                </p>
                <ul style={{ fontSize: "15px", fontWeight: "400" }}>
                  <li>
                    Cá koi bạch kim Platinum sinh trưởng và phát triển trong một
                    hồ cá có thể tích lớn hơn 1000 gallon nước, nền tốt và ít
                    các loại cây thủy sinh bởi loài cá này có khả năng phá cây,
                    gây ảnh hưởng tới chất lượng nước trong hồ. Khi nuôi cá Koi
                    Platinum, bạn cần phải có một hệ thống lọc chuyên nghiệp để
                    duy trì và phẩm chất của những con cá chất lượng cao này.
                  </li>
                  <li>
                    Trong 3 đến 4 tuần đầu tiên khi cá mới ra đời, bạn nên cho
                    cá ăn thức ăn tươi loại nhỏ, trùn chỉ, bobo. Sau đó, dần dần
                    thay đổi chế độ thức ăn của cá trong những tuần tiếp theo,
                    màu sắc của cá sẽ thay đổi từ tuần thứ 3 đến tuần thứ 12.
                  </li>
                </ul>
              </div>

              <div id="5">
                <h3 style={{ color: "red" }}>
                  5. Giá cá koi Platinum bao nhiêu?{" "}
                </h3>
                <p style={{ fontSize: "15px", fontWeight: "400" }}>
                  Hiện tại Siêu thị Cá Koi Vn đang cung cấp dòng cá koi Platinum
                  chuẩn từ cá nhật đến cá F1 với giá cực kỳ ưu đãi. Có thể nói
                  Siêu thị Cá Koi VN là một trong những đơn vị cung cấp cá koi
                  với giá rẻ nhất thị trường, mà chất lượng cũng rất đảm bảo.
                  Giá cá koi nhật và f1 như sau:
                </p>
                <div id="51">
                  <h4 style={{ color: "red" }}>5.1 Giá cá koi Platinum F1</h4>
                  <p style={{ fontSize: "15px", fontWeight: "400" }}>
                    Đối với những con Kohaku f1 có kích thước từ 18cm – 40cm,
                    giá cá koi dao động từ 150.000 – 500.000 VNĐ tùy loại. Cao
                    cấp hơn là những con Kohaku f1 có kích thước từ 50cm – 55cm,
                    được chia làm loại 1, loại 2 và 3. Giá thành dao động từ
                    1.800.000 – 3.000.000 VNĐ tùy loại.
                  </p>
                </div>
                <div id="52">
                  <h4 style={{ color: "red" }}>
                    5.2 Giá cá koi Platinum Nhật chuẩn
                  </h4>
                  <p style={{ fontSize: "15px", fontWeight: "400" }}>
                    Một con cá Koi trưởng thành Nhật Bản như Platinum koi với
                    kích thước từ 10-15cm sẽ có giá từ 600.000 –
                    2.000.000VNĐ/con. <br /> Ngoài ra còn có con Platinum Koi
                    thuần chủng … được xếp vào hàng hiếm có kích thước lớn thì
                    giá cá koi lên đến vài nghìn đến hàng chục nghìn USD. Do đó
                    nếu bạn muốn mua hãy liên hệ với chúng tôi để được tư vấn
                    tận tình.
                  </p>
                </div>
              </div>
              <div id="6">
                <h3 style={{ color: "red" }}>
                  6. Tại sao nên mua cá Platinum Koi tại Siêu thị Cá Koi VN?
                </h3>
                <p style={{ fontSize: "15px", fontWeight: "400" }}>
                  Hiện nay, trên thị trường có rất nhiều đơn vị cung cấp cá koi
                  bạch kim Platinum với giá thành và chất lượng khác nhau. Điều
                  này rất khó khăn đối với khách hàng để có thể lựa chọn được
                  đơn vị uy tín. Siêu thị Cá Koi VN là một trong những đơn vị uy
                  tín, chuyên cung cấp các loài cá Koi vô cùng đa dạng, phong
                  phú được rất nhiều khách hàng tin tưởng. Siêu thị Cá Koi VN
                  chuyên cung cấp các loài cá đa dạng đáp ứng được mọi nhu cầu
                  của khách hàng. Bên cạnh đó, mức giá hợp lý cũng là một trong
                  những điều khiến khách hàng yêu thích khi mua cá tại đây. Khi
                  mua cá tại Siêu thị Cá Koi VN, bạn sẽ được hướng dẫn chi tiết
                  cách nuôi, chăm sóc cá tốt nhất. <br />
                  Trên đây là một số thông tin liên quan đến loài cá Platinum
                  Koi để bạn hiểu rõ hơn về loài cá này, giúp bạn có thể tham
                  khao khi lựa chọn cá Koi. Siêu thị cá Koi VN hy vọng những
                  thông tin trên hữu ích đối với bạn, giúp bạn hiểu rõ hơn về
                  loài cá Platinum Koi này.
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
