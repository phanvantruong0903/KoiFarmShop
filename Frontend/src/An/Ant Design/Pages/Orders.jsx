import React from 'react';
import { Typography, Table, Button, message, Layout, Space, Tag } from 'antd';
import axiosInstance from '../../Utils/axiosJS';
import { useState, useEffect } from 'react';
import { CheckOutlined, SyncOutlined } from '@ant-design/icons';
import '../Css/GeneralPurpose.css'

export default function OrdersNext() {
    const { Header, Content } = Layout;
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshData, setRefreshData] = useState(false);
    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get('/manager/manage-order/get-all');
                setOrders(response.data.result);
            } catch (error) {
                message.error("Error fetching orders");
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, [refreshData]);


    const handleChangeStatus = async (orderId) => {
        try {
            const response = await axiosInstance.patch(`/manager/order/updateOrderStatus/${orderId}`);
            if (response.status === 200) {
                message.success('Status changed successfully');
                setRefreshData(!refreshData);
            } else {
                message.error('Failed to change status');
            }
        } catch (error) {
            message.error("Error updating status");
        }
    };


    const columns = [
        {
            title: 'User ID',
            dataIndex: 'UserID',
            key: 'UserID',
        },
        {
            title: 'Ship Address',
            dataIndex: 'ShipAddress',
            key: 'ShipAddress',
        },
        {
            title: 'Order Date',
            dataIndex: 'OrderDate',
            key: 'OrderDate',
            render: (text) => new Date(text).toLocaleDateString(),
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            render: (status) => <Tag color={status === 'Pending' ? 'red' : 'green'}>{status}</Tag>,
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <Button
                    type="primary"
                    icon={<SyncOutlined />}
                    onClick={() => handleChangeStatus(record._id)}
                >
                    Change Status
                </Button>
            ),
        },
    ];

    return (
        <Layout>
            <Header style={{ background: '#f5f5f5' }}>
                <Typography.Title style={{ textAlign: 'center' }} level={1}>Orders Dashboard</Typography.Title>
            </Header>
            <Content className='fix-Table' style={{ padding: '24px' }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Table
                        columns={columns}
                        dataSource={orders}
                        rowKey={(record) => record._id}
                        loading={loading}
                        bordered
                        pagination={{ pageSize: 10 }}
                    />
                </Space>
            </Content>
        </Layout>
    );
}
