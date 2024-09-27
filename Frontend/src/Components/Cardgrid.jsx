import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const CardGrid = () => {
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

  const cardData = [
    {
      id: 1,
      title: "Cá Koi Platinum Ogon Nhật Size Lớn",
      text: [
        { label: "Giới Tính", value: "Cái" },
        { label: "Năm sinh", value: "2019" },
        { label: "Kích thước", value: "60-68cm" },
        { label: "Giống", value: "Nhật Bản" },
        { label: "Nguồn gốc", value: "Nhập Khẩu" },
      ],
      imgSrc: "src/assets/koi-platinum-ogon.jpg",
    },
    {
      id: 2,
      title: "Cá Koi Yamabuki Ogon Nhật Size Lớn",
      text: [
        { label: "Giới Tính", value: "Cái" },
        { label: "Năm sinh", value: "2019" },
        { label: "Kích thước", value: "60-80cm" },
        { label: "Giống", value: "Nhật Bản" },
        { label: "Nguồn gốc", value: "Nhập Khẩu" },
      ],
      imgSrc: "src/assets/koi-yamabuki.png",
    },
    {
      id: 3,
      title: "Cá Koi Ochiba Shigure Nhật Size Lớn",
      text: [
        { label: "Giới Tính", value: "Cái" },
        { label: "Năm sinh", value: "2019" },
        { label: "Kích thước", value: "50-65cm" },
        { label: "Giống", value: "Nhật Bản" },
        { label: "Nguồn gốc", value: "Nhập Khẩu" },
      ],
      imgSrc: "src/assets/koi-ochiba.png",
    },
    {
      id: 4,
      title: "Cá Koi Kujaju Nhật Size Lớn",
      text: [
        { label: "Giới Tính", value: "Cái" },
        { label: "Năm sinh", value: "2019" },
        { label: "Kích thước", value: "60-80cm" },
        { label: "Giống", value: "Nhật Bản" },
        { label: "Nguồn gốc", value: "Nhập Khẩu" },
      ],
      imgSrc: "src/assets/koi-kujaju.png",
    },
    {
      id: 5,
      title: "Cá Koi Hariwake Nhật Size Lớn",
      text: [
        { label: "Giới Tính", value: "Cái" },
        { label: "Năm sinh", value: "2019" },
        { label: "Kích thước", value: "50-65cm" },
        { label: "Giống", value: "Nhật Bản" },
        { label: "Nguồn gốc", value: "Nhập Khẩu" },
      ],
      imgSrc: "src/assets/koi-hariwake.jpg",
    },
    {
      id: 6,
      title: "Cá Koi Goshiki Nhật Size Lớn",
      text: [
        { label: "Giới Tính", value: "Cái" },
        { label: "Năm sinh", value: "2019" },
        { label: "Kích thước", value: "55-80cm" },
        { label: "Giống", value: "Nhật Bản" },
        { label: "Nguồn gốc", value: "Nhập Khẩu" },
      ],
      imgSrc: "src/assets/koi-goshiki.jpg",
    },
    {
      id: 7,
      title: "Cá Koi Goromo Nhật Size Lớn",
      text: [
        { label: "Giới Tính", value: "Cái" },
        { label: "Năm sinh", value: "2019" },
        { label: "Kích thước", value: "55-80cm" },
        { label: "Giống", value: "Nhật Bản" },
        { label: "Nguồn gốc", value: "Nhập Khẩu" },
      ],
      imgSrc: "src/assets/koi-goromo.jpg",
    },
    {
      id: 8,
      title: "Cá Koi Shusui Nhật Size Lớn",
      text: [
        { label: "Giới Tính", value: "Cái" },
        { label: "Năm sinh", value: "2019" },
        { label: "Kích thước", value: "50-73cm" },
        { label: "Giống", value: "Nhật Bản" },
        { label: "Nguồn gốc", value: "Nhập Khẩu" },
      ],
      imgSrc: "src/assets/koi-shusui.jpg",
    },
  ];

  const cards = cardData.map((card) => (
    <Col key={card.id} md={3} className="mb-4">
      <Card style={cardStyle}>
        <Card.Img variant="top" src={card.imgSrc} style={imgStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>{card.title}</Card.Title>
          {card.text.map((item, index) => (
            <Card.Text key={index} style={textStyle}>
              <span style={boldTextStyle}>{item.label}:</span> {item.value}
            </Card.Text>
          ))}
        </Card.Body>
        <div>
          <Button
            href="/"
            active
            style={{
              width: "100%",
              backgroundColor: "rgb(184, 0, 31)",
              border: "none",
              borderRadius: "0",
              marginLeft: "0px",
            }}
          >
            Chi tiết
          </Button>
        </div>
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
