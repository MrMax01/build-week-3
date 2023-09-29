import { useEffect } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFollow, deleteFollow, getPersoneAside } from "../redux/actions";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RetePage = () => {
  const dispatch = useDispatch();
  let arrayPersone = useSelector((state) => state.aside.content);
  let favoritesPersons = useSelector((state) => state.follow.content);
  console.log(favoritesPersons);

  useEffect(() => {
    dispatch(getPersoneAside());
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Link to="/">
            <Button>vai ai seguiti</Button>
          </Link>
        </Col>
        <Col xs={10}>
          <Row xs={4}>
            {arrayPersone ? (
              arrayPersone.map((persona) => (
                <Col key={persona._id} className="text-center mb-3">
                  <Card>
                    <div style={{ width: "50%" }}>
                      <Card.Img alt="profile-img" src={persona.image} className="rounded-circle mx-auto" />
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
                          <i className="bi bi-person-plus-fill"></i>Don't follow
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          onClick={() => {
                            dispatch(addFollow(persona));
                          }}
                        >
                          <i className="bi bi-person-plus-fill"></i>Collegati
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Container></Container>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default RetePage;
