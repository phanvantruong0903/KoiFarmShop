import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import TopBar from "../Components/TopBar";
// import '../Css/index.css';
export default function DashBoard() {
  return (
    <TopBar>
      <Container fluid>
        <Outlet />
      </Container>
    </TopBar>
  );
}
