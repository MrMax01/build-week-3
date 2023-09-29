import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFollow, deleteFollow } from "../redux/actions";

const PersoneAside = ({ arrayPersone }) => {
  const favoritesPersons = useSelector((state) => state.follow.content);
  const dispatch = useDispatch();
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
                  {favoritesPersons.length > 0 &&
                  favoritesPersons.some((element) => element._id === arraySingolopersone._id) ? (
                    <Button
                      className="w-75 py-1 rounded-5 border border-dark bottoneSelezionabile bg-danger text-white"
                      onClick={() => {
                        dispatch(deleteFollow(arraySingolopersone));
                      }}
                    >
                      <i className="bi bi-person-dash-fill"></i> Don't follow
                    </Button>
                  ) : (
                    <Button
                      className="w-75 py-1 rounded-5 border border-dark bottoneSelezionabile bg-white text-secondary"
                      onClick={() => {
                        dispatch(addFollow(arraySingolopersone));
                      }}
                    >
                      <i className="bi bi-person-plus-fill"></i> Collegati
                    </Button>
                  )}
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
