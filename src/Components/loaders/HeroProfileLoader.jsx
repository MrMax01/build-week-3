import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

function HeroProfileLoaders() {
  return (
    <Container sm={12} md={8} className="cover-image mt-sidebar ms-0 p-0  ">
      <Container>
        <Row className="d-flex align-items-end">
          <Container>
            <Row style={{ height: "400px" }}>
              <Col className="p-0 m-0">
                <Col>
                  <div className="div-profile-cover "></div>
                </Col>
                <div className="linkprofilePicWrap">
                  <Image src="" alt="" roundedCircle className="linkprofilePic bg-danger" />

                  {/* IMMAGINE PROFILO */}
                </div>
              </Col>
            </Row>
          </Container>
          <Row className="px-3 mx-0">
            <Row className="ancorHero" style={{ fontSize: "15px" }}>
              <h2 className="mb-0 mt-0">
                <div className="div-title-nick bg-dark"></div>
              </h2>
              <h2 className="mb-0 mt-0">
                <div className="div-subtitle-loader bg-secondary mt-2"></div>
              </h2>

              <p className="mb-0 mt-3 text-secondary">
                <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
                  {"            "}
                </Link>
              </p>
              <Link to="/" className="mb-0 mt-1" style={{ textDecoration: "none", fontWeight: "bold" }}>
                {"      "}
              </Link>
            </Row>
            <Row className="mt-2 btn-hero">
              <Col sm={12} md={12}>
                <Link to="/">
                  <Button variant="primary" className="button-loader bg-success me-1" style={{ fontWeight: "500" }}>
                    {"          "}
                  </Button>
                </Link>

                <Link to="/">
                  <Button className=" button-loader bg-success me-1" style={{ fontWeight: "500" }}>
                    {"                            "}
                  </Button>
                </Link>

                <Link to="/">
                  <Button className="button-loader bg-success me-1" style={{ fontWeight: "500" }}>
                    {"     "}
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
              <p className="mb-2 div-fs-sm bg-dark "></p>
              <div>
                <Pencil role="button" />
              </div>
            </div>
            <p className="mb-2 div-subtitle-sm bg-secondary"></p>
            <p className="div-fs-sm bg-dark" to="/"></p>
          </Col>

          <Col
            className="mt-4 p-3 border border-1"
            style={{
              width: "100px",
              backgroundColor: "rgba(123, 148, 169, 0.388)",
              borderRadius: "20px",
            }}
          >
            <div className="d-flex ">
              <p className="mb-2 div-fs-sm bg-dark"></p>
              <span className="mb-2 ms-2 div-subtitle-sm bg-secondary"></span>.
            </div>
            <p className="mb-2 div-fs-sm bg-dark"></p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroProfileLoaders;
