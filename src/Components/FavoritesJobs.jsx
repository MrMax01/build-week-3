import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const FavoritesJobs = () => {
  const favoritesArray = useSelector((state) => state.favorites.content);
  return (
    <>
      <ListGroup>
        {favoritesArray.length !== 0 ? (
          favoritesArray.map((companyFav, i) => <ListGroup.Item key={i}>{companyFav.company_name}</ListGroup.Item>)
        ) : (
          <div>non ci sono preferiti</div>
        )}
      </ListGroup>
    </>
  );
};
export default FavoritesJobs;
