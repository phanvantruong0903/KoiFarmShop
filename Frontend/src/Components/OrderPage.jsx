import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const OrderPage = () => {
  const location = useLocation();
  const { selectedItem } = location.state || {}; // Get the selected item from state

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component được render
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ paddingTop: "120px" }}>
        <Container
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            border: "2px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="text-center mb-4">Order Page</h1>
          {selectedItem ? (
            <Row>
              <Col md={4}>
                <img
                  src={selectedItem.Image}
                  alt={selectedItem.KoiName}
                  style={{ height: "400px", width: "100%" }}
                />
                <video controls style={{ width: "100%", marginTop: "20px" }}>
                  <source src={selectedItem.Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Col>
              <Col md={8}>
                <h2 style={{ color: "red" }}>{selectedItem.KoiName}</h2>

                <p style={{ fontWeight: "400", fontSize: "20px" }}>
                  <span style={{ fontWeight: "600", fontSize: "25px" }}>
                    Description:
                  </span>{" "}
                  {selectedItem.Description}
                </p>
                <p style={{ fontWeight: "400", fontSize: "20px" }}>
                  <span style={{ fontWeight: "600", fontSize: "25px" }}>
                    Quantity:
                  </span>{" "}
                  1
                </p>
                <p style={{ fontWeight: "400", fontSize: "20px" }}>
                  <span style={{ fontWeight: "600", fontSize: "25px" }}>
                    Certificate ID:
                  </span>{" "}
                  {selectedItem.CertificateID}
                </p>
                <h3>Price: {selectedItem.Price || "Contact for Price"}</h3>
                <div style={{ display: "flex", paddingTop: "300px" }}>
                  <Button
                    variant="danger"
                    onClick={() => alert("Order placed!")}
                    style={{ flex: 1, marginRight: "10px", padding: "15px" }}
                  >
                    Mua Ngay
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => alert("Order placed!")}
                    style={{ flex: 1, padding: "15px" }}
                  >
                    Thêm Vào Giỏ Hàng
                  </Button>
                </div>
              </Col>
            </Row>
          ) : (
            <p>No item selected.</p>
          )}
        </Container>

        {/* New Container for Koi Details */}
        {selectedItem && (
          <Container
            style={{
              marginTop: "40px",
              padding: "20px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <h2>Chi tiết về cá Koi : {selectedItem.KoiName}</h2>
            <p
              style={{
                fontWeight: "400",
                fontSize: "25px",
                padding: "20px",
                lineHeight: "50px",
              }}
            >
              {selectedItem.Description ||
                "Thông tin chi tiết về cá Koi không có sẵn."}
            </p>
            <ul>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Age:{""}
                </span>
                {selectedItem.Age}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                {" "}
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Origin:{""}
                </span>
                {selectedItem.Origin}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                {" "}
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Gender:{""}
                </span>
                {selectedItem.Gender}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                {" "}
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Size:{""}
                </span>
                {selectedItem.Size}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                {" "}
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  Age:{""}
                </span>
                {selectedItem.Breed}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                {" "}
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  DailyFoodAmount:{""}
                </span>
                {selectedItem.DailyFoodAmount}
              </li>
              <li style={{ fontWeight: "400", fontSize: "20px" }}>
                {" "}
                <span style={{ fontWeight: "600", fontSize: "25px" }}>
                  FilteringRatio:{""}
                </span>
                {selectedItem.FilteringRatio}
              </li>
            </ul>
          </Container>
        )}

        <Container>
          <span style={{ fontWeight: "600", fontSize: "25px", color: "red" }}>
            Nguồn gốc, xuất xứ của cá chép Koi Nhật Bản Xuất
          </span>
          <p
            style={{ fontWeight: "400", fontSize: "20px", lineHeight: "50px" }}
          >
            hiện từ đầu đầu thế kỷ 20, năm 1914, để tôn vinh hoàng tử Hirohito,
            Nhật Bản đã cho triển lãm giống cá chép Koi đầu tiên tại Tokyo và
            đảo Niigata chính thức được mang tên Niigata Koi. Từ đây, cá chép
            Nhật với 2 màu chủ đạo "đỏ và trắng" được tôn vinh và mua bán rộng
            rãi. Để nghiên cứu thêm về cách lai tạo màu, sinh sản, nhân giống và
            nuôi dưỡng v.v. từ năm 1950, Nhật Bản đã cử các chuyên gia đến học
            hỏi tại Trung tâm Khoa học Kỹ thuật thuộc khoa Sinh vật trường Đại
            học Chicago và khoa Hóa lý thuộc Viện nghiên cứu Illinois, Hoa Kỳ.
            Cá chép do người Nhật lai tạo đẹp về màu sắc và đắt giá. Do vậy, mỗi
            khi nhắc đến loài cá chép được lai tạo có nhiều màu sắc đẹp, người
            ta liên tưởng ngay đến người Nhật và thường được dùng chung một tên
            gọi là "cá chép Nhật". Thực ra, cá chép do Nhật Bản lai tạo có tên
            gọi là Nishikigoi, dịch ra tiếng Việt là cá chép nhiều màu sắc, đến
            thế kỷ 19 thì có thêm tên gọi KOI. Từ Koi theo tiếng Nhật là cá
            chép, từ đồng âm khác nghĩa là tình yêu, yêu mến. Do cá Koi của Nhật
            thuộc loại xuất sắc, đắt giá và nổi tiếng, nên người Nhật đã tự đặt
            ra những quy cách về gam màu, tên gọi để phân biệt từng chủng loại.
          </p>
          <span style={{ fontWeight: "600", fontSize: "20px", color: "red" }}>
            Các chủng loại cá Koi Nhật Bản từ xưa đến nay
          </span>
          <p
            style={{ fontWeight: "400", fontSize: "20px", lineHeight: "50px" }}
          >
            Cá Koi được chia ra làm hai loại: <br />
            Koi chuẩn và Koi bướm. Koi chuẩn: Hình dáng giống như cá nguyên
            thủy, nhưng được pha trộn nhiều màu sắc rất đẹp (khi được nhìn từ
            trên xuống, dọc theo sống lưng), do đó cá Koi chỉ thật sự đẹp khi
            được nuôi ở ao. Koi bướm: Khác với cá nguyên thủy là vi, vây và đuôi
            dài, khi bơi nhìn uyển chuyển rất đẹp, nên có thể nuôi được ở cả ao
            và hồ kiếng. Koi bướm còn có những tên gọi khác như "cá chép vây
            dài" hoặc "cá chép Rồng". Từ năm 1980 Nhật Bản mới bất đầu nhân
            giống loại Koi bướm.
          </p>
        </Container>
        <Container>
          <span style={{ fontWeight: "600", fontSize: "20px", color: "red" }}>
            Màu sắc , tên gọi từng dòng theo màu sắc và cách phân biệt theo từng
            loại tên
          </span>
          <p
            style={{ fontWeight: "400", fontSize: "20px", lineHeight: "50px" }}
          >
            Người Nhật tin rằng những mảng màu trên mình cá chép Koi khi là
            những hình xăm sẽ luôn luôn mang lại sự may mắn. Tiêu chuẩn về màu
            được người Nhật đặt tên như sau: Có 8 loại nhóm cá Koi chính được đi
            kèm với đặc tính màu sắc khác nhau như sau : Trắng pha Đỏ = Kohaku.
            Trắng pha Đỏ+Đen = Showa Sanke. Trắng pha Đen = Utsurimono. Đen pha
            Trắng = Shiro Bekko. Vàng pha Đen = Ki Utsuri. Bạch kim hoặc Vàng
            kim = Kinginrin. Xám bạc = Asagi Trắng, trên đỉnh đầu có một vòng
            tròn Đỏ = Tancho. ( Loại đặc biệt tượng trưng cho quốc kỳ của Nhật
            Bản ) Ngoài ra còn có một số giống khác như: Sanke, Ogon, Shusui,
            Matsuba, Chagoi, Soragoi, Karasu (crow), Taisho Sanke, Koromo,
            Kawarimono.
          </p>
        </Container>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Footer />
      </div>
    </>
  );
};

export default OrderPage;
