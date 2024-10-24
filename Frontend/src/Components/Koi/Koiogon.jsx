import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Layout from "antd/es/layout/layout";
import Ogon from "../ThongTinCaKoi/Ogon";
export default function Koikohaku() {
  return (
    <>
      <Layout>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          <Ogon />
        </div>
        <Footer />
      </Layout>
    </>
  );
}
