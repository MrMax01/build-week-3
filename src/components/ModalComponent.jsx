import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const ModalComponent = ({ experience }) => {
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
  const handleShowPUT = () => {
    setShow(true);
    setCity(experience.area);
    setRole(experience.role);
    setEnd(experience.endDate);
    setStart(experience.startDate);
    setCompany(experience.company);
    setDescription(experience.description);
  };

  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const handleSubmit = async (event, experienceID) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // if (end === "") {
    //   Alert("Inserisci una data di inizio corretta ex:2022-06-20");
    // }
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + idProfile._id + "/experiences/" + experienceID,
        {
          method: "PUT",
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
      {experience ? (
        <>
          <Button onClick={handleShowPUT}>
            <Pencil />
          </Button>
          <Modal show={show} onHide={handleClose} className="mt-sidebar">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <p>Modifica le tue esperienze</p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Role</Form.Label>
                  <Form.Control onChange={handleChangeRole} type="text" defaultValue={experience.role} />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" onChange={handleChangeCompany} defaultValue={experience.company} />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom03">
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={handleChangeStart}
                    defaultValue={experience.startDate.slice(0, 10)}
                  />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom04">
                  <Form.Label>End</Form.Label>
                  <Form.Control onChange={handleChangeEnd} defaultValue={experience.endDate.slice(0, 10)} />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom05">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" onChange={handleChangeDescription} defaultValue={experience.description} />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom06">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" onChange={handleChangeCity} defaultValue={experience.area} />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={(event) => handleSubmit(event, experience._id)}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </>
      ) : (
        <>
          <Button onClick={handleShow}>
            <Pencil />
          </Button>
          <Modal show={show} onHide={handleClose} className="mt-sidebar">
            <Modal.Header closeButton>
              <Modal.Title>
                <p>indica che è obbligatorio</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label htmlFor="basic-url">Nome</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Cognome*</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Nome aggiuntivo</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Inserisci pronomi personali</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                <Form.Label htmlFor="basic-url">
                  Indica i pronomi di genere che vuoi che gli altri usino per riferirsi a te.
                </Form.Label>
              </InputGroup>
              <Form.Label htmlFor="basic-url">Sommario</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default ModalComponent;
