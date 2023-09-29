import { Container, Dropdown, ListGroup } from "react-bootstrap";

const JobsFooterRight = () => {
  return (
    <Container style={{ fontSize: "0.8rem", top: "70px", zIndex: "0" }} className="sticky-top">
      <ListGroup className="text-center fs-7">
        <div className="d-flex justify-content-center">
          <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
            <span>Informazioni</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
            <span>Accessibilità</span>
          </ListGroup.Item>
        </div>
        <div className="d-flex justify-content-center">
          <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
            <span>Centro assistenza</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 p-2 d-flex" style={{ backgroundColor: "#F4F2EE" }}>
            <span> Privacy e condizioni</span>
            <Dropdown data-bs-theme="secondary" drop="left">
              <Dropdown.Toggle variant="" className="border-0 p-0">
                <i className="bi bi-caret-down-fill fs-7"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="fs-7" href="#/action-1">
                  Informativa sulla privacy
                </Dropdown.Item>
                <Dropdown.Item className="fs-7" href="#/action-2">
                  Contratto di licenza
                </Dropdown.Item>
                <Dropdown.Item className="fs-7" href="#/action-3">
                  Termini e condizioni delle pagine
                </Dropdown.Item>
                <Dropdown.Item className="fs-7" href="#/action-4">
                  informazioni sui cookie
                </Dropdown.Item>
                <Dropdown.Item className="fs-7" href="#/action-5">
                  informazioni sul copyright
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ListGroup.Item>
        </div>

        <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
          <span>Opzioni per gli annunci pubblicitari</span>
        </ListGroup.Item>
        <div className="d-flex justify-content-center">
          <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
            <span>Pubblicità</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 p-2 d-flex" style={{ backgroundColor: "#F4F2EE" }}>
            <span> Servizi alle aziende</span>
            <Dropdown data-bs-theme="secondary" drop="left">
              <Dropdown.Toggle variant="" className="border-0 p-0">
                <i className="bi bi-caret-down-fill fs-7"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" className="d-flex flex-column fs-7">
                  <span>Assumi su Linkedink</span>
                  <span className="text-col">Trova, attrai e assumi </span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="d-flex flex-column fs-7">
                  <span>Vendi con Linkedin</span>
                  <span className="text-col">Costruisci relazioni con i buyer </span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="d-flex flex-column fs-7">
                  <span>Offerta di lavoro gratuita</span>
                  <span className="text-col">Trova candidati di qualità</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4" className="d-flex flex-column fs-7">
                  <span>Fai pubblicità su Linkedin</span>
                  <span className="text-col">
                    Acquisisci clienti e fai crescere la <br />
                    tua azienda
                  </span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-5" className="d-flex flex-column fs-7">
                  <span>Impara con Linkedin</span>
                  <span className="text-col">Corsi per formare i tuoi dipendenti</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-6" className="d-flex flex-column fs-7">
                  <span>Centro amministrazione</span>
                  <span className="text-col">
                    Gestisci i dettagli di fatturazione e <br /> account
                  </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-7">
                  <span className="fs-7">Crea una pagina aziendale</span> <i class="bi bi-plus"></i>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ListGroup.Item>
        </div>
        <div className="d-flex justify-content-center">
          <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
            <span>Scarica l’app LinkedIn</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
            Altro
          </ListGroup.Item>
        </div>
        <div className="d-flex justify-content-center">
          <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
            <img src="linkedin-full-logo.png" alt="logo" width={55} />
          </ListGroup.Item>
          <ListGroup.Item className="border-0 p-2" style={{ backgroundColor: "#F4F2EE" }}>
            <span>Linkedin Corporation &copy; 2023</span>
          </ListGroup.Item>
        </div>
      </ListGroup>
    </Container>
  );
};

export default JobsFooterRight;
