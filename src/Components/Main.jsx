import { Col, Container, Row } from "react-bootstrap";
import HeroProfile from "./HeroProfile";
import MySideBar from "./MySideBar";
import HeroProfileLoaders from "./loaders/HeroProfileLoader";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <HeroProfile />
          {/* <HeroProfileLoaders /> */}
        </Col>
        <Col id="sidebar" md={4}>
          <MySideBar />
        </Col>
      </Row>
    </Container>
  );
};
export default Main;
