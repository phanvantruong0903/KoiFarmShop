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
  const { googleAuthUrl, logout } = useAuth();
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
          backgroundImage: `url("src/assets/b.png")`,
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
              paddingRight: "1000px",
            }}
          >
            <h1>Giới Thiệu về IKoi</h1>
            <p style={{ fontWeight: "400", fontSize: "15px" }}>
              IKoi là một cửa hàng chuyên cung cấp cá koi và các sản phẩm liên
              quan đến hồ cá. Với sứ mệnh mang đến cho khách hàng những giống cá
              koi chất lượng cao cùng dịch vụ tận tâm nhất, IKoi đã nhanh chóng
              trở thành điểm đến tin cậy cho những người yêu thích nuôi cá koi
              tại Việt Nam.
            </p>
            <p style={{ fontWeight: "400", fontSize: "15px" }}>
              Chúng tôi tự hào cung cấp một loạt các sản phẩm đa dạng, từ cá koi
              nhập khẩu chính hãng cho đến các phụ kiện hồ cá chất lượng. Đội
              ngũ nhân viên của chúng tôi là những chuyên gia có kinh nghiệm,
              luôn sẵn sàng tư vấn và hỗ trợ khách hàng trong việc lựa chọn sản
              phẩm phù hợp nhất với nhu cầu của mình.
            </p>
            <p style={{ fontWeight: "400", fontSize: "15px" }}>
              Không chỉ dừng lại ở việc bán hàng, IKoi còn cam kết cung cấp dịch
              vụ chăm sóc và bảo trì hồ cá, giúp khách hàng duy trì một môi
              trường sống tốt nhất cho những chú cá koi của mình. Hãy đến với
              IKoi để trải nghiệm sự khác biệt và khám phá thế giới cá koi đầy
              màu sắc!
            </p>
            <br />
          </div>
        </div>
      </div>

      <div
        className="animated-section hidden"
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/c.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Đảm bảo chiều cao đủ để chiếm toàn bộ không gian
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "100px",
            color: "white",
            display: "flex",
            justifyContent: "flex-end", // Căn chỉnh nội dung sang bên phải
          }}
        >
          <div
            style={{
              width: "50%", // Có thể điều chỉnh lại chiều rộng theo ý muốn
              color: "black",
              fontSize: "15px",
              marginTop: "80px",
              paddingLeft: "20px",
            }}
          >
            <h2>Nuôi Cá Koi Nên Đồng Hành Cùng Chuyên Gia Tại IKoi</h2>
            <p style={{ fontSize: "15px", fontWeight: "400" }}>
              Tại IKoi, chúng tôi tin rằng việc nuôi cá koi không chỉ đơn thuần
              là sở thích mà còn là một hành trình đầy nghệ thuật và tâm huyết.
              Cá koi không chỉ là cá chép cảnh, mà còn mang ý nghĩa phong thủy,
              đem lại tài lộc và may mắn cho gia chủ. Với kinh nghiệm dày dạn,
              đội ngũ chuyên gia của IKoi luôn sẵn sàng đồng hành cùng bạn trong
              từng bước đi của quá trình nuôi cá.
            </p>
            <p style={{ fontSize: "15px", fontWeight: "400" }}>
              Chúng tôi cam kết cung cấp không chỉ những giống cá koi chất lượng
              cao mà còn cả các dịch vụ tư vấn chuyên sâu về kỹ thuật nuôi thả.
              Mỗi khách hàng đều có nhu cầu và mong muốn riêng, và đội ngũ của
              IKoi sẽ giúp bạn lựa chọn những giải pháp phù hợp nhất để tạo dựng
              một hồ cá hoàn hảo.
            </p>
            <p style={{ fontSize: "15px", fontWeight: "400" }}>
              Hãy để IKoi trở thành người bạn đồng hành tin cậy trong hành trình
              nuôi cá koi của bạn. Với sự tận tâm và chuyên nghiệp, chúng tôi
              chắc chắn rằng bạn sẽ có những trải nghiệm tuyệt vời và thành công
              trong việc chăm sóc những chú cá koi của mình.
            </p>
          </div>
        </div>
      </div>
      <div
        className="animated-section hidden"
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/e.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Đảm bảo chiều cao đủ để chiếm toàn bộ không gian
        }}
      ></div>
      <div>
        <Footer />
      </div>
    </>
  );
}
