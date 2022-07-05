//BOOTSTRAP
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//COMPONENTES
import CartWidget from "./CartWidget";
import logo from "../../logo.svg";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="mx-0 d-flex justify-content-start" style={{ width: "120px" }}>
          <img src={logo} alt="logo" className="w-75" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">HEADPHONES</Nav.Link>
            <Nav.Link href="#link">SPEAKERS</Nav.Link>
            <Nav.Link href="#link">EARPHONES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
