import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";
import { Table, Spin, Empty } from "antd"; // Import Ant Design components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export default function ShoppingCart() {
  const orderDetail = useOrder();
  const [koiList, setKoiList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      if (orderDetail && orderDetail.orderId) {
        try {
          const response = await axios.get(
            `http://localhost:4000/order/detail/${orderDetail.orderId}`
          );

          if (response.status === 200) {
            const { koiList } = response.data.result;
            const { Items } = response.data.result.result;
            setTotalPrice(response.data.result.result.TotalPrice);
            localStorage.setItem(
              "totalPrice",
              response.data.result.result.TotalPrice.toString()
            );
            if (!koiList || !Items) {
              setError("Invalid data received from the API.");
              return;
            }

            const koiMap = new Map(koiList.map((koi) => [koi._id, koi]));
            const updatedKoiList = Items.map((item) => {
              const koi = koiMap.get(item.KoiID);
              return koi ? { ...koi, quantity: item.Quantity } : null;
            }).filter((koi) => koi !== null);

            setKoiList(updatedKoiList);
            console.log(
              "Total Price from API:",
              response.data.result.result.TotalPrice
            );
            // Store order details in localStorage
            localStorage.setItem("koiList", JSON.stringify(updatedKoiList));
          } else {
            setError(`API request failed with status: ${response.status}`);
          }
        } catch (error) {
          setError("Error fetching order details: " + error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    // Retrieve order details from localStorage
    const storedKoiList = localStorage.getItem("koiList");
    const storedTotalPrice = localStorage.getItem("totalPrice");

    if (storedKoiList && storedTotalPrice) {
      setKoiList(JSON.parse(storedKoiList));
      setTotalPrice(parseFloat(storedTotalPrice)); // Chuyển đổi từ chuỗi sang số thực
    } else {
      fetchOrderDetails();
    }
  }, [orderDetail]);

  const columns = [
    {
      title: "Koi Name",
      dataIndex: "KoiName",
      key: "KoiName",
    },
    {
      title: "Image",
      dataIndex: "Image",
      key: "Image",
      render: (image) => (
        <img src={image} alt="Koi" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      render: (price) => price.toLocaleString(),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  return (
    <>
      <div style={{ padding: "20px", width: "100%" }}>
        <h2>Koi Order Details</h2>
        {loading && <Spin size="large" />}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {koiList.length > 0 ? (
          <>
            <Table
              columns={columns}
              dataSource={koiList}
              pagination={false}
              size="large"
              style={{ width: "100%" }} // Ensure table stretches to full width
              scroll={{ x: true }} // Enable horizontal scrolling if necessary
            />
            <h3 style={{ marginTop: "20px" }}>Total Price: {totalPrice} VND</h3>
          </>
        ) : (
          <Empty description={error || "No Koi items in this order."} />
        )}
      </div>
    </>
  );
}
