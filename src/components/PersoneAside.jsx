import { Button } from "react-bootstrap";
import { PersonPlus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const PersoneAside = ({ arrayPersone }) => {
  return (
    <>
      {arrayPersone &&
        arrayPersone.map((arraySingolopersone) => (
          <div key={arraySingolopersone._id}>
            <div className="d-flex py-1" style={{ fontSize: "14px" }}>
              <div style={{ paddingRight: "20px" }}>
                <Link to={`/profile/${arraySingolopersone._id}`}>
                  <img
                    role="button"
                    className="rounded-circle"
                    src={arraySingolopersone.image}
                    style={{ width: "50px" }}
                    alt="logo-u"
                  />
                </Link>
              </div>
              <div className="w-100">
                <Link to={`/profile/${arraySingolopersone._id}`}>
                  <h4
                    className="my-1 nomeUtenteSelezionabile"
                    style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    role="button"
                  >
                    {arraySingolopersone.name} {arraySingolopersone.surname}
                  </h4>
                </Link>
                <p className="my-1">{arraySingolopersone.title}</p>
                <div>
                  <Button className="w-75 py-1 rounded-5 border border-dark bottoneSelezionabile bg-white text-secondary">
                    <PersonPlus /> <span style={{ fontSize: "16px", fontWeight: "500" }}>Collegati</span>
                  </Button>
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
