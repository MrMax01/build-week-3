import { Card, Container, Row } from "react-bootstrap";

const JobsPost = () => {
  return (
    <Container>
      <Row>
        <Card style={{ width: "100%" }} className="rounded bg-light">
          <Card.Body>
            <Card.Title>Consigliato per te</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default JobsPost;
