import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { Layout, Typography } from "antd";
import "../Css/koiStyle.css";
import Showa from "../ThongTinCaKoi/Showa";
export default function Koishowa() {
  return (
    <>
      <Layout>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          <Showa />
        </div>
        <Footer />
      </Layout>
    </>
  );
}
