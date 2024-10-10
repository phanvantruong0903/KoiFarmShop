import { Container, Modal, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { HiLink } from "react-icons/hi";
import { Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../../Css/Modal.css";

export default function ViewProfile({ actions, setactions }) {
    const handleClose = () => setactions(false);
    const savedToClipboard = () => {
        navigator.clipboard.writeText("123456");
    };

    return (
        <Modal show={actions} onHide={handleClose} centered dialogClassName="modal-30w">
            <Modal.Header className="bg-light">
                <Modal.Title>Profile</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               
                <div className="d-flex align-items-center justify-content-between profile-row">
           
                    <Image src="https://via.placeholder.com/80" roundedCircle className="profile-avatar" />

                    
                    <div className="d-flex flex-column align-items-end">
                        <h5>Amélie Laurent</h5>
                        <span className="text-muted">amelie@untitledui.com</span>
                        <div className="user-id-container mt-2" onClick={savedToClipboard}>
                            <HiLink />
                            <span className="ms-1 fw-bold">Copy User ID</span>
                        </div>
                    </div>
                </div>

                <Form>
                    {/* Name */}
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value="Amélie Laurent" readOnly />
                    </Form.Group>

                    {/* Role */}
                    <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select aria-label="Select role">
                            <option value="">Select a role</option>
                            <option value="manager">Manager</option>
                            <option value="customer">Customer</option>
                            <option value="staff">Staff</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Date of Birth */}
                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Select date"
                            defaultValue="1990-01-01"
                        />
                    </Form.Group>

                    {/* Email */}
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value="amelie@untitledui.com" readOnly />
                    </Form.Group>

                    {/* User ID */}
                    <Form.Group className="mb-3">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="text" value="123456" readOnly />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="primary" type="submit">
                        Submit Changes
                    </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
