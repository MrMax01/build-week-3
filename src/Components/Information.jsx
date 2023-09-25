import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";

const Information = () => {
  const profile = useSelector((state) => state.profile.content);
  return (
    <div>
      <Container className="mt-4 p-4 border border-1 rounded-3 bg-light">
        <Row>
          <Col sm={8} md={12}>
            <div className="d-flex justify-content-between">
              <h4>Informazioni</h4>
            </div>
            {profile && <p>{profile.bio}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Information;
