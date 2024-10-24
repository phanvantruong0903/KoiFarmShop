import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Layout from "antd/es/layout/layout";
import Kohaku from "../ThongTinCaKoi/Kohaku";
export default function Koikohaku() {
  return (
    <>
      <Layout>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          <Kohaku />
        </div>
        <Footer />
      </Layout>
    </>
  );
}
