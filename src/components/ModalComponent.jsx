import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const ModalComponent = ({ showModal, setShowModal }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="bg-light border-light" onClick={handleShow}>
        <Pencil className="text-black" />
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
  );
};

export default ModalComponent;
