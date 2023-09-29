import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { addToFavoritesAction, removeFromFavoritesAction } from "../redux/actions";

const JobsPost = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const queryState = useSelector((state) => state.query.content);
  const jobsState = useSelector((state) => state.jobs.content);

  return (
    <Container>
      <Row>
        {jobsState.length !== 0 ? (
          <>
            <Card.Title>{queryState.toUpperCase()}</Card.Title>
            {jobsState.map((jobs, i) => (
              <Col xs={"12"} key={i} className="py-3">
                <Card style={{ width: "100%" }} className="rounded bg-light">
                  <Card.Body>
                    <div className="d-flex">
                      <Card.Img style={{ width: "50px", height: "50px" }} src={logo} />
                      <div className="px-3 flex-grow-1">
                        <Link to={jobs.url}>
                          <Card.Text className="nomeAzienda m-0">{jobs.company_name}</Card.Text>
                        </Link>
                        <Card.Text className="m-0">{jobs.category}</Card.Text>
                        <Card.Text className="text-secondary">{jobs.candidate_required_location}</Card.Text>
                        <Card.Text className="text-secondary">{jobs.publication_date.slice(0, 10)}</Card.Text>
                      </div>
                      <div>
                        {favorites.length > 0 && favorites.some((element) => element._id === jobs._id) ? (
                          <i
                            onClick={() => {
                              dispatch(removeFromFavoritesAction(jobs));
                            }}
                            style={{ fontSize: "30px", paddingRight: "10px", color: "red" }}
                            className="bi bi-hand-thumbs-down-fill"
                          ></i>
                        ) : (
                          <i
                            onClick={() => {
                              dispatch(addToFavoritesAction(jobs));
                            }}
                            style={{ fontSize: "30px", paddingRight: "10px" }}
                            className="bi bi-hand-thumbs-up fill"
                          ></i>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ) : (
          <h3>Cerca un lavoro</h3>
        )}
      </Row>
    </Container>
  );
};

export default JobsPost;
