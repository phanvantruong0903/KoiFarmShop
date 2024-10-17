import PropTypes from 'prop-types';
import { Table, Dropdown } from 'react-bootstrap';
import { BsFilterSquare } from 'react-icons/bs';
import { PiDotsThreeCircleLight, PiDotsThreeCircleFill } from 'react-icons/pi';
import { useState } from 'react';
import ViewProfile from './ViewProfile';
export default function TableGen({
    data,
    headers,
    fieldMapping, //  prop for field mapping
    hoveredRow,
    handleMouseEnter,
    handleMouseLeave,
    whatRole,
    isAddress,
    isActive,
    setIsActive,
    handleRowAction,
    showModal,
    isSpecial
}) {

    return (
        <Table striped bordered hover responsive="md">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                    <th className="d-flex justify-content-center align-content-center">
                        <BsFilterSquare />
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((mock, index) => (
                    <tr
                        key={mock._id}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                       
                    >
                        <td  style={{ overflowX: 'hidden', textOverflow: 'nowrap' }}>{index + 1}</td>
                        {fieldMapping.map((field, idx) => {

                            if (field === 'role') {
                                return <td key={idx}>{whatRole(mock.roleid)}</td>;
                            }
                            if (field === 'verify') {
                                return (
                                    <td key={idx} className={mock.verify ? 'text-success' : 'text-danger'}>
                                        {mock.verify ? 'Verified' : 'Not verified'}
                                    </td>
                                );
                            }
                            if (field === 'address') {
                                return <td key={idx}>{isAddress(mock.address) ? mock.address : 'No address'}</td>;
                            }
                            if (field === 'State') {
                                const statusMap = {
                                    1: 'Deposit Requests',
                                    2: 'Koi Checks',
                                    3: 'Price Agreements',
                                    4: 'Fish Deliveries',
                                    5: 'Fish Sales'

                                };
                                return <td key={idx}>{statusMap[mock.State]}</td>;
                            }
                            return <td style={{ 
                                overflow: 'auto',         
                                whiteSpace: 'nowrap',     
                                maxWidth: '150px'          
                              }} key={idx}>{mock[field] || 'not provided'}</td>; 
                        })}
                        <td className="d-flex justify-content-center align-items-center" style={{ height: '40px' }}>
                            <Dropdown>
                                <Dropdown.Toggle as="div" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                                    {hoveredRow === index ? <PiDotsThreeCircleFill /> : <PiDotsThreeCircleLight />}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => {
                                            handleRowAction(mock._id, 'view');
                                            showModal(true);

                                        }}
                                    >
                                        View
                                    </Dropdown.Item>

                                    <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    
                                    {!isSpecial && (
                                        <Dropdown.Item
                                            onMouseLeave={() => setIsActive(false)}
                                            onMouseEnter={() => setIsActive(true)}
                                            className={isActive ? 'bg-danger text-white' : ''}
                                            onClick={() => handleRowAction(mock._id, 'delete')}
                                        >
                                            Delete
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

TableGen.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    fieldMapping: PropTypes.array.isRequired, // New prop type
    hoveredRow: PropTypes.number,
    handleMouseEnter: PropTypes.func.isRequired,
    handleMouseLeave: PropTypes.func.isRequired,
    whatRole: PropTypes.func.isRequired,
    isAddress: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    setIsActive: PropTypes.func.isRequired,
    handleRowAction: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired
};
