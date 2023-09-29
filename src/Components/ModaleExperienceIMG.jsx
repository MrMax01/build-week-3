import { Button, Dropdown, Form, Image, ListGroup, Modal } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";
import { useRef, useState } from "react";
import { GET_EXPERIENCE_SELECTED, postPictureExperienceAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ModaleExperienceIMG = ({ experience }) => {
  const params = useParams().profileId;
  const [imgSrc, setImgSrc] = useState(experience.image);
  const previewImg = (event) => {
    console.log(event);
    const [file] = event.target.files;
    if (file) {
      setImgSrc(URL.createObjectURL(file));
    }
  };

  const idProfile = useSelector((state) => state.profile.content._id);
  const handleElimina = async (experience) => {
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
        dispatch({ type: "UPDATED", payload: ["changed"] });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const inputExperience = useRef(null);
  const handleClick = () => {
    inputExperience.current.click();
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataExperience = new FormData(event.currentTarget);

    dispatch(postPictureExperienceAction(formDataExperience));
    dispatch({ type: "UPDATED", payload: ["changed"] });
    handleClose();
  };
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      {experience && (
        <ListGroup.Item className="d-flex justify-content-between">
          <div>
            <div>
              <img
                alt=""
                style={{ width: "100px", height: "100px", marginRight: "20px" }}
                src={experience.image}
                className="rounded-circle"
                onClick={() => {
                  handleShow(dispatch({ type: GET_EXPERIENCE_SELECTED, payload: experience._id }));
                }}
              />
            </div>
            <Modal
              show={show}
              onHide={() => {
                handleClose();
              }}
              backdrop="static"
              keyboard={true}
              className="addPhoto"
            >
              <Modal.Header closeButton>{params === "me" && <Modal.Title>Add Photo</Modal.Title>}</Modal.Header>
              <Modal.Body className="d-flex align-content-center">
                <Image src={imgSrc} alt="profile-picture" roundedCircle className="modalProfile" />
              </Modal.Body>
              <Modal.Footer>
                <Form onSubmit={handleSubmit} id="formElementExperience">
                  <Form.Control
                    type="file"
                    onChange={previewImg}
                    className="d-none"
                    ref={inputExperience}
                    name="experience"
                  />
                  {params === "me" && (
                    <>
                      <Button onClick={handleClick}>Add Photo</Button>
                      <Button type="submit">Submit</Button>
                    </>
                  )}
                </Form>
              </Modal.Footer>
            </Modal>
            {/* IMMAGINE PROFILO */}
          </div>
          <div className="flex-grow-1">
            <div>
              <p className="m-0 fw-bold fs-6">{experience.role.toUpperCase()} </p>
              <p className="m-0 fw-light fs-6">Company:{experience.company}</p>
              <p className="m-0 fw-light fs-6">
                Start: {typeof experience.startDate === "string" && experience.startDate.slice(0, 10)}
                End: {experience.endDate && experience.endDate.slice(0, 10)}
              </p>
              <p className="m-0 fw-light fs-6"> {experience.description}</p>
              <p className="m-0 fw-light fs-6"> Area:{experience.area}</p>
            </div>
          </div>
          <div className="grow-1 ">
            <div>
              {idProfile === "651141923752a80014568769" ? (
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    <Pencil />
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ minWidth: "0", padding: "0px" }}>
                    <div onClick={() => handleElimina(experience._id)} className="mb-2">
                      <Button className="bg-danger">
                        <Trash />
                      </Button>
                    </div>
                    <div>
                      <ModalComponent experience={experience} />
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Dropdown style={{ display: "none" }}>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    <Pencil />
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ minWidth: "0" }}>
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
              )}
            </div>
          </div>
        </ListGroup.Item>
      )}
    </>
  );
};
export default ModaleExperienceIMG;
