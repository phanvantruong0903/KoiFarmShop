import { useLocation } from "react-router-dom";
import { Table, Typography, Image, Button } from "antd";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export default function ShoppingCart() {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely destructure data from location.state
  const { data } = location.state || {};
  const { result } = data || {};
  const koiList = result?.koiList || [];
  const orderDetail = result?.orderDetail || [];
  // Create a mapping of Koi IDs to their details
  const koiMap = koiList.reduce((acc, koi) => {
    acc[koi._id] = koi; // Map Koi ID to Koi object
    return acc;
  }, {});

  // Check if the user has already filled the form
  const isFormFilled = data && data.result;

  useEffect(() => {
    // Navigate only if data is null and form not filled
    if (!isFormFilled) {
      navigate("/formfillinformation", {
        state: { a: data },
      });
    }
  }, [isFormFilled, data, navigate]);

  // Prepare data for the table
  const tableData = (orderDetail.Items || []).map((item) => {
    const koi = koiMap[item.KoiID];
    return {
      key: item.KoiID,
      koiName: koi ? koi.KoiName : "Unknown Koi",
      price:
        koi && koi.Price
          ? `${koi.Price.toLocaleString()} VND`
          : "Price Not Available",
      quantity: item.Quantity,
      image: koi ? koi.Image : null,
    };
  });

  const columns = [
    {
      title: "Koi Name",
      dataIndex: "koiName",
      key: "koiName",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? <Image width={100} src={image} alt="Koi Image" /> : "No Image",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  const totalPrice = orderDetail.TotalPrice
    ? orderDetail.TotalPrice.toLocaleString()
    : "N/A";

  const handlePayment = () => {
    navigate("/paymentmethod", {
      state: { totalPrice },
    });
  };

  return (
    <>
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <Navbar />
        <div style={{ paddingTop: "150px" }}>
          <Title level={2}>Koi Order Details</Title>

          {tableData.length > 0 ? (
            <Table
              dataSource={tableData}
              columns={columns}
              pagination={false}
              bordered
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={2}>
                      <Text strong>Total Price:</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>
                      {orderDetail.TotalPrice
                        ? `${orderDetail.TotalPrice.toLocaleString()} VND`
                        : "N/A"}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          ) : (
            <Text>No Koi items in this order.</Text>
          )}

          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <Button type="primary" style={{ flex: 1 }} onClick={handlePayment}>
              Thanh Toán
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
