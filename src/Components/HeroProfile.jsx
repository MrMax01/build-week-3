import { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProfile, postPictureAction } from "../redux/actions";
import Resources from "./Resources";
import Information from "./Information";
import ActivityHero from "./ActivityHero";
import { Button } from "react-bootstrap";
import MyExperience from "./MyExperience";
import { Pencil, X } from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";

function HeroProfile() {
  const [show, setShow] = useState();

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.content);
  const { profileId } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.querySelector("#formElement");
    const formData = new FormData(form);
    console.log(formData);

    dispatch(postPictureAction(formData));
  };

  return (
    // HERO SECTION

    <>
      {profile && (
        <>
          <Container sm={12} md={8} className="cover-image mt-sidebar ms-0 p-0 border rounded-3 bg-light">
            <Container>
              <Row className="d-flex align-items-end">
                <Container>
                  <Row style={{ height: "400px" }}>
                    <Col className="p-0 m-0">
                      <Col className="profileCover">{/* IMMAGINE COPERTINA */}</Col>
                      <div className="linkprofilePicWrap">
                        <Image
                          src={profile.image}
                          alt="profile-picture"
                          roundedCircle
                          className="linkprofilePic"
                          onClick={() => {
                            handleShow();
                          }}
                        />
                        <Modal
                          show={show}
                          onHide={() => {
                            handleClose();
                          }}
                          backdrop="static"
                          keyboard={true}
                          className="addPhoto"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Add Photo</Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="d-flex align-content-center">
                            <Image src={profile.image} alt="profile-picture" roundedCircle className="modalProfile" />
                          </Modal.Body>
                          <Modal.Footer>
                            <Form onSubmit={handleSubmit} id="formElement">
                              <Form.Control type="file" className="d-none" ref={inputRef} name="profile" />
                              <Button onClick={handleClick}>Add Photo</Button>
                              <Button type="submit">Submit</Button>
                            </Form>
                          </Modal.Footer>
                        </Modal>
                        {/* IMMAGINE PROFILO */}
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Row className="px-3 mx-0">
                  <Row className="ancorHero" style={{ fontSize: "15px" }}>
                    <div className="d-flex justify-content-between">
                      <h2 className="mb-0 mt-0">
                        {profile.name} {profile.surname}
                      </h2>

                      <ModalComponent />
                    </div>
                    <p className="mb-0">{profile.title}</p>
                    <p className="mb-0 mt-3 text-secondary">
                      {profile.area} &middot;
                      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
                        Informazioni di contatto
                      </Link>
                    </p>
                    <Link to="/" className="mb-0 mt-1" style={{ textDecoration: "none", fontWeight: "bold" }}>
                      245 collegamenti
                    </Link>
                  </Row>
                  <Row className="mt-2 btn-hero">
                    <Col sm={12} md={12}>
                      <Link to="/">
                        <Button
                          variant="primary"
                          className="text-light border rounded-5 border border-primary"
                          style={{ fontWeight: "500" }}
                        >
                          Disponibile per
                        </Button>
                      </Link>

                      <Link to="/">
                        <Button
                          className=" button bg-light border rounded-5 text-primary mx-2 border border-primary btnQuiz"
                          style={{ fontWeight: "500" }}
                        >
                          Aggiungi sezione del profilo
                        </Button>
                      </Link>

                      <Link to="/">
                        <Button
                          className="bg-light border rounded-5 text-secondary border border-dark btnQuiz2"
                          style={{ fontWeight: "500" }}
                        >
                          Altro
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Row>
              </Row>
              <Row className="px-3 mx-0 mb-4">
                <Col
                  className="mt-4 p-3 me-4"
                  style={{
                    width: "100px",
                    backgroundColor: "rgba(123, 148, 169, 0.388)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <p className="mb-0" style={{ fontWeight: "bold" }}>
                      Disponibile a lavorare
                    </p>
                    <div>
                      <Pencil role="button" />
                    </div>
                  </div>
                  <p className="mb-0">Ruoli di Sviluppatore Full Stack</p>
                  <Link style={{ fontWeight: "bold", textDecoration: "none" }} to="/">
                    Mostra dettagli
                  </Link>
                </Col>

                <Col
                  className="mt-4 p-3 border border-1"
                  style={{
                    width: "150px",
                    backgroundColor: "transparent",
                    borderRadius: "20px",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <p style={{ fontWeight: "bold" }}>
                      Fai sapere che stai facendo selezione
                      <span style={{ fontWeight: "lighter" }}>e attrai candidati qualificati</span>.
                    </p>
                    <X />
                  </div>
                  <Link style={{ fontWeight: "bold", textDecoration: "none" }} to="/">
                    Inizia
                  </Link>
                </Col>
              </Row>
            </Container>
          </Container>
          <Resources />
          <MyExperience />
          <ActivityHero />
          <Information />
        </>
      )}
    </>
  );
}

export default HeroProfile;
