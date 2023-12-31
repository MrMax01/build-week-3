import { useEffect } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFollow, deleteFollow, getPersoneAside } from "../redux/actions";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RetePageLoader from "./loaders/RetePageLoader";

const RetePage = () => {
  const dispatch = useDispatch();
  const arrayPersone = useSelector((state) => state.aside.content);
  const favoritesPersons = useSelector((state) => state.follow.content);
  console.log(favoritesPersons);

  useEffect(() => {
    dispatch(getPersoneAside());
  }, []);

  return (
    <Container className="pt-3">
      <Row>
        <Col xs={12} md={2}>
          <Link to="/mynetwork/myfollows">
            <Button
              className="mb-3"
              variant="outline-secondary position-sticky 
            "
              style={{ top: "70px" }}
            >
              Vai ai seguiti
            </Button>
          </Link>
        </Col>
        <Col xs={10}>
          <Row xs={1} sm={2} md={2} lg={3} xl={4}>
            {arrayPersone
              ? arrayPersone.map((persona) => (
                  <Col key={persona._id} className="text-center mb-3">
                    <Card className="p-2">
                      <div className="d-flex justify-content-center">
                        <Card.Img
                          alt="profile-img"
                          style={{ width: "120px", height: "120px" }}
                          src={persona.image}
                          className="rounded-circle "
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          {persona.name} {persona.surname}
                        </Card.Title>
                        <Card.Text>{persona.title}</Card.Text>
                        {favoritesPersons.length > 0 &&
                        favoritesPersons.some((element) => element._id === persona._id) ? (
                          <Button
                            variant="danger"
                            onClick={() => {
                              dispatch(deleteFollow(persona));
                            }}
                          >
                            <i class="bi bi-person-dash-fill"></i> Don't follow
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            onClick={() => {
                              dispatch(addFollow(persona));
                            }}
                          >
                            <i className="bi bi-person-plus-fill"></i> Collegati
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : Array.from({ length: 8 }, () => {
                  return <RetePageLoader />;
                })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default RetePage;
