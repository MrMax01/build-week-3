import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { InfoSquareFill, Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions";
import { fetchProfile } from "../redux/actions"; // Assicurati di importare fetchProfile
import { useParams } from "react-router";

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

  const { profileId } = useParams();

  const profile = useSelector((state) => state.profile.content);
  const myProfile = useSelector((state) => state.myProfile.myContent);

  const [name, setName] = useState(profile.name);
  const [surname, setSurname] = useState(profile.surname);
  const [area, setArea] = useState(profile.area);

  useEffect(() => {
    if (profileId) {
      dispatch(fetchProfile(profileId));
    } else {
      dispatch(fetchProfile());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId, myProfile]);

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
          <Button className="bg-light border-light" onClick={handleShow}>
            <Pencil className="text-black" />
          </Button>
          <Modal show={show} onHide={handleClose} size="lg" className="mt-sidebar mx-aut">
            <div className="border border-dark border-2 rounded-2 m-1">
              <Modal.Header closeButton>
                <Modal.Title style={{ fontWeight: "400" }}>Modifica presentazione</Modal.Title>
              </Modal.Header>

              <Modal.Body style={{ fontSize: "0.9rem" }}>
                <p className="text-secondary">*Indica che è obbligatorio</p>
                <Form.Label htmlFor="name" className="text-secondary mb-0">
                  Nome*
                </Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="name"
                    size="sm"
                    className="border border-dark"
                    aria-describedby="basic-addon3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </InputGroup>
                <Form.Label htmlFor="surname" className="text-secondary mb-0">
                  Cognome*
                </Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="surname"
                    size="sm"
                    className="border border-dark"
                    aria-describedby="basic-addon3"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                  />
                </InputGroup>
                <Form.Label htmlFor="basic-url" className="text-secondary mb-0">
                  Nome aggiuntivo
                </Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="basic-url"
                    size="sm"
                    aria-describedby="basic-addon3"
                    className="border border-dark"
                  />
                </InputGroup>

                <p className="mb-1 text-secondary">Pronuncia del nome</p>
                <div className="d-flex align-items-top">
                  <div>
                    <InfoSquareFill className="me-1" style={{ color: "#56687A" }} />
                  </div>
                  <div>
                    <p style={{ color: "#56687A" }}>
                      Può essere aggiunta solo usando la nostra app per dispositivi mobili
                    </p>
                  </div>
                </div>

                <Form.Label htmlFor="basic-url" className="text-secondary mb-0">
                  Inserisci pronomi personali
                </Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="optional-name"
                    size="sm"
                    aria-describedby="basic-addon3"
                    className="border border-dark"
                  />
                  <Form.Label htmlFor="basic-url" className="w-100 mb-0"></Form.Label>
                  <p className="text-secondary">
                    {" "}
                    Indica i pronomi di genere che vuoi che gli altri usino per riferirsi a te.
                  </p>
                </InputGroup>

                <Form.Label htmlFor="area" className="text-secondary mb-0">
                  Area geografica
                </Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="area"
                    size="sm"
                    aria-describedby="basic-addon3"
                    className="border border-dark"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                  />
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="primary"
                  className="rounded-5 py-1 px-3"
                  style={{ fontWeight: "500" }}
                  type="submit"
                  onClick={handleSave}
                >
                  Salva
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default ModalComponent;
