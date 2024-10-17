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
      <Form form={form} onFinish={handleSubmit}>
        <h3>Thông tin khách hàng</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            label="Địa chỉ email (*)"
            name="email"
            initialValue={userData?.email || 'kco'}
            style={{ width: "48%" }}
          >
            <Input
              placeholder="Nhập địa chỉ email (name@example.com)"
              required
            />
          </Form.Item>
          <Form.Item
            label="Địa chỉ (*)"
            name="address"
            initialValue={userData?.address}
            style={{ width: "48%" }}
          >
            <Input placeholder="Nhập địa chỉ" required />
          </Form.Item>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            label="Số điện thoại (*)"
            name="phone_number"
            initialValue={userData?.phone_number}
            style={{ width: "48%" }}
          >
            <Input placeholder="Nhập Số Điện Thoại" required />
          </Form.Item>
          <Form.Item
            label="Tên người ký gửi (*)"
            name="name"
            initialValue={userData?.name}
            style={{ width: "48%" }}
          >
            <Input placeholder="Nhập FullName" required />
          </Form.Item>
        </div>
        <hr />
        <h3>Thông Tin Ký Gửi</h3>
        <Form.Item label="Nơi chăm sóc koi (*)" name="PositionCare">
          <Radio.Group>
            <Radio value="Home">Home</Radio>
            <Radio value="IKoiFarm">IKoiFarm</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Phương thức nhận koi (*)" name="Method">
          <Radio.Group>
            <Radio value="Online">Online</Radio>
            <Radio value="Offline">Offline</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Ngày Gửi" name="shippedDate">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Ngày Nhận" name="receiptDate">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Chi tiết" name="Description">
          <Input.TextArea
            placeholder="Nhập"
            style={{ height: "150px", resize: "none" }}
          />
        </Form.Item>
        <hr />
        <h3>Thông Tin Koi Muốn Ký Gửi</h3>
        <Form.Item
          label="Loại Cá (*)"
          name="CategoryID"
          style={{ width: "32%" }}
        >
          <Select placeholder="Chọn danh mục...">
            {categoryData.map((category) => (
              <Select.Option key={category._id} value={category._id}>
                {category.CategoryName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Tên Loại Cá Koi (*)"
          name="KoiName"
          style={{ width: "32%" }}
        >
          <Input placeholder="Nhập KoiName (Category + Origin)" required />
        </Form.Item>
        <Form.Item label="Tuổi (*)" name="Age" style={{ width: "32%" }}>
          <Input
            type="number"
            min={1}
            max={20}
            placeholder="Nhập tuổi"
            required
          />
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            label="Nguồn Gốc (*)"
            name="Origin"
            style={{ width: "32%" }}
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
