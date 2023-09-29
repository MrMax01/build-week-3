import PostListLoader from "./loaders/PostListLoader";
import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postTextPost } from "../redux/actions";
import { ChatLeft, HandThumbsUp, Pencil, Repeat, Send, Trash } from "react-bootstrap-icons";
import PostPutModal from "./PostPutModal";
import PostPhoto from "./PostPhoto";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const navigation = useNavigate();
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.myContent);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const postText = useRef(null);
  const favoritesPersons = useSelector((state) => state.follow.content);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postTextPost(postText.current.value));
    fetchPosts();
    handleClose();
  };
  const baseEndPoint = "https://striveschool-api.herokuapp.com/api/posts/";

  const headers = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
    },
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(baseEndPoint + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
        },
      });
      if (response.ok) {
        alert("Post Eliminata con successo!");
        fetchPosts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(baseEndPoint, headers);
      if (response.ok) {
        const data = await response.json();
        setPostList(data.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Row className=" p-3 rounded bg-light border">
        <Col xs={2}>
          <img src={myProfile.image} alt="profile-imgage" className="rounded-circle" width={48} height={48} />
        </Col>
        <Col xs={10}>
          <Button onClick={handleShow} variant="outline-dark" className="h-100 w-100 rounded-pill text-start">
            Start a post
          </Button>

          <Modal
            show={show}
            onHide={() => {
              handleClose();
            }}
            backdrop="static"
            keyboard={true}
            className="postModal"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <Row>
                  <Col xs={2}>
                    <Image src={myProfile.image} alt="profile-picture" roundedCircle width={50} height={50} />
                  </Col>
                  <Col xs={10}>
                    <Row>
                      {myProfile.name} {myProfile.surname}
                    </Row>
                    <Row>
                      <small>Post a tutti</small>
                    </Row>
                  </Col>
                </Row>
              </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body className="postBody">
                <Form.Control
                  as="textarea"
                  className="border-0"
                  name="post"
                  placeholder="Di cosa vuoi parlare?"
                  rows={5}
                  ref={postText}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit">Submit</Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </Col>
      </Row>
      <Row>
        {filter ? (
          <Button
            onClick={() => {
              setFilter(false);
            }}
          >
            Show All Posts
          </Button>
        ) : (
          <Button
            onClick={() => {
              setFilter(true);
            }}
          >
            Show Friends Posts
          </Button>
        )}
      </Row>
      {postList.length > 0 ? (
        filter ? (
          postList
            .filter((post) => favoritesPersons.some((friend) => friend._id === post.user._id))
            .slice(0, 20)
            .map((post) => {
              return (
                <Row key={post._id} className="my-2 ">
                  <Card style={{ width: "100%" }} className="rounded bg-light p-0">
                    <Card.Body>
                      <Card.Title>
                        <Row>
                          <Col xs={2}>
                            <img
                              src={post.user.image}
                              width={40}
                              height={40}
                              alt="profile-img"
                              className="rounded-circle"
                              onClick={() => {
                                navigation(`/profile/${post.user._id}`);
                              }}
                            />
                          </Col>
                          <Col>
                            <Row>
                              {post.user.name} {post.user.surname}
                            </Row>
                            <Row className="postTitle">{post.user.title}</Row>
                          </Col>
                          <Col xs={1}>
                            {myProfile.username === post.username ? (
                              <>
                                <Dropdown>
                                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    <Pencil />
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="p-0" style={{ minWidth: "0" }}>
                                    <Dropdown.Item className="p-0">
                                      <Button
                                        className="bg-danger"
                                        onClick={() => {
                                          handleDelete(post._id);
                                        }}
                                      >
                                        <Trash />
                                      </Button>
                                    </Dropdown.Item>
                                    <div>
                                      <PostPutModal post={post} />
                                    </div>
                                    <div>
                                      <PostPhoto post={post} />
                                    </div>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </>
                            ) : (
                              ""
                            )}
                          </Col>
                        </Row>
                      </Card.Title>
                      <Card.Text>{post.text}</Card.Text>
                    </Card.Body>
                    {post.image ? <Card.Img variant="bottom" src={post.image} /> : ""}
                    <Card.Footer className="fs-3">
                      <Row>
                        <Col>
                          <HandThumbsUp /> <ChatLeft /> <Repeat />
                        </Col>
                        <Col className="text-end">
                          <Send />
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Row>
              );
            })
        ) : (
          postList.slice(0, 20).map((post) => {
            return (
              <Row key={post._id} className="my-2 ">
                <Card style={{ width: "100%" }} className="rounded bg-light p-0">
                  <Card.Body>
                    <Card.Title>
                      <Row>
                        <Col xs={2}>
                          <img
                            src={post.user.image}
                            width={40}
                            height={40}
                            alt="profile-img"
                            className="rounded-circle"
                            onClick={() => {
                              navigation(`/profile/${post.user._id}`);
                            }}
                          />
                        </Col>
                        <Col>
                          <Row>
                            {post.user.name} {post.user.surname}
                          </Row>
                          <Row className="postTitle">{post.user.title}</Row>
                        </Col>
                        <Col xs={1}>
                          {myProfile.username === post.username ? (
                            <>
                              <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                  <Pencil />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="p-0" style={{ minWidth: "0" }}>
                                  <Dropdown.Item className="p-0">
                                    <Button
                                      className="bg-danger"
                                      onClick={() => {
                                        handleDelete(post._id);
                                      }}
                                    >
                                      <Trash />
                                    </Button>
                                  </Dropdown.Item>
                                  <div>
                                    <PostPutModal post={post} />
                                  </div>
                                  <div>
                                    <PostPhoto post={post} />
                                  </div>
                                </Dropdown.Menu>
                              </Dropdown>
                            </>
                          ) : (
                            ""
                          )}
                        </Col>
                      </Row>
                    </Card.Title>
                    <Card.Text>{post.text}</Card.Text>
                  </Card.Body>
                  {post.image ? <Card.Img variant="bottom" src={post.image} /> : ""}
                  <Card.Footer className="fs-3">
                    <Row>
                      <Col>
                        <HandThumbsUp /> <ChatLeft /> <Repeat />
                      </Col>
                      <Col className="text-end">
                        <Send />
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Row>
            );
          })
        )
      ) : (
        <PostListLoader />
      )}
    </>
  );
};

export default PostList;
