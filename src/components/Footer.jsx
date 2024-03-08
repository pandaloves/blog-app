import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <Card.Footer
      expand="lg"
      className="bg-warning d-flex justify-content-center align-items-center"
      style={{ fontFamily: "Monospace", height: "80px" }}
    >
      <Card.Text>&copy; 2024 By Meiying Hu</Card.Text>
    </Card.Footer>
  );
};

export default Footer;
