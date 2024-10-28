import React from 'react';
import { Typography, Card, Statistic, Row, Col, Layout, Button, Tabs, Badge, Space, Modal, Form, Input, Select, InputNumber, message } from 'antd';
import InvoiceTable from '../Components/Table/InvoiceTable';
import '../Css/GeneralPurpose.css';
import useFetchInvoices from "../Hooks/useFetchInvoices";
import axiosInstance from '../../Utils/axiosJS';

export default function Invoices() {
  const { Header, Content } = Layout;
  const [activeTab, setActiveTab] = React.useState('1');
  
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm();
  const [Catagory, setCatagory] = React.useState([]);
  const [Supplier, setSupplier] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [invoices, setInvoices] = React.useState([]);
  
  const [refreshData, setRefreshData] = React.useState(false);
  React.useEffect(() => {
    const fetchCatagory = async () => {
      try {
        Promise.all([
          axiosInstance.get('manager/manage-koi/get-all'),
          axiosInstance.get('manager/manage-supplier/get-all'),
          axiosInstance.get("manager/manage-invoice/get-all")
        ]).then(([Catresponse, SupResponse,InReponse]) => {
          const { categoryList } = Catresponse.data;
          const supplierList = SupResponse.data.result;
          const invoiceList = InReponse.data.invoices;
          setSupplier(supplierList);
          setCatagory(categoryList);
          setInvoices(invoiceList);
        }).catch(error => {
          console.error(error);
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchCatagory();
  }, [refreshData]);

  const getFilteredInvoices = () => {
    switch (activeTab) {
      case '1':
        return invoices;
      case '2':
        return invoices.filter(invoice => invoice.Status === 1);
      case '3':
        return invoices.filter(invoice => invoice.Status === 2);
      default:
        return invoices;
    }
  };

  const Tab = [
    {
      key: '1',
      label: (
        <>
          Toàn Bộ Hóa Đơn
          <Badge count={invoices.length} style={{ marginLeft: 8 }} color='green' />
        </>
      ),
    },
    {
      key: '2',
      label: (
        <>
          Hóa Đơn Cho Đơn Hàng Đã Nhận
          <Badge count={invoices.filter(invoice => invoice.Status === 1).length} style={{ marginLeft: 8 }} color='green' />
        </>
      ),
    }, {
      key: '3',
      label: (
        <>
          Hóa Đơn Cho Đơn Hàng Đã Bán Hết
          <Badge count={invoices.filter(invoice => invoice.Status === 2).length} style={{ marginLeft: 8 }} color='green' />
        </>
      ),
    },
  ];

  function handleAddInvoice() {
    setIsModalVisible(true);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  async function handleOk() {
    try {
      const values = await form.validateFields();
      setLoading(true);
      const response = await axiosInstance.post('manager/manage-invoice/create-new-invoice-group-koi', values);
      message.success('Hóa đơn đã được tạo thành công!');
      setIsModalVisible(false);
      setLoading(false);
      setRefreshData(!refreshData);
      form.resetFields();
      await invoices.refreshData;
    } catch (error) {
      message.error('Vui lòng kiểm tra lại các trường!');
      setLoading(false);
    }
  }

  return (
    <Layout>
      <Modal
        title="Tạo Hóa Đơn"
        open={isModalVisible}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Nhà cung cấp"
            name="SupplierID"
            rules={[{ required: true, message: 'Vui lòng chọn nhà cung cấp!' }]}
          >
            <Select placeholder="Chọn nhà cung cấp">
              {Supplier.map(supplier => (
                <Select.Option key={supplier._id} value={supplier._id}>
                  {supplier.SupplierName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Nhóm Koi"
            name="GroupKoiCategoryID"
            rules={[{ required: true, message: 'Vui lòng chọn nhóm koi!' }]}
          >
            <Select placeholder="Chọn nhóm koi">
              {Catagory.map(category => (
                <Select.Option key={category._id} value={category._id}>
                  {category.CategoryName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Kích thước"
            name="Dimension"
            rules={[
              { required: true, message: 'Vui lòng nhập kích thước!' },
              { type: 'number', min: 1, message: 'Kích thước phải lớn hơn 1!' }
            ]}
          >
            <InputNumber min={1} placeholder="Nhập kích thước" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Giống"
            name="BreedGroupKoi"
            rules={[{ required: true, message: 'Vui lòng nhập giống koi!' }]}
          >
            <Input placeholder="Nhập giống koi" />
          </Form.Item>

          <Form.Item
            label="Giá mỗi Koi"
            name="PriceOneKoi"
            rules={[
              { required: true, message: 'Vui lòng nhập giá!' },
              { type: 'number', min: 1, max: 10000000, message: 'Giá phải lớn hơn 1!' }
            ]}
          >
            <InputNumber min={1000} placeholder="Nhập Giá" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Số lượng"
            name="Quantity"
            rules={[
              { required: true, message: 'Vui lòng nhập số lượng!' },
              { type: 'number', min: 1, message: 'Số lượng phải lớn hơn 1!' }
            ]}
          >
            <InputNumber min={1} placeholder="Nhập số lượng" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Giảm giá (%)"
            name="Discount"
            rules={[
              { required: true, message: 'Vui lòng nhập giảm giá!' },
              { type: 'number', min: 0, max: 100, message: 'Giảm giá phải nằm trong khoảng 0 đến 100!' }
            ]}
          >
            <InputNumber min={0} max={100} placeholder="Nhập giảm giá" style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>

      <Header style={{ background: '#f5f5f5' }}>
        <Typography.Title style={{ textAlign: 'center' }} level={1}>Invoice Dashboard</Typography.Title>
      </Header>

      <Content className='fix-Table' style={{ padding: '24px' }}>
        <Row gutter={24}>
          <Col span={6}>
            <Card hoverable style={{ height: '100%' }}>
              <Statistic
                title={<Typography.Title level={4}>Tổng số hóa đơn</Typography.Title>}
                value={invoices.length}
                precision={0}
              />
            </Card>
          </Col>

          <Col span={6}>
            <Card hoverable style={{ height: '100%' }}>
              <Statistic
                title={<Typography.Title level={4}>Hóa đơn đã nhận</Typography.Title>}
                value={invoices.filter(invoice => invoice.Status === 1).length}
                precision={0}
              />
            </Card>
          </Col>

          <Col span={6}>
            <Card hoverable style={{ height: '100%' }}>
              <Statistic
                title={<Typography.Title level={4}>Tổng số giảm giá</Typography.Title>}
                value={15}
                precision={0}
              />
            </Card>
          </Col>

          <Col span={6}>
            <Card hoverable style={{ height: '100%' }}>
              <Statistic
                title={<Typography.Title level={4}>Tổng doanh thu</Typography.Title>}
                value={100000}
                precision={0}
                prefix="₫"
              />
            </Card>
          </Col>
        </Row>

        <div style={{ marginTop: '24px' }}>
          <Space>
            <Button type="primary" onClick={handleAddInvoice}>
              Tạo Hóa Đơn Mới
            </Button>
          </Space>

          <Tabs
            defaultActiveKey="1"
            items={Tab}
            onChange={setActiveTab}
            style={{ marginTop: '16px' }}
          />
        </div>

        <InvoiceTable data={getFilteredInvoices()} />
      </Content>
    </Layout>
  );
}
