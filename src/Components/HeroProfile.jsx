import { useEffect, useState } from "react";
import { Col, Container, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProfile } from "../redux/actions";
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
    if (profileId) {
      console.log(profileId);
      dispatch(fetchProfile(profileId));
    } else {
      dispatch(fetchProfile());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);
  return (
    // HERO SECTION

    <>
      {profile && (
        <>
          <Container sm={12} md={8} className="cover-image mt-sidebar ms-0 p-0 border rounded-3 bg-white">
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
                            {" "}
                            <Image src={profile.image} alt="profile-picture" roundedCircle className="modalProfile" />
                          </Modal.Body>
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

                      <ModalComponent />
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
                          className=" button bg-white border rounded-5 text-primary mx-2 border border-primary btnQuiz"
                          style={{ fontWeight: "500" }}
                        >
                          Aggiungi sezione del profilo
                        </Button>
                      </Link>

                      <Link to="/">
                        <Button
                          className="bg-white border rounded-5 text-secondary border border-dark btnQuiz2"
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
                      <Pencil role="button" className=" btn-info" />
                    </div>
                  </div>
                  <p className="mb-0">Ruoli di Sviluppatore Full Stack</p>
                  <Link className="text-primary nav-link3" style={{ textDecoration: "none", fontWeight: "500" }} to="/">
                    Mostra dettagli
                  </Link>
                </Col>

                <Col
                  className="mt-4 p-3 border border-1 py-2"
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
                  <Link className="text-primary nav-link3" style={{ fontWeight: "500", textDecoration: "none" }} to="/">
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
