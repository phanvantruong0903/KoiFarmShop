import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { RxAvatar } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { IoBarChartOutline } from "react-icons/io5";  
import { PiChartLineUpLight } from "react-icons/pi";
import "../Css/TopBar.css";

export default function TopBar({ children, name, role }) {
  const { logout } = useAuth();
  const location = useLocation(); 
  const navigate = useNavigate();

  
  return (
    <>
      <Navbar bg="dark" expand="lg" className="TopBar">
        <Container fluid>
          <Navbar.Brand style={{color:'white'}} href="#home">IKOI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Management Menu" id="basic-nav-dropdown" className="underline">
                <NavDropdown.Item 
                  as={Link} 
                  to="/DashBoard/staff/Profiles" 
                  className="dropdown-item-custom"
                >
                  Profiles
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link} 
                  to="/DashBoard/staff/Orders" 
                  className="dropdown-item-custom"
                >
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link} 
                  to="/DashBoard/manager/Consign" 
                  className="dropdown-item-custom"
                >
                  Manage Consign Orders
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link} 
                  to="/DashBoard/manager/ManageKoi" 
                  className="dropdown-item-custom"
                >
                  Manage Koi
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link} 
                  to="/DashBoard/manager/ManageSupplier" 
                  className="dropdown-item-custom"
                >
                  Manage Supplier
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item 
                  onClick={logout} 
                  className="dropdown-item-custom"
                >
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Item className="d-lg-none">
                  <RxAvatar size={24} />
                  {name} - {role}
                </NavDropdown.Item>
              </NavDropdown>
               <Nav.Link as={Link} to={'staff/Report/BarChart'} className="chart-icon">
                <IoBarChartOutline size={24} style={{ color: 'white', cursor: 'pointer' }} />
              </Nav.Link>
              <Nav.Link as={Link} to={'staff/Report/LineChart'} className="chart-icon">
                <PiChartLineUpLight size={24} style={{ color: 'white', cursor: 'pointer' }} />
              </Nav.Link>
            </Nav>

            {/* Large screen layout */}
            <Nav className="ml-auto d-none d-lg-flex align-items-center">
              <span className="me-2 mobile-avatar">
                Hello <br /> {name} Manager {role}
              </span>
              <Nav.Link href="#profile" >
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
