import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const MyModalCreatePost = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const idProfile = useSelector((state) => state.profile.content);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  const handleChangeCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleChangeStart = (e) => {
    setStart(e.target.value);
  };
  const handleChangeEnd = (e) => {
    setEnd(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/651141923752a80014568769/experiences/",
        {
          method: "POST",
          body: JSON.stringify({
            role: role,
            company: company,
            description: description,
            area: city,
            startDate: start,
            endDate: end,
          }),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        handleClose();
        dispatch({ type: "UPDATED", payload: [role, company, description, city, start, end] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button className="btn-experience" onClick={handleShow}>
        Create an Experience
      </Button>
      <Modal show={show} onHide={handleClose} className="mt-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <p>Crea le tue esperienze</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Role</Form.Label>
              <Form.Control onChange={handleChangeRole} type="text" />
              <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" onChange={handleChangeCompany} />
              <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Start</Form.Label>
              <Form.Control type="text" onChange={handleChangeStart} />
              <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Label>End</Form.Label>
              <Form.Control as="textarea" onChange={handleChangeEnd} />
              <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" onChange={handleChangeDescription} />
              <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom06">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" onChange={handleChangeCity} />
              <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={(event) => handleSubmit(event)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default MyModalCreatePost;
