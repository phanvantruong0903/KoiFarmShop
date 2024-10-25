import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { Layout } from "antd";
import "../Css/koiStyle.css";
import Platinum from "../ThongTinCaKoi/Platinum";
export default function Koiplatinum() {
  return (
    <>
      <Layout>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          <Platinum />
        </div>
        <Footer />
      </Layout>
    </>
  );
}
