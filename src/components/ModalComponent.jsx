import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ModalComponent = ({ experience }) => {
  const [show, setShow] = useState(false);
  const idProfile = useSelector((state) => state.profile.content);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e, experience) => {
    const objExperience = e.currentTarget;
    console.log(objExperience);
    //    try {
    //   const response = await fetch(
    //     "https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences/" + experience,
    //     {
    //       method: "PUT",
    //       body: JSON.stringify({
    //        role:

    //       }),
    //       headers: {
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
    //       },
    //     }
    //   );
    //   if (response.ok) {
    //     alert("Esperienza Eliminata con successo!");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      {experience ? (
        <>
          <Button onClick={handleShow}>
            <Pencil />
          </Button>
          <Modal show={show} onHide={handleClose} className="mt-sidebar">
            <Modal.Header closeButton>
              <Modal.Title>
                <p>Modifica le tue esperienze</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label htmlFor="basic-url">Role</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder={experience.role} />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Company</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder={experience.company} />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Start</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder={experience.startDate.slice(0, 10)}
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">End</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder={experience.endDate.slice(0, 10)}
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Description</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder={experience.description} />
              </InputGroup>
              <Form.Label htmlFor="basic-url">City</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder={experience.area} />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => handleSubmit(experience._id)}>
                Save Changes
              </Button>
            </Modal.Footer>
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
