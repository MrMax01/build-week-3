import { Card, Container, ListGroup } from "react-bootstrap";

const Resources = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header className="border-bottom-0 bg-white">
          <h5 className="mb-0">Risorse</h5>
          <div className="fw-light fs-6">
            <i className="bi bi-eye-fill text-secondary"></i> Solo per te
          </div>
        </Card.Header>
        <ListGroup variant="flush" className="p-2">
          <ListGroup.Item className="d-flex">
            <div className="me-2">
              <i className="bi bi-router-fill"></i>
            </div>
            <div>
              <p className="m-0 fw-bold fs-6">Modalità creazione di contenuti</p>
              <p className="m-0 fw-light fs-6">
                Fatti scoprire, metti in risalto i contenuti e accedi agli strumenti di crezione
              </p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex">
            <div className="me-2">
              <i className="bi bi-people-fill"></i>
            </div>
            <div>
              <p className="m-0 fw-bold fs-6">La mia rete</p>
              <p className="m-0 fw-light fs-6">Salva e gestisci i tuoi collegamenti</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer className="text-center fw-bold text-secondary bg-white">
          Mostra tutte le risorse(5)<i className="bi bi-arrow-right"></i>
        </Card.Footer>
      </Card>
    </Container>
  );
};
export default Resources;
