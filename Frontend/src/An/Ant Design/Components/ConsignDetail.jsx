import React from 'react';
import { Avatar, Form, Descriptions, Divider, Input, Button, Select, Row, Col, Tag, Carousel, message, Upload, Image, Space, Modal } from 'antd';
import { EditOutlined, CheckOutlined, CloseOutlined, UploadOutlined } from '@ant-design/icons';
import axiosInstance from '../../Utils/axiosJS';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

export default function ConsignDetail({ consignID }) {
  const [consignData, setConsignData] = React.useState({});
  const [imageList, setImageList] = React.useState([]);
  const [video, setVideo] = React.useState(null);
  const [validFieldForUpdate, setValidFieldForUpdate] = React.useState({
    name: "",
    address: "",
    phone_number: "",
    PositionCare: "",
    Method: "",
    CategoryID: "4",
    KoiName: "",
    Age: 0,
    Origin: "",
    Gender: "",
    Size: 0,
    Breed: "",
    Description: "",
    DailyFoodAmount: 0,
    FilteringRatio: 0,
    CertificateID: "",
    Price: 0,
    Image: "",
    Video: "",
    State: 0,
    Commission: 0
  });

  const [editField, setEditField] = React.useState(null);
  const [editValue, setEditValue] = React.useState(null);
  const [selectedAvatar, setSelectedAvatar] = React.useState(null);
  const [previewAvatar, setPreviewAvatar] = React.useState(null);
  const [trigger, setTrigger] = React.useState(0);
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
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`manager/manage-ki-gui/${consignID}`);
        const { user, consign, koi } = res.data.result;
        setConsignData({ user, consign, koi });
        setImageList(koi.Image ? [koi.Image] : []);
        setVideo(koi.Video);
      } catch (error) {
        console.error(error);
      }
    };

    if (consignID) {
      fetchData();
    }
  }, [consignID, trigger]);

  const handleImageUpload = async ({ file }) => {
    try {
      const imgRef = ref(storage, `images/${file.name}`);
      await uploadBytes(imgRef, file);
      const imgURL = await getDownloadURL(imgRef);
      setImageList((prev) => [...prev, imgURL]);
      message.success(`${file.name} uploaded successfully`);
    } catch (error) {
      console.error('Error uploading image:', error);
      message.error('Image upload failed');
    }
  };

  const handleVideoUpload = async ({ file }) => {
    try {
      const videoRef = ref(storage, `videos/${file.name}`);
      await uploadBytes(videoRef, file);
      const videoURL = await getDownloadURL(videoRef);
      setVideo(videoURL);
      message.success(`${file.name} uploaded successfully`);
    } catch (error) {
      console.error('Error uploading video:', error);
      message.error('Video upload failed');
    }
  };

  if (!consignData.user || !consignData.consign || !consignData.koi) {
    return <p>Loading...</p>;
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setSelectedAvatar(file);
    setPreviewAvatar(URL.createObjectURL(file));
  };

  const { user, consign, koi } = consignData;

  const toggleEdit = (field, initialValue) => {
    setEditField(field);
    setEditValue(initialValue);
  };

  function StateMapping(State) {
    const stateMap = {
      1: 'Yêu cầu ký gửi',
      2: 'Đang kiểm tra Koi',
      3: 'Đang thương thảo hợp đồng',
      4: 'Đang tìm người mua',
      5: 'Đã bán thành công',
    };
    switch (State) {
      case 1:
        return <Tag color="blue">{stateMap[State]}</Tag>;
      case 2:
        return <Tag color="green">{stateMap[State]}</Tag>;
      case 3:
        return <Tag color="orange">{stateMap[State]}</Tag>;
      case 4:
        return <Tag color="purple">{stateMap[State]}</Tag>;
      case 5:
        return <Tag color="red">{stateMap[State]}</Tag>;
      default:
        return <Tag color="red">Unknown</Tag>;
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value);
  };

  function KoiStatusMapping(Status) {
    const KoiStatusMap = {
      0: 'Hết Hàng',
      1: 'Nhập Khẩu',
      2: "F1",
      3: "Việt Nam",
      4: "Ký Gửi",
    };
    return KoiStatusMap[Status];
  }

  const saveEdit = (field) => {
    Modal.confirm({
      title: 'Are you sure?',
      content: `Are you sure you want to save changes to ${field}?`,
      onOk: async () => {
        try {
          const updatedFields = { ...validFieldForUpdate, [field]: editValue };
          setValidFieldForUpdate(updatedFields);
          setEditField(null);
          const reponse = await axiosInstance.put(`manager/manage-ki-gui/${consignID}`, updatedFields);
          message.success(`${field} has been updated successfully`);
          setTrigger(trigger + 1);
          console.log(reponse)
        } catch (error) {
          console.error('Error saving changes:', error);
          message.error(`Failed to update ${field}`);
        }
      },
      onCancel: () => {
        setEditField(null);
        setEditValue(null);
      },
    });
  };

  const cancelEdit = () => {
    setEditField(null);
    setEditValue(null);
  };

  const renderEditableItem = (label, value, field, inputType = 'text') => (
    <Descriptions.Item label={label}>
      {editField === field ? (
        <>
          {inputType === 'selectMethod' ? (
            <Select value={editValue} onChange={(value) => setEditValue(value)}>
              <Select.Option value="Online">Online</Select.Option>
              <Select.Option value="Offline">Offline</Select.Option>
            </Select>
          ) : inputType === 'selectState' ? (
            <Select value={editValue} onChange={(value) => setEditValue(value)}>
              <Select.Option value={1}>Yêu cầu ký gửi</Select.Option>
              <Select.Option value={2}>Đang kiểm tra Koi</Select.Option>
              <Select.Option value={3}>Đang thương thảo hợp đồng</Select.Option>
              <Select.Option value={4}>Đang tìm người mua</Select.Option>
              <Select.Option value={5}>Đã bán thành công</Select.Option>
            </Select>
          ) : inputType === 'SelectStatus' ? (
            <Select style={{ minWidth: '7rem' }} value={editValue} onChange={(value) => setEditValue(value)}>
              <Select.Option value={0}>Hết Hàng</Select.Option>
              <Select.Option value={1}>Nhập Khẩu</Select.Option>
              <Select.Option value={2}>F1</Select.Option>
              <Select.Option value={3}>Việt Nam</Select.Option>
              <Select.Option value={4}>Ký Gửi</Select.Option>
            </Select>
          ) : (
            <Input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
          )}
          <Button icon={<CheckOutlined />} type="link" onClick={() => saveEdit(field)} />
          <Button icon={<CloseOutlined />} type="link" onClick={cancelEdit} />
        </>
      ) : (
        <>
          {field === 'State' ? StateMapping(value) : field === 'Status' ? KoiStatusMapping(value) : value}
          <Button icon={<EditOutlined />} type="link" onClick={() => toggleEdit(field, value)} />
        </>
      )}
    </Descriptions.Item>
  );

  return (
    <div style={{ padding: '20px' }}>
      <Form layout="vertical">
        <Descriptions title="User Information" bordered>
          <Descriptions.Item label="Full Name">{user.username}</Descriptions.Item>
          {renderEditableItem("Address", user.address, "address")}
          {renderEditableItem("Phone Number", user.phone_number, "phone_number")}
          <Descriptions.Item label="Verified">
            {user.verify ? 'Yes' : 'No'}
          </Descriptions.Item>
          <Descriptions.Item label="Profile Picture">
            <Avatar src={user.picture} size={64} />
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        <Descriptions title="Consign Information" bordered>
          {renderEditableItem("Method", consign.Method, "Method", "selectMethod")}
          {renderEditableItem("Position Care", consign.PositionCare, "PositionCare")}
          {renderEditableItem("State", consign.State, "State", "selectState")}
          <Descriptions.Item label="Commission">{consign.Commission}</Descriptions.Item>
          <Descriptions.Item label="Total Price">
            {consign.TotalPrice == 0 ? (
              <Tag color="red">Not Provided</Tag>
            ) : (
              formatCurrency(consign.TotalPrice)
            )}
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        <Descriptions title="Koi Information" bordered>
          {renderEditableItem("Koi Name", koi.KoiName, "KoiName")}
          {renderEditableItem("Age", koi.Age, "Age")}
          {renderEditableItem("Origin", koi.Origin, "Origin")}
          {renderEditableItem("Gender", koi.Gender, "Gender")}
          {renderEditableItem("Size (cm)", koi.Size, "Size")}
          {renderEditableItem("Breed", koi.Breed, "Breed")}
          {renderEditableItem("Certificate ID", koi.CertificateID, "CertificateID")}
          {renderEditableItem("Price", formatCurrency(koi.Price), "Price")}
          {renderEditableItem("Daily Food Amount", koi.DailyFoodAmount, "DailyFoodAmount")}
          {renderEditableItem("Filtering Ratio", koi.FilteringRatio, "FilteringRatio")}
          {renderEditableItem("Status", koi.Status, "Status", "SelectStatus")}
          <Space>
          </Space>
          {renderEditableItem("Description", koi.Description, "Description")}
        </Descriptions>
        <Divider />
        <Row justify="center" align="middle" gutter={[16, 16]}>
          <Col xs={24} md={12} lg={8}>
            <Upload
              listType="picture-card"
              customRequest={handleImageUpload}
              showUploadList={false}
              accept="image/*"
            >
              <div>
                <UploadOutlined />
                <div style={{ marginTop: 8 }}>Upload Image</div>
              </div>
            </Upload>
            {imageList.length > 0 && (
              <Carousel>
                {imageList.map((img) => (
                  <div key={img}>
                    <Image width="480px" height='360px' src={img} />
                  </div>
                ))}
              </Carousel>
            )}
          </Col>

          <Col xs={24} md={12} lg={8}>
            <Upload
              customRequest={handleVideoUpload}
              showUploadList={false}
              accept="video/*"
            >
              <Button icon={<UploadOutlined />}>Upload Video</Button>
            </Upload>
            {video && (
              <video style={{ display: 'block' }} width="480px" height='360px' controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
}
