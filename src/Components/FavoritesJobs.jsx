import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavoritesJobs = () => {
  const favoritesArray = useSelector((state) => state.favorites.content);
  return (
    <>
      <ListGroup>
        {favoritesArray.length !== 0 ? (
          favoritesArray.map((companyFav, i) => (
            <ListGroup.Item key={i}>{<Link to={companyFav.url}>{companyFav.company_name}</Link>}</ListGroup.Item>
          ))
        ) : (
          <div>non ci sono preferiti</div>
        )}
      </ListGroup>
    </>
  );
};
export default FavoritesJobs;
