import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import "../src/Home.css";
import Slideshow from "./Components/Slideshow";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import "./Components/Css/homeStyle.css";
import axios from "axios";
import { Typography } from "antd";
import { Button, Container } from "react-bootstrap";
const { Title, Text, Paragraph } = Typography;
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import { Card, Row, Col } from "react-bootstrap";
export default function Home() {
  const isAuthenticated = localStorage.getItem("accessToken");
  const location = useLocation();
  const [lastMessage, setLastMessage] = useState("");
  const { logout } = useAuth();
  const [suppliers, setSuppliers] = useState([]);
  const [koidata, setKoiData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const { message } = location.state || {};
    const storedMessage = localStorage.getItem("toastMessage");

    if (message && message !== lastMessage && message !== storedMessage) {
      toast.success(message);
      setLastMessage(message);
      localStorage.setItem("toastMessage", message);
    }
  }, [location.state, lastMessage]);

  const [menu, setMenu] = useState("home");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [suppliersResponse, koiResponse] = await Promise.all([
          axios.get("http://localhost:4000/manager/manage-supplier/get-all"),
          axios.get("http://localhost:4000/getAllKoi"),
        ]);
        setSuppliers(suppliersResponse.data.result);
        setKoiData(koiResponse.data.result.slice(0, 12));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [koidata]);

  useEffect(() => {
    const sections = document.querySelectorAll(".animated-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.remove("animate");
          entry.target.classList.add("hidden");
        }
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const formData = JSON.parse(localStorage.getItem("formData"));
  useEffect(() => {
    console.log("Dữ liệu đã nhận:", formData);
  }, [formData]);

  // Dữ liệu cá koi
  const koiData = [
    {
      src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSF62ZKcYBGSES34-RM4mkYAlHTR5UE6sSH5iHY4cldO_J6akbS",
      alt: "Koi Kohaku",
      name: "kohaku",
    },
    {
      src: "https://img.freepik.com/free-vector/two-japanese-koi-fish-swimming_53876-16876.jpg?t=st=1729766790~exp=1729770390~hmac=e30f21be0c38122abcccda143523b9408f3daafe15997d96f38cf1fdac7c28f8&w=740",
      alt: "Koi Ogon",
      name: "ogon",
    },
    {
      src: "https://img.freepik.com/free-vector/hand-drawn-koi-fish-illustration_23-2149550939.jpg?t=st=1729766836~exp=1729770436~hmac=ae9929a8793bc4606ffb72fabc7686a5cede10bfaac0e64d0654b6cf022a2142&w=740",
      alt: "Koi Showa",
      name: "showa",
    },
    {
      src: "https://img.freepik.com/premium-photo/drawing-two-koi-fish-with-word-fish-bottom_1280401-268.jpg?w=740",
      alt: "Koi Tancho",
      name: "tancho",
    },
    {
      src: "https://img.freepik.com/free-vector/hand-drawn-koi-illustration_23-2149602610.jpg?t=st=1729766876~exp=1729770476~hmac=dfc319cb549e9c2c48c693a2da7afd9a81017976d42fb95edd256a1920cd4f97&w=740",
      alt: "Koi Bekko",
      name: "bekko",
    },
    {
      src: "https://img.freepik.com/premium-photo/beautiful-koi-fish-pond-with-elegance-color-koi-fish-ai-generated_1078402-29646.jpg?w=1060",
      alt: "Koi Doitsu",
      name: "doitsu",
    },
    {
      src: "https://img.freepik.com/premium-photo/two-koi-fish-are-displayed-white-surface_916107-60786.jpg?w=740",
      alt: "Koi Girin",
      name: "girin",
    },
    {
      src: "https://img.freepik.com/free-vector/flat-design-koi-fish-illustration_23-2149526706.jpg?t=st=1729766951~exp=1729770551~hmac=c4592a1147ce588898d3ea0f448a2586866b078d40c28a4791c3b24d074582b9&w=740",
      alt: "Koi Goshiki",
      name: "goshiki",
    },
    {
      src: "https://img.freepik.com/free-vector/flat-design-koi-fish-illustration_23-2149520773.jpg?t=st=1729766968~exp=1729770568~hmac=16f6005d6fa0088aeed939934b43112a04b067aea5c515711558634cffd157f0&w=740",
      alt: "Koi Benigoi",
      name: "benigoi",
    },
    {
      src: "https://img.freepik.com/free-vector/hand-drawn-koi-illustration_23-2149594029.jpg?t=st=1729767019~exp=1729770619~hmac=d5a59aca482045eabed4a506478363d47a0b91df78b960f92c2188ef931dc9f2&w=740",
      alt: "Koi Asagi",
      name: "asagi",
    },
    {
      src: "https://img.freepik.com/premium-photo/two-koi-fish-are-side-by-side-with-word-kodak-bottom_1097251-8030.jpg?w=740",
      alt: "Koi Platinum",
      name: "platinum",
    },
    {
      src: "https://img.freepik.com/premium-photo/koi-fish-is-swimming-pond-with-red-white-pattern_886588-42346.jpg?w=1060",
      alt: "Koi Shusui",
      name: "shusui",
    },
  ];
  const handleShowMore = () => {
    navigate("/koikygui");
  };
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <Slideshow />
      </div>

      <h4
        style={{
          marginTop: "40px",
          marginLeft: "10%",
          marginBottom: "40px",
          color: "#FFB6C1",
        }}
      >
        Xu hướng tìm kiếm
      </h4>
      <Carousel
        autoplay
        style={{ marginLeft: "50px", marginRight: "50px" }}
        autoplaySpeed={6000}
        dots={false}
      >
        {Array.from({ length: Math.ceil(koiData.length / 6) }).map(
          (_, index) => (
            <div key={index}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {koiData.slice(index * 6, index * 6 + 6).map((koi, idx) => (
                  <div className="image-item" key={idx}>
                    <Link to={koi.name}>
                      {" "}
                      {/* Thay đổi đường dẫn theo yêu cầu */}
                      <img
                        src={koi.src}
                        alt={koi.alt}
                        className="carousel-image"
                        loading="lazy"
                      />
                      <h3>
                        Koi{" "}
                        {koi.name.charAt(0).toUpperCase() + koi.name.slice(1)}
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </Carousel>
      <div className="secIntroduce">
        <div className="container container-fluid">
          <div className="row-fix">
            <div className="item">
              <div className="block-child">
                <img src="src/assets/homeStyle1.jpg" />
              </div>
            </div>
            <div className="item">
              <div className="block-child">
                <div className="child-item head-title">
                  <h2 style={{ color: "red", fontSize: "15px" }}>GIỚI THIỆU</h2>
                  <div className="straight-line"></div>
                </div>
                <div>
                  <h1>IKoi Farm</h1>
                </div>
                <Paragraph className="paragraph-Style">
                  Với niềm đam mê với cá Koi chúng tôi đã thành lập nên IKoi
                  nhằm phục vụ nhu cầu chơi cá trên mảnh đất hình chữ S
                </Paragraph>
                <Paragraph className="paragraph-Style">
                  Chúng tôi tự hào là đối tác của nhiều Koi Farm uy tín tại Nhật
                  Bản. Tất cả các dòng cá cũng như các sản phẩm liên quan được
                  cung cấp trên hệ thống đều được chúng tôi chọn lọc và chăm sóc
                  cẩn thận trước khi xuất trại. IKOI FARM cam kết mang lại những
                  giá trị tốt nhất đến với khách hàng của mình.
                </Paragraph>
                <div style={{ textAlign: "center" }}>
                  <Button variant="danger">
                    <Link to={"/gioithieu"} style={{ color: "white" }}>
                      Xem thêm
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4
        style={{
          marginTop: "60px",
          marginLeft: "10%",
          marginBottom: "40px",
          color: "#FFB6C1",
        }}
      >
        Các nhà cung cấp hàng đầu
      </h4>

      <Carousel
        autoplay
        autoplaySpeed={10000}
        dots={false}
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        {Array.from({ length: Math.ceil(suppliers.length / 12) }).map(
          (_, index) => (
            <div key={index}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {suppliers
                  .slice(index * 4, index * 4 + 4)
                  .map((supplier, idx) => (
                    <div
                      className="supplier-item"
                      key={idx}
                      style={{ textAlign: "center" }}
                    >
                      <img
                        src={supplier.SupplierImage}
                        alt={supplier.SupplierName}
                        className="supplier-image"
                        loading="lazy"
                      />
                      <h3 style={{ fontSize: "18px", marginTop: "15px" }}>
                        {supplier.SupplierName}
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
          )
        )}
      </Carousel>

      <h4
        style={{
          marginTop: "60px",
          marginLeft: "9%",
          marginBottom: "40px",
          color: "#FFB6C1",
        }}
      >
        Các loại cá mới
      </h4>

      <Carousel
        arrows
        style={{
          marginLeft: "50px",
          marginRight: "50px",
          marginBottom: "50px",
        }}
        dots={false}
      >
        {Array.from({ length: Math.ceil(koidata.length / 6) }).map(
          (_, index) => (
            <div key={index}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {koidata.slice(index * 6, index * 6 + 6).map((koi, idx) => (
                  <div className="image-item" key={idx}>
                    <Link to={`/koikygui`}>
                      <img
                        src={koi.Image}
                        alt={koi.KoiName}
                        className="carousel-image"
                        loading="lazy"
                      />
                      <h3
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 300,
                          opacity: 0.7,
                          marginTop: "20px",
                          fontSize: "16px",
                          textAlign: "center",
                        }}
                      >
                        {koi.KoiName}
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </Carousel>
      <Container>
        <div>
          <div className="head-title">
            <div className="straight-line2"></div>
            <h1 style={{ fontSize: "40px", textAlign: "center" }}>
              Ký Gửi Cá Koi Bên IKoi
            </h1>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Paragraph className="paragraph-style">
              Cá Koi là loại cá chép cảnh cao cấp đến từ Nhật Bản và ngày càng
              được ưa chuộng tại các quốc gia khác, trong đó có Việt Nam. Chính
              vì thế mà nhu cầu sở hữu những cá Koi rõ ràng về nguồn gốc, đẹp và
              khỏe mạnh tăng lên. Nhằm giúp mọi người sở hữu những chú cá Koi
              tốt, ISHI KOI FARM xin trân trọng giới thiệu chức năng đấu giá cá
              Koi dưới đây.
            </Paragraph>
          </div>

          <div className="flex-container">
            <div className="left-block">
              <div className="dad-block">
                <div className="child-1">
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    IKOI KÝ GỬI
                  </p>
                </div>
                <img
                  src="src/assets/home3.jpg"
                  alt="IKOI Background"
                  className="background-image"
                />
              </div>
            </div>
            <div className="right-block">
              <h2>Giới Thiệu Về IKoi</h2>
              <Paragraph className="paragraph-style">
                IKoi tự hào cung cấp những chú cá Koi chất lượng cao nhất từ
                Nhật Bản, mang đến cho khách hàng những trải nghiệm tuyệt vời và
                sự hài lòng. Với đội ngũ chuyên gia tận tâm, chúng tôi cam kết
                đảm bảo sức khỏe và vẻ đẹp của từng chú cá Koi, giúp bạn dễ dàng
                chọn lựa những chú cá phù hợp nhất cho hồ cá của mình.
              </Paragraph>
              <Paragraph className="paragraph-style">
                Ngoài ra, chúng tôi còn cung cấp dịch vụ chăm sóc cá Koi chuyên
                nghiệp, tư vấn kỹ thuật và các giải pháp nuôi dưỡng để bạn có
                thể yên tâm tận hưởng niềm đam mê cá Koi.
              </Paragraph>
            </div>
          </div>
        </div>
      </Container>

      <div
        className="image-background"
        style={{
          backgroundImage: "url('src/assets/home6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-20px", // Adjust this value to move it closer
        }}
      >
        <div
          className="item"
          style={{
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "1000px",
            width: "100%",
            paddingTop: "20px",
          }}
        >
          <div className="block-child">
            <div
              className="child-item head-title"
              style={{ marginBottom: "10px" }}
            >
              <h2 style={{ fontSize: "20px" }}>Hợp tác cùng IKoi</h2>
              <div className="straight-line"></div>
            </div>
            <h3 style={{ fontSize: "50px" }}>
              Nếu Bạn Đang Tìm Nguồn Cung Cấp Cá Koi Nhật Bản Tại Việt Nam IKoi
              Sẽ Là Một Lựa Chọn Đúng Đắn.
            </h3>
            <Paragraph className="paragraph-Style" style={{ color: "white" }}>
              Chúng tôi chỉ nhập các dòng cá thuần chủng trực tiếp từ các trang
              trại cá uy tín tại Nhật Bản. Nguồn cung cấp dồi dào và đảm bảo
              được chất lượng cá cũng như giá thành. Chất lượng cá luôn được đảm
              bảo từ khâu chọn lựa cá tại trại cá của đối tác Nhật Bản.
            </Paragraph>
            <Paragraph className="paragraph-Style" style={{ color: "white" }}>
              Các lô cá về thường xuyên, chủng loại đa dạng. Hệ thống hồ nuôi,
              dưỡng cá hiện đại, giúp cá khỏe mạnh phát triển tốt sau khi xuất
              trại.
            </Paragraph>
          </div>
        </div>
      </div>
      <Footer style={{ paddingTop: "20px" }} />
    </>
  );
}
