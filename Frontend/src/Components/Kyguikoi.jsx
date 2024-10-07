import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Kyguikoi() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Lưu dữ liệu vào localStorage
    localStorage.setItem("formData", JSON.stringify(data));

    // Chuyển hướng đến trang mới
    navigate("/"); // Đổi '/next-page' thành đường dẫn bạn muốn
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ color: "red" }}>
        <div style={{ width: "100%" }}>
          <h3>Thông tin khách hàng</h3>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput2"
            style={{ width: "100%" }}
          >
            <Form.Label>Họ và tên (*): </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập Họ và Tên"
              required
              name="fullName"
            />
          </Form.Group>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                style={{ width: "100%" }}
              >
                <Form.Label>Email Address (*): </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập địa chỉ email (name@example.com)s"
                  required
                  name="email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
                style={{ width: "100%" }}
              >
                <Form.Label>Địa chỉ (*): </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập địa chỉ"
                  required
                  name="address"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
                style={{ width: "100%" }}
              >
                <Form.Label>Tỉnh/Thành Phố (*): </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập thành phố"
                  required
                  name="city"
                />
              </Form.Group>
            </div>
            <div style={{ width: "50%", paddingLeft: "20px" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
                style={{ width: "100%" }}
              >
                <Form.Label>Quận/Huyện(*): </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập Quận/Huyện"
                  required
                  name="district"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
                style={{ width: "100%" }}
              >
                <Form.Label>Xã/Phường/Thị trấn(*): </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập Xã/Phường/Thị Trấn"
                  required
                  name="ward"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
                style={{ width: "100%" }}
              >
                <Form.Label>Số điện thoại (*): </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Nhập Số Điện Thoại"
                  required
                  name="phone"
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ width: "100%" }}>
          <h3>Thông Tin Ký Gửi</h3>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput5"
                style={{ width: "100%" }}
              >
                <Form.Label>Địa điểm: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập Địa Điểm"
                  required
                  name="location"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput6"
                style={{ width: "100%" }}
              >
                <Form.Label>Methods: </Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    id="nameOption1"
                    label="Online"
                    name="methods"
                    value="Online"
                  />
                  <Form.Check
                    type="radio"
                    id="nameOption2"
                    label="Offline"
                    name="methods"
                    value="Offline"
                  />
                </div>
              </Form.Group>
            </div>
            <div style={{ width: "50%", paddingLeft: "20px" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput7"
                style={{ width: "100%" }}
              >
                <Form.Label>Chi tiết: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập chi tiết"
                  name="description"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput8"
                style={{ width: "100%" }}
              >
                <Form.Label>Ngày Gửi: </Form.Label>
                <Form.Control
                  type="date"
                  required
                  name="shippedDate"
                  placeholder="Nhập ngày gửi"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput9"
                style={{ width: "100%" }}
              >
                <Form.Label>Ngày Nhận: </Form.Label>
                <Form.Control
                  type="date"
                  required
                  name="receiptDate"
                  placeholder="Nhập ngày nhận"
                />
              </Form.Group>
            </div>
          </div>
        </div>

        <hr />
        <h3>Thông Tin Koi Muốn Ký Gửi</h3>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlSelect1"
          style={{ width: "100%" }}
        >
          <Form.Label>Category(*): </Form.Label>
          <Form.Control as="select" name="category">
            <option value="">Chọn danh mục...</option>
            <option value="1">KOI KOHAKU</option>
            <option value="2">KOI OGON</option>
            <option value="3">KOI SHOWA</option>
            <option value="4">KOI TANCHO</option>
            <option value="5">KOI BEKKO</option>
            <option value="6">KOI DOITSU</option>
            <option value="7">KOI GINRIN</option>
            <option value="8">KOI GOSHIKI</option>
            <option value="9">KOI BENIGOI</option>
            <option value="10">KOI ASAGI</option>
            <option value="11">KOI PLATINUM</option>
            <option value="12">KOI SHUSUI</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput10"
          style={{ width: "100%" }}
        >
          <Form.Label>KoiName (*): </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập KoiName ( Category + Origin )"
            required
            name="koiName"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput11"
          style={{ width: "100%" }}
        >
          <Form.Label>Tuổi (*): </Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập tuổi"
            min="1"
            max="20"
            required
            name="age"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput12"
          style={{ width: "100%" }}
        >
          <Form.Label>Nguồn Gốc (*): </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập nguồn gốc"
            required
            name="origin"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput6"
          style={{ width: "100%" }}
        >
          <Form.Label>Gender (*): </Form.Label>
          <div>
            <Form.Check
              type="radio"
              id="genderOption1"
              label="Male"
              name="gender"
              value="Male"
            />
            <Form.Check
              type="radio"
              id="genderOption2"
              label="Female"
              name="gender"
              value="Female"
            />
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput14"
          style={{ width: "100%" }}
        >
          <Form.Label>Size (*): </Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập kích thước(cm)"
            min="5"
            max="150"
            required
            name="size"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput6"
          style={{ width: "100%" }}
        >
          <Form.Label>Breed (*): </Form.Label>
          <div>
            <Form.Check
              type="radio"
              id="breedOption1"
              label="Trung"
              name="breed"
              value="Trung"
            />
            <Form.Check
              type="radio"
              id="breedOption2"
              label="Việt"
              name="breed"
              value="Việt"
            />
            <Form.Check
              type="radio"
              id="breedOption3"
              label="F1"
              name="breed"
              value="F1"
            />
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput16"
          style={{ width: "100%" }}
        >
          <Form.Label>Chi tiết: </Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="descriptionAdditional"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput17"
          style={{ width: "100%" }}
        >
          <Form.Label>Lượng thức ăn/ngày(*)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập lượng thức ăn / ngày"
            required
            name="foodAmount"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput18"
          style={{ width: "100%" }}
        >
          <Form.Label>Tỷ lệ lọc (*): </Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập tỷ lệ lọc"
            min="1"
            required
            name="filterRate"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput19"
          style={{ width: "100%" }}
        >
          <Form.Label>CertificateID (*): </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập CertificateID"
            required
            name="certificateID"
          />
        </Form.Group>

        {/* Thêm các Form.Group cho nộp ảnh và video */}
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlFile1"
          style={{ width: "100%" }}
        >
          <Form.Label>Nộp ảnh (*): </Form.Label>
          <Form.Control
            type="file"
            placeholder="Nhập tệp ảnh"
            required
            name="image"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlFile2"
          style={{ width: "100%" }}
        >
          <Form.Label>Nộp video (*): </Form.Label>
          <Form.Control
            type="file"
            placeholder="Nhập tệp video"
            required
            name="video"
          />
        </Form.Group>
        <Button type="submit" variant="primary" style={{ textAlign: "center" }}>
          Gửi
        </Button>
      </div>
    </Form>
  );
}
