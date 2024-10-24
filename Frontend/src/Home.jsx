import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import "../src/Home.css";
import Slideshow from "./Components/Slideshow";
import { useLocation } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "antd";
import axios from "axios";

export default function Home() {
  const isAuthenticated = localStorage.getItem("accessToken");
  const location = useLocation();
  const [lastMessage, setLastMessage] = useState("");
  const { logout } = useAuth();
  const [suppliers, setSuppliers] = useState([]);
  const [koidata, setKoiData] = useState([]);

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
        setKoiData(koiResponse.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      name: "Koi Kohaku",
    },
    {
      src: "https://img.freepik.com/free-vector/two-japanese-koi-fish-swimming_53876-16876.jpg?t=st=1729766790~exp=1729770390~hmac=e30f21be0c38122abcccda143523b9408f3daafe15997d96f38cf1fdac7c28f8&w=740",
      alt: "Koi Ogon",
      name: "Koi Ogon",
    },
    {
      src: "https://img.freepik.com/free-vector/hand-drawn-koi-fish-illustration_23-2149550939.jpg?t=st=1729766836~exp=1729770436~hmac=ae9929a8793bc4606ffb72fabc7686a5cede10bfaac0e64d0654b6cf022a2142&w=740",
      alt: "Koi Showa",
      name: "Koi Showa",
    },
    {
      src: "https://img.freepik.com/premium-photo/drawing-two-koi-fish-with-word-fish-bottom_1280401-268.jpg?w=740",
      alt: "Koi Tancho",
      name: "Koi Tancho",
    },
    {
      src: "https://img.freepik.com/free-vector/hand-drawn-koi-illustration_23-2149602610.jpg?t=st=1729766876~exp=1729770476~hmac=dfc319cb549e9c2c48c693a2da7afd9a81017976d42fb95edd256a1920cd4f97&w=740",
      alt: "Koi Bekko",
      name: "Koi Bekko",
    },
    {
      src: "https://img.freepik.com/premium-photo/beautiful-koi-fish-pond-with-elegance-color-koi-fish-ai-generated_1078402-29646.jpg?w=1060",
      alt: "Koi Doitsu",
      name: "Koi Doitsu",
    },
    {
      src: "https://img.freepik.com/premium-photo/two-koi-fish-are-displayed-white-surface_916107-60786.jpg?w=740",
      alt: "Koi Girin",
      name: "Koi Girin",
    },
    {
      src: "https://img.freepik.com/free-vector/flat-design-koi-fish-illustration_23-2149526706.jpg?t=st=1729766951~exp=1729770551~hmac=c4592a1147ce588898d3ea0f448a2586866b078d40c28a4791c3b24d074582b9&w=740",
      alt: "Koi Goshiki",
      name: "Koi Goshiki",
    },
    {
      src: "https://img.freepik.com/free-vector/flat-design-koi-fish-illustration_23-2149520773.jpg?t=st=1729766968~exp=1729770568~hmac=16f6005d6fa0088aeed939934b43112a04b067aea5c515711558634cffd157f0&w=740",
      alt: "Koi Benigoi",
      name: "Koi Benigoi",
    },
    {
      src: "https://img.freepik.com/free-vector/hand-drawn-koi-illustration_23-2149594029.jpg?t=st=1729767019~exp=1729770619~hmac=d5a59aca482045eabed4a506478363d47a0b91df78b960f92c2188ef931dc9f2&w=740",
      alt: "Koi Asagi",
      name: "Koi Asagi",
    },
    {
      src: "https://img.freepik.com/premium-photo/two-koi-fish-are-side-by-side-with-word-kodak-bottom_1097251-8030.jpg?w=740",
      alt: "Koi Platinum",
      name: "Koi Platinum",
    },
    {
      src: "https://img.freepik.com/premium-photo/koi-fish-is-swimming-pond-with-red-white-pattern_886588-42346.jpg?w=1060",
      alt: "Koi Shusui",
      name: "Koi Shusui",
    },
  ];

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
                    <img
                      src={koi.src}
                      alt={koi.alt}
                      className="carousel-image"
                      loading="lazy"
                    />
                    <h3>{koi.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </Carousel>

      <h4
        style={{
          marginTop: "70px",
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
        {Array.from({ length: Math.ceil(suppliers.length / 4) }).map(
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
          marginTop: "70px",
          marginLeft: "10%",
          marginBottom: "40px",
          color: "#FFB6C1",
        }}
      >
        Các loại cá mới
      </h4>

      <Carousel
        arrows
        style={{ marginLeft: "50px", marginRight: "50px" }}
        dots={false}
      >
        {Array.from({ length: Math.ceil(koidata.length / 6) }).map(
          (_, index) => (
            <div key={index}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {koidata.slice(index * 6, index * 6 + 6).map((koi, idx) => (
                  <div className="image-item" key={idx}>
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
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </Carousel>

      <div
        className="animated-section hidden"
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/b.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "100px",
            color: "white",
            display: "flex",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              color: "black",
              fontSize: "20px",
              marginTop: "50px",
              fontWeight: "400",
              marginLeft: "5px",
              paddingRight: "1000px",
            }}
          >
            <h1>Giới Thiệu về IKoi</h1>
            <p style={{ fontWeight: "400", fontSize: "15px" }}>
              IKoi là một cửa hàng chuyên cung cấp cá koi và các sản phẩm liên
              quan đến việc chăm sóc cá koi...
            </p>
            <p style={{ fontWeight: "400", fontSize: "15px" }}>
              Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết mang đến
              cho bạn những sản phẩm tốt nhất.
            </p>
            <p style={{ fontWeight: "400", fontSize: "15px" }}>
              Chúng tôi cung cấp cá koi chất lượng cao, phụ kiện và các dịch vụ
              chăm sóc, bảo trì hồ cá.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
