import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
export default function Navbar() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className="navbar">
      <div>
        <h2
          style={{
            paddingRight: "100px",
            fontWeight: "1000",
            marginTop: "10px",
          }}
        >
          KoiStoreVN
        </h2>
      </div>
      <div>
        <Link
          to="/home"
          style={{
            color: "#F2E8C6",
            fontWeight: "400",
            fontSize: "25px",
            textDecoration: "none",
            paddingRight: "10px",
          }}
        >
          Trang Chủ
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
              color: "#F2E8C6",
              fontWeight: "400",
              fontSize: "25px",
              paddingRight: "10px",
            }}
          >
            <Link
              to="/gioithieu"
              style={{ textDecoration: "none", color: "#F2E8C6" }}
            >
              {" "}
              Giới Thiệu
            </Link>
          </Dropdown.Toggle>
          <CSSTransition
            in={showDropdown1}
            timeout={300}
            classNames="dropdown"
            mountOnEnter
            unmountOnExit
          >
            <Dropdown.Menu className="custom-menu">
              <Dropdown.Item
                href="/gioithieusankygui"
                onMouseEnter={() => setActiveItem("/gioithieusankygui")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/gioithieusankygui" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Giới Thiệu Sàn Ký Gửi
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/cacdonvibancakoi"
                onMouseEnter={() => setActiveItem("/cacdonvibancakoi")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/cacdonvibancakoi" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Các Đơn Vị Bán Cá Koi
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/nguonkoi"
                onMouseEnter={() => setActiveItem("/nguonkoi")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/nguonkoi" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Nguồn Koi Của Koi Store
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
              color: "#F2E8C6",
              fontWeight: "400",
              fontSize: "25px",
              paddingRight: "10px",
            }}
          >
            Các dòng cá koi
          </Dropdown.Toggle>
          <CSSTransition
            in={showDropdown2}
            timeout={300}
            classNames="dropdown"
            mountOnEnter
            unmountOnExit
          >
            <Dropdown.Menu className="custom-menu">
              <Dropdown.Item
                href="/kohaku"
                onMouseEnter={() => setActiveItem("/kohaku")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/kohaku" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Kohaku
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/ogon"
                onMouseEnter={() => setActiveItem("/ogon")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/ogon" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Platinum Ogon
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/showa"
                onMouseEnter={() => setActiveItem("/showa")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/showa" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Showa
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/tancho"
                onMouseEnter={() => setActiveItem("/tancho")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/tancho" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Tancho
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/bekko"
                onMouseEnter={() => setActiveItem("/bekko")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/bekko" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Bekko
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/doitsu"
                onMouseEnter={() => setActiveItem("/doitsu")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/doitsu" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Doitsu
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/ginrin"
                onMouseEnter={() => setActiveItem("/ginrin")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/ginrin" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Ginrin
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/goshiki"
                onMouseEnter={() => setActiveItem("/goshiki")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/goshiki" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Goshiki
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/benigoi"
                onMouseEnter={() => setActiveItem("/benigoi")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/benigoi" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Benigoi
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/asagi"
                onMouseEnter={() => setActiveItem("/asag")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/asag" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Asagi
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/platinum"
                onMouseEnter={() => setActiveItem("/platinum")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/platinum" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Platinum
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/shusui"
                onMouseEnter={() => setActiveItem("/shusui")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/shusui" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Cá Koi Shusui
              </Dropdown.Item>
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
              color: "#F2E8C6",
              fontWeight: "400",
              fontSize: "25px",
              paddingRight: "10px",
            }}
          >
            Tin Tức
          </Dropdown.Toggle>
          <CSSTransition
            in={showDropdown3}
            timeout={300}
            classNames="dropdown"
            mountOnEnter
            unmountOnExit
          >
            <Dropdown.Menu className="custom-menu">
              <Dropdown.Item
                href="/kienthuckoi"
                onMouseEnter={() => setActiveItem("/kienthuckoi")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/kienthuckoi" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Kiến Thức Koi
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/khuyenmai"
                onMouseEnter={() => setActiveItem("/khuyenmaiz")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/khuyenmai" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {" "}
                Khuyễn Mãi
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/tintuc"
                onMouseEnter={() => setActiveItem("/tintuc")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/tintuc" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Tin Tức Công Ty
              </Dropdown.Item>
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
              color: "#F2E8C6",
              fontWeight: "400",
              fontSize: "25px",
              paddingRight: "10px",
            }}
          >
            Dịch Vụ
          </Dropdown.Toggle>
          <CSSTransition
            in={showDropdown4}
            timeout={300}
            classNames="dropdown"
            mountOnEnter
            unmountOnExit
          >
            <Dropdown.Menu className="custom-menu">
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
                Ký Gửi
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                href="/koidangban"
                onMouseEnter={() => setActiveItem("/koidangban")}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  color: activeItem === "/koidangban" ? "red" : "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Koi Đang Bán
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
                Koi Ký Gửi
              </Dropdown.Item>
            </Dropdown.Menu>
          </CSSTransition>
        </Dropdown>
      </div>
      <div>
        <div>
          <Link
            to="/lienhe"
            style={{
              color: "#F2E8C6",
              fontWeight: "400",
              fontSize: "25px",
              paddingLeft: "10px",
              textDecoration: "none",
            }}
          >
            Liên Hệ
          </Link>
        </div>
      </div>
    </div>
  );
}