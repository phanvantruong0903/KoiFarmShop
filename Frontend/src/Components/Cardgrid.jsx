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

  const cardCount = cardData.length; // Số lượng cá koi
  const cards = cardData.map((card) => (
    <Col key={card._id} md={3} className="mb-4">
      {" "}
      {/* Sử dụng _id làm key */}
      <Card style={cardStyle}>
        <Card.Img variant="top" src={card.Image} style={imgStyle} />{" "}
        {/* Đảm bảo rằng card.Image tồn tại */}
        <Card.Body>
          <Card.Title style={titleStyle}>{card.CategoryName}</Card.Title>{" "}
          {/* Thay đổi từ KoiName sang CategoryName */}
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>KoiName:</span> {card.KoiName || "N/A"}{" "}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Age:</span> {card.Age || "N/A"}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Origin:</span> {card.Origin || "N/A"}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Giới tính:</span> {card.Gender || "N/A"}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Size:</span> {card.Size || "N/A"}
          </Card.Text>
        </Card.Body>
        <Button
          href="/chitietcakoi"
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
      <Row>
        <Col>
          <h5>Tổng số cá koi: {cardCount}</h5> {/* Hiển thị số lượng cá koi */}
        </Col>
      </Row>
      <Row>{cards}</Row>
    </Container>
  );
};

export default CardGrid;
