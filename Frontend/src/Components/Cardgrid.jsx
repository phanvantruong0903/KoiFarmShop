import PropTypes from "prop-types"; // Import PropTypes
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
    fontSize: "15px",
    fontWeight: "400",
  };

  const boldTextStyle = {
    fontWeight: "bold",
    fontSize: "20px",
  };
  const handleOrderClick = (card) => {
    navigate("/order", { state: { selectedItem: card } }); // Pass the card as state
  };
  const cardCount = cardData.length; // Total number of koi
  const cards = cardData.map((card) => (
    <Col key={card._id} md={3} className="mb-4">
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={card.Image}
          style={imgStyle}
          onClick={() => handleOrderClick(card)}
        />
        <Card.Body>
          <Card.Title style={titleStyle}>{card.CategoryName}</Card.Title>
          <Card.Text style={textStyle}>
            <span style={boldTextStyle}>Koi Name:</span> {card.KoiName || "N/A"}
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

          {/* Status Rendering */}
          {card.Status === 4 && (
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Trạng thái:</span> Cá Ký Gửi
            </Card.Text>
          )}
          {card.Status === 1 && (
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Trạng thái:</span> Nhập Khẩu Nhật
            </Card.Text>
          )}
          {card.Status === 2 && (
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Trạng thái:</span> F1
            </Card.Text>
          )}
          {card.Status === 3 && (
            <Card.Text style={textStyle}>
              <span style={boldTextStyle}>Trạng thái:</span>Việt
            </Card.Text>
          )}
        </Card.Body>
        <Button
          style={{ color: "white", backgroundColor: "red", border: "none" }}
          onClick={() => handleOrderClick(card)}
        >
          Order
        </Button>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row>
        <Col>
          <h5>Tổng số cá koi: {cardCount}</h5>
        </Col>
      </Row>
      <Row>{cards}</Row>
    </Container>
  );
};

// Kiếm tra các dữ liệu props được truyền vào trong CardGrid
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
