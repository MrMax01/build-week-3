import { useRef, useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postTextPost } from "../redux/actions";

const PostFeed = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.myContent);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const postText = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(postText.current.value);
    dispatch(postTextPost(postText.current.value));
  };

  return (
    <Row className=" p-3 rounded bg-light border">
      <Col xs={2}>
        <img src={myProfile.image} alt="profile-imgage" className="rounded-circle" width={48} height={48} />
      </Col>
      <Col xs={10}>
        <Button onClick={handleShow} variant="outline-dark" className="h-100 w-100 rounded-pill text-start">
          Start a post
        </Button>

        <Modal
          show={show}
          onHide={() => {
            handleClose();
          }}
          backdrop="static"
          keyboard={true}
          className="postModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <Row>
                <Col xs={2}>
                  <Image src={myProfile.image} alt="profile-picture" roundedCircle width={50} height={50} />
                </Col>
                <Col xs={10}>
                  <Row>
                    {myProfile.name} {myProfile.surname}
                  </Row>
                  <Row>
                    <small>Post a tutti</small>
                  </Row>
                </Col>
              </Row>
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body className="postBody">
              <Form.Control
                as="textarea"
                className="border-0"
                name="post"
                placeholder="Di cosa vuoi parlare?"
                rows={5}
                ref={postText}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Submit</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Col>
    </Row>
  );
};

export default PostFeed;
