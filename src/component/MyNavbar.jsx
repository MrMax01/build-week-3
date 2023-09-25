import { Button, Container, Form, InputGroup, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMyProfile } from "../redux/actions";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.myContent);
  let loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, []);

  if (loading === true) {
    return <>LOADING...</>;
  } else {
    return (
      <Container fluid>
        <Navbar expand="md" variant="light" className="py-0">
          <Navbar.Brand>
            <img alt="logo" src={logo} height={41} />
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

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="text-center">
              <Nav.Link>
                <div>
                  <div>
                    <i className="bi bi-house-fill"></i>
                  </div>
                  <span>Home</span>
                </div>
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
              <NavDropdown
                title={
                  <>
                    <img alt="me" src={myProfile.image} width={24} height={24} className="rounded-circle" />

                    <span>Me</span>
                  </>
                }
                id="dropdown"
                className="dropNav profileDrop"
              >
                <NavDropdown.Item>Thing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Some</NavDropdown.Item>
              </NavDropdown>

              <Button onClick={() => handleShow()}> For Business </Button>

              <Offcanvas show={show} onHide={() => handleClose()}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>For Business</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body></Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
};

export default MyNavbar;
