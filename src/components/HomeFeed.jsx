import { Col, Container, Row } from "react-bootstrap";
import PostFeed from "./PostFeed";
import { useSelector } from "react-redux";
import PostList from "./PostList";
import ProfileSidebar from "./ProfileSidebar";

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
            <PostFeed />
            <PostList />
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
    );
  }
};
export default HomeFeed;
