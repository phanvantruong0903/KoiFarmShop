import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
export default function TopBar({ children, name, role }) {
  const {logout} = useAuth();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">IKOI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Management Menu" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/DashBoard/staff/Profiles">
                  Profiles
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/DashBoard/staff/Orders">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/DashBoard/manager/Consign">
                  Manage Consign Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/DashBoard/manager/ManageKoi">
                  Manage Koi
                </NavDropdown.Item>
                <NavDropdown.Divider />
      
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                {/* sm */}
                <NavDropdown.Item className="d-lg-none">
                  <RxAvatar size={24} />
                  {name} - {role}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* lg  */}
            <Nav className="ml-auto d-none d-lg-flex align-items-center">
            
              <span className="me-2">
                Hello <br /> {name} - {role} world
              </span>
              <Nav.Link href="#profile">
                <RxAvatar size={30} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
}
