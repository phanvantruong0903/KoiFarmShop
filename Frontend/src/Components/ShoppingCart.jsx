import { useLocation } from "react-router-dom";
import { Table, Typography, Image } from "antd";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const { Title, Text } = Typography;

const YourComponent = () => {
  const location = useLocation();

  // Safely destructure data from location.state
  const { data } = location.state || {};
  const { result } = data || {};
  const koiList = result?.koiList || [];
  const orderDetail = result?.orderDetail || {};

  // Create a mapping of Koi IDs to their details
  const koiMap = koiList.reduce((acc, koi) => {
    acc[koi._id] = koi; // Map Koi ID to Koi object
    return acc;
  }, {});

  // Prepare data for the table
  const tableData = orderDetail.Items.map((item) => {
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

  return (
    <div style={{ padding: "20px" }}>
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
      </div>

      <Footer />
    </div>
  );
};

export default YourComponent;
