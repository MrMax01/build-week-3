import { useEffect, useState } from "react";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getPersoneAside } from "../redux/actions";
import PersoneAside from "./PersoneAside";
const MySideBar = () => {
  let arrayPersoneAside = useSelector((state) => state.aside.content);
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersoneAside());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside style={{ width: "300px" }} className="bg-white border rounded mt-sidebar">
      <div className="rounded  p-4 mb-2">
        <div className="relative d-flex justify-content-between">
          <div className="fw-bold">
            <span> Lingua del Profilo</span>
            <p>Italiano</p>
          </div>
          <div>
            <Pencil role="button" />
          </div>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="relative d-flex flex-column">
          <div className="d-flex justify-content-between">
            <span className="fw-bold"> Public profile & Url</span>
            <div>
              <Pencil role="button" />
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

          {arrayPersoneAside && arrayPersoneAside.length > 0 && showMore === true && (
            <PersoneAside arrayPersone={arrayPersoneAside.slice(0, 10)} />
          )}
          {arrayPersoneAside && arrayPersoneAside.length > 0 && showMore === false && (
            <PersoneAside arrayPersone={arrayPersoneAside.slice(0, 5)} />
          )}

          <button className="fw-bold text-center  opacity-75 pt-2 border-0 w-100 bg-transparent">
            {showMore === false ? (
              <p
                onClick={() => {
                  setShowMore(true);
                }}
              >
                Visualizza Altro
              </p>
            ) : (
              <p
                onClick={() => {
                  setShowMore(false);
                }}
              >
                Visualizza Meno
              </p>
            )}
          </button>
        </div>
      </section>
      {/* <section>
        <div className="pt-4 px-4">
          <div>
            <div className="d-inline">
              <img src="#" alt="ln" />
            </div> 
            <span className="">LEARNING</span>
          </div>
          <h3 style={{ fontSize: "16px", fontWeight: "400" }}>
            <span>Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</span>
          </h3>
          <ul className="list-unstyled">
            <li className="d-flex">
              <div>
                <img src="#" alt="" />
              </div>
              <div>
                <p>essere un manager che le persone non vorranno</p>
              </div>
            </li>
          </ul>
        </div>
      </section> */}
    </aside>
  );
};
export default MySideBar;
