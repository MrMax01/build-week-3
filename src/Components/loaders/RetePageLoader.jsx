import { Button, Card, Col } from "react-bootstrap";

const RetePageLoader = () => {
  return (
    <Col className="text-center mb-3">
      <Card className="p-2" style={{ animation: "blink 1.2s linear infinite" }}>
        <div className="d-flex justify-content-center">
          <Card.Img
            style={{ width: "50%", height: "120px", animation: "blink 1.2s linear infinite" }}
            className="rounded-circle bg-danger"
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="div-fs-sm bg-dark"></div>
          </Card.Title>
          <Card.Text className="div-subtitle-sm bg-secondary"></Card.Text>

          <Button variant="primary" className="button-loader "></Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default RetePageLoader;
