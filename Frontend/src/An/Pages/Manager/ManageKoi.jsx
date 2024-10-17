import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useManageKoi } from '../../Hooks/useManageKoi';
import './ManageKoi.css';
import NewKoiForm from '../../Components/Manager/NewKoiForm';
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
import { TbLayoutBottombarExpandFilled } from "react-icons/tb";
export default function ManageKoi() {
    const[isHovered, setIsHovered] = React.useState(false);

    const {
        result,
        categoryList,
        expandedCategories,
        isEditing,
        selectedCategories,
        toggleCategory,
        handleEditToggle,
        handleDisableEnable,
        handleCancelEdit,
        handleInputChange,
        handleUpdate,
        handleCategorySelection,
        filteredCategories,
        showCreateForm,
        setShowCreateForm,
        handleNewKoiCreation
    } = useManageKoi(); // Using the custom hook
    const KoiStatusMap = {
        0: 'Out of Order',
        1: 'Imported',
        2: 'F1',
        3: 'Vietnam',
        4: 'Consigned',

    };
    return (
        <Container fluid className="d-flex flex-column">
            <h1>Manage Koi</h1>


            <Form.Group className="mb-3">
                <Form.Label>Select Categories to Display</Form.Label>
                <Row>
                    {categoryList.map(category => (
                        <Col xs={12} md={6} lg={3} key={category._id}>
                            <Form.Check
                                type="checkbox"
                                label={category.CategoryName}
                                onChange={() => handleCategorySelection(category._id)}
                                checked={selectedCategories.includes(category._id)}
                            />
                        </Col>
                    ))}
                </Row>
            </Form.Group>

            {/* Displaying filtered categories */}
            {filteredCategories.map((category) => (
                <Row key={category._id} className="mb-3">
                    <Col xs={12}>
                        <Card className="w-100">
                            <Card.Header>
                                {category.CategoryName}
                                <Button
                                    variant="link"
                                    onClick={() => toggleCategory(category._id)}
                                    className="float-end dropdown-toggle-btn"
                                >
                                    {expandedCategories[category._id] ? (
                                        <TbLayoutNavbarExpandFilled className="dropdown-indicator expand" />
                                    ) : (
                                        <TbLayoutBottombarExpandFilled className="dropdown-indicator" />
                                    )}
                                </Button>

                            </Card.Header>
                            <Card.Body className={`mt-3 my-special ${expandedCategories[category._id] ? 'expanded' : 'collapsing'}`}>
                                {expandedCategories[category._id] && (
                                    <div >
                                        <Row>
                                            {result.filter(koi => koi.CategoryID === category._id).map((koi) => (
                                                <Col xs={12} md={8} lg={3} sm={2} key={koi._id}>
                                                    <Card className="mb-3 " style={{ maxWidth: '460px' }}>
                                                        <Card.Img
                                                            variant="top"
                                                            src={koi.Image || 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}

                                                            className="img-fluid"
                                                            style={{ maxHeight: '200px' }}
                                                        />
                                                        <Card.Body>
                                                            <Form>
                                                                <Form.Group>
                                                                    <Form.Label>Koi Name</Form.Label>
                                                                    <Form.Control
                                                                        type="text"
                                                                        readOnly={!isEditing[koi._id]}
                                                                        value={koi.KoiName}
                                                                        onChange={(e) => handleInputChange(koi._id, 'KoiName', e.target.value)}
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group>
                                                                    <Form.Label>Status</Form.Label>
                                                                    <Form.Control
                                                                        type='text'
                                                                        readOnly
                                                                        value={KoiStatusMap[koi.Status]}
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group>
                                                                    <Form.Label>Age</Form.Label>
                                                                    <Form.Control
                                                                        type="text"
                                                                        readOnly={!isEditing[koi._id]}
                                                                        value={koi.Age}
                                                                        onChange={(e) => handleInputChange(koi._id, 'Age', e.target.value)}
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group>
                                                                    <Form.Label>Origin</Form.Label>
                                                                    <Form.Control
                                                                        type="text"
                                                                        readOnly={!isEditing[koi._id]}
                                                                        value={koi.Origin}
                                                                        onChange={(e) => handleInputChange(koi._id, 'Origin', e.target.value)}
                                                                    />
                                                                </Form.Group>
                                                                <Form.Label>Breed</Form.Label>
                                                                <Form.Select
                                                                    value={koi.Breed}
                                                                    onChange={(e) => handleInputChange(koi._id, 'Breed', e.target.value)}
                                                                    disabled={!isEditing[koi._id]}
                                                                >
                                                                    <option value={koi.Breed}>{koi.Breed}</option>
                                                                    {isEditing[koi._id] && (
                                                                        <>
                                                                            {koi.Breed !== "Viet Nam" && <option value="Viet Nam">Viet Nam</option>}
                                                                            {koi.Breed !== "Japan" && <option value="Japan">Japan</option>}
                                                                            {koi.Breed !== "F1" && <option value="F1">F1</option>}
                                                                        </>
                                                                    )}
                                                                </Form.Select>
                                                                <Form.Group>
                                                                    <Form.Label>Size (cm)</Form.Label>
                                                                    <Form.Control
                                                                        type="number"
                                                                        readOnly={!isEditing[koi._id]}
                                                                        value={koi.Size}
                                                                        onChange={(e) => handleInputChange(koi._id, 'Size', e.target.value)}
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group>
                                                                    <Form.Label>Description</Form.Label>
                                                                    <Form.Control
                                                                        as="textarea"
                                                                        rows={3}
                                                                        readOnly={!isEditing[koi._id]}
                                                                        value={koi.Description}
                                                                        onChange={(e) => handleInputChange(koi._id, 'Description', e.target.value)}
                                                                    />
                                                                </Form.Group>
                                                            </Form>
                                                            <div className="d-flex justify-content-between mt-3">
                                                                <Button variant="warning" onClick={() => handleEditToggle(koi._id)}>
                                                                    {isEditing[koi._id] ? 'Cancel' : 'Edit'}
                                                                </Button>
                                                                {isEditing[koi._id] ? (
                                                                    <>
                                                                        <Button variant="primary" onClick={() => handleUpdate(koi._id)}>
                                                                            Update
                                                                        </Button>
                                                                        <Button variant="secondary" onClick={() => handleCancelEdit(koi._id)}>
                                                                            Cancel Edit
                                                                        </Button>
                                                                    </>
                                                                ) : (
                                                                    <Button variant="danger" onClick={() => handleDisableEnable(koi._id)}>
                                                                        Disable
                                                                    </Button>
                                                                )
                                                                }

                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}

                                            <Col xs={12} md={8} lg={2}>
                                                {showCreateForm ? (
                                                    <Card className="mb-2 " >
                                                        <Card.Img
                                                            variant="top"
                                                            src={'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}
                                                            alt={'New Koi'}
                                                            className="img-fluid"
                                                            style={{ maxHeight: '200px' }}
                                                        />
                                                        <Card.Body>
                                                            {/* New Koi creation form */}
                                                            <NewKoiForm
                                                                category={category}
                                                                onCancel={() => setShowCreateForm(false)}
                                                                onCreate={handleNewKoiCreation}
                                                            />
                                                        </Card.Body>
                                                    </Card>
                                                ) : (


                                                    <Card
                                                        className="mb-2 add-new-card d-flex justify-content-center align-items-center green-owner"
                                                        style={{ height: '98%', minHeight: '500px' }}
                                                        onClick={() => setShowCreateForm(true)}
                                                        onMouseEnter={() => setIsHovered(true)}
                                                        onMouseLeave={() => setIsHovered(false)}
                                                   
                                                    >
                                                        
                                                            <span className="add-new-plus" style={isHovered ? { color: "white" } : {}}>+</span>
                                                       
                                                    </Card>
                                                )}
                                            </Col>

                                        </Row>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}
