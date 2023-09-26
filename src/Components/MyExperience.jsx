import { useEffect } from "react";
import { Button, Card, Container, Dropdown, ListGroup } from "react-bootstrap";
import { getExperience } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Pencil, Trash } from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";

const MyExperience = () => {
  const idProfile = useSelector((state) => state.profile.content._id);
  const handleElimina = async (experience) => {
    console.log(experience);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences/" + experience,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
          },
        }
      );
      if (response.ok) {
        alert("Esperienza Eliminata con successo!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const arrayExperience = useSelector((state) => state.experience.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperience());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProfile]);

  return (
    <Container className="mt-2 px-0">
      <Card>
        <Card.Header className="border-bottom-0 bg-white">
          <h5 className="mb-0">Experience</h5>
        </Card.Header>
        <ListGroup variant="flush" className="p-2">
          {arrayExperience &&
            idProfile &&
            arrayExperience.map((experience) => (
              <ListGroup.Item key={experience._id} className="d-flex justify-content-between">
                <div className="me-2">
                  <img src={experience.image} style={{ width: "50px" }} alt="experience-logo" />
                </div>
                <div className="flex-grow-1">
                  <div>
                    <p className="m-0 fw-bold fs-6">{experience.role.toUpperCase()} </p>
                    <p className="m-0 fw-light fs-6">Company:{experience.company}</p>
                    <p className="m-0 fw-light fs-6">
                      Start: {typeof experience.startDate === "string" && experience.startDate.slice(0, 10)} End:{" "}
                      {experience.endDate && experience.endDate.slice(0, 10)}
                    </p>
                    <p className="m-0 fw-light fs-6"> {experience.description}</p>
                    <p className="m-0 fw-light fs-6"> Area:{experience.area}</p>
                  </div>
                </div>
                <div className="grow-1">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <Pencil />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleElimina(experience._id)}>
                        <Button className="bg-danger">
                          <Trash />
                        </Button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <ModalComponent experience={experience} />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
        <Card.Footer className="text-center fw-bold text-secondary bg-white">
          {/* Mostra tutte le Experience{`${}`}<i className="bi bi-arrow-right"></i> */}
        </Card.Footer>
      </Card>
    </Container>
  );
};
export default MyExperience;
