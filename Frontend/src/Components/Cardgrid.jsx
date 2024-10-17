import PropTypes from "prop-types";
import React, { useState } from "react";
import { Card, Row, Col, Typography, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const CardGrid = ({ cardData }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("kygui"); // State for category switch

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Group Koi fish by CategoryID and collect additional details
  const getUniqueCategories = (status) => {
    const categoryMap = {};
    cardData.forEach((card) => {
      if (card.Status === status) {
        if (!categoryMap[card.CategoryID]) {
          categoryMap[card.CategoryID] = {
            count: 0,
            KoiName: card.KoiName,
            Image: card.Image,
            Price: card.Price,
            Age: card.Age,
            Description: card.Description,
            Origin: card.Origin,
            Gender: card.Gender,
            CategoryID: card.CategoryID,
          };
        }
        categoryMap[card.CategoryID].count++;
      }
    });
    return categoryMap;
  };

  const ikoiCategories = {
    ...getUniqueCategories(2),
    ...getUniqueCategories(3),
  }; // Combine for Cá Ikoi
  const nhatCategories = getUniqueCategories(1); // For Cá Koi Nhật

  return (
    <div className="container" style={{ padding: "0" }}>
      <Divider
        orientation="left"
        style={{ margin: "0", marginBottom: "40px", cursor: "pointer" }}
      >
        <Text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {category === "kygui"
            ? "Cá Ký Gửi"
            : category === "ikoi"
            ? "Cá Ikoi"
            : "Cá Koi Nhật"}
        </Text>
      </Divider>
      <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
        <Col>
          <Text
            style={{ cursor: "pointer", marginRight: "20px" }}
            onClick={() => handleCategoryChange("kygui")}
          >
            Cá Ký Gửi
          </Text>
        </Col>
        <Col>
          <Text
            style={{ cursor: "pointer", marginRight: "20px" }}
            onClick={() => handleCategoryChange("ikoi")}
          >
            Cá Ikoi
          </Text>
        </Col>
        <Col>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => handleCategoryChange("nhat")}
          >
            Cá Koi Nhật
          </Text>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        {category === "kygui" &&
          cardData
            .filter((card) => card.Status === 4)
            .map((card) => (
              <Col
                key={card._id}
                xs={12}
                sm={8}
                md={4}
                lg={4}
                xl={4}
                className="mb-4"
              >
                <Card
                  hoverable
                  style={{ width: "100%", borderRadius: "8px", height: "100%" }}
                  cover={
                    <img
                      alt={card.KoiName}
                      src={card.Image}
                      style={{
                        height: "250px",
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                  }
                  onClick={() =>
                    navigate("/order", { state: { selectedItem: card } })
                  } // Pass the card as state
                >
                  <Text strong>{card.KoiName || "N/A"}</Text>
                  <br />
                  <Text strong style={{ color: "#FF5722" }}>
                    {card.Price
                      ? `${card.Price.toLocaleString()} VND`
                      : "Liên Hệ"}
                  </Text>
                </Card>
              </Col>
            ))}

        {category === "ikoi" &&
          Object.entries(ikoiCategories).map(
            ([
              categoryId,
              {
                count,
                KoiName,
                Image,
                Price,
                Age,
                Origin,
                Gender,
                Description,
                CategoryID,
              },
            ]) => (
              <Col
                key={categoryId}
                xs={12}
                sm={8}
                md={4}
                lg={4}
                xl={4}
                className="mb-4"
              >
                <Card
                  hoverable
                  style={{ width: "100%", borderRadius: "8px", height: "100%" }}
                  cover={
                    <img
                      alt={KoiName}
                      src={Image}
                      style={{
                        height: "250px",
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                  }
                  onClick={() =>
                    navigate("/orderingikoi", {
                      state: {
                        selectedItem: {
                          KoiName,
                          Price,
                          Image,
                          Age,
                          Origin,
                          Gender,
                          Description,
                          CategoryID,
                        },
                      },
                    })
                  } // Pass the category details
                >
                  <Text strong>{`${KoiName || "N/A"}`}</Text>
                  <br />
                  <Text strong style={{ color: "#FF5722" }}>
                    {Price ? `${Price.toLocaleString()} VND` : "Liên Hệ"}
                  </Text>
                  <br />
                  <Text>Số lượng :{`${count} Koi`}</Text>
                </Card>
              </Col>
            )
          )}

        {category === "nhat" &&
          Object.entries(nhatCategories).map(
            ([categoryId, { count, KoiName, Image, Price }]) => (
              <Col
                key={categoryId}
                xs={12}
                sm={8}
                md={4}
                lg={4}
                xl={4}
                className="mb-4"
              >
                <Card
                  hoverable
                  style={{ width: "100%", borderRadius: "8px", height: "100%" }}
                  cover={
                    <img
                      alt={KoiName}
                      src={Image}
                      style={{
                        height: "250px",
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                  }
                  onClick={() =>
                    navigate("/orderingjapankoi", {
                      state: { selectedItem: { KoiName, Price, Image } },
                    })
                  } // Pass the category details
                >
                  <Text strong>{`${KoiName || "N/A"}`}</Text>
                  <br />
                  <Text strong style={{ color: "#FF5722" }}>
                    {Price ? `${Price.toLocaleString()} VND` : "Liên Hệ"}
                  </Text>
                  <br />
                  <Text>Số lượng:{`${count} Koi`}</Text>
                </Card>
              </Col>
            )
          )}
      </Row>
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
      Price: PropTypes.number,
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
