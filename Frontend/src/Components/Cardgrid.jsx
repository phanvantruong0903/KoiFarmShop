import PropTypes from "prop-types"; // Import PropTypes
import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const CardGrid = ({ cardData }) => {
  const navigate = useNavigate();
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

  const cardCount = cardData.length;

  // Grouping logic for status 2 and 3 by CategoryID
  const groupedCards = {};
  const japanCards = [];
  const handleOrderingConsignKoi = (card) => {
    navigate("/order", { state: { selectedItem: card } }); // Pass the card as state
  };

  // Chuyển đến trang đặt hàng khi nhấn vào hình ảnh koi (IKoi Fish)
  const handleOrderingForIKoi = (card) => {
    navigate("/orderingikoi", { state: { selectedItem: card } }); // Pass the card as state
  };
  const handleOrderingForJapanKoi = (card) => {
    navigate("/orderingjapankoi", { state: { selectedItem: card } }); // Pass the card as state
  };
  cardData.map((card) => {
    if (card.Status === 2 || card.Status === 3) {
      const key = card.CategoryID; // Use CategoryID as the key
      if (!groupedCards[key]) {
        groupedCards[key] = { ...card, count: 1 }; // Initialize count
      } else {
        groupedCards[key].count += 1; // Increment count
      }
    } else if (card.Status === 1) {
      // Collect cards with Status 1 (Cá Nhật)
      japanCards.push(card);
    }
  });

  const cards = cardData.map((card) => {
    let statusText = "";

    // Chỉ hiển thị thẻ Card nếu Status là 4
    if (card.Status === 4) {
      statusText = "Cá ký gửi";

      return (
        <Col key={card._id} md={3} className="mb-4">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={card.Image} style={imgStyle} />
            <Card.Body>
              <Card.Title style={titleStyle}>{card.CategoryName}</Card.Title>
              <Card.Text style={textStyle}>
                <span style={boldTextStyle}>Koi Name:</span>{" "}
                {card.KoiName || "N/A"}
              </Card.Text>
              <Card.Text style={textStyle}>
                <span style={boldTextStyle}>Age:</span> {card.Age || "N/A"}
              </Card.Text>
              <Card.Text style={textStyle}>
                <span style={boldTextStyle}>Origin:</span>{" "}
                {card.Origin || "N/A"}
              </Card.Text>
              <Card.Text style={textStyle}>
                <span style={boldTextStyle}>Giới tính:</span>{" "}
                {card.Gender || "N/A"}
              </Card.Text>
              <Card.Text style={textStyle}>
                <span style={boldTextStyle}>Size:</span> {card.Size || "N/A"}
              </Card.Text>
              <Card.Text style={textStyle}>
                <span style={boldTextStyle}>Status:</span>{" "}
                {card.Status || "N/A"}
              </Card.Text>
              <Card.Text style={textStyle}>
                <span style={boldTextStyle}>Trạng thái:</span> {statusText}
              </Card.Text>
            </Card.Body>
            <Button onClick={() => handleOrderingConsignKoi(card)}>
              Chi Tiết
            </Button>
          </Card>
        </Col>
      );
    }

    return null; // Không hiển thị nếu không đạt điều kiện
  });

  // Render grouped cards for status 2 and 3
  const groupedCardComponents = Object.values(groupedCards).map(
    (groupedCard) => (
      <Col key={groupedCard.CategoryID} md={3} className="mb-4">
        <Card style={cardStyle}>
          <Card.Img variant="top" src={groupedCard.Image} style={imgStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>
              {groupedCard.CategoryName}
            </Card.Title>
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>KoiName:</span>{" "}
              {groupedCard.KoiName || "N/A"}
            </Card.Text>
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Số lượng:</span> {groupedCard.count}
            </Card.Text>
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Size:</span> {"15cm-75cm"}
            </Card.Text>
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Status:</span>{" "}
              {groupedCard.Status || "N/A"}
            </Card.Text>
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Price:</span> {"19.000-850.000"}
            </Card.Text>
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Trạng thái:</span>
            </Card.Text>
          </Card.Body>
          <Button onClick={() => handleOrderingForIKoi(groupedCard)}>
            Chi Tiết
          </Button>
        </Card>
      </Col>
    )
  );

  // Render Cá Nhật cards
  const japanCardComponents = japanCards.map((card) => (
    <Col key={card._id} md={3} className="mb-4">
      <Card style={cardStyle}>
        <Card.Img variant="top" src={card.Image} style={imgStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>{card.CategoryName}</Card.Title>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>KoiName:</span> {card.KoiName || "N/A"}
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
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Status:</span> {card.Status || "N/A"}
          </Card.Text>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Trạng thái:</span>
          </Card.Text>
        </Card.Body>
        <Button onClick={() => handleOrderingForIKoi(card)}>Chi Tiết</Button>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row>
        {cardCount > 0 && (
          <>
            <h5>Tổng số cá koi: {cardCount}</h5>
          </>
        )}
      </Row>
      {cards.length > 0 && (
        <>
          <h1>Cá Ký Gửi</h1>
          <Row>{cards}</Row>
        </>
      )}

      {groupedCardComponents.length > 0 && (
        <>
          <hr />
          <h1>Cá IKoi</h1>
          <Row>{groupedCardComponents}</Row>
        </>
      )}

      {japanCardComponents.length > 0 && (
        <>
          <hr />
          <h1>Cá Nhật</h1>
          <Row>{japanCardComponents}</Row>
        </>
      )}
    </Container>
  );
};

// Kiểm tra các dữ liệu props được truyền vào trong CardGrid
CardGrid.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      CategoryID: PropTypes.string.isRequired,
      KoiName: PropTypes.string.isRequired,
      Age: PropTypes.number.isRequired,
      Origin: PropTypes.string.isRequired,
      Gender: PropTypes.string.isRequired,
      Size: PropTypes.number.isRequired,
      Price: PropTypes.number.isRequired, // Thêm trường Price
      Breed: PropTypes.string.isRequired,
      Description: PropTypes.string,
      DailyFoodAmount: PropTypes.number.isRequired,
      FilteringRatio: PropTypes.number.isRequired,
      Image: PropTypes.string.isRequired,
      Video: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardGrid;
