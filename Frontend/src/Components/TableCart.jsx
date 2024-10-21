import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";
import { Table, Spin, Empty } from "antd"; // Import Ant Design components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { BsUiChecksGrid } from "react-icons/bs";

export default function ShoppingCart() {
  const orderDetail = useOrder();
  const [koiList, setKoiList] = useState([]);
  const [error, setError] = useState(null);

  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve stored totalPrice from localStorage
    const storedTotalPrice = localStorage.getItem("totalPrice");
    console.log("Stored totalPrice:", storedTotalPrice);
    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice)); // Convert from string to float
    } else {
      setTotalPrice(0); // Default value if not found
    }

    // Retrieve stored koiList from localStorage
    const storedKoiList = JSON.parse(localStorage.getItem("koiList"));
    console.log("Stored koiList:", storedKoiList);
    if (storedKoiList) {
      setKoiList(storedKoiList);
    } else {
      setKoiList([]); // Default value if not found
    }

    const fetchOrderDetails = async () => {
      if (!orderDetail || !orderDetail.orderId) return;

      try {
        const response = await axios.get(
          `http://localhost:4000/order/detail/${orderDetail.orderId}`
        );

        if (response.status === 200) {
          const { koiList } = response.data.result;
          const { Items, TotalPrice } = response.data.result.result;

          // Update totalPrice from API
          setTotalPrice(TotalPrice);
          localStorage.setItem("totalPrice", TotalPrice.toString());

          // Update koiList
          const koiMap = new Map(koiList.map((koi) => [koi._id, koi]));
          const updatedKoiList = Items.map((item) => {
            const koi = koiMap.get(item.KoiID);
            return koi ? { ...koi, quantity: item.Quantity } : null;
          }).filter((koi) => koi !== null);

          setKoiList(updatedKoiList);
          localStorage.setItem("koiList", JSON.stringify(updatedKoiList));
        } else {
          console.error(`API request failed with status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [orderDetail]);

  const handleQuantityChange = async (koiId, newQuantity) => {
    console.log("koiid:", koiId);
    console.log("quantity:", newQuantity);
    console.log("orderid:", orderDetail.orderId);

    if (!orderDetail || !orderDetail.orderId) return;

    try {
      const response = await axios.patch(
        `http://localhost:4000/order/detail/edit/${orderDetail.orderId}`,
        { KoiID: koiId, Quantity: parseInt(newQuantity) }
      );

      console.log("Response from API:", response);

      if (response.status === 200) {
        setTotalPrice(response.data.result.TotalPrice);
        const updateKoiList = koiList.map((koi) =>
          koi._id === koiId ? { ...koi, quantity: newQuantity } : koi
        );

        // If TotalPrice is null, calculate it locally

        // Update state with the new koi list
        setKoiList(updateKoiList);
        localStorage.setItem("koiList", JSON.stringify(updateKoiList));
        localStorage.setItem("totalPrice", totalPrice.toString()); // Update localStorage
      }
    } catch (error) {
      setError("Error updating quantity: " + error.message);
    }
  };
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
      render: (quantity, record) => (
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value);
            if (newQuantity >= 1) {
              handleQuantityChange(record._id, newQuantity);
            }
          }}
          style={{ width: "80px" }}
        />
      ),
    },
  ];

  return (
    <>
      <div style={{ padding: "20px", width: "100%" }}>
        <h2>Koi Order Details</h2>

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
            <h3 style={{ marginTop: "20px" }}>
              Total Price:{" "}
              {totalPrice
                ? totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })
                : "0.00"}{" "}
              VND
            </h3>
          </>
        ) : (
          <Empty description={error || "No Koi items in this order."} />
        )}
      </div>
    </>
  );
}
