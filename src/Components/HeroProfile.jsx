import { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addFollow, deleteFollow, fetchProfile, postPictureAction } from "../redux/actions";
import Resources from "./Resources";
import Information from "./Information";
import ActivityHero from "./ActivityHero";
import { Button } from "react-bootstrap";
import MyExperience from "./MyExperience";
import { Pencil, X } from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";
import HeroProfileLoaders from "./loaders/HeroProfileLoader";

function HeroProfile() {
  const [show, setShow] = useState();
  const favoritesPersons = useSelector((state) => state.follow.content);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.content);
  const { profileId } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchProfile(profileId));

    console.log(profileId);
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
    console.dir(form);

    dispatch(postPictureAction(formData));
  };

  return (
    // HERO SECTION

    <>
      {profile ? (
        <>
          <Container sm={12} md={8} className="cover-image mt-3 ms-0 p-0 border rounded-3 bg-white">
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
                            {profileId === "me" && <Modal.Title>Add Photo</Modal.Title>}
                          </Modal.Header>
                          <Modal.Body className="d-flex align-content-center">
                            <Image src={profile.image} alt="profile-picture" roundedCircle className="modalProfile" />
                          </Modal.Body>
                          <Modal.Footer>
                            <Form onSubmit={handleSubmit} id="formElement">
                              <Form.Control type="file" className="d-none" ref={inputRef} name="profile" />
                              {profileId === "me" && (
                                <>
                                  <Button onClick={handleClick}>Add Photo</Button>
                                  <Button type="submit">Submit</Button>
                                </>
                              )}
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
                      <h3 className="mb-0 mt-0">
                        {profile.name} {profile.surname}
                      </h3>
                      {profileId === "me" && <ModalComponent />}
                    </div>
                    <p className="mb-0">{profile.title}</p>
                    <p className="mb-0 mt-3 text-secondary">
                      {profile.area}
                      <span className="mx-1">&middot;</span>
                      <Link to="/" style={{ textDecoration: "none", fontWeight: "500" }}>
                        <span className="text-primary nav-link3">Informazioni di contatto</span>
                      </Link>
                    </p>
                    <Link
                      to="/"
                      className="mb-0 mt-1 text-primary nav-link3"
                      style={{ textDecoration: "none", fontWeight: "500" }}
                    >
                      245 collegamenti
                    </Link>
                  </Row>
                  <Row className="mt-2 btn-hero">
                    {profileId === "me" ? (
                      <Col sm={12} md={12}>
                        <Link to="#">
                          <Button
                            variant="primary"
                            className="text-light border rounded-5 border border-primary d-lg-inline-block"
                            style={{ fontWeight: "500" }}
                          >
                            Disponibile per
                          </Button>
                        </Link>

                        <Link to="#">
                          <Button
                            className=" button bg-light border rounded-5 text-primary mx-2 border border-primary btnQuiz d-none  d-lg-inline-block"
                            style={{ fontWeight: "500" }}
                          >
                            Aggiungi sezione del profilo
                          </Button>
                          <Button
                            className=" button bg-light border rounded-5 text-primary mx-2 border border-primary btnQuiz d-lg-none"
                            style={{ fontWeight: "500" }}
                          >
                            Aggiungi se...
                          </Button>
                        </Link>

                        <Link to="#">
                          <Button
                            className="bg-light border rounded-5 text-secondary border border-dark btnQuiz2 d-none d-lg-inline-block"
                            style={{ fontWeight: "500" }}
                          >
                            Altro
                          </Button>
                          <Button
                            className="bg-light border rounded-5 text-secondary border border-dark btnQui d-lg-none"
                            style={{ fontWeight: "500" }}
                          >
                            ...
                          </Button>
                        </Link>
                      </Col>
                    ) : (
                      <Col sm={12} md={12} className="mb-3">
                        {favoritesPersons.length > 0 &&
                        favoritesPersons.some((element) => element._id === profile._id) ? (
                          <Button
                            variant="danger"
                            className="text-light border rounded-5 border border-primary d-lg-inline-block"
                            style={{ fontWeight: "500" }}
                            onClick={() => {
                              dispatch(deleteFollow(profile));
                            }}
                          >
                            <i class="bi bi-person-dash-fill"></i> Non Segui
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            className="text-light border rounded-5 border border-primary d-lg-inline-block"
                            style={{ fontWeight: "500" }}
                            onClick={() => {
                              dispatch(addFollow(profile));
                            }}
                          >
                            <i className="bi bi-person-plus-fill"></i> Segui
                          </Button>
                        )}

                        <Link to="#">
                          <Button
                            className=" button bg-light border rounded-5 text-primary mx-2 border border-primary btnQuiz d-lg-inline-block"
                            style={{ fontWeight: "500" }}
                          >
                            <i className="bi bi-person-fill-add"></i>
                            Collegati
                          </Button>
                        </Link>

                        <Link to="#">
                          <Button
                            className="bg-light border rounded-5 text-secondary border border-dark btnQuiz2 d-none d-lg-inline-block"
                            style={{ fontWeight: "500" }}
                          >
                            Altro
                          </Button>
                          <Button
                            className="bg-light border rounded-5 text-secondary border border-dark btnQui d-lg-none"
                            style={{ fontWeight: "500" }}
                          >
                            ...
                          </Button>
                        </Link>
                      </Col>
                    )}
                  </Row>
                </Row>
              </Row>
              {profileId === "me" && (
                <Row className="px-3 mx-0 mb-4">
                  <Col
                    className="mt-4 p-3 me-4 py-2"
                    style={{
                      width: "100px",
                      backgroundColor: "#DDE7F1",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        Disponibile a lavorare
                      </p>
                      <div>
                        <Pencil role="button" className="btn-info " />
                      </div>
                    </div>
                    <p className="mb-0">Ruoli di Sviluppatore Full Stack</p>
                    <Link
                      className="text-primary nav-link3"
                      style={{ textDecoration: "none", fontWeight: "500" }}
                      to="/"
                    >
                      Mostra dettagli
                    </Link>
                  </Col>

                  <Col
                    className="mt-4 p-3 border border-1 d-none d-sm-inline-block"
                    style={{
                      width: "150px",
                      backgroundColor: "transparent",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        Fai sapere che stai facendo selezione
                        <span style={{ fontWeight: "lighter" }}> e attrai candidati qualificati.</span>
                      </p>
                      <div>
                        <X role="button" className="fs-3 align-content-top btn-info" />
                      </div>
                    </div>
                    <Link
                      className="text-primary nav-link3"
                      style={{ fontWeight: "500", textDecoration: "none" }}
                      to="#"
                    >
                      Inizia
                    </Link>
                  </Col>
                </Row>
              )}
            </Container>
          </Container>
          <Resources />
          <MyExperience />
          <ActivityHero />
          <Information />
        </>
      ) : (
        <HeroProfileLoaders />
      )}
    </>
  );
}

export default HeroProfile;
