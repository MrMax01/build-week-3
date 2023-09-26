import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMyProfile } from "../redux/actions";
import { Link } from "react-router-dom";

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
      <Container fluid className="navbarContainer">
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
                <div className="dropdownSizesControl">
                  <NavDropdown.Item>
                    <Row>
                      <Col xs={3}>
                        <img alt="me" src={myProfile.image} width={24} height={24} className="rounded-circle" />
                      </Col>
                      <Col>
                        <Row>
                          <Link to="/me">
                            {myProfile.surname} {myProfile.name}
                          </Link>
                        </Row>
                      </Col>
                    </Row>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Some</NavDropdown.Item>
                </div>
              </NavDropdown>

              <Button variant="light" className="border border-0 bg-transparent" onClick={() => handleShow()}>
                <i className="bi bi-grid-3x3-gap-fill fs-4"></i>{" "}
                <span className="fs-6 fw-light m-0 d-block">
                  per le aziende <i className="bi bi-caret-down-fill fs-7"></i>
                </span>
              </Button>

              <Offcanvas className="mt-canvas" show={show} onHide={() => handleClose()} placement="end" name="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Per le aziende</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Card className="mb-3">
                    <Card.Header as="h5">Scopri altri prodotti su Linkedin</Card.Header>
                    <Card.Body>
                      <Card.Text className="d-flex">
                        <Row xs={4}>
                          <Col>
                            <div className="box-icon-canvas p-1 border text-primary d-flex justify-content-center align-items-center mb-1">
                              <i className="bi bi-card-heading fs-3 "></i>
                            </div>
                            <p className="fw-light  fs-7 ">Pubblica un'offerta di lavoro</p>
                          </Col>
                          <Col>
                            <div className="box-icon-canvas p-1 border text-primary d-flex justify-content-center align-items-center mb-1">
                              <i className="bi bi-play-btn-fill fs-3"></i>
                            </div>
                            <p className="fw-light  fs-7 ">Learning</p>
                          </Col>
                          <Col>
                            <div className="box-icon-canvas p-1 border text-primary d-flex justify-content-center align-items-center mb-1">
                              <i className="bi bi-clipboard-data fs-3"></i>
                            </div>
                            <p className="fw-light  fs-7 ">Talent Insight</p>
                          </Col>
                          <Col>
                            <div className="box-icon-canvas p-1 border text-primary d-flex justify-content-center align-items-center mb-1">
                              <i className="bi bi-bullseye fs-3"></i>
                            </div>
                            <p className="fw-light  fs-7 ">Pubblicizza</p>
                          </Col>
                          <Col>
                            <div className="box-icon-canvas p-1 border text-primary d-flex justify-content-center align-items-center mb-1">
                              <i className="bi bi-compass fs-3"></i>
                            </div>
                            <p className="fw-light  fs-7 ">Trova nuovi clienti</p>
                          </Col>
                          <Col>
                            <div className="box-icon-canvas p-1 border text-primary d-flex justify-content-center align-items-center mb-1">
                              <i className="bi bi-people-fill fs-3"></i>
                            </div>
                            <p className="fw-light  fs-7 ">Gruppi</p>
                          </Col>
                          <Col>
                            <div className="box-icon-canvas p-1 border text-primary d-flex justify-content-center align-items-center mb-1">
                              <i className="bi bi-info-circle-fill fs-3"></i>
                            </div>
                            <p className="fw-light  fs-7 ">Marketplace dei servizi</p>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header as="h5">Scopri altro per il business</Card.Header>
                    <Card.Body>
                      <Card.Text className="d-flex"></Card.Text>
                    </Card.Body>
                  </Card>
                </Offcanvas.Body>
              </Offcanvas>
              <Nav.Link className="premium d-flex align-items-center">Try Premium For Free</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
};

export default MyNavbar;
