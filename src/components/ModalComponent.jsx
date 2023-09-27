import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions";
import { fetchProfile } from "../redux/actions"; // Assicurati di importare fetchProfile
import { useParams } from "react-router";

const ModalComponent = ({ showModal, setShowModal }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { profileId } = useParams();

  const profile = useSelector((state) => state.profile.content);

  const [name, setName] = useState(profile.name);
  const [surname, setSurname] = useState(profile.surname);
  const [area, setArea] = useState(profile.area);

  useEffect(() => {
    console.log(profileId);
    if (profileId) {
      console.log(profileId);
      dispatch(fetchProfile(profileId));
    } else {
      dispatch(fetchProfile());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);

  const handleSave = async () => {
    const updatedProfileData = {
      name,
      surname,
      area,
    };

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfileData),
      });

      if (response.ok) {
        const updatedProfile = await response.json();
        dispatch(updateProfile(updatedProfile));
        handleClose();
      } else {
        console.error("Errore nella richiesta PUT:", response.statusText);
      }
    } catch (error) {
      console.error("Si è verificato un errore durante la richiesta PUT:", error);
    }
  };

  return (
    <>
      <Button onClick={handleShow}>
        <Pencil />
      </Button>
      <Modal show={show} onHide={handleClose} className="mt-sidebar mx-auto">
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>*indica che è obbligatorio</p>
          <Form.Label htmlFor="basic-url">Nome*</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url">Cognome*</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
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
          <Form.Label htmlFor="basic-url">Area</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
