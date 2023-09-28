import {
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  ListGroup,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";

const JobsSidebar = () => {
  return (
    <>
      <Container className="d-none d-lg-flex pe-0">
        <ListGroup className="w-100" style={{ color: "#404040", fontWeight: "500", fontSize: "0.9rem" }}>
          <ListGroup.Item className="border-0">Le mie offerte di lavoro</ListGroup.Item>
          <ListGroup.Item className="border-0">Preferenze</ListGroup.Item>
          <ListGroup.Item className="border-0">Valutazioni delle competenze</ListGroup.Item>
          <ListGroup.Item className="border-0">Indicazioni per chi cerca lavoro</ListGroup.Item>
          <ListGroup.Item className="border-0">impostazioni candidatura</ListGroup.Item>
        </ListGroup>
      </Container>

      <Container>
        <Row>
          <Col xs={12} className="d-lg-none">
            <Navbar className="bg-body-tertiary">
              <Navbar.Brand href="#home">Le mie offerte di lavoro</Navbar.Brand>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Dropdown data-bs-theme="dark">
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      Altro
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" active>
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsSidebar;
