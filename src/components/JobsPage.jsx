import { Col, Container, Row } from "react-bootstrap";
import JobsSidebar from "./JobsSidebar";
import JobsFooterRight from "./JobsFooterRight";
import JobsPost from "./JobsPost";

const JobsPage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} lg={3}>
          <JobsSidebar />
        </Col>
        <Col xs={12} lg={6}>
          <JobsPost />
        </Col>
        <Col xs={12} lg={3}>
          <JobsFooterRight />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
