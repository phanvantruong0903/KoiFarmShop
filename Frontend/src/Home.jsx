import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import "../src/Home.css";
import Slideshow from "./Components/Slideshow";

import { useAuth } from "./Context/AuthContext";
export default function Home() {
  const isAuthenticated = localStorage.getItem("accessToken");

  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("refreshToken");
  //   window.location.reload();
  // };
   const { googleAuthUrl,logout } = useAuth();
  // const getGoogleAuthUrl = () => {
  //   const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_REDIRECT_URI } = import.meta.env;
  //   const url = "https://accounts.google.com/o/oauth2/v2/auth";
  //   const query = {
  //     client_id: VITE_GOOGLE_CLIENT_ID,
  //     redirect_uri: VITE_GOOGLE_REDIRECT_URI,
  //     response_type: "code",
  //     scope: [
  //       "https://www.googleapis.com/auth/userinfo.email",
  //       "https://www.googleapis.com/auth/userinfo.profile",
  //     ].join(" "),
  //     prompt: "consent",
  //     access_type: "offline",
  //   };
  //   return `${url}?${new URLSearchParams(query)}`;
  // };

  // const googleAuthUrl = getGoogleAuthUrl();
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
  const formData = JSON.parse(localStorage.getItem("formData"));
  useEffect(() => {
    console.log("Dữ liệu đã nhận:", formData);
  }, [formData]);
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
      <div style={{ width: "100%", height: "100%", mar: "1000px" }}>
        <Slideshow />
      </div>
      <div
        className="animated-section hidden"
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/Red Modern Travel Presentation (5).png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
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
              paddingRight: "800px",
            }}
          >
            <h1>Giới Thiệu về KoiVNStore</h1>
            IKoi Store là một cửa hàng chuyên cung cấp cá koi và các sản phẩm
            liên quan đến hồ cá. Với sứ mệnh mang lại cho khách hàng những giống
            cá koi chất lượng cao và dịch vụ tốt nhất, IKoi Store đã nhanh chóng
            trở thành điểm đến tin cậy cho những người yêu thích nuôi cá koi tại
            Việt Nam.
            <br />
            <span style={{ fontWeight: "bold" }}>Sản Phẩm Cung Cấp :</span>
            <ul>
              <li>
                <span style={{ fontWeight: "bold" }}>Cá Koi: </span>
                <br />
                Đa dạng về giống loài, màu sắc và kích thước, phù hợp với nhu
                cầu của từng khách hàng.
              </li>
              <li>
                {" "}
                <span style={{ fontWeight: "bold" }}>Hồ Cá: </span>
                <br />
                Thiết kế và thi công hồ cá koi theo yêu cầu, đảm bảo thẩm mỹ và
                chất lượng.
              </li>
              <li>
                {" "}
                <span style={{ fontWeight: "bold" }}>Thiết Bị Hồ Cá: </span>
                <br />
                Cung cấp các thiết bị lọc nước, máy sưởi, và đèn chiếu sáng
                chuyên dụng cho hồ cá koi.
              </li>
              <li>
                {" "}
                <span style={{ fontWeight: "bold" }}>
                  Thức Ăn và Dinh Dưỡng:{" "}
                </span>
                <br />
                Các loại thức ăn chất lượng cao giúp cá koi phát triển khỏe
                mạnh.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="animated-section hidden"
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/Red Modern Travel Presentation.png")`,
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
              marginTop: "80px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "start" }}>
              <div style={{ margin: "0", padding: "0" }}>
                <h1>Nuôi Cá Koi Nên Đồng Hành Cùng Chuyên Gia</h1>
                <p style={{ fontSize: "20px", paddingRight: "700px" }}>
                  “Cá Koi không chỉ là cá chép cảnh mà nó còn là cá phong thủy,
                  mang đến tài lộc, may mắn. Cá koi có đời sống khá dài, với đa
                  số khách hàng của tôi, nó là một phần cuộc sống.Cá koi có đời
                  sống khá dài, với đa số khách hàng của tôi, nó là một phần
                  cuộc sống.Vì thế khi bạn chọn As Koi Farm, là bạn đã chọn
                  những chuyên gia tận tâm đứng đầu về kinh nghiệm, kiến thức
                  nuôi thả cá koi cùng đồng hành. <br />
                  Bằng kinh nghiệm của mình tôi chắc chắn rằng điều đó cực kỳ
                  quan trọng trong quá trình nuôi thả của bạn sau này.”Cá koi có
                  đời sống khá dài, với đa số khách hàng của tôi, nó là một phần
                  cuộc sống.Vì thế khi bạn chọn Koi Farm, là bạn đã chọn những
                  chuyên gia tận tâm đứng đầu về kinh nghiệm, kiến thức nuôi thả
                  cá koi cùng đồng hành. Bằng kinh nghiệm của mình tôi chắc chắn
                  rằng điều đó cực kỳ quan trọng trong quá trình nuôi thả của
                  bạn sau này.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
