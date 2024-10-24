import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./Css/supplierStyle.css";

import { Layout, Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

export default function NguonGocCuaIKoi() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/manager/manage-supplier/get-all"
        );
        if (response.status === 200) {
          setData(response.data.result);
        } else {
          setError("Failed to fetch supplier details.");
        }
      } catch (error) {
        setError("Error fetching supplier details.");
      }
    };
    fetchSupplierData();
  }, []);

  return (
    <>
      <Navbar />
      <Container style={{ padding: "20px", paddingTop: "100px" }}>
        <div>
          <h1 style={{ color: "red" }}>Nguồn Gốc Của IKoi</h1>
          <Paragraph className="paragraph-Style">
            <strong>Vì sao chúng tôi chọn Koi</strong>
            <br />
            Trung Quốc cũng được biết đến là nơi có lịch sử lai tạo Cá Koi lâu
            đời, thậm chí lâu hơn Nhật Bản. Koi do người Trung Quốc lai tạo hoặc
            nuôi không hề xấu nhưng xét về các phẩm chất, giá trị nghệ thuật
            đỉnh cao thì chưa bằng Koi Nhật.
            <br />
            Người Việt Nam có xu hướng chơi Koi Trung Quốc theo đại trà. Chỉ
            những người chơi Koi chuyên nghiệp mới lựa chọn Koi Nhật Bản thuần
            chủng. Koi Nhật Bản hội tụ đầy đủ các phẩm chất mà không loại Koi ở
            quốc gia nào có được:
            <ul>
              <li>
                Thân hình như chiếc tàu ngầm, bụng không to, không phệ, thon
                gọn, thân đuôi dầy, phần lưng dầy. Cá nhìn chắc khỏe, vạm vỡ,
                cấu trúc tốt có tiềm năng phát triển kích thước khủng trong
                tương lai.
              </li>
              <li>
                Màu sắc rõ ràng, hoa văn rõ nét, đường biên không lem nhem, mảng
                màu nào ra mảng màu đó. Màu nhìn dầy, màu sang, không lòe loẹt.
              </li>
              <li>
                Koi hòa đồng, tính tình thân thiện, sức đề kháng tốt do được
                nuôi theo đúng tiêu chuẩn hồ chuyên nghiệp tại Nhật.
              </li>
            </ul>
            Nếu là người chơi koi chuyên nghiệp, luôn phải tính đến giá trị
            trong tương lai. Nuôi koi phục vụ đam mê nhưng phải mang đến kinh
            tế. Nuôi Koi Nhật chắc chắn càng nuôi càng ra kinh tế. Koi Nhật có
            nhiều phẩm chất tốt, màu đẹp, cấu trúc body chuẩn nên phát triển
            kích thước lớn. Nuôi Koi Nhật rất dễ bán, ký gửi, thanh lý, đấu giá.
            Các dòng koi khác chỉ đẹp 1 năm đầu nhưng càng nuôi càng vỡ màu, lem
            nhem, cá béo bụng mất giá.
          </Paragraph>
        </div>
        <div>
          <h1 style={{ color: "red" }}>
            Những Koi Farm Nhật nào được chúng tôi lựa chọn
          </h1>
          <Paragraph className="paragraph-Style">
            <strong>Vì sao chúng tôi chọn Koi</strong>
            <br />
            Nhật Koi Farm hiện là đối tác chính của: Dainichi Koi Farm, Koi Farm
            Omosako, Marudo Koi Farm, Yagenji Koi Farm , Takeda Koi Farm,Koi
            Farm Sakai , Higashiyama Koi Farm , Koi Farm Yamamatsu , Koi Farm
            Shibata , Koi Farm Koshiji , Koi Farm Koshiji , Danichi Omosako , D
            <br />
            Mỗi Koi Farm chuyên thế mạnh về 1 dòng Koi. Vì vậy để có nhiều koi
            đẹp phải tìm kiếm ở nhiều Koi fam khác nhau. Điểm chung duy nhất các
            koi farm này đều thuộc vùng Ojiya, Nhật Bản – được mệnh danh là Thủ
            đô cá Koi của Nhật Bản. 80% nhà lai tạo nổi tiếng của Nhật và 90%
            các giải thưởng lớn về cá Koi đều thuộc về Niigata.
          </Paragraph>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="supplier-list">
          {data.map((supplier) => (
            <div key={supplier._id} className="supplier-item">
              <Paragraph className="paragraph-Style">
                <h3>{supplier.SupplierName}</h3>
                <p className="text-Style">
                  <strong>Address:</strong> {supplier.Address}
                </p>
                <p className="text-Style">
                  <strong>Country:</strong> {supplier.Country}z``
                </p>
                <p className="text-Style">
                  <strong>Phone:</strong> {supplier.PhoneNumber}
                </p>
                <p className="text-Style">{supplier.SupplierDescription}</p>
                {supplier.SupplierImage && (
                  <img
                    src={supplier.SupplierImage}
                    alt={supplier.SupplierName}
                    className="supplier-image"
                  />
                )}
              </Paragraph>
            </div>
          ))}
        </div>
      </Container>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <img src="src/assets/img_4.png" alt="Image 4" />
        </div>
        <div style={{ width: "30%" }}>
          <img src="src/assets/img_5.png" alt="Image 5" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundImage: `url("src/assets/e.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      ></div>
      <Footer />
    </>
  );
}
