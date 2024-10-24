import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Layout from "antd/es/layout/layout";
import { Typography } from "antd";
import Doitsu from "../ThongTinCaKoi/Doitsu";

const { Title, Text, Paragraph } = Typography;
export default function Koidoitsu() {
  return (
    <>
      <Layout>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          <Doitsu />
        </div>
        <Footer />
      </Layout>
    </>
  );
}
