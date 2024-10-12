import { Container, Modal, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { HiLink } from "react-icons/hi";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../../Css/Modal.css";
import axiosInstance from "../../Utils/axiosJS";

export default function ConsignDetailModal({ actions, setactions, consignID }) {
    const KoiStatusMap = {
        0: "Out of Stock",
        1: "Imported",
        2: "F1",
        3: "VietNam",
        4: "Consign",
    };  
    const statusMap = {
        1: 'Deposit Requests',
        2: 'Koi Checks',
        3: 'Price Agreements',
        4: 'Fish Deliveries',
        5: 'Fish Sales'
    };
    
    const handleClose = () => {
        // Reset modal state when closing
        setModalData(null);
        setactions(false);
    };

    const savedToClipboard = (type) => {
        if (type === "user") {
            navigator.clipboard.writeText(modalData?.user?._id || "Not Available");
        } else if (type === "certificate") {
            navigator.clipboard.writeText(modalData?.koi?.CertificateID || "Not Available");
        }
    };
    const [updatedInfo, setUpdatedInfo] = useState(
        {
            name : "", // User
            address: "", // User
            phone_number: "", // User
            PositionCare : "", // Consign
            Method: "", // Consign
            CategoryID: "4",// Koi
            KoiName: "", // Koi
            Age: 0,// Koi
            Origin: "",// Koi
            Gender : "",// Koi
            Size: 0,// Koi
            Breed: "",// Koi
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
    const [isImageLarge, setIsImageLarge] = useState(false);
    const toggleImageSize = () => {
        setIsImageLarge(!isImageLarge);
    };

    const [modalData, setModalData] = useState(null);
    const [formData, setFormData] = useState(null); // New state to track form data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(`manager/manage-ki-gui/${consignID}`);
                const { user, consign, koi } = res.data.result;
                setModalData({ user, consign, koi });
                setFormData({ user, consign, koi }); // Initialize form data with the fetched data
            } catch (error) {
                console.log(error);
            }
        };

        if (consignID && actions) { 
            fetchData();
        }
    }, [consignID, actions]);

    const handleFormChange = (field, section, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleSubmit = () => {
        
        console.log("Form Changes: ", formData);

    };

    if (!modalData) {
        return null; 
    }

    return (
        <Modal show={actions} onHide={handleClose} centered dialogClassName="modal-50w">
            <Modal.Header className="bg-light">
                <Row className="vw-100">
                    <Col md={4}><Modal.Title>Customer Details</Modal.Title></Col>
                    <Col md={4}><Modal.Title>Consign Details</Modal.Title></Col>
                    <Col md={4}><Modal.Title>Fish Details</Modal.Title></Col>
                </Row>
            </Modal.Header>

            <Modal.Body>
                <Row>
                    {/* Customer Details */}
                    <Col md={4}>
                        <div className="d-flex align-items-center justify-content-between profile-row">
                            <Image src="https://via.placeholder.com/80" roundedCircle className="profile-avatar" />
                            <div className="d-flex flex-column align-items-end">
                                <h5>{modalData?.user?.name || "Not Available"}</h5>
                                <span className="text-muted">{modalData?.user?.email || "Not Available"}</span>
                                <div className="user-id-container mt-2" onClick={() => savedToClipboard("user")}>
                                    <HiLink />
                                    <span className="ms-1 fw-bold">Copy User ID</span>
                                </div>
                            </div>
                        </div>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={formData?.user?.name || "Not Available"} 
                                    onChange={(e) => handleFormChange("name", "user", e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={formData?.user?.address || "Not Available"} 
                                    onChange={(e) => handleFormChange("address", "user", e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={formData?.user?.phone_number || "Not Available"} 
                                    onChange={(e) => handleFormChange("phone_number", "user", e.target.value)} 
                                />
                            </Form.Group>
                        </Form>
                    </Col>

                    {/* Consign Details */}
                    <Col md={4}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Consign Method</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={formData?.consign?.Method || "Not Available"} 
                                    onChange={(e) => handleFormChange("Method", "consign", e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Status</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={statusMap[formData?.consign?.Status] || "Not Available"} 
                                    onChange={(e) => handleFormChange("Status", "consign", e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Position Care</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={formData?.consign?.PositionCare || "Not Available"} 
                                    onChange={(e) => handleFormChange("PositionCare", "consign", e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Shipped Date</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={formData?.consign?.ShippedDate || "Not Available"} 
                                    onChange={(e) => handleFormChange("ShippedDate", "consign", e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Receipt Date</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={formData?.consign?.ReceiptDate || "Not Available"} 
                                    onChange={(e) => handleFormChange("ReceiptDate", "consign", e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    as='textarea' 
                                    type="text" 
                                    value={formData?.consign?.Description || "Not Available"} 
                                    onChange={(e) => handleFormChange("Description", "consign", e.target.value)} 
                                />
                            </Form.Group>
                        </Form>
                    </Col>

                    {/* Fish Details */}
                    <Col md={4}>
                        <div className="d-flex align-items-center justify-content-between profile-row">
                            <Image
                                src={modalData?.koi?.Image || "https://via.placeholder.com/150"}
                                className={isImageLarge ? "w-50 mb-3 " : "w-25 mb-3 "}
                                onClick={toggleImageSize}
                                style={{ cursor: "pointer" }}
                                alt="Koi Fish"
                            />
                            <div className="d-flex flex-column align-items-end">
                                <h5>{modalData?.koi?.KoiName || "Not Available"}</h5>
                                <span className="text-muted">{modalData?.user?.email || "Not Available"}</span>
                                <div className="user-id-container mt-2" onClick={() => savedToClipboard("certificate")}>
                                    <HiLink />
                                    <span className="ms-1 fw-bold">Copy Certificate ID</span>
                                </div>
                            </div>
                        </div>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Koi Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={formData?.koi?.KoiName || "Not Available"} 
                                    onChange={(e) => handleFormChange("KoiName", "koi", e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Koi Status</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={KoiStatusMap[formData?.koi?.Status] || "Not Available"} 
                                    onChange={(e) => handleFormChange("Status", "koi", e.target.value)} 
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>Submit Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}
