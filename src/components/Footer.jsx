import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-warning d-flex justify-content-center align-items-center"
      style={{ fontFamily: "Monospace", height: "80px" }}
    >
      <Navbar.Brand>&copy; 2024 By Meiying Hu</Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
