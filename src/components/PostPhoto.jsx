import { useRef, useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { Camera } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { pictureForPostsAction } from "../redux/actions";

const PostPhoto = ({ post }) => {
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState(post.image);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const previewImg = (event) => {
    console.log(event);
    const [file] = event.target.files;
    if (file) {
      setImgSrc(URL.createObjectURL(file));
    }
  };
  const photoInput = useRef(null);

  const handleClick = () => {
    photoInput.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.querySelector(`#photoForm`);
    const formData = new FormData(form);
    console.log(formData);

    dispatch(pictureForPostsAction(formData, post._id));

    handleClose();
  };

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        <Camera />
      </Button>
      <Modal show={show} onHide={handleClose} className="mt-3" keyboard={true}>
        <Form onSubmit={handleSubmit} id="photoForm">
          <Modal.Header closeButton>
            <Modal.Title>
              <p>Carica una Immagine</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={imgSrc} alt="Preview" className="w-100" />
          </Modal.Body>
          <Modal.Footer>
            <Form.Control type="file" className="d-none" name="post" onChange={previewImg} ref={photoInput} />
            <Button onClick={handleClick}>Add Photo</Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default PostPhoto;
