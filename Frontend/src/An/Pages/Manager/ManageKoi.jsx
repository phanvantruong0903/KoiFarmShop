import React, { useState } from 'react';
import axiosInstance from '../../Utils/axiosJS';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ManageKoi.css'; // Assuming you add custom styles here

export default function ManageKoi() {
    const [result, setResult] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [expandedCategories, setExpandedCategories] = useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('manager/manage-koi/get-all');
                const { result, cateogryList } = response.data;
                setResult(result);
                setCategoryList(cateogryList);
                console.log(result);
                console.log(categoryList);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prevState => ({
            ...prevState,
            [categoryId]: !prevState[categoryId]
        }));
    };

    return (
        <Container fluid className="d-flex flex-column">
            <h1>Manage Koi</h1>
            {categoryList.map((category) => (
                <Row key={category._id} className="mb-3">
                    <Col xs={12}>
                        <Card className="w-100">
                            <Card.Header>
                                {category.CategoryName}
                                <Button 
                                    variant="link"
                                    onClick={() => toggleCategory(category._id)}
                                    className="float-end"
                                >
                                    {expandedCategories[category._id] ? 'Collapse' : 'Expand'}
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                {expandedCategories[category._id] && (
                                    <div className="mt-3">
                                        <Row>
                                            {result.filter(koi => koi.CategoryID === category._id).map((koi) => (
                                                <Col xs={12} md={8} lg={2} key={koi._id}>
                                                    <Card className="mb-3" >
                                                        <Card.Img 
                                                            variant="top" 
                                                            src={koi.Image} 
                                                            alt={koi.KoiName}
                                                            className="img-fluid"
                                                            style={{ maxHeight: '200px' }}
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>{koi.KoiName}</Card.Title>
                                                            <Card.Text>
                                                                Age: {koi.Age}, Origin: {koi.Origin}
                                                            </Card.Text>
                                                            <Card.Text>
                                                                Breed: {koi.Breed}, Size: {koi.Size} cm
                                                            </Card.Text>
                                                            <Card.Text>
                                                                Description: {koi.Description}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}

                                            {}
                                            <Col xs={12} md={8} lg={2}>
                                                <Card 
                                                    className="mb-3 add-new-card" 
                                                    style={{minHeight:'500px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                                >
                                                    <div className="add-new-card-content">
                                                        <span className="add-new-plus">+</span>
                                                    </div>
                                                </Card>
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
