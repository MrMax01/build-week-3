import { Card, Col, Row } from "react-bootstrap";

const PostListLoader = () => {
  return (
    <Row className="my-2 ">
      {Array.from({ length: 5 }, (index) => {
        return (
          <Card
            kay={"xcszcsdxcs" + index}
            style={{ width: "100%", animation: "blink 1.2s linear infinite" }}
            className="rounded bg-light mb-3"
          >
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col xs={2}>
                    <img
                      //   src={post.user.image}
                      width={40}
                      height={40}
                      alt=""
                      className="rounded-circle bg-danger"
                      style={{ animation: "blink 1.2s linear infinite" }}
                    />
                  </Col>
                  <Col>
                    <Row>
                      <div className="div-title-nick bg-dark mb-2"></div>
                    </Row>
                    <Row className="postTitle">
                      <div className="div-subtitle-sm bg-dark"></div>
                    </Row>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Row>
  );
};

export default PostListLoader;
