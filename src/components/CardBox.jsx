import { useEffect, useState } from "react";
import { CardGroup, Card, Col } from "react-bootstrap";

const CardBox = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=beng&api_key=live_ShzZK30uJ2AM88eGsu92T1Gh5wq4peGiesTmN0F4O7KvnhfNUlKhSQPS1GrbQ71V"
        );
        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <CardGroup>
      {posts.map((post) => (
        <Col className="mx-2 my-3" key={post.id} xs={12} md={4} lg={3}>
          <Card className="d-flex justify-content-center align-items-center">
            <Card.Body>
              <Card.Img
                variant="top"
                src={post.url}
                alt={`Cat ${post.id}`}
                style={{
                  width: "250px",
                  height: "250px",
                  overflow: "hidden",
                  marginBottom: "5px",
                }}
              />
              <Card.Title>
                Id: <em>{post.id}</em>
              </Card.Title>
              <Card.Text>Origin: {post.breeds[0].origin}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </CardGroup>
  );
};
export default CardBox;
