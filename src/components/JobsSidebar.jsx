import { Card, Col, Container, Dropdown, ListGroup, Row } from "react-bootstrap";

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

      <Container className="border-1 rounded d-lg-none">
        <Row>
          <Col xs={12} className=" p-0 ">
            <Card style={{ width: "100%" }} className="rounded bg-light ">
              <Card.Body className="d-flex justify-content-between ">
                <Card.Title className="align-self-center">Le mie offerte di lavoro</Card.Title>
                <Dropdown data-bs-theme="dark" drop="left">
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsSidebar;
