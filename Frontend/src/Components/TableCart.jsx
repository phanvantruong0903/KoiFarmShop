import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";
import axios from "axios";
import { Empty } from "antd"; // Import only Empty from Ant Design

export default function ShoppingCart() {
  const orderDetail = useOrder();
  const [koiList, setKoiList] = useState([]);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0); // Initialize to 0

  useEffect(() => {
    const storedKoiList = JSON.parse(localStorage.getItem("koiList")) || [];
    const storedTotalPrice =
      parseFloat(localStorage.getItem("totalPrice")) || 0;
    const storedOrderId = localStorage.getItem("orderId");

    const updatedKoiList = storedKoiList.map((koi) => ({
      ...koi,
      quantity: koi.quantity || 1,
    }));

    setKoiList(updatedKoiList);
    setTotalPrice(storedTotalPrice);

    // Check if the koi list is empty and orderId is available
    if (updatedKoiList.length === 0 && orderDetail?.orderId) {
      fetchOrderDetails(orderDetail.orderId);
    }
  }, [orderDetail]);

  const fetchOrderDetails = async (orderId) => {
    if (!orderId) {
      console.error("No orderId provided for fetching order details.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:4000/order/detail/${orderId}`
      );
      if (response.status === 200) {
        const { koiList, result } = response.data.result;
        const { Items, TotalPrice } = result;

        const koiMap = new Map(koiList.map((koi) => [koi._id, koi]));
        const updatedKoiList = Items.map((item) => {
          const koi = koiMap.get(item.KoiID);
          return koi ? { ...koi, quantity: item.Quantity } : null;
        }).filter((koi) => koi !== null);

        setKoiList(updatedKoiList);
        setTotalPrice(TotalPrice); // Ensure TotalPrice is set correctly

        // Save to localStorage
        localStorage.setItem("koiList", JSON.stringify(updatedKoiList));
        localStorage.setItem("totalPrice", TotalPrice.toString());
        localStorage.setItem("orderId", orderId); // Store orderId in localStorage
        console.log("Order details fetched and stored in localStorage.");
      } else {
        console.error(`API request failed with status: ${response.status}`);
        setError("Failed to fetch order details.");
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
      setError("Error fetching order details.");
    }
  };

  const handleQuantityChange = async (koiId, newQuantity) => {
    const storedOrderId = localStorage.getItem("orderId");
    if (!storedOrderId) return;

    // Validate newQuantity
    const quantity = parseInt(newQuantity);
    if (isNaN(quantity) || quantity < 0) {
      setError("Invalid quantity.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/order/detail/edit",
        {
          KoiID: koiId,
          Quantity: quantity,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const { result } = response.data;

        // Kiểm tra nếu có thông báo về số lượng không đủ
        if (
          typeof result === "string" &&
          result.includes("available in stock")
        ) {
          setError(result); // Hiển thị thông điệp từ phản hồi
          return;
        }

        const updatedKoiList = koiList.map((koi) =>
          koi._id === koiId ? { ...koi, quantity } : koi
        );

        // Kiểm tra cấu trúc phản hồi để lấy totalPrice
        const newTotalPrice = response.data.result.orderDT.TotalPrice;

        if (newTotalPrice !== undefined) {
          setKoiList(updatedKoiList);
          setTotalPrice(newTotalPrice);

          // Lưu dữ liệu đã cập nhật vào localStorage
          localStorage.setItem("koiList", JSON.stringify(updatedKoiList));
          localStorage.setItem("totalPrice", newTotalPrice.toString());
        } else {
          setError("Failed to retrieve updated total price.");
        }
      }
    } catch (error) {
      setError("Error updating quantity: " + error.message);
    }
  };

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <h2>Koi Order Details</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {koiList.length > 0 ? (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Koi Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {koiList.map((koi) => (
                <tr key={koi._id}>
                  <td>{koi.KoiName}</td>
                  <td>
                    <img
                      src={koi.Image}
                      alt="Koi"
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>{koi.Price.toLocaleString()}</td>
                  <td>
                    <input
                      type="number"
                      min={1}
                      value={koi.quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        if (!isNaN(newQuantity) && newQuantity >= 1) {
                          handleQuantityChange(koi._id, newQuantity);
                        } else {
                          handleQuantityChange(koi._id, 1);
                        }
                      }}
                      style={{ width: "80px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ marginTop: "20px" }}>
            Total Price:{" "}
            {totalPrice > 0
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
  );
}
