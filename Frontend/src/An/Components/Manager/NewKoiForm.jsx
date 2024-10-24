import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function NewKoiForm({ category, onCancel, onCreate }) {
    const [koiData, setKoiData] = useState({
        KoiName: '',
        Age: '',
        Origin: '',
        Breed: '',
        Size: '',
        Description: '',
        Image: null,  
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'Image') {
           
            setKoiData(prevState => ({ ...prevState, Image: files[0] }));
        } else {
            setKoiData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(category._id, koiData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Koi Name</Form.Label>
                <Form.Control
                    type="text"
                    name="KoiName"
                    value={koiData.KoiName}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type="text"
                    name="Age"
                    value={koiData.Age}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Origin</Form.Label>
                <Form.Control
                    type="text"
                    name="Origin"
                    value={koiData.Origin}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Breed</Form.Label>
                <Form.Select
                    name="Breed"
                    value={koiData.Breed}
                    onChange={handleChange}
                >
                    <option value="">Select Breed</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Japan">Japan</option>
                    <option value="F1">F1</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Size (cm)</Form.Label>
                <Form.Control
                    type="number"
                    name="Size"
                    value={koiData.Size}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="file"
                    name="Image"
                    onChange={handleChange}  
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="Description"
                    value={koiData.Description}
                    onChange={handleChange}
                />
            </Form.Group>
            <div className='d-flex justify-content-between align-content-between'>
                <Button variant="primary" type="submit">Create Koi</Button>
                <Button variant="secondary" onClick={onCancel}>Cancel</Button>
            </div>
        </Form>
    );
}

export default NewKoiForm;
