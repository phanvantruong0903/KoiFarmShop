import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../An/Utils/axiosJS";
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
  Descriptions,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Footer from "../../Footer";
import Navbar from "../../Navbar/Navbar";

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

export default function Chitietconsignpage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const { consign } = location.state || {}; // Access the passed state
  console.log(consign);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const loggedIn = !!accessToken; // Kiểm tra nếu có accessToken
    setIsLoggedIn(loggedIn);

    // Check localStorage for toast state
  }, [isLoggedIn]);

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
    Detail: "",
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
  const [consignData, setConsignData] = useState([]);
  const [koiData, setKoiData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const loggedIn = !!accessToken; // Kiểm tra nếu có accessToken
    setIsLoggedIn(loggedIn);

    // Điều hướng nếu người dùng đã đăng nhập
  }, [navigate]); // Chỉ phụ thuộc vào navigate

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

  const imageFileList = koiData?.Image
    ? [
        {
          uid: "-1", // Unique ID, can be any unique value
          name: "image.png", // You can set a default name or extract from the URL
          status: "done", // Set the status to 'done' to indicate the file is uploaded
          url: koiData.Image, // URL from Firebase
        },
      ]
    : [];

  const videoFileList = koiData?.Video
    ? [
        {
          uid: "-2", // Unique ID for video
          name: "video.mp4", // Default name for the video
          status: "done",
          url: koiData.Video, // URL from Firebase
        },
      ]
    : [];

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch user data
      const userResponse = await axiosInstance.get("users/me");
      if (userResponse.data) {
        setUserData(userResponse.data.result);
        console.log("Fetched user data:", userResponse.data.result); // Debug log
      }

      // Fetch consign data
      const consignResponse = await axiosInstance.get(
        `/users/tat-ca-don-ki-gui/${consign._id}`
      );
      if (consignResponse.status === 200) {
        const { koi, consign } = consignResponse.data.result; // Extract koi and consign data
        setConsignData(consign);
        setKoiData(koi);
        console.log("Fetched consign data:", consign); // Debug log
        console.log("Fetched koi data:", koi); // Debug log
      }
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:4000/getAllKoi"
        );
        if (Array.isArray(response.data.result)) {
          setCategoryData(response.data.categoryList);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log("Consign Data:", consignData);
  }, [consignData]);
  const handleSubmit = async (values) => {
    console.log("Submitting form with values:", values); // Log the form values being submitted
    try {
      // Call the API with the entire form values
      const response = await updateConsign(values);
      console.log("Update response from updateConsign:", response.data); // Log response from API
      toast.success("Cập nhật thành công.");
    } catch (error) {
      console.error("Error updating consign:", error); // Log the error object
      toast.error("Cập nhật thất bại.");
    }
  };
  const updateConsign = async (formData) => {
    console.log("Updating consign with data:", formData); // Log dữ liệu được gửi đi
    try {
      // Tải lên ảnh
      const imageRef = ref(storage, `koiImages/${formData.Image[0].name}`);
      const videoRef = ref(storage, `koiVideos/${formData.Video[0].name}`);

      await uploadBytes(imageRef, formData.Image[0].originFileObj);
      const imageUrl = await getDownloadURL(imageRef);

      await uploadBytes(videoRef, formData.Video[0].originFileObj);
      const videoUrl = await getDownloadURL(videoRef);
      // Cập nhật formData với URL
      const updatedFormData = {
        ...formData,
        Image: imageUrl, // Cập nhật với URL
        Video: videoUrl, // Cập nhật với URL
      };
      console.log("Test" + updatedFormData.Image);

      // Gọi API để cập nhật
      const response = await axiosInstance.patch(
        `/users/tat-ca-don-ki-gui/${consign._id}`,
        updatedFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Update response:", response.data); // Log phản hồi
      alert(response.data.message); // Hiển thị thông báo
      return response; // Trả về phản hồi
    } catch (error) {
      console.error("Error during upload or API update:", error); // Log lỗi
      toast.error("Cập nhật thất bại.");
    }
  };
  const initialKoiData = koiData || {}; // Ensure koiData is an object
  const initialValues = {
    email: userData?.email || "",
    name: userData?.name || "",
    address: userData?.address || "",
    phone_number: userData?.phone_number || "",
    PositionCare: consignData?.PositionCare || "",
    Method: consignData?.Method || "",
    ShippedDate: consignData?.ShippedDate || "",
    ReceiptDate: consignData?.ReceiptDate || "",
    Detail: consignData?.Description || "",
    CategoryID: koiData?.CategoryID || "",
    KoiName: koiData?.KoiName || "",
    Age: initialKoiData.Age ? initialKoiData.Age.toString() : "", // Use a safer check
    Origin: koiData?.Origin || "",
    Gender: koiData?.Gender || "",
    Size: initialKoiData.Size ? initialKoiData.Size.toString() : "",
    Breed: koiData?.Breed || "",
    DailyFoodAmount: initialKoiData.DailyFoodAmount
      ? initialKoiData.DailyFoodAmount.toString()
      : "",
    FilteringRatio: initialKoiData.FilteringRatio
      ? initialKoiData.FilteringRatio.toString()
      : "",
    CertificateID: koiData?.CertificateID || "",
    Image: koiData?.Image || "",
    Video: koiData?.Video || "",
    Description: koiData?.Description || "",
  };
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <Container>
          <div>
            {loading ? (
              <Spin
                size="large"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              />
            ) : consignData ? (
              <Form
                style={{ maxWidth: "800px", margin: "auto" }}
                onFinish={handleSubmit}
                initialValues={initialValues}
              >
                <div style={{ color: "black" }}>
                  <Title level={3}>Thông tin khách hàng</Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ width: "48%" }}>
                      <Form.Item
                        label="Địa chỉ email (*)"
                        name="email"
                        rules={[
                          {
                            required: true,
                            type: "email",
                            message: "Vui lòng nhập email hợp lệ.",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập địa chỉ email (name@example.com)"
                          disabled={userData?.email}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Địa chỉ (*)"
                        name="address"
                        rules={[
                          { required: true, message: "Vui lòng nhập địa chỉ." },
                        ]}
                      >
                        <Input
                          placeholder="Nhập địa chỉ"
                          disabled={userData?.address}
                        />
                      </Form.Item>
                    </div>
                    <div style={{ width: "48%" }}>
                      <Form.Item
                        label="Số điện thoại (*)"
                        name="phone_number"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập số điện thoại",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập số điện thoại"
                          disabled={userData?.phone_number}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Tên người ký gửi (*)"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập họ và tên.",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập họ và tên"
                          disabled={userData?.name}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <hr />
                  <Title level={3}>Thông Tin Ký Gửi</Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ width: "48%" }}>
                      <Form.Item
                        label="Nơi chăm sóc koi (*)"
                        name="PositionCare"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng Nơi chăm sóc koi.",
                          },
                        ]}
                      >
                        <Radio.Group
                          name="PositionCare"
                          value={formData.PositionCare}
                          onChange={handleChange}
                        >
                          <Radio value="Home">Home</Radio>
                          <Radio value="IKoiFarm">IKoiFarm</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item
                        label="Phương thức nhận koi (*)"
                        name="Method"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn phương thức nhận koi.",
                          },
                        ]}
                      >
                        <Radio.Group
                          onChange={handleChange}
                          value={formData.Method}
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
                          onChange={(date) =>
                            handleDateChange("shippedDate", date)
                          }
                        />
                      </Form.Item>
                      <Form.Item label="Ngày Nhận">
                        <DatePicker
                          style={{ width: "100%" }}
                          onChange={(date) =>
                            handleDateChange("receiptDate", date)
                          }
                        />
                      </Form.Item>
                    </div>
                  </div>

                  <Form.Item label="Chi tiết về đơn ký gửi ">
                    <Input.TextArea
                      name="Detail"
                      value={formData.Detail}
                      onChange={handleChange}
                      placeholder="Nhập chi tiết về đơn ký gửi"
                      style={{ height: "150px", resize: "none" }}
                    />
                  </Form.Item>

                  <hr />

                  <Title level={3}>Thông Tin Koi Muốn Ký Gửi</Title>

                  <Form.Item
                    name="CategoryID"
                    label="Loại Cá (*)"
                    rules={[
                      { required: true, message: "Vui lòng chọn danh mục." },
                    ]}
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
                      {
                        required: true,
                        message: "Vui lòng nhập tên loại cá koi.",
                      },
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
                    rules={[
                      { required: true, message: "Vui lòng nhập tuổi." },
                      {
                        type: "string",
                        min: 1,
                        max: 50,
                        message: "Tuổi phải từ 1 đến 50.",
                      },
                      {
                        validator: (_, value) => {
                          const numericValue = Number(value); // Convert to a number
                          if (numericValue < 1) {
                            return Promise.reject(
                              new Error("Tuổi phải lớn hơn hoặc bằng 1.")
                            );
                          }
                          if (numericValue > 50) {
                            return Promise.reject(
                              new Error("Tuổi phải nhỏ hơn bằng 50")
                            );
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input
                      name="Age"
                      value={formData.Age}
                      onChange={handleChange}
                      type="number"
                      placeholder="Nhập tuổi"
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

                  <Form.Item
                    label="Giới Tính (*)"
                    name="Gender"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giới tính.",
                      },
                    ]}
                  >
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
                      {
                        type: "string",
                        min: 1,
                        max: 200,
                        message: "Kích thước phải từ 1 đến 200.",
                      },
                      {
                        validator: (_, value) => {
                          const numericValue = Number(value); // Convert to a number
                          if (numericValue < 1) {
                            return Promise.reject(
                              new Error("Kích Thước phải lớn hơn hoặc bằng 1.")
                            );
                          }
                          if (numericValue > 200) {
                            return Promise.reject(
                              new Error("Kích Thước phải nhỏ hơn bằng 200")
                            );
                          }
                          return Promise.resolve();
                        },
                      },
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

                  <Form.Item
                    label="Xuất xứ(*)"
                    name="Breed"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn trạng thái.",
                      },
                    ]}
                  >
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
                      {
                        required: true,
                        message: "Vui lòng nhập lượng thức ăn.",
                      },
                      {
                        type: "string",
                        min: 1,
                        max: 100,
                        message: "Lượng thức ăn / ngày(*) phải từ 1 đến 100.",
                      },
                      {
                        validator: (_, value) => {
                          const numericValue = Number(value); // Convert to a number
                          if (numericValue < 1) {
                            return Promise.reject(
                              new Error(
                                "Lượng thức ăn phải lớn hơn hoặc bằng 1."
                              )
                            );
                          }
                          if (numericValue > 100) {
                            return Promise.reject(
                              new Error("lượng thức ăn phải nhỏ hơn bằng 200")
                            );
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input
                      name="DailyFoodAmount"
                      value={formData.DailyFoodAmount}
                      onChange={handleChange}
                      type="number"
                      placeholder="Nhập lượng thức ăn / ngày"
                      step="1"
                      min={1}
                      max={100}
                    />
                  </Form.Item>

                  <Form.Item
                    name="FilteringRatio"
                    label="Nhập tỷ lệ lọc(*) (%)"
                    rules={[
                      { required: true, message: "Vui lòng nhập tỷ lệ lọc." },
                      {
                        type: "string",
                        min: 0, // Update min to 0.1 as per your requirement
                        max: 100,
                        message: "Tỷ lệ lọc phải từ 0.1 đến 100.",
                      },
                      {
                        validator: (_, value) => {
                          const numericValue = Number(value); // Convert to a number

                          if (numericValue > 100) {
                            return Promise.reject(
                              new Error("Tỷ lệ lọc phải nhỏ hơn bằng 100")
                            );
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input
                      name="FilteringRatio"
                      value={formData.FilteringRatio}
                      onChange={handleChange}
                      type="number"
                      placeholder="Nhập tỷ lệ lọc"
                      min={0.1} // Update min to 0.1
                      max={100}
                      step={0.1}
                    />
                  </Form.Item>

                  <Form.Item
                    name="CertificateID"
                    label="CertificateID(*)"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập CertificateID.",
                      },
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
                      beforeUpload={() => false} // Ngăn không cho tự động tải lên
                      maxCount={1} // Giới hạn 1 tệp
                      fileList={imageFileList} // Danh sách tệp đã tải lên
                      onChange={({ fileList }) =>
                        handleUploadChange("Image", fileList)
                      } // Cập nhật danh sách tệp
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
                      beforeUpload={() => false} // Ngăn không cho tự động tải lên
                      maxCount={1} // Giới hạn 1 tệp
                      fileList={videoFileList} // Danh sách tệp đã tải lên
                      onChange={({ fileList }) =>
                        handleUploadChange("Video", fileList)
                      } // Cập nhật danh sách tệp
                      listType="text"
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>
                </div>
                <Form.Item label="Chi tiết về koi">
                  <Input.TextArea
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange}
                    placeholder="Nhập chi tiết về cá koi của bạn"
                    style={{ height: "150px", resize: "none" }}
                  />
                </Form.Item>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    disabled={loading}
                  >
                    Update
                  </Button>
                </div>
              </Form>
            ) : (
              <div>No consign data available.</div>
            )}
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
// other fields...
