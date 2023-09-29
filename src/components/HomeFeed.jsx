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
          <Col xs={3}>
            <ProfileSidebar />
          </Col>
          <Col xs={6}>
            <PostList />
          </Col>
          <Col xs={3}>
            <JobsFooterRight />
          </Col>
        </Row>
      </Container>
    );
  }
};
export default HomeFeed;
