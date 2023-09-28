import { Col, Container, ListGroup, NavLink, Row } from "react-bootstrap";

const JobsFooterRight = () => {
  return (
    <Container style={{ fontSize: "0.8rem" }}>
      {/* <Row className="text-center">
        <Row className="justify-content-center">
          <Col xs={4}>
            <NavLink>Informazioni</NavLink>
          </Col>
          <Col xs={4}>
            <NavLink>Accessibilità</NavLink>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="p-0">
            <NavLink className="w-100">Centro assistenza</NavLink>
          </Col>
          <Col xs={6} className="p-0">
            <NavLink className="w-100">Privacy e condizioni</NavLink>
          </Col>
        </Row>

        <Col xs={12} className="d-flex">
          <NavLink>Opzioni per gli annunci pubblicitari</NavLink>
        </Col>
        <Col xs={12} className="d-flex">
          <NavLink>Pubblicità</NavLink>
          <NavLink>Servizi alle aziende</NavLink>
        </Col>
        <Col xs={12} className="d-flex">
          <NavLink>Scarica l'app LinkedIn</NavLink>
          <NavLink>Altro</NavLink>
        </Col>
      </Row> */}
      <ListGroup>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          <span>Informazioni</span>
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          <span>Accessibilità</span>
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          <span>Centro assistenza</span>
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          <div>
            <span>
              <span>Privacy e condizioni</span>
            </span>

            <div></div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          <span>Opzioni per gli annunci pubblicitari</span>
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          <span>Pubblicità</span>
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          <div>
            <span>
              <span>Servizi alle aziende</span>
            </span>

            <div></div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          <div>
            <span>Scarica l’app LinkedIn</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ backgroundColor: "#F4F2EE" }}>
          Altro
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default JobsFooterRight;
