import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Thêm import cho Firebase Storage
import "./Kyguikoi.css";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Khởi tạo Firebase Storage

export default function Kyguikoi() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Debugging: Kiểm tra các giá trị trong formData
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      // Kiểm tra các trường bắt buộc
      const requiredFields = [
        "PositionCare",
        "Method",
        "CategoryID",
        "Gender",
        "Size",
        "Breed",
        "DailyFoodAmount",
        "FilteringRatio",
        "Age",
        "email",
        "phone_number",
        "name",
        "address",
        "KoiName",
        "Origin",
      ];

      for (const field of requiredFields) {
        if (!formData.get(field)) {
          alert(`${field} là trường bắt buộc.`);
          return;
        }
      }

      // Kiểm tra file ảnh và video
      const imageFile = formData.get("Image");
      const videoFile = formData.get("Video");

      if (!imageFile || !videoFile) {
        alert("Vui lòng chọn ảnh và video.");
        return;
      }

      // Tải lên file ảnh và video
      const imageRef = ref(storage, `images/${imageFile.name}`);
      const videoRef = ref(storage, `videos/${videoFile.name}`);

      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      await uploadBytes(videoRef, videoFile);
      const videoUrl = await getDownloadURL(videoRef);

      // Thêm URL của ảnh và video vào formData
      formData.append("imageUrl", imageUrl);
      formData.append("videoUrl", videoUrl);

      // Gửi dữ liệu tới API
      const response = await fetch("http://localhost:4000/ki-gui", {
        method: "POST",
        body: formData,
      });

      // Xử lý phản hồi từ server
      if (!response.ok) {
        const errors = await response.json();
        const errorMessages = Object.values(errors.errors).join(", ");
        alert(`Có lỗi xảy ra: ${errorMessages}`);
        return;
      }

      const result = await response.json();
      alert(result.message);
      navigate("/");
    } catch (error) {
      console.error("Error uploading files or sending data: ", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Phần còn lại của form giữ nguyên */}
      <div style={{ color: "red" }}>
        <div style={{ width: "100%" }}>
          <h3>Thông tin khách hàng</h3>
          {/* Các trường nhập liệu ở đây */}
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                style={{ width: "100%" }}
              >
                <Form.Label>Email Address (): </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập địa chỉ email (name@example.com)"
                  required
                  name="email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
                style={{ width: "100%" }}
              >
                <Form.Label>Địa chỉ (): </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập địa chỉ"
                  required
                  name="address"
                />
              </Form.Group>
            </div>
            <div style={{ width: "50%", paddingLeft: "20px" }}>
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
                  name="phone_number"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
                style={{ width: "100%" }}
              >
                <Form.Label>FullName (*): </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập FullName"
                  required
                  name="name"
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
                <Form.Label>PositionCare: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập Địa Điểm"
                  required
                  name="PositionCare"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput6"
                style={{ width: "100%" }}
              >
                <Form.Label>Methods: </Form.Label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Form.Check
                    type="radio"
                    id="nameOption1"
                    label="Online"
                    name="Method"
                    value="Online"
                    style={{ marginBottom: "10px" }}
                  />
                  <Form.Check
                    type="radio"
                    id="nameOption2"
                    label="Offline"
                    name="Method"
                    value="Offline"
                  />
                </div>
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
          <Form.Label>CategoryID(*): </Form.Label>
          <Form.Control as="select" name="CategoryID">
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
            name="KoiName"
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
            name="Age"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput12"
          style={{ width: "100%" }}
        >
          <Form.Label>Origin (*): </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập nguồn gốc"
            required
            name="Origin"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput6"
          style={{ width: "100%" }}
        >
          <Form.Label>Gender (*): </Form.Label>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Form.Check
              type="radio"
              id="genderOption1"
              label="Male"
              name="Gender"
              value="Male"
              style={{ marginBottom: "10px" }}
            />
            <Form.Check
              type="radio"
              id="genderOption2"
              label="Female"
              name="Gender"
              value="Female"
              style={{ marginBottom: "10px" }}
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
            name="Size"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput6"
          style={{ width: "100%" }}
        >
          <Form.Label>Breed (*): </Form.Label>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Form.Check
              type="radio"
              id="breedOption1"
              label="Trung"
              name="Breed"
              value="Trung"
              style={{ marginBottom: "10px" }}
            />
            <Form.Check
              type="radio"
              id="breedOption2"
              label="Việt"
              name="Breed"
              value="Việt"
              style={{ marginBottom: "10px" }}
            />
            <Form.Check
              type="radio"
              id="breedOption3"
              label="F1"
              name="Breed"
              value="F1"
              style={{ marginBottom: "10px" }}
            />
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput17"
          style={{ width: "100%" }}
        >
          <Form.Label>DailyFoodAmount(*)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập lượng thức ăn / ngày"
            required
            name="DailyFoodAmount"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput18"
          style={{ width: "100%" }}
        >
          <Form.Label>FilteringRatio(*): </Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập tỷ lệ lọc"
            min="1"
            required
            name="FilteringRatio"
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlFile1"
          style={{ width: "100%" }}
        >
          <Form.Label>Nộp ảnh (*): </Form.Label>
          <Form.Control type="file" required name="Image" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlFile2"
          style={{ width: "100%" }}
        >
          <Form.Label>Nộp video (*): </Form.Label>
          <Form.Control type="file" required name="Video" />
        </Form.Group>
        <Button type="submit" variant="primary" style={{ textAlign: "center" }}>
          Gửi
        </Button>
      </div>
    </Form>
  );
}
