import { Outlet } from "react-router-dom";
import TopBar from "../Components/TopBar";
import { Container } from "react-bootstrap";
export default function StaffLayOut() {
  return (
    <Container fluid >
      <TopBar />

      <Outlet />

    </Container>
  );
}
