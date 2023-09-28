import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import PostListLoader from "./loaders/PostListLoader";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const baseEndPoint = "https://striveschool-api.herokuapp.com/api/posts";

  const headers = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
    },
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
    } finally {
      console.log(postList);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {postList.length > 0 ? (
        postList.slice(0, 20).map((post) => {
          return (
            <Row key={post._id} className="my-2 ">
              <Card style={{ width: "100%" }} className="rounded bg-light">
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
                        />
                      </Col>
                      <Col>
                        <Row>
                          {post.user.name} {post.user.surname}
                        </Row>
                        <Row className="postTitle">{post.user.title}</Row>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>{post.text}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
          );
        })
      ) : (
        <PostListLoader />
      )}
    </>
  );
};

export default PostList;
