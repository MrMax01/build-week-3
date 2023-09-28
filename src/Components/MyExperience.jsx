import { useEffect } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import { getExperience } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import MyModalCreatePost from "./MyModalCreatePost";
import ModaleExperienceIMG from "./ModaleExperienceIMG";

const MyExperience = () => {
  const arrayExperience = useSelector((state) => state.experience.content);
  const idProfile = useSelector((state) => state.profile.content._id);
  const updatedState = useSelector((state) => state.update.content);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperience());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProfile]);

  useEffect(() => {
    dispatch(getExperience());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedState]);

  return (
    <Container className="mt-2 px-0">
      <Card>
        <Card.Header className="border-bottom-0 bg-white d-flex justify-content-between">
          <h5 className="mb-0">Experience</h5>
          <div>
            <MyModalCreatePost />
          </div>
        </Card.Header>
        <ListGroup variant="flush" className="p-2">
          {arrayExperience &&
            idProfile &&
            arrayExperience.map((experience) => <ModaleExperienceIMG key={experience._id} experience={experience} />)}
        </ListGroup>
        <Card.Footer className="text-center fw-bold text-secondary bg-white">
          {/* Mostra tutte le Experience{`${}`}<i className="bi bi-arrow-right"></i> */}
        </Card.Footer>
      </Card>
    </Container>
  );
};
export default MyExperience;
