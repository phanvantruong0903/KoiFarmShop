import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import CardGrid from "./Components/Cardgrid";
import "../src/Home.css";

export default function Home() {
  const isAuthenticated = localStorage.getItem("accessToken");

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  const getGoogleAuthUrl = () => {
    const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_REDIRECT_URI } = import.meta.env;
    const url = "https://accounts.google.com/o/oauth2/v2/auth";
    const query = {
      client_id: VITE_GOOGLE_CLIENT_ID,
      redirect_uri: VITE_GOOGLE_REDIRECT_URI,
      response_type: "code",
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ].join(" "),
      prompt: "consent",
      access_type: "offline",
    };
    return `${url}?${new URLSearchParams(query)}`;
  };

  const googleAuthUrl = getGoogleAuthUrl();
  const [menu, setMenu] = useState("home");

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

  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>

      <div style={{ width: "100%", height: "500px" }}>
        <img
          src="src/assets/85_f8a22c47-d947-45bb-bb1f-4fb8f32fdeed.webp"
          style={{
            margin: "0",
            padding: "0",
            width: "100%",
            height: "100%",
            marginTop: "100px",
          }}
        />
      </div>

      <div
        className="animated-section hidden"
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/red-background-high-quality-free-photo-1.jpg")`,
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
              color: "white",
              fontSize: "20px",
              marginTop: "70px",
            }}
          >
            <h1>Giới Thiệu về KoiVNStore</h1>
            <p style={{ fontWeight: "bold" }}>
              Cá koi Nhật Bản là cá koi thuần chủng được nhập trực tiếp từ các
              trang trại cá koi Nhật Bản về Việt Nam.
            </p>
            <p style={{ fontSize: "16px" }}>
              Koi là một loại cá chép đã được thuần hóa, lai tạo và được nuôi
              khá phổ biến tại Nhật Bản để làm cảnh...
            </p>
          </div>
          <div>
            <img
              src="src/assets/img_6.jpg"
              style={{ width: "100%", marginLeft: "20px" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("src/assets/red-background-high-quality-free-photo-1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardGrid />
      </div>

      <div
        className="animated-section hidden"
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/seamless-japanese-cherry-blossoms-and-branches-pattern-background-sakura-flower-illustration-seamless-backgrounds-and-wallpapers-for-fabric-packaging-decorative-print-textile-free-vector.jpg")`,
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
              fontSize: "15px",
              marginTop: "70px",
            }}
          >
            <h1>Nuôi Cá Koi Nên Đồng Hành Cùng Chuyên Gia</h1>
            <p style={{ fontSize: "16px" }}>
              “Cá Koi không chỉ là cá chép cảnh mà nó còn là cá phong thủy, mang
              đến tài lộc, may mắn...
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <img
              src="src/assets/Koi.jpg"
              style={{ width: "100%", marginLeft: "20px", height: "370px" }}
            />
          </div>
        </div>
      </div>

      <div
        className="animated-section hidden"
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
                Cá nhập khẩu chất lượng cao...
              </li>
              {/* Other list items */}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
