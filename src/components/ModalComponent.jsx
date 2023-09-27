import { useEffect, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ModalComponent = ({ experience }) => {
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
  const handleShow = () => setShow(true);

  const handleSubmit = async (experience) => {
    console.log(idProfile);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + idProfile._id + "/experiences/" + experience,
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
        alert("Esperienza Modificata con successo!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [role, company, description, city, start, end]);

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
                <Form.Control
                  onChange={handleChangeRole}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder={experience.role}
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Company</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChangeCompany}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder={experience.company}
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Start</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChangeStart}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder={experience.startDate.slice(0, 10)}
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">End</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChangeEnd}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder={experience.endDate.slice(0, 10)}
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Description</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChangeDescription}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder={experience.description}
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">City</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChangeCity}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder={experience.area}
                />
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
