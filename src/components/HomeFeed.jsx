import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import PostList from "./PostList";
import ProfileSidebar from "./ProfileSidebar";
import JobsFooterRight from "./JobsFooterRight";

const HomeFeed = () => {
  let loading = useSelector((state) => state.loading.loading);

  if (loading === true) {
    return <></>;
  } else {
    return (
      <Container>
        <Row className="homeFeed">
          <Col md={4} lg={3} className="d-none d-md-inline-block">
            <ProfileSidebar />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <PostList />
          </Col>
          <Col xs={12} md={12} lg={3} className="position-relative">
            <JobsFooterRight />
          </Col>
        </Row>
      </Container>
    );
  }
};
export default HomeFeed;
