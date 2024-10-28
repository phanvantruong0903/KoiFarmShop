import { Table, Avatar, Tag, Tooltip, message, Button, Dropdown, Menu, Checkbox, Input, Modal, Form, Select, Image, Upload } from "antd";
import { CopyOutlined, DownOutlined } from "@ant-design/icons";
import React from 'react';
import axiosInstance from "../../../Utils/axiosJS";
import moment from 'moment';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

export default function SupplierTable({ data, handleActionClick, Search }) {
  const [selectedColumns, setSelectedColumns] = React.useState({});
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [currentSupplier, setCurrentSupplier] = React.useState(null);
  const [form] = Form.useForm();
  const [uploading, setUploading] = React.useState(false);
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
  const showUpdateModal = (supplier) => {
    setCurrentSupplier(supplier);
    setIsModalVisible(true);
    form.setFieldsValue(supplier);
  };
  const handleUpdate = async (values) => {
    try {
      const updatedData = { ...currentSupplier, ...values };
      if (values.SupplierImage) {
        const imageFile = values.SupplierImage;
        const imageRef = ref(storage, `images/${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        const downloadURL = await getDownloadURL(imageRef);
        updatedData.SupplierImage = downloadURL;
      }
      await axiosInstance.put(`/manager/manage-supplier/${currentSupplier._id}`, updatedData);
      message.success(`Supplier "${values.SupplierName}" has been updated.`);
      setIsModalVisible(false);
    } catch (error) {
      console.error(error);
      message.error("Update failed. Please try again.");
    }
  };
  const handleFileUpload = (file) => {
    const isSupportedFormat = ["image/jpeg", "image/png"].includes(file.type);
    if (!isSupportedFormat) {
      message.error("Only JPEG and PNG files are supported!");
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    message.success("ID copied to clipboard!");
  };

  const handleColumnVisibility = (columnKey, isVisible) => {
    setSelectedColumns((prevState) => ({
      ...prevState,
      [columnKey]: !isVisible
    }));
  };

  const resetColumns = () => {
    setSelectedColumns({});
  };

  const searchFunction = (item) => {
    const searchFields = ['_id', 'SupplierName', 'Address', 'Country'];
    return searchFields.some(field =>
      item[field]?.toString()?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredData = searchTerm ? data.filter(searchFunction) : data;

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      render: (text) => (
        <>
          <Tag color="blue">{text}</Tag>
          <Tooltip title="Copy ID">
            <CopyOutlined
              style={{ marginLeft: 8, cursor: 'pointer', float: 'right' }}
              onClick={() => copyToClipboard(text)}
            />
          </Tooltip>
        </>
      ),
    },
    {
      title: 'Supplier Name',
      dataIndex: 'SupplierName',
      key: 'SupplierName',
      sorter: (a, b) => a.SupplierName.localeCompare(b.SupplierName),
    },
    {
      title: 'Image',
      dataIndex: 'SupplierImage',
      key: 'SupplierImage',
      render: (url) => <Avatar src={url} />,
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
      render: (text) => text || <Tag color="red">Not Provided</Tag>,
    },
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'Country',
      filters: [
        { text: 'Nhật', value: 'Nhật' },
        { text: 'Trung Quốc', value: 'Trung Quốc' },
        { text: 'Việt Nam', value: 'Việt Nam' },
      ],
      onFilter: (value, record) => record.Country === value,
      filterMultiple: false,
    },
    {
      title: 'Phone Number',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber',
    },
    {
      title: 'Description',
      dataIndex: 'SupplierDescription',
      key: 'SupplierDescription',
      render: (text) => (
        <Tooltip title={text}>
          {text.length > 50 ? `${text.substring(0, 50)}...` : text}
        </Tooltip>
      ),
    },
    {
      title: 'Website',
      dataIndex: 'Website',
      key: 'Website',
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button
            type="primary"
            onClick={() => showUpdateModal(record)}
            style={{ marginRight: 8 }}
          >
            Update
          </Button>
        </>
      ),
    },
  ].map(col => ({ ...col, visible: !selectedColumns[col.key] }));

  const filteredColumns = columns.filter(col => col.visible);

  const columnSelectionMenu = (
    <Menu>
      {columns.map((col) => (
        <Menu.Item key={col.key}>
          <Checkbox
            checked={!selectedColumns[col.key]}
            onChange={(e) => handleColumnVisibility(col.key, e.target.checked)}
          >
            {col.title}
          </Checkbox>
        </Menu.Item>
      ))}
      <Menu.Item>
        <Button type="link" onClick={resetColumns}>
          Reset All
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Table columns={columns} dataSource={data} rowKey="_id" />

      <Modal
        title={`Update Supplier: ${currentSupplier?.SupplierName}`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="update" type="primary" onClick={() => form.submit()}>
            Update
          </Button>,
        ]}
      >
        <Image src={currentSupplier?.SupplierImage} alt="Supplier Image" />

        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          <Form.Item
            label="Supplier Name"
            name="SupplierName"
            rules={[{ required: true, message: 'Please enter the supplier name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="Address"
            rules={[{ required: true, message: 'Please enter the address' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Country"
            name="Country"
            rules={[{ required: true, message: 'Please enter the country' }]}
          >
            <Select>
              <Select.Option value="Japan">Japan</Select.Option>
              <Select.Option value="USA">USA</Select.Option>
              <Select.Option value="Germany">Germany</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="PhoneNumber"
            rules={[{ required: true, message: 'Please enter the phone number' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="SupplierDescription"
            rules={[{ required: false }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Website"
            name="Website"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Supplier Image"
            name="SupplierImage"
            valuePropName="file"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList ? e.fileList[0].originFileObj : null)}
          >
            <Upload
              listType="picture"
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
