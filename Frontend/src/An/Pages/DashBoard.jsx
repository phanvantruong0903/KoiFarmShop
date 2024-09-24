import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
export default function DashBoard() {
  return (
    <Container fluid>
      <Outlet/> {/* Container này chứa toàn bộ mấy cái manager and staff  */}
    </Container>
  );
}
