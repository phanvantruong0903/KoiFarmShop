import React from 'react'
import { Typography, Card, Statistic, Row, Col, Layout, Form, Input, Space, Dropdown, Tabs, Button, message, Badge } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, DownOutlined, BorderBottomOutlined } from '@ant-design/icons';
import '../Css/GeneralPurpose.css'
import useFetchProfiles from '../../Ant Design/Hooks/useFetchProfiles';
import ProfileTable from '../Components/Table/ProfileTable';
import { SearchOutlined } from '@ant-design/icons';
import ProfileModal from '../Components/Modal/ProfileModal';
export default function Profiles() {
const { Header, Content } = Layout;
const [activeTab, setActiveTab] = React.useState('1');

const { profiles, UserChangesIn7DaysPercent, totalVerified, totalCustomers, totalStaff, totalManager } = useFetchProfiles();
const [searchTerm, setSearchTerm] = React.useState('');
const [isModalVisible, setIsModalVisible] = React.useState(false);
const [selectedProfile, setSelectedProfile] = React.useState(null);

const getFilteredProfiles = () => {
  switch (activeTab) {
    case '1':
      return profiles; 
    case '2':
      return profiles.filter(profile => profile.verify); // Verified profiles
    case '3':
      return profiles.filter(profile => profile.roleid == '2'); // Staff profiles
    case '4':
      return profiles.filter(profile => profile.roleid == '3'); // Manager profiles
    default:
      return profiles;
  }
};

const filteredProfiles = getFilteredProfiles();

const userChangePercent = parseFloat(UserChangesIn7DaysPercent());
const isPositiveChange = userChangePercent > 0;
const Tab = [
  {
    key: '1',
    label: (
      <>
        Toàn Bộ Hồ Sơ
        <Badge count={profiles.length} style={{ marginLeft: 8 }} color='green' />
      </>
    ),
  },
  {
    key: '2',
    label: (
      <>
        Người Dùng Đã Xác Minh
        <Badge count={totalVerified()} style={{ marginLeft: 8 }} color='green' />
      </>
    ),
  },
  {
    key: '3',
    label: (
      <>
        Nhân Viên
        <Badge count={0} style={{ marginLeft: 8 }} color='green' />
      </>
    ),
  },
  {
    key: '4',
    label: (
      <>
        Quản Lý
        <Badge count={totalManager()} style={{ marginLeft: 8 }} color='green' />
      </>
    ),
  }
];
const handleSearch = (value) => {
  setSearchTerm(value.target.value);
  console.log('Search:', searchTerm);
};
const handleActionClick = (actionType, id) => {
  if (actionType === 'update') {
    setIsModalVisible(true);
    setSelectedProfile(id);
    message.info(`Update action triggered for ID: ${id}`);
  } else if (actionType === 'disable') {
    message.warning(`Disable action triggered for ID: ${id}`);
  }
};
return (
  <Layout >
   
    <ProfileModal actions={isModalVisible} setactions={setIsModalVisible} id={selectedProfile} />
    <Header style={{ background: '#f5f5f5' }}>
      <Typography.Title style={{ textAlign: 'center' }} level={1}>Profile Dashboard</Typography.Title>
    </Header>

    
    <Content style={{ padding: '24px' }}>

      <Row gutter={24}>
        
        <Col span={6}>
          <Card hoverable>
            <Statistic
              title={<Typography.Title level={4}>Total Active Customers</Typography.Title>}
              value={totalCustomers()}
              precision={0}
            />
          </Card>
        </Col>


        <Col span={6}>
          <Card hoverable>
            <Statistic
              title={<Typography.Title level={4}>Total Verified Customers</Typography.Title>}
              value={totalVerified()}
              precision={0}
            />
          </Card>
        </Col>

 
        <Col span={6}>
          <Card hoverable>
            <Statistic
              title={<Typography.Title level={4}>Total Staff</Typography.Title>}
              value={totalStaff()}
              precision={0}
            />
          </Card>
        </Col>

     
        <Col span={6}>
          <Card hoverable>
            <Statistic
              title={<Typography.Title level={4}>User Changes in Last 7 Days</Typography.Title>}
              value={userChangePercent + '%'}
              precision={2}
              valueStyle={{ color: isPositiveChange ? '#3f8600' : '#cf1322' }} 
              prefix={isPositiveChange ? <ArrowUpOutlined /> : <ArrowDownOutlined />} 
            />
          </Card>
        </Col>
      </Row>


      <Row gutter={6} style={{ marginTop: '2rem' }} className='Black-Strip'>




        <Col span={12}>

          <Space align='center' style={{ paddingLeft: '3rem' }} >
            <Tabs
              defaultActiveKey="1"
              items={Tab}
              size='large'
              tabBarGutter={78}
              onChange={key => setActiveTab(key)} 
            />


          </Space>
        </Col>

      </Row>
      <Layout style={{ background: '#f0f0f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 8px rgba(0, 0, 0, 0.1)' }}>

        <Header style={{ background: '#f5f5f5', borderBottom: '1px solid #d9d9d9', padding: '20px', borderRadius: '12px 12px 0 0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '1px #bfbfbf solid ' }}>
        </Header>

        
        <Content className='fix-Table' style={{ border: '1px #bfbfbf solid ', padding: '20px', background: '#fff', borderRadius: '0 0 12px 12px' }}>


          <ProfileTable data={filteredProfiles} handleActionClick={handleActionClick} Search={searchTerm} />
        </Content>
      </Layout>
    </Content>
  </Layout>
)
}
