import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProfile } from "../redux/actions";
import Resources from "./Resources";
import Information from "./Information";
import ActivityHero from "./ActivityHero";
import { Button } from "react-bootstrap";

function HeroProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.content);
  const { profileId } = useParams();
  useEffect(() => {
    if (profileId) {
      dispatch(fetchProfile(profileId));
    } else {
      dispatch(fetchProfile());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                        <Image src={profile.image} alt="profile-picture" roundedCircle className="linkprofilePic" />
                        {/* IMMAGINE PROFILO */}
                      </div>
                    </Col>
                  </Row>
                </Container>{" "}
                <Row className="px-3 mx-0">
                  <Row className="ancorHero" style={{ fontSize: "15px" }}>
                    <div className="d-flex justify-content-between">
                      <h2 className="mb-0 mt-0">
                        {profile.name} {profile.surname}
                      </h2>
                      {/* MODALE */}
                    </div>
                    <p className="mb-0">{profile.title}</p>
                    <p className="mb-0 mt-3 text-secondary">
                      {profile.area} &middot;{" "}
                      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
                        Informazioni di contatto
                      </Link>{" "}
                    </p>
                    <Link to="/" className="mb-0 mt-1" style={{ textDecoration: "none", fontWeight: "bold" }}>
                      245 collegamenti
                    </Link>
                  </Row>
                  <Row className="mt-2 btn-hero">
                    <Link className=" bg-primary text-light border rounded-5" to="/">
                      <Button variant="primary">Disponibile per</Button>
                    </Link>
                    <Link className=" button bg-light border rounded-5 text-primary btnQuiz" to="/">
                      Aggiungi sezione del profilo
                    </Link>
                    <Link className=" button bg-light border rounded-5 text-secondary" to="/">
                      Altro
                    </Link>
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
                      Fai sapere che stai facendo selezione{" "}
                      <span style={{ fontWeight: "lighter" }}>e attrai candidati qualificati</span>.
                    </p>
                  </div>
                  <Link style={{ fontWeight: "bold", textDecoration: "none" }} to="/">
                    Inizia
                  </Link>
                </Col>
              </Row>
            </Container>
          </Container>
          <Resources />
          <ActivityHero />
          <Information />
        </>
      )}
    </>
  );
}

export default HeroProfile;
