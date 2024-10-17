import PropTypes from "prop-types";
import React, { useState } from "react";
import { Card, Row, Col, Typography, Divider, Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const CardGrid = ({ cardData }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 30; // Số lượng thẻ trên mỗi trang

  const handleCardClick = (card) => {
    navigate("/order", { state: { selectedItem: card } });
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentCards = cardData.filter(card => card.Status === 4).slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const cards = currentCards.map((card) => (
    <Col key={card._id} xs={12} sm={8} md={4} lg={4} xl={4} className="mb-4">
      <Card
        hoverable
        style={{ width: "100%", borderRadius: "8px", height: '100%' }}
        cover={
          <img
            alt={card.KoiName}
            src={card.Image}
            style={{ height: "250px", objectFit: "cover", borderRadius: "8px 8px 0 0" }}
          />
        }
        onClick={() => handleCardClick(card)}
      >
        <Text
          strong
          style={{
            display: 'block',
            height: '40px',
            lineHeight: '20px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            overflowWrap: 'break-word',
            marginBottom: '50px',
            fontSize: '14px',
          }}
        >
          {card.KoiName || "N/A"}
        </Text>
        <Text
          strong
          style={{
            fontSize: '15px',
            color: '#FF5722',
            marginTop: '200px',
          }}
        >
          {card.Price ? `${card.Price.toLocaleString()} VND` : "Liên Hệ"}
        </Text>
      </Card>
    </Col>
  ));

  return (
    <div className="container" style={{ padding: '0' }}>
      <Divider orientation="left" style={{ margin: '0', marginBottom: '40px' }}>
        <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>Cá Koi</Text>
      </Divider>
      {cards.length > 0 ? (
        <>
          <Row gutter={[16, 16]} style={{ marginLeft: '70px', marginTop: '0' }}>
            {cards}
          </Row>
          <Pagination 
  current={currentPage}
  pageSize={pageSize}
  total={cardData.filter(card => card.Status === 4).length}
  onChange={handlePageChange}
  style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '16px' }} // Center pagination and adjust font size
  itemRender={(page, type) => {
    if (type === 'page') {
      return <a>{page}</a>; // Cách render tùy chỉnh cho nút trang
    }
    return <a>{type === 'prev' ? '«' : '»'}</a>; // Các nút trước và sau
  }}
  showSizeChanger={false}
/>
        </>
      ) : (
        <Row justify="center" style={{ marginTop: '50px' }}>
          <Text style={{ fontSize: '18px', color: '#999' }}>Chưa có cá koi nào!</Text>
        </Row>
      )}
    </div>
  );
};

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
      Price: PropTypes.number, // Change required to optional
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
