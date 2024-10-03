import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CardGrid = ({ cardData }) => {
  const cardStyle = {
    width: "100%",
    border: "2px solid gold",
  };

  const imgStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  };

  const titleStyle = {
    color: "red",
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const textStyle = {
    fontSize: "1rem",
  };

  const boldTextStyle = {
    fontWeight: "bold",
    color: "black",
  };

  const cards = cardData.map((card) => (
    <Col key={card.id} md={3} className="mb-4">
      <Card style={cardStyle}>
        <Card.Img variant="top" src={card.Image} style={imgStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>{card.KoiName}</Card.Title>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Giống:</span> {card.Breed}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Tuổi:</span> {card.Age}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Nguồn gốc:</span> {card.Origin}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Giới tính:</span> {card.Gender}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Kích thước:</span> {card.Size}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Mô tả:</span> {card.Description}
          </Card.Text>
        </Card.Body>
        <Button
          href="/"
          active
          style={{
            width: "100%",
            backgroundColor: "rgb(184, 0, 31)",
            border: "none",
            borderRadius: "0",
          }}
        >
          Chi tiết
        </Button>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row>{cards}</Row>
    </Container>
  );
};

export default CardGrid;
