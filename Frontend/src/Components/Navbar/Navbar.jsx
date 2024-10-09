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
              paddingTop: "10px",
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
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  textDecoration: "none",

                  color: "white",
                  paddingTop: "10px",
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
              <Dropdown.Menu className="custom-menu">
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
                  NGUỒN GỐC CỦA IKOI
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
                  CÁ KOI KOHAKU
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
                  CÁ KOI OGON
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
                  CÁ KOI SHOWA
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
                  CÁ KOI TANCHO
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
                  CÁ KOI BEKKO
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
                  CÁ KOI DOITSU
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
                  CÁ KOI GINRIN
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
                  CÁ KOI GOSHIKI
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
                  CÁ KOI BENIGOI
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
                  CÁ KOI ASAGI
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
                  CÁ KOI PLATINUM
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
                  CÁ KOI SHUSUI
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
                  KIẾN THỨC KOI
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
                  KHUYẾN MÃI
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
                  TIN TỨC CÔNG TY
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
                  KÝ GỬI
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
                  KOI ĐANG BÁN
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
                  KOI KÝ GỬI
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
        <div>
          <div style={{ paddingTop: "6px" }}>
            <Link
              to="/lienhe"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                paddingLeft: "20px",
                textDecoration: "none",
                color: "white",
              }}
            >
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
