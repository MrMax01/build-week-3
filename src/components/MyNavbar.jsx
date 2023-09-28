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
import { Link, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.myContent);
  let loading = useSelector((state) => state.loading.loading);
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(fetchMyProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading === true) {
    return <>LOADING...</>;
  } else {
    return (
      <Container fluid className="navbarContainer">
        <Navbar expand="sm" variant="light" className="py-0">
          <Navbar.Brand
            onClick={() => {
              navigation("/feed");
            }}
          >
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
              <Nav.Link
                onClick={() => {
                  navigation("/feed");
                }}
              >
                <div>
                  <div>
                    <i className="bi bi-house-fill"></i>
                  </div>
                  <span>Home</span>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div>
                  <div>
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <span>Rete</span>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div>
                  <div>
                    <i className="bi bi-briefcase-fill"></i>
                  </div>
                  <span>Lavoro</span>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div>
                  <div>
                    <i className="bi bi-chat-dots-fill"></i>
                  </div>
                  <span>Messagistica</span>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div>
                  <div>
                    <i className="bi bi-bell-fill"></i>
                  </div>
                  <span>Notifiche</span>
                </div>
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    <img alt="me" src={myProfile.image} width={27} height={27} className="rounded-circle mt-2" />
                    <br />
                    <span>Tu</span>
                  </>
                }
                id="dropdown"
                className="dropNav profileDrop py-2"
              >
                <div className="dropdownSizesControl">
                  <NavDropdown.Item>
                    <Row>
                      <Col xs={3}>
                        <img alt="me" src={myProfile.image} width={80} height={80} className="rounded-circle" />
                      </Col>
                      <Col xs={7}>
                        <Row className="text-start">
                          <div className="d-flex flex-column mt-3 p-0 ps-1">
                            <Link to="/me">
                              {myProfile.surname} {myProfile.name}
                            </Link>
                            <div>{myProfile.title}</div>
                          </div>
                        </Row>
                      </Col>
                    </Row>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Button
                      variant="outline-primary"
                      className="w-100 rounded-pill"
                      onClick={() => {
                        navigation("/profile/me");
                      }}
                    >
                      Visualizza Profilo
                    </Button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Header>Account</NavDropdown.Header>
                  <NavDropdown.Item>Prova Premium gratis</NavDropdown.Item>
                  <NavDropdown.Item>Impostazioni & privecy</NavDropdown.Item>
                  <NavDropdown.Item>Guida</NavDropdown.Item>
                  <NavDropdown.Item>Lingua</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Header>Gestisci</NavDropdown.Header>
                  <NavDropdown.Item>Posts & attività</NavDropdown.Item>
                  <NavDropdown.Item>Account per la pubblicazione di Off...</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Sign Out</NavDropdown.Item>
                </div>
              </NavDropdown>

              <Button variant="navOffcanvas" className="border border-0 p-0" onClick={() => handleShow()}>
                <div className=" border-start">
                  <i className="bi bi-grid-3x3-gap-fill fs-4"></i>{" "}
                  <span className="fs-6 fw-light m-0 mb-1 d-block ms-2">
                    per le aziende <i className="bi bi-caret-down-fill fs-6"></i>
                  </span>
                </div>
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
              <Nav.Link className="premium p-0 mt-3 text-start">Prova Premium gratis</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
};

export default MyNavbar;
