import { Col, Container, Row } from "react-bootstrap";
import HeroProfile from "./HeroProfile";
import MySideBar from "./MySideBar";
import LinkedinFooter from "./LinkedinFooter";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col md={7}>
          <HeroProfile />
        </Col>
        <Col id="sidebar" md={5}>
          <MySideBar />
        </Col>
      </Row>
      <LinkedinFooter />
    </Container>
  );
};
export default Main;
