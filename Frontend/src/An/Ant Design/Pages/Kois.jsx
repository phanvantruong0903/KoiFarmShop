import React, { useState } from 'react';
import { Card, Col, Row, Input, Button, Badge, Space, Typography, Image, Empty, Modal, Form, Select, InputNumber } from 'antd';
import { useManageKoi } from '../../Hooks/useManageKoi';
import { SearchOutlined, EditOutlined, StopOutlined, PlusCircleOutlined, CheckOutlined } from '@ant-design/icons';

export default function Kois() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalKoi, setModalKoi] = useState(null);
    const [isCreating, setIsCreating] = useState(false);

    const {
        result,
        filteredCategories,
        handleDisableEnable,
        handleEditToggle,
        handleInputChange,
        showCreateForm,
        setShowCreateForm,
        handleNewKoiCreation,
        handleUpdate
    } = useManageKoi();
    const [form] = Form.useForm();
    const KoiStatusMap = {
        0: 'Out of Order',
        1: 'Imported',
        2: 'F1',
        3: 'Vietnam',
        4: 'Consigned',
    };

    const handleEditClick = (koi) => {
        setModalKoi(koi);
        setIsCreating(false);
        setIsModalVisible(true);
        form.setFieldsValue(koi);
    };

    const handleCreateClick = (category) => {
        setModalKoi({ CategoryID: category._id });
        setIsCreating(true);
        setIsModalVisible(true);
    };

    const handleModalSubmit = async (values) => {
        if (isCreating) {
            await handleNewKoiCreation(modalKoi.CategoryID, values);
        } else {
            await handleUpdate(modalKoi._id);
        }
        setIsModalVisible(false);
    };

    return (
        <div style={{ padding: '20px', background: '#f0f2f5' }}>
            <Typography.Title level={2}>Manage Koi</Typography.Title>
            {filteredCategories.map((category) => {
                const koiItems = result.filter(koi => koi.CategoryID === category._id);

                return (
                    <div key={category._id} style={{ marginBottom: '20px', padding: '20px', background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
                            <Col>
                                <Typography.Title level={4} style={{ display: 'inline-block', marginRight: '10px' }}>
                                    {category.CategoryName}
                                </Typography.Title>
                                <Badge count={koiItems.length} showZero style={{ backgroundColor: '#52c41a' }} />
                            </Col>
                            <Col>
                                <Space>
                                    <Button icon={<PlusCircleOutlined />} onClick={() => handleCreateClick(category)} style={{ borderColor: '#b7eb8f', color: '#389e0d' }}>Tạo Koi Mới</Button>
                                    <Input placeholder="Search in category..." prefix={<SearchOutlined />} onChange={(e) => handleInputChange(category._id, 'search', e.target.value)} style={{ width: 200 }} />
                                </Space>
                            </Col>
                        </Row>

                        <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', paddingBottom: '10px' }}>
                            {koiItems.length > 0 ? (
                                koiItems.map((koi) => (
                                    <Card key={koi._id} hoverable style={{ minWidth: 300, background: '#fafafa' }} cover={<Image alt="Koi" src={koi.Image || 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='} style={{ maxHeight: '180px', objectFit: 'cover' }} />}>
                                        <Card.Meta title={koi.KoiName} description={` Trạng Thái : ${KoiStatusMap[koi.Status]}`} />
                                        <div style={{ marginTop: '10px' }}>
                                            <Button icon={<EditOutlined />} onClick={() => handleEditClick(koi)} style={{ marginRight: '8px' }}>Edit Details</Button>
                                            {koi.Status === 0 ? (
                                                <Button icon={<CheckOutlined />} onClick={() => handleDisableEnable(koi._id, 1)}>Enable</Button>
                                            ) : (
                                                <Button danger icon={<StopOutlined />} onClick={() => handleDisableEnable(koi._id, 0)}>Disable</Button>
                                            )}
                                        </div>
                                    </Card>
                                ))
                            ) : (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '20px 0' }}>
                                    <Empty description="No Koi Data Available" />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}

            <Modal title={isCreating ? "Create New Koi" : "Edit Koi"} visible={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null}>
                <Form form={form} initialValues={modalKoi} onFinish={handleModalSubmit} layout="vertical">
                    <Image src={modalKoi?.Image || 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '20px' }} />

                    <Form.Item label="Koi Name" name="KoiName" rules={[{ required: true, message: 'Please input the Koi Name!' }]}>
                        <Input />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Status" name="Status" rules={[{ required: true, message: 'Please select a Status!' }]}>
                                <Select>
                                    <Select.Option value={0}>Out of Order</Select.Option>
                                    <Select.Option value={1}>Imported</Select.Option>
                                    <Select.Option value={2}>F1</Select.Option>
                                    <Select.Option value={3}>Vietnam</Select.Option>
                                    <Select.Option value={4}>Consigned</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Age" name="Age" rules={[{ required: true, message: 'Please input the Age!' }]}>
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Origin" name="Origin">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Gender" name="Gender">
                                <Select>
                                    <Select.Option value="Male">Male</Select.Option>
                                    <Select.Option value="Female">Female</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Size" name="Size">
                                <Input placeholder="e.g., 30cm" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Breed" name="Breed">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="Description" name="Description">
                        <Input.TextArea rows={2} />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Daily Food Amount" name="DailyFoodAmount">
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Filtering Ratio" name="FilteringRatio">
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Certificate ID" name="CertificateID">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Price" name="Price" rules={[{ required: true, message: 'Please input the Price!' }]}>
                                <InputNumber min={1000} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="Image URL" name="Image">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Video URL" name="Video">
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {isCreating ? "Create" : "Save Changes"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
