import { Col, Container, Dropdown, Nav, NavDropdown, NavLink, Row } from "react-bootstrap";
import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";

const LinkedinFooter = () => {
  return (
    <footer className="py-3 mt-5" style={{ fontSize: "0.8rem" }}>
      <Container className="text-secondary">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Row style={{ fontWeight: "500" }}>
              <Col sm={4} md={6} lg={4}>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Informazioni
                </NavLink>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Linee guida della community
                </NavLink>
                <Nav className="text-secondary">
                  <NavDropdown id="nav-dropdown" title="Privacy e condizioni" menuVariant="light" className="mb-1 ">
                    <NavDropdown.Item
                      href="#action/3.1"
                      className="text-secondary dropdown-item1"
                      style={{ fontSize: "0.8rem", fontWeight: "700" }}
                    >
                      Informativa sulla privacy
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.2"
                      className="text-secondary"
                      style={{ fontSize: "0.8rem", fontWeight: "700" }}
                    >
                      Contratto di licenza
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.3"
                      className="text-secondary"
                      style={{ fontSize: "0.8rem", fontWeight: "700" }}
                    >
                      Termini e condizioni delle pagine
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.4"
                      className="text-secondary"
                      style={{ fontSize: "0.8rem", fontWeight: "700" }}
                    >
                      informativa sui cookie
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.4"
                      className="text-secondary"
                      style={{ fontSize: "0.8rem", fontWeight: "700" }}
                    >
                      informativa sul copyright
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Sales Solutions
                </NavLink>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Centro sicurezza
                </NavLink>
              </Col>
              <Col sm={4} md={6} lg={4}>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Accessibilità
                </NavLink>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Carriera
                </NavLink>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Opzioni per gli annunci pubblicitari
                </NavLink>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Mobile
                </NavLink>
              </Col>
              <Col sm={4} lg={4}>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Talent Solutions
                </NavLink>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Soluzioni di marketing
                </NavLink>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Pubblicità
                </NavLink>
                <NavLink href="#" className="mb-2 nav-link2 w-100">
                  Piccole imprese
                </NavLink>
              </Col>
            </Row>
          </Col>
          <Col sm={6} lg={6}>
            <Row>
              <Col sm={12} md={6} lg={6} className="p-0">
                <div className="mb-2 d-flex">
                  <QuestionCircleFill style={{ color: "#3D3D3C", fontSize: "1.2rem" }} className="mt-1 me-1" />
                  <div>
                    <NavLink href="#" style={{ fontSize: "0.9rem", fontWeight: "500" }} className="mt-0 nav-link2">
                      Domande?
                    </NavLink>
                    <p style={{ fontSize: "0.8rem" }} className="mb-1">
                      Visita il nostro centro assistenza.
                    </p>
                  </div>
                </div>
                <div className="mb-2 d-flex">
                  <GearFill style={{ color: "#3D3D3C", fontSize: "1.2rem" }} className="mt-1 me-1" />
                  <div>
                    <NavLink href="#" style={{ fontSize: "0.9rem", fontWeight: "500" }} className="nav-link2 w-100">
                      Gestisci il tuo account e la tua privacy
                    </NavLink>
                    <p style={{ fontSize: "0.8rem" }} className="mb-1">
                      Vai alle impostazioni
                    </p>
                  </div>
                </div>
                <div className="mb-2 d-flex">
                  <ShieldShaded style={{ color: "#3D3D3C", fontSize: "1.2rem" }} className="mt-1 me-1" />
                  <div>
                    <NavLink href="#" style={{ fontSize: "0.9rem", fontWeight: "500" }} className="nav-link2 w-100">
                      Trasparenza sui contenuti consigliati
                    </NavLink>
                    <p style={{ fontSize: "0.8rem" }} className="mb-1">
                      Scopri di più sui contenuti consigliati.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} className="ps-0">
                <Dropdown>
                  <p className="mb-1 text-start">Seleziona lingua</p>
                  <Dropdown.Toggle
                    variant="white"
                    className="w-100 text-start border border-1 border-black text-secondary language"
                    style={{ fontSize: "0.8rem", fontWeight: "500" }}
                  >
                    Italiano (Italiano)
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    <Dropdown.Item
                      className="text-secondary dropdown-item2"
                      style={{ fontSize: "0.8rem", fontWeight: "500" }}
                    >
                      Italian (Italiano)
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="text-secondary dropdown-item2"
                      style={{ fontSize: "0.8rem", fontWeight: "500" }}
                    >
                      English (Inglese)
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="text-secondary dropdown-item2"
                      style={{ fontSize: "0.8rem", fontWeight: "500" }}
                    >
                      Espanol (Spagnolo)
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="text-secondary dropdown-item2"
                      style={{ fontSize: "0.8rem", fontWeight: "500" }}
                    >
                      Dansk (Danese)
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="text-secondary dropdown-item2"
                      style={{ fontSize: "0.8rem", fontWeight: "500" }}
                    >
                      Deutsch (Tedesco)
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="text-secondary dropdown-item2"
                      style={{ fontSize: "0.8rem", fontWeight: "500" }}
                    >
                      Norsk (Norvegese)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-md-left mt-3">LinkedIn Corporation © {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default LinkedinFooter;
