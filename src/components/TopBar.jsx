import { Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

const TopBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-warning top-bar"
      style={{ fontFamily: "Monospace", height: "100px" }}
    >
      <img
        src={logo}
        height="60"
        className="d-inline-block align-top mx-3 "
        alt="Logo"
      />
      <Navbar.Brand className="mx-3">Blog App</Navbar.Brand>
    </Navbar>
  );
};

export default TopBar;
