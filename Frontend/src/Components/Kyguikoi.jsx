import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Thêm import cho Firebase Storage
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../An/Utils/axiosJS";
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
  const [cardData, setCardData] = useState([]); // Dữ liệu danh mục
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
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
      const imageFile = formData.get("Image");
      const videoFile = formData.get("Video");
      if (!imageFile || !videoFile) {
        alert("Vui lòng chọn ảnh và video!");
        return;
      }
      const shippedDate = new Date(formData.get("shippedDate"));
      const receiptDate = new Date(formData.get("receiptDate"));
      const currentDate = new Date();
      const phoneRegex = /^\d{10}$/; // 11 digits
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
      const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces

      if (shippedDate > receiptDate || shippedDate < currentDate) {
        alert("Ngày gửi không được ở quá khứ!");
        return;
      } else if (receiptDate < currentDate) {
        alert("Ngày nhận không được ở quá khứ!");
        return;
      } else if (receiptDate < shippedDate) {
        alert("Ngày nhận không được trước ngày gửi!");
        return;
      }
const imageRef = ref(storage, `koiImages/${imageFile.name}`);
      const videoRef = ref(storage, `koiVideos/${videoFile.name}`);

      // Upload image
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      // Upload video
      await uploadBytes(videoRef, videoFile);
      const videoUrl = await getDownloadURL(videoRef);

      console.log("Image URL:", imageUrl);
      console.log("Video URL:", videoUrl);

      const dataToSend = {
        PositionCare: formData.get("PositionCare"),
        Method: formData.get("Method"),
        CategoryID: formData.get("CategoryID"),
        Gender: formData.get("Gender"),
        Size: parseInt(formData.get("Size")),
        Breed: formData.get("Breed"),
        DailyFoodAmount: parseFloat(formData.get("DailyFoodAmount")),
        FilteringRatio: parseFloat(formData.get("FilteringRatio")),
        Age: parseInt(formData.get("Age")),
        email: formData.get("email"),
        phone_number: formData.get("phone_number"),
        name: formData.get("name"),
        address: formData.get("address"),
        KoiName: formData.get("KoiName"),
        Origin: formData.get("Origin"),
        Image: imageUrl || "", // Ensure imageUrl is defined
        Video: videoUrl || "", // Ensure videoUrl is defined
        CertificateID: formData.get("CertificateID"),
      };
      if (!phoneRegex.test(dataToSend.phone_number)) {
        alert("Số điện thoại phải có 11 chữ số.");
        return;
      }

      if (!emailRegex.test(dataToSend.email)) {
        alert("Địa chỉ email không hợp lệ.");
        return;
      }

      if (!nameRegex.test(dataToSend.name)) {
        alert("Tên không được có ký tự đặc biệt hoặc số.");
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:4000/ki-gui",
          dataToSend,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          // Show success message with toast
          toast.success(response.data.message);

          // Navigate and pass the message
          navigate("/", { state: { message: response.data.message } });
        } else {
          toast.error(`Có lỗi xảy ra: ${response.data.message}`);
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request
          console.error("Error:", error.message);
        }
      }
    } catch (error) {
      if (error.message) {
console.error("Error response:", error.response.data);
        alert("Không nhận được phản hồi từ server.");
      } else {
        console.error("Error:", error.message);
        alert("Có lỗi xảy ra . Vui lòng thử lại");
      }
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("users/me");
        if (response.data) {
          setUserData(response.data.result);
          console.log(userData);
        } else {
          console.error("Dữ liệu không hợp lệ:", response.data);
        }
      } catch (error) {
        console.error("Có lỗi xảy ra khi lấy thông tin người dùng:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        console.log("Data received from API:", response.data); // Kiểm tra dữ liệu
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result); // Lấy mảng từ thuộc tính 'result'
          setCategoryData(response.data.cateogryList);
          console.log("Card data set successfully:", response.data.result); // Kiểm tra sau khi set
          console.log(
            "Category Data set successfully:",
            response.data.cateogryList
          );
        } else {
          console.error("Dữ liệu không phải là mảng:", response.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err); // Ghi lại lỗi
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{}}>
        {/* Phần còn lại của form giữ nguyên */}
        <div style={{ color: "black" }}>
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
                  <Form.Label>Địa chỉ email (*): </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Nhập địa chỉ email (name@example.com)"
                    required
                    name="email"
                    defaultValue={
                      userData && userData.email ? userData.email : ""
                    } // Sử dụng email từ userData nếu có
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                  style={{ width: "100%" }}
>
                  <Form.Label>Địa chỉ(*): </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập địa chỉ"
                    required
                    name="address"
                    defaultValue={
                      userData && userData.address ? userData.address : ""
                    } // Sử dụng địa chỉ từ userData nếu có
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
                    defaultValue={
                      userData && userData.phone_number
                        ? userData.phone_number
                        : ""
                    } // Sử dụng số điện thoại từ userData nếu có
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput4"
                  style={{ width: "100%" }}
                >
                  <Form.Label>Tên người ký gửi (*): </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập FullName"
                    required
                    name="name"
                    defaultValue={
                      userData && userData.name ? userData.name : ""
                    } // Sử dụng tên từ userData nếu có
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
                  controlId="exampleForm.ControlInput6"
                  style={{ width: "100%" }}
                >
                  <Form.Label>Nơi chăm sóc koi (*): </Form.Label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Form.Check
                      type="radio"
                      id="Home"
                      label="Home"
                      name="PositionCare"
                      value="Home"
                      style={{ marginRight: "20px" }} // Adjusted margin
                    />
                    <Form.Check
type="radio"
                      id="IKoiFarm"
                      label="IKoiFarm"
                      name="PositionCare"
                      value="IKoiFarm"
                      style={{ marginBottom: "0" }} // Adjusted margin
                    />
                  </div>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput6"
                  style={{ width: "100%" }}
                >
                  <Form.Label>Phương thức nhận koi(*): </Form.Label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Form.Check
                      type="radio"
                      id="nameOption1"
                      label="Online"
                      name="Method"
                      value="Online"
                      style={{ marginRight: "20px" }}
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
              <div style={{ width: "100%", paddingLeft: "20px" }}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput8"
                  style={{ width: "100%" }}
                >
                  <Form.Label>Ngày Gửi: </Form.Label>
                  <Form.Control
                    type="date"
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
                    name="receiptDate"
                    placeholder="Nhập ngày nhận"
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput9"
              style={{ width: "100%" }}
            >
              <Form.Label>Chi tiết: </Form.Label>
              <Form.Control
                as="textarea" // Thay đổi kiểu thành textarea
                name="Description"
                placeholder="Nhập"
                style={{ height: "150px", resize: "none" }} // Tăng chiều cao và không cho phép thay đổi kích thước
              />
            </Form.Group>
          </div>

          <hr />
<h3>Thông Tin Koi Muốn Ký Gửi</h3>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlSelect1"
            style={{ width: "100%" }}
          >
            <Form.Label>Loại Cá(*): </Form.Label>

            <Form.Control as="select" name="CategoryID">
              <option value="">Chọn danh mục...</option>
              {categoryData.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.CategoryName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput10"
            style={{ width: "100%" }}
          >
            <Form.Label>Tên Loại Cá Koi (*): </Form.Label>
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
            <Form.Label>Nguồn Gốc (*): </Form.Label>
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
            <Form.Label>Giới Tính (*): </Form.Label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Form.Check
                type="radio"
                id="genderOption1"
                label="Male"
                name="Gender"
                value="Male"
                style={{ marginBottom: "10px", marginRight: "20px" }}
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
<Form.Label>Kích Thước (*) (cm): </Form.Label>
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
            <Form.Label>Trạng Thái (*): </Form.Label>:
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Form.Check
                type="radio"
                id="breedOption1"
                label="Nhật"
                name="Breed"
                value="Nhật"
                style={{ marginRight: "20px" }}
              />
              <Form.Check
                type="radio"
                id="breedOption2"
                label="Việt"
                name="Breed"
                value="Việt"
                style={{ marginRight: "20px" }}
              />
              <Form.Check
                type="radio"
                id="breedOption3"
                label="F1"
                name="Breed"
                value="F1"
                style={{ marginRight: "20px" }}
              />
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput17"
            style={{ width: "100%" }}
          >
            <Form.Label>
              Nhập lượng thức ăn / ngày(*) (đơn vị kg/ngày)
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập lượng thức ăn / ngày"
              required
              name="DailyFoodAmount"
              step="0.01"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput18"
            style={{ width: "100%" }}
          >
            <Form.Label>Nhập tỷ lệ lọc(*) (%):</Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập tỷ lệ lọc"
              required
              name="FilteringRatio"
              step="0.01"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput18"
            style={{ width: "100%" }}
          >
            <Form.Label>CertificateID(*): </Form.Label>
            <Form.Control type="text" name="CertificateID" />
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
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="success"
            style={{ borderRadius: "20px", width: "8%" }}
          >
            Ký Gửi
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
}