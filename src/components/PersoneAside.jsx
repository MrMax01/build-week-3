import { PersonPlus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const PersoneAside = ({ arrayPersone }) => {
  return (
    <>
      {arrayPersone &&
        arrayPersone.map((arraySingolopersone) => (
          <div key={arraySingolopersone._id}>
            <div className="d-flex py-3">
              <div style={{ paddingRight: "20px" }}>
                <img
                  role="button"
                  className="rounded-circle"
                  src={arraySingolopersone.image}
                  style={{ width: "50px" }}
                  alt="logo-u"
                />
              </div>
              <div className="w-100">
                <Link to={`/profile/${arraySingolopersone._id}`}>
                  <h3 className="fs-5 my-1 nomeUtenteSelezionabile" role="button">
                    {arraySingolopersone.name} {arraySingolopersone.surname}
                  </h3>
                </Link>
                <p className="my-1">{arraySingolopersone.title}</p>
                <div>
                  <button className="w-75 rounded-pill bottoneSelezionabile ">
                    <PersonPlus /> <span style={{ fontSize: "16px", fontWeight: "500" }}>Collegati</span>
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
    </>
  );
};
export default PersoneAside;
