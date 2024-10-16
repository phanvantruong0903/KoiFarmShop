import React, { useState, useEffect } from 'react';
// CSS
import '../../Css/Orders.css';
import '../Manager/ManageKoi.css';
// Bootstrap 
import { Modal, Button, Form, DropdownButton } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
// Custom Hooks
import useFilter from '../../Hooks/useFilter';
// Utils
import { isAddress, whatRole } from '../../Utils/valueParser';
// Components
import FilterBar from '../../Components/Staff/FilterBar';
import FilterButton from '../../Components/Staff/FilterButton';
import Spinner from '../../Components/Spinner';
import TableGen from '../../Components/Staff/TableGen';
// Axios
import axiosInstance from '../../Utils/axiosJS';

export default function ManageSupplier() {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [supplierID, setSupplierID] = useState(null);
    const [selectedSupplier, setSelectedSupplier] = useState(null); 
    const [isCreating, setIsCreating] = useState(false);
    const headers = ['#', 'Supplier_ID', 'Supplier Name', 'Address', 'Country', 'Phone Number'];
    const fieldMapping = ['_id', 'SupplierName', 'Address', 'Country', 'PhoneNumber'];
    const handleCreate = () => {
        setIsCreating(true);

        setShowModal(true);
    };
    const handleRowAction = (id, actionType) => {
        if (actionType === 'delete') {
            console.log(`Delete user with ID: ${id}`);
        } else if (actionType === 'view') {
            const supplier = intialData.find(supplier => supplier._id === id);
            setSelectedSupplier(supplier);
            setShowModal(true);
        }
    };

    const [intialData, setIntialData] = useState([]);
    const handleMouseEnter = (index) => {
        setHoveredRow(index);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };

    const { searchTerm, handleFilterChange, filteredData, handleSearch, filterList } = useFilter(intialData, 'supplier');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/manager/manage-supplier/get-all');
                setIntialData(response.data.result);
                console.log(response.data.result);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handleCreating = async() => {
        try {
            const response = await axiosInstance.post('/manager/manage-supplier/create-new-supplier', selectedSupplier);
            console.log(response.data);
      
            setShowModal(false);
            setIsCreating(false);
            window.location.reload();

        } catch (error) {
            console.error('Error creating supplier:', error);
        }

    };
    const handleModalClose = () => setShowModal(false);
    const handleModalSave = () => {

        console.log('Updated supplier:', selectedSupplier);
        handleModalClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('Name:', name, 'Value:', value);
        setSelectedSupplier(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <div className='fw-bold fs-1 ms-5 mb-5'>Suppliers</div>
            <div className='d-flex ms-5 me-5 mb-3 Card-Container' style={{ height: '100px', gap: '1rem' }}>
                <div className='border rounded-3 p-2 w-25'>
                    <h4 className='fw-bold fs-4 fs-md-5'>Total Suppliers</h4>
                    <p>{intialData.length}</p>
                </div>
            </div>

            <div className='d-flex ms-5 me-5 Order-container' style={{ gap: '2rem' }}>
                {/* Filter buttons */}
                <FilterButton
                    label="Tất Cả Nhà Cung Cấp"
                    filterType="Country"
                    filterValue=""
                    currentFilter={filterList.Country}
                    onFilterChange={handleFilterChange}
                    count={intialData.length}
                />
                <FilterButton
                    label="Tất cả Nhà Cung Cấp Nhật Bản"
                    filterType="Country"
                    filterValue="Nhật Bản"
                    currentFilter={filterList.Country}
                    onFilterChange={handleFilterChange}
                    count={intialData.filter((item) => item.Country === 'Nhật Bản').length}
                />

            </div>
            <hr className="my-1 mb-4" />
            <div className='d-flex ms-5 me-5 flex-wrap ' style={{ gap: '2rem' }}>
                <FilterBar
                    initialTitle="All"
                    NavItems={["All", "Nhật Bản", "Việt Nam", "Trung Quốc"]}
                    handleFilterChange={handleFilterChange}
                    filter="Country"
                />
                <DropdownButton title={'CREATE NEW SUPPLIER'} variant="success" className='do-not-show' onClick={handleCreate}></DropdownButton>
                <div className="d-flex ms-auto search-container" style={{ flexGrow: 0.125 }}>
                    <Form className="d-flex w-100 flex-row search-bar">
                        <FormControl
                            type="search"
                            placeholder="Find Supplier"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="me-1"
                            aria-label="Search"
                        />
                    </Form>
                </div>
            </div>

            <TableGen
                data={filteredData}
                headers={headers}
                fieldMapping={fieldMapping}
                hoveredRow={hoveredRow}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                whatRole={whatRole}
                isAddress={isAddress}
                isActive={isActive}
                setIsActive={setIsActive}
                handleRowAction={handleRowAction}
                showModal={setShowModal}
                isSpecial={true}
            />


            { showModal && (
                <Modal show={showModal} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{!isCreating ? 'View' : 'Create New Supplier'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formSupplierName">
                                <Form.Label>Supplier Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="SupplierName"
                                    value={selectedSupplier?.SupplierName || ''} // Make sure to access the individual field
                                    onChange={handleInputChange}
                                    readOnly={!isCreating} // Allow input if creating
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddress" className="mt-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Address"
                                    value={selectedSupplier?.Address || ''}
                                    onChange={handleInputChange}
                                    readOnly={!isCreating}
                                >
                                 
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formCountry" className="mt-3">
                                <Form.Label>Country</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Country"
                                    value={selectedSupplier?.Country || ''}
                                    onChange={handleInputChange}
                                    readOnly={!isCreating}
                                >
                                    <option value="Nhật Bản">Nhật Bản</option>
                                    <option value="Việt Nam">Việt Nam</option>
                                    <option value="Trung Quốc">Trung Quốc</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formPhoneNumber" className="mt-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="PhoneNumber"
                                    value={selectedSupplier?.PhoneNumber || ''}
                                    onChange={handleInputChange}
                                    readOnly={!isCreating}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {!isCreating ? (
                            <>
                                <Button variant="secondary" onClick={handleModalClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleModalSave}>
                                    Save Changes
                                </Button>
                            </>
                        ) : (
                            <Button variant="success" onClick={handleCreating}>
                                Create
                            </Button>
                        )}
                    </Modal.Footer>
                </Modal>
            )}

        </div>
    );
}
