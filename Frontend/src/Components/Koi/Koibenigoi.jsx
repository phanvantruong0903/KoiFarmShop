import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { Layout } from "antd";
import "../Css/koiStyle.css";
import Benigoi from "../ThongTinCaKoi/Benigoi";
export default function Koibenigoi() {
  return (
    <>
      <Layout>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          <Benigoi />
        </div>
        <Footer />
      </Layout>
    </>
  );
}
