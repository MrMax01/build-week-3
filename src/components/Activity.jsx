import { Card, Container, ListGroup } from "react-bootstrap";

const Activity = () => {
  return (
    <Container className="mt-5  ">
      <Card>
        <Card.Header className="border-bottom-0 bg-white">
          <h5 className="mb-0">Attività</h5>
          <div className="fw-bold fs-6 text-primary">0 follower</div>
        </Card.Header>
        <ListGroup variant="flush" className="p-2">
          <ListGroup.Item className="d-flex">
            <div className="me-2"></div>
            <div>
              <p className="m-0 fw-bold fs-6">Non hai ancora pubblicato nulla</p>
              <p className="m-0 fw-light fs-6">I post che condividi appariranno qui</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer className="text-center fw-bold text-secondary bg-white">
          Mostra tutte le Attività<i className="bi bi-arrow-right"></i>
        </Card.Footer>
      </Card>
    </Container>
  );
};
export default Activity;
