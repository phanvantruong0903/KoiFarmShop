import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../An/Utils/axiosJS";
import { Container } from "react-bootstrap";
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Upload,
  Typography,
  Spin,
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function Kyguikoi() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    phone_number: "",
    ShipAddress: "",
    PositionCare: "",
    Method: "",
    shippedDate: null,
    receiptDate: null,
    Description: "",
    CategoryID: "",
    KoiName: "",
    Age: 1,
    Origin: "",
    Gender: "",
    Size: 0,
    Breed: "",
    DailyFoodAmount: 0,
    FilteringRatio: 0,
    CertificateID: "",
    Image: null,
    Video: null,
  });
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUploadChange = (type, fileList) => {
    setFormData((prevData) => ({ ...prevData, [type]: fileList }));
  };

  const handleDateChange = (key, date) => {
    setFormData((prevData) => ({ ...prevData, [key]: date }));
  };

  const handleSubmit = async () => {
    setLoading(true);
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
        if (!formData[field]) {
          toast.error(`${field} là trường bắt buộc.`);
          return;
        }
      }

      if (!formData.Image || !formData.Video) {
        toast.error("Vui lòng chọn ảnh và video!");
        return;
      }

      const shippedDateObj = formData.shippedDate
        ? new Date(formData.shippedDate)
        : null;
      const receiptDateObj = formData.receiptDate
        ? new Date(formData.receiptDate)
        : null;
      const currentDate = new Date();

      if (
        shippedDateObj &&
        (shippedDateObj < currentDate ||
          (receiptDateObj && shippedDateObj > receiptDateObj))
      ) {
        toast.error("Ngày gửi không được ở quá khứ hoặc sau ngày nhận!");
        return;
      }

      const imageRef = ref(storage, `koiImages/${formData.Image[0].name}`);
      const videoRef = ref(storage, `koiVideos/${formData.Video[0].name}`);

      await uploadBytes(imageRef, formData.Image[0].originFileObj);
      const imageUrl = await getDownloadURL(imageRef);

      await uploadBytes(videoRef, formData.Video[0].originFileObj);
      const videoUrl = await getDownloadURL(videoRef);

      const dataToSend = {
        ...formData,
        Image: imageUrl,
        Video: videoUrl,
      };

      const response = await axios.post(
        "http://localhost:4000/ki-gui",
        dataToSend,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/", { state: { message: response.data.message } });
      } else {
        toast.error(`Có lỗi xảy ra: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("users/me");
      if (response.data) {
        setUserData(response.data.result);
        setFormData((prevData) => ({
          ...prevData,
          email: response.data.result.email,
          name: response.data.result.name,
          address: response.data.result.address,
          phone_number: response.data.result.phone_number,
          ShipAddress: response.data.result.address,
        }));
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi lấy thông tin người dùng:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getAllKoi");
        if (Array.isArray(response.data.result)) {
          setCategoryData(response.data.categoryList);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div>
        {loading ? (
          <Spin size="large" style={{ display: "block", margin: "auto" }} />
        ) : (
          <Form style={{ maxWidth: "800px", margin: "auto" }}>
            <div style={{ color: "black" }}>
              <Title level={3}>Thông tin khách hàng</Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "48%" }}>
                  <Form.Item label="Địa chỉ email (*)">
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ email (name@example.com)"
                    />
                  </Form.Item>
                  <Form.Item label="Địa chỉ (*)">
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ"
                    />
                  </Form.Item>
                </div>
                <div style={{ width: "48%" }}>
                  <Form.Item label="Số điện thoại (*)">
                    <Input
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      type="number"
                      placeholder="Nhập số điện thoại"
                    />
                  </Form.Item>
                  <Form.Item label="Tên người ký gửi (*)">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên"
                    />
                  </Form.Item>
                </div>
              </div>
              <hr />
              <Title level={3}>Thông Tin Ký Gửi</Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "48%" }}>
                  <Form.Item label="Nơi chăm sóc koi (*)">
                    <Radio.Group
                      name="PositionCare"
                      value={formData.PositionCare}
                      onChange={handleChange}
                    >
                      <Radio value="Home">Home</Radio>
                      <Radio value="IKoiFarm">IKoiFarm</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="Phương thức nhận koi (*)">
                    <Radio.Group
                      name="Method"
                      value={formData.Method}
                      onChange={handleChange}
                    >
                      <Radio value="Online">Online</Radio>
                      <Radio value="Offline">Offline</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <div style={{ width: "48%" }}>
                  <Form.Item label="Ngày Gửi">
                    <DatePicker
                      style={{ width: "100%" }}
                      onChange={(date) => handleDateChange("shippedDate", date)}
                    />
                  </Form.Item>
                  <Form.Item label="Ngày Nhận">
                    <DatePicker
                      style={{ width: "100%" }}
                      onChange={(date) => handleDateChange("receiptDate", date)}
                    />
                  </Form.Item>
                </div>
              </div>

              <Form.Item label="Chi tiết">
                <Input.TextArea
                  name="Description"
                  value={formData.Description}
                  onChange={handleChange}
                  placeholder="Nhập"
                  style={{ height: "150px", resize: "none" }}
                />
              </Form.Item>

              <hr />

              <Title level={3}>Thông Tin Koi Muốn Ký Gửi</Title>

              <Form.Item
                name="CategoryID"
                label="Loại Cá (*)"
                rules={[{ required: true, message: "Vui lòng chọn danh mục." }]}
              >
                <Select
                  value={formData.CategoryID}
                  onChange={(value) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      CategoryID: value,
                    }))
                  }
                  placeholder="Chọn danh mục..."
                >
                  {categoryData.map((category) => (
                    <Select.Option key={category._id} value={category._id}>
                      {category.CategoryName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="KoiName"
                label="Tên Loại Cá Koi (*)"
                rules={[
                  { required: true, message: "Vui lòng nhập tên loại cá koi." },
                ]}
              >
                <Input
                  name="KoiName"
                  value={formData.KoiName}
                  onChange={handleChange}
                  placeholder="Nhập KoiName (Category + Origin)"
                />
              </Form.Item>

              <Form.Item
                name="Age"
                label="Tuổi (*)"
                rules={[{ required: true, message: "Vui lòng nhập tuổi." }]}
              >
                <Input
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  type="number"
                  placeholder="Nhập tuổi"
                  min={1}
                  max={20}
                />
              </Form.Item>

              <Form.Item
                name="Origin"
                label="Nguồn Gốc (*)"
                rules={[
                  { required: true, message: "Vui lòng nhập nguồn gốc." },
                ]}
              >
                <Input
                  name="Origin"
                  value={formData.Origin}
                  onChange={handleChange}
                  placeholder="Nhập nguồn gốc"
                />
              </Form.Item>

              <Form.Item label="Giới Tính (*)">
                <Radio.Group
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                >
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name="Size"
                label="Kích Thước (*) (cm)"
                rules={[
                  { required: true, message: "Vui lòng nhập kích thước." },
                ]}
              >
                <Input
                  name="Size"
                  value={formData.Size}
                  onChange={handleChange}
                  type="number"
                  placeholder="Nhập kích thước(cm)"
                  min={5}
                  max={150}
                />
              </Form.Item>

              <Form.Item label="Trạng Thái (*)">
                <Radio.Group
                  name="Breed"
                  value={formData.Breed}
                  onChange={handleChange}
                >
                  <Radio value="Nhật">Nhật</Radio>
                  <Radio value="Việt">Việt</Radio>
                  <Radio value="F1">F1</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name="DailyFoodAmount"
                label="Nhập lượng thức ăn / ngày(*) (đơn vị kg/ngày)"
                rules={[
                  { required: true, message: "Vui lòng nhập lượng thức ăn." },
                ]}
              >
                <Input
                  name="DailyFoodAmount"
                  value={formData.DailyFoodAmount}
                  onChange={handleChange}
                  type="number"
                  placeholder="Nhập lượng thức ăn / ngày"
                  step="0.01"
                />
              </Form.Item>

              <Form.Item
                name="FilteringRatio"
                label="Nhập tỷ lệ lọc(*) (%)"
                rules={[
                  { required: true, message: "Vui lòng nhập tỷ lệ lọc." },
                ]}
              >
                <Input
                  name="FilteringRatio"
                  value={formData.FilteringRatio}
                  onChange={handleChange}
                  type="number"
                  placeholder="Nhập tỷ lệ lọc"
                  step="0.01"
                />
              </Form.Item>

              <Form.Item
                name="CertificateID"
                label="CertificateID(*)"
                rules={[
                  { required: true, message: "Vui lòng nhập CertificateID." },
                ]}
              >
                <Input
                  name="CertificateID"
                  value={formData.CertificateID}
                  onChange={handleChange}
                  placeholder="Nhập CertificateID"
                />
              </Form.Item>

              <Form.Item
                name="Image"
                label="Nộp ảnh (*)"
                rules={[{ required: true, message: "Vui lòng nộp ảnh." }]}
              >
                <Upload
                  beforeUpload={() => false}
                  maxCount={1}
                  onChange={({ fileList }) =>
                    handleUploadChange("Image", fileList)
                  }
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>

              <Form.Item
                name="Video"
                label="Nộp video (*)"
                rules={[{ required: true, message: "Vui lòng nộp video." }]}
              >
                <Upload
                  beforeUpload={() => false}
                  maxCount={1}
                  onChange={({ fileList }) =>
                    handleUploadChange("Video", fileList)
                  }
                  listType="text"
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                type="primary"
                onClick={handleSubmit}
                loading={loading}
                style={{ borderRadius: "20px", width: "10%" }}
                disabled={loading}
              >
                Ký Gửi
              </Button>
            </div>
          </Form>
        )}
        <ToastContainer />
      </div>
    </Container>
  );
}
