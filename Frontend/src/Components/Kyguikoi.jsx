import {
  Form,
  Button,
  Input,
  Radio,
  Select,
  Upload,
  DatePicker,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Thêm import cho Firebase Storage
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../An/Utils/axiosJS";
import dayjs from "dayjs";

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
  const [userData, setUserData] = useState({});
  const [form] = Form.useForm(); // Khởi tạo form từ antd
  

  const handleSubmit = async (values) => {
    const {
      PositionCare,
      Method,
      CategoryID,
      Gender,
      Size,
      Breed,
      DailyFoodAmount,
      FilteringRatio,
      Age,
      email,
      phone_number,
      name,
      address,
      KoiName,
      Origin,
      shippedDate,
      receiptDate,
      Image,
      Video,
      CertificateID,
    } = values;

    try {
      const currentDate = dayjs();
      const phoneRegex = /^\d{10}$/; // 11 digits
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
      const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces

      if (!phoneRegex.test(phone_number)) {
        message.error("Số điện thoại phải có 11 chữ số.");
        return;
      }

      if (!emailRegex.test(email)) {
        message.error("Địa chỉ email không hợp lệ.");
        return;
      }

      if (!nameRegex.test(name)) {
        message.error("Tên không được có ký tự đặc biệt hoặc số.");
        return;
      }

      const imageRef = ref(storage, `koiImages/${Image[0].name}`);
      const videoRef = ref(storage, `koiVideos/${Video[0].name}`);

      // Upload image
      await uploadBytes(imageRef, Image[0]);
      const imageUrl = await getDownloadURL(imageRef);

      // Upload video
      await uploadBytes(videoRef, Video[0]);
      const videoUrl = await getDownloadURL(videoRef);

      console.log("Image URL:", imageUrl);
      console.log("Video URL:", videoUrl);

      const dataToSend = {
        PositionCare,
        Method,
        CategoryID,
        Gender,
        Size: parseInt(Size),
        Breed,
        DailyFoodAmount: parseFloat(DailyFoodAmount),
        FilteringRatio: parseFloat(FilteringRatio),
        Age: parseInt(Age),
        email,
        phone_number,
        name,
        address,
        KoiName,
        Origin,
        Image: imageUrl,
        Video: videoUrl,
        CertificateID,
      };

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
        toast.success(response.data.message);
        navigate("/", { state: { message: response.data.message } });
      } else {
        toast.error(`Có lỗi xảy ra: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("http://localhost:4000/users/me");
        if (response.data) {
          // const {email, address, phone_number, name} = response.data.result;
          setUserData(response.data.result);
          // console.log(email, address, phone_number, name);
          // console.log(response.data.result)
          console.log(userData)
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
        if (Array.isArray(response.data.result)) {
          setCardData(response.data.result);
          setCategoryData(response.data.cateogryList);
        } else {
          console.error("Dữ liệu không phải là mảng:", response.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
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
            <Input placeholder="Nhập nguồn gốc" required />
          </Form.Item>
          <Form.Item
            label="Giới Tính (*)"
            name="Gender"
            style={{ width: "32%" }}
          >
            <Radio.Group>
              <Radio value="Male">Đực</Radio>
              <Radio value="Female">Cái</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Cỡ Cá (*)" name="Size" style={{ width: "32%" }}>
            <Select placeholder="Chọn cỡ cá...">
              <Select.Option value="1">Nhỏ</Select.Option>
              <Select.Option value="2">Vừa</Select.Option>
              <Select.Option value="3">Lớn</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item label="Giống Cá (*)" name="Breed" style={{ width: "32%" }}>
            <Input placeholder="Nhập giống cá" required />
          </Form.Item>
          <Form.Item
            label="Lượng Thức Ăn Hàng Ngày (*)"
            name="DailyFoodAmount"
            style={{ width: "32%" }}
          >
            <Input type="number" placeholder="Nhập lượng thức ăn" required />
          </Form.Item>
          <Form.Item
            label="Tỉ Lệ Lọc Nước (*)"
            name="FilteringRatio"
            style={{ width: "32%" }}
          >
            <Input type="number" placeholder="Nhập tỉ lệ lọc" required />
          </Form.Item>
        </div>

        <Form.Item
          label="Hình ảnh cá (*)"
          name="Image"
          valuePropName="fileList"
        >
          <Upload beforeUpload={() => false} multiple={false}>
            <Button>Upload Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Video cá (*)" name="Video" valuePropName="fileList">
          <Upload beforeUpload={() => false} multiple={false}>
            <Button>Upload Video</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Mã Chứng Nhận (*)" name="CertificateID">
          <Input placeholder="Nhập mã chứng nhận" required />
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
}
