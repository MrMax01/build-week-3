import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const PostPutModal = ({ post }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + post._id, {
        method: "PUT",
        body: JSON.stringify({
          text: text,
        }),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleShow}>
        <Pencil />
      </Button>
      <Modal show={show} onHide={handleClose} className="mt-3" keyboard={true}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>
              <p>Modifica il tuo Post</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Post</Form.Label>
              <Form.Control
                as="textarea"
                onChange={handleChangeText}
                defaultValue={post.text}
                rows={5}
                name="post-modify"
                placeholder="No Text"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default PostPutModal;
