import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.css"; // Make sure this CSS file exists
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart } from "react-icons/fa"; // Import shopping cart icon
export default function Navbar() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasShownToast, setHasShownToast] = useState(false); // Initialize to false
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken);

    // Check if the toast has been shown before
    const hasShownToast = localStorage.getItem("hasShownToast");
    if (isLoggedIn && !hasShownToast) {
      toast.success("Đăng nhập thành công");
      localStorage.setItem("hasShownToast", "true"); // Set the flag
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.clear(); // Clears all items from localStorage
    setIsLoggedIn(false);
    setHasShownToast(false); // Reset toast state on logout
    toast.success("Đăng xuất thành công!");
  };

  const handleStateSignIn = () => {
    navigate("/Login");
  };

  const handleStateSignUp = () => {
    navigate("/Login", { state: { type: "signUp" } });
    toast.info("Vui lòng đăng ký!");
  };

  return (
    <div className="navbar">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      <div>
        <img
          src="src/assets/logo.png"
          style={{
            width: "100px",
            borderRadius: "50px",
            marginTop: "-9px",
            height: "100px",
            margin: "0",
            padding: "0",
          }}
        />
      </div>
      <div style={{ display: "flex", paddingLeft: "20px", fontWeight: "600" }}>
        <div style={{ paddingTop: "6px" }}>
          <Link
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textDecoration: "none",
              paddingRight: "10px",
              color: "white",
            }}
          >
            TRANG CHỦ
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          <Dropdown
            className="no-caret no-border"
            onMouseEnter={() => setShowDropdown1(true)}
            onMouseLeave={() => setShowDropdown1(false)}
            show={showDropdown1}
          >
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                color: "white",
              }}
            >
              <Link
                to="/gioithieu"
                id="dropdown-basic"
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  paddingRight: "10px",
                  color: "white",
                }}
              >
                GIỚI THIỆU
              </Link>
            </Dropdown.Toggle>
            <CSSTransition
              in={showDropdown1}
              timeout={300}
              classNames="dropdown"
              mountOnEnter
              unmountOnExit
            >
              <Dropdown.Menu
                className="custom-menu"
                style={{ minWidth: "250px", maxWidth: "300px" }}
              >
                <Dropdown.Item
                  href="/nguongocIKoi"
                  onMouseEnter={() => setActiveItem("/ogon")}
                  onMouseLeave={() => setActiveItem(null)}
                  style={{
                    color: activeItem === "/ogon" ? "red" : "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  NGUỒN GỐC CỦA IKOI
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="/gioithieuvekoif1"
                  onMouseEnter={() => setActiveItem("/ogon")}
                  onMouseLeave={() => setActiveItem(null)}
                  style={{
                    color: activeItem === "/ogon" ? "red" : "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  GIỚI THIỆU VỀ CÁ KOI F1
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="/gioithieuvekoiviet"
                  onMouseEnter={() => setActiveItem("/ogon")}
                  onMouseLeave={() => setActiveItem(null)}
                  style={{
                    color: activeItem === "/ogon" ? "red" : "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  GIỚI THIỆU VỀ CÁ KOI VIỆT
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="/gioithieuvekoinhat"
                  onMouseEnter={() => setActiveItem("/ogon")}
                  onMouseLeave={() => setActiveItem(null)}
                  style={{
                    color: activeItem === "/ogon" ? "red" : "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  GIỚI THIỆU VỀ CÁ KOI NHẬT
                </Dropdown.Item>
              </Dropdown.Menu>
            </CSSTransition>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            className="no-caret no-border"
            onMouseEnter={() => setShowDropdown2(true)}
            onMouseLeave={() => setShowDropdown2(false)}
            show={showDropdown2}
          >
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                paddingRight: "10px",
                color: "white",
              }}
            >
              Các Dòng Cá Koi
            </Dropdown.Toggle>
            <CSSTransition
              in={showDropdown2}
              timeout={300}
              classNames="dropdown"
              mountOnEnter
              unmountOnExit
            >
              <Dropdown.Menu
                className="custom-menu"
                style={{ minWidth: "250px", maxWidth: "300px" }}
              >
                {[
                  "kohaku",
                  "ogon",
                  "showa",
                  "tancho",
                  "bekko",
                  "doitsu",
                  "ginrin",
                  "goshiki",
                  "benigoi",
                  "asagi",
                  "platinum",
                  "shusui",
                ].map((fish, index) => (
                  <React.Fragment key={fish}>
                    <Dropdown.Item
                      href={`/${fish}`}
                      onMouseEnter={() => setActiveItem(`/${fish}`)}
                      onMouseLeave={() => setActiveItem(null)}
                      style={{
                        color: activeItem === `/${fish}` ? "red" : "black",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      CÁ KOI {fish.toUpperCase()}
                    </Dropdown.Item>
                    {index < 11 && <hr />}
                  </React.Fragment>
                ))}
              </Dropdown.Menu>
            </CSSTransition>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            className="no-caret no-border"
            onMouseEnter={() => setShowDropdown3(true)}
            onMouseLeave={() => setShowDropdown3(false)}
            show={showDropdown3}
          >
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                paddingRight: "10px",
                color: "white",
              }}
            >
              TIN TỨC
            </Dropdown.Toggle>
            <CSSTransition
              in={showDropdown3}
              timeout={300}
              classNames="dropdown"
              mountOnEnter
              unmountOnExit
            >
              <Dropdown.Menu
                className="custom-menu"
                style={{ minWidth: "250px", maxWidth: "300px" }}
              >
                {["kienthuckoi", "khuyenmai", "tintuc"].map((news, index) => (
                  <React.Fragment key={news}>
                    <Dropdown.Item
                      href={`/${news}`}
                      onMouseEnter={() => setActiveItem(`/${news}`)}
                      onMouseLeave={() => setActiveItem(null)}
                      style={{
                        color: activeItem === `/${news}` ? "red" : "black",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {news === "kienthuckoi"
                        ? "KIẾN THỨC KOI"
                        : news === "khuyenmai"
                        ? "KHUYẾN MÃI"
                        : "TIN TỨC CÔNG TY"}
                    </Dropdown.Item>
                    {index < 2 && <hr />}
                  </React.Fragment>
                ))}
              </Dropdown.Menu>
            </CSSTransition>
          </Dropdown>
        </div>

        <div>
          <Dropdown
            className="no-caret no-border"
            onMouseEnter={() => setShowDropdown4(true)}
            onMouseLeave={() => setShowDropdown4(false)}
            show={showDropdown4}
          >
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                paddingRight: "10px",
                color: "white",
              }}
            >
              DỊCH VỤ
            </Dropdown.Toggle>
            <CSSTransition
              in={showDropdown4}
              timeout={300}
              classNames="dropdown"
              mountOnEnter
              unmountOnExit
            >
              <Dropdown.Menu
                className="custom-menu"
                style={{ minWidth: "250px", maxWidth: "300px" }}
              >
                <Dropdown.Item
                  href="/kygui"
                  onMouseEnter={() => setActiveItem("/kygui")}
                  onMouseLeave={() => setActiveItem(null)}
                  style={{
                    color: activeItem === "/kygui" ? "red" : "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  KOI KÝ GỬI
                </Dropdown.Item>
                <hr />
                <Dropdown.Item
                  href="/koikygui"
                  onMouseEnter={() => setActiveItem("/koikygui")}
                  onMouseLeave={() => setActiveItem(null)}
                  style={{
                    color: activeItem === "/koikygui" ? "red" : "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  KOI ĐANG BÁN
                </Dropdown.Item>
              </Dropdown.Menu>
            </CSSTransition>
          </Dropdown>
        </div>
        <div>
          <div style={{ paddingTop: "6px" }}>
            <Link
              to="/lienhe"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                paddingLeft: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              LIÊN HỆ
            </Link>
          </div>
        </div>
        <div
          style={{ display: "flex", paddingLeft: "20px", fontWeight: "600" }}
        >
          {isLoggedIn ? (
            <Dropdown className="custom-dropdown">
              <Dropdown.Toggle
                variant="success"
                className="custom-dropdown-toggle"
              >
                Tài khoản
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="custom-dropdown-menu"
                style={{ minWidth: "250px", maxWidth: "300px" }}
              >
                <Dropdown.Item href="/profile" className="custom-dropdown-item">
                  Xem hồ sơ
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="/trackingorder"
                  className="custom-dropdown-item"
                >
                  Đơn hàng
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="/donkygui"
                  className="custom-dropdown-item"
                >
                  Đơn ký gửi
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={handleLogout}
                  className="custom-dropdown-item"
                >
                  Đăng xuất
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Button
                onClick={handleStateSignIn}
                variant="danger"
                className="custom-button"
              >
                Đăng Nhập
              </Button>
              <Button
                onClick={handleStateSignUp}
                variant="danger"
                className="custom-button"
              >
                Đăng Ký
              </Button>
            </>
          )}
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <Link to="/cart" style={{ color: "white", fontSize: "25px" }}>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
}
