import { Pencil, PersonPlus } from "react-bootstrap-icons";
const MySideBar = () => {
  return (
    <aside style={{ width: "300px" }} className="bg-secondary">
      <div className="rounded  p-4 mb-2">
        <div className="relative d-flex justify-content-between">
          <div className="fw-bold">
            <span> Lingua del Profilo</span>
            <p>Italiano</p>
          </div>
          <div>
            <Pencil />
          </div>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="relative d-flex flex-column">
          <div className="d-flex justify-content-between">
            <span className="fw-bold"> Public profile & Url</span>
            <div>
              <Pencil></Pencil>
            </div>
          </div>
          <p className="pt-1 opacity-75" style={{ fontSize: "13px" }}>
            www.linkedin.com/in/alaa-elmeleh-b20b0a292
          </p>
        </div>
      </div>
      <hr className="my-1 text-white" />
      <section>
        <div className="p-4 mb-2">
          <div className="d-flex flex-column ">
            <h2 className="m-0" style={{ fontSize: "16px" }}>
              Persone che potresti conoscere
            </h2>
            <p>Dalla tua scuola o università</p>
          </div>
          <div className="d-flex justify-content-evenly">
            <div>
              <img src="#" alt="logo-u" />
            </div>
            <div>
              <h3 className="fs-5 m-0">Mario Rossi</h3>
              <p className="m-0">Junior Full-Stack Developer</p>
              <div>
                <button className="w-75 rounded-pill " style={{ color: "grey" }}>
                  <PersonPlus /> <span style={{ fontSize: "16px", fontWeight: "500" }}>Collegati</span>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <p className="fw-bold text-center  opacity-75 pt-2">Visualizza Altro</p>
        </div>
      </section>
      <section>
        <div className="pt-4 px-4">
          <div>
            <div className="d-inline">
              <img src="#" alt="logolinkedln" />
            </div>
            <span className="">LEARNING</span>
          </div>
          <h3 style={{ fontSize: "16px", fontWeight: "400" }}>
            <span>Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</span>
          </h3>
          <ul className="list-unstyled">
            <li className="d-flex">
              <div>
                <img src="#" alt="video-learn" />
              </div>
              <div>
                <p>essere un manager che le persone non vorranno</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};
export default MySideBar;
