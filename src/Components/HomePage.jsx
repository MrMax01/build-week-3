import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container className="mt-sidebar">
      <Link to="/me">
        <Button>vai sul tuo profilo</Button>
      </Link>
    </Container>
  );
};
export default HomePage;
