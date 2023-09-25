import { Container, Form, InputGroup, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand>
          <img alt="logo" src={logo} height={30} />
        </Navbar.Brand>

        <Form>
          <InputGroup>
            <InputGroup.Text id="search">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control placeholder="Search" aria-label="Search" aria-describedby="search" />
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <div>
                <i className="bi bi-house-fill"></i>
              </div>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link>
              <div>
                <i className="bi bi-people-fill"></i>
              </div>
              <span>My Network</span>
            </Nav.Link>
            <Nav.Link>
              <div>
                <i className="bi bi-briefcase-fill"></i>
              </div>
              <span>Jobs</span>
            </Nav.Link>
            <Nav.Link>
              <div>
                <i className="bi bi-chat-dots-fill"></i>
              </div>
              <span>Messaging</span>
            </Nav.Link>
            <Nav.Link>
              <div>
                <i className="bi bi-bell-fill"></i>
              </div>
              <span>Notifications</span>
            </Nav.Link>
            <NavDropdown title="" id="dropdown">
              <NavDropdown.Item>Thing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Some</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
