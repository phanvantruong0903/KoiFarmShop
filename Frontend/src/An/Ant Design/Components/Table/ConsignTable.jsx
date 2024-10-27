import { Table, Avatar, Tag, Tooltip, message, Button, Checkbox, Modal, Input, Menu, Dropdown } from "antd";
import { CopyOutlined, CloseCircleOutlined } from "@ant-design/icons";
import React from 'react';
import moment from 'moment';
// import ProfileModal from "../Modal/ProfileModal";

export default function ConsignTable({ data, handleActionClick, Search }) {
    const [activeFilters, setActiveFilters] = React.useState([]);
    const [selectedColumns, setSelectedColumns] = React.useState({});
    const [showColumnSelector, setShowColumnSelector] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        message.success("ID copied to clipboard!");
    };

    const handleTableChange = (pagination, filters, sorter) => {
        const filterNames = [];
        Object.keys(filters).forEach((key) => {
            if (filters[key]) {
                filterNames.push({
                    column: key,
                    value: filters[key],
                });
            }
        });
        setActiveFilters(filterNames);
    };

    const toggleColumnVisibility = (columnKey) => {
        setSelectedColumns(prevState => ({
            ...prevState,
            [columnKey]: !prevState[columnKey]
        }));
    };

    const resetColumns = () => {
        setSelectedColumns({});
    };

    // const removeFilter = (filterToRemove) => {
    //     setActiveFilters(activeFilters.filter(filter =>
    //         !(filter.column === filterToRemove.column && JSON.stringify(filter.value) === JSON.stringify(filterToRemove.value))
    //     ));
    // };

    const searchFunction = (item) => {
        const searchFields = ['_id', 'UserID', 'UserID', 'PositionCare', 'Description'];
        return searchFields.some(field =>
            item[field]?.toString()?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filteredData = searchTerm ? data.filter(searchFunction) : data;

    const removeFilter = (filterToRemove) => {
        setActiveFilters(activeFilters.filter(filter =>
            !(filter.column === filterToRemove.column && JSON.stringify(filter.value) === JSON.stringify(filterToRemove.value))
        ));
    };
    const FilterTag = ({ filter, onRemove }) => (
        <Tag closable onClose={() => onRemove(filter)} closeIcon={<CloseCircleOutlined />}>
            {filter.column}: {filter.value.join(', ')}
        </Tag>
    );
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
            title: 'User ID',
            dataIndex: 'UserID',
            key: 'UserID',
        },
        {
            title: 'Koi ID',
            dataIndex: 'UserID',
            key: 'KoiID',
        },
        {
            title: 'Shipped Date',
            dataIndex: 'ShippedDate',
            key: 'ShippedDate',
            render: text => text || <Tag color="red">Not Provided</Tag>, 
        },
        {
            title: 'Receipt Date',
            dataIndex: 'ReceiptDate',
            key: 'ReceiptDate',
            render: text => text || <Tag color="red">Not Provided</Tag>,
        },
        {
            title: 'Description',
            dataIndex: 'Description',
            key: 'Description',
            render: text => text || <Tag color="red">Not Provided</Tag>,
        },
        {
            title: 'State',
            dataIndex: 'State',
            key: 'State',
            render: state => {
               
                const stateMap = {
                    1: 'Yêu cầu ký gửi',
                    2: 'Đang kiểm tra Koi',
                    3: 'Đang thương thảo hợp đồng',
                    4: 'Đang tìm người mua',
                    5: 'Đã bán thành công',
                };
                switch (state) {
                    case 1:
                        return <Tag color="blue">{stateMap[state]}</Tag>;
                    case 2:
                        return <Tag color="green">{stateMap[state]}</Tag>;
                    case 3:
                        return <Tag color="orange">{stateMap[state]}</Tag>;
                    case 4:
                        return <Tag color="purple">{stateMap[state]}</Tag>;
                    case 5:
                        return <Tag color="red">{stateMap[state]}</Tag>;
                    default:
                        return <Tag color="red">Unknown</Tag>;
                }
            },
        },
        {
            title: 'Method',
            dataIndex: 'Method',
            key: 'Method',
        },
        {
            title: 'Position Care',
            dataIndex: 'PositionCare',
            key: 'PositionCare',
        },
        {
            title: 'Commission',
            dataIndex: 'Commission',
            key: 'Commission',
            render: text => text || <Tag color="red">Not Provided</Tag>,
        },
        {
            title: 'Total Price',
            dataIndex: 'TotalPrice',
            key: 'TotalPrice',
            render: text => text ? `$${text}` : <Tag color="red">Not Provided</Tag>, 
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button onClick={() => handleActionClick('View Consign Details',record._id)} type="primary">View Detail</Button>
                </div>
            ),
        }
    ].map(col => ({ ...col, visible: !selectedColumns[col.key] }));
    const columnMenu = (
        // <Menu onClick={(e) => e.domEvent.stopPropagation()}>
        <Menu>
            {columns.map((col) => (
                <Menu.Item key={col.key} style={{ padding: 0 }}>
                    <Checkbox
                        checked={selectedColumns[col.key]}
                        onChange={() => toggleColumnVisibility(col.key)}
                        style={{ padding: '8px', width: '100%' }}
                    >
                        {col.title}
                    </Checkbox>
                </Menu.Item>
            ))}
            <Menu.Divider />
            <Menu.Item style={{ padding: 8, textAlign: 'center' }}>
                <Button onClick={resetColumns} block>Reset All</Button>
            </Menu.Item>
        </Menu>
    );
    const filteredColumns = columns.filter(col => col.visible);

    return (
        <div>
            <p>
                <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: 200, marginBottom: 16 }}
                />
                <Button onClick={() => setShowColumnSelector(true)} >Select Columns</Button>
                {/* <Dropdown overlay={columnMenu} trigger={['click']}>
              
                </Dropdown> */}
            </p>

            {activeFilters.map((filter, index) => (
                <FilterTag key={index} filter={filter} onRemove={removeFilter} />
            )
            )}
            <Table
                columns={filteredColumns}
                dataSource={filteredData}
                rowKey="_id"
                pagination={{ pageSize: 10 }}
                onChange={handleTableChange}
            />

            <Modal
                title="Select Columns"
                visible={showColumnSelector}
                onCancel={() => setShowColumnSelector(false)}
                onOk={() => setShowColumnSelector(false)}

            >
                {columns.map(col => (
                    <Checkbox
                        key={col.key}
                        checked={!selectedColumns[col.key]}
                        onChange={(e) => toggleColumnVisibility(col.key)}
                    >
                        {col.title}
                    </Checkbox>
                ))}
                <Button onClick={resetColumns}>Reset All</Button>
            </Modal>
        </div>
    );
}