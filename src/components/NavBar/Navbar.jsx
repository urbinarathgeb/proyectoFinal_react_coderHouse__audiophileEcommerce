//BOOTSTRAP
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//COMPONENTES
import CartWidget from "./CartWidget";
import logo from "../../logo.svg";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="mx-0 py-0">
          <img src={logo} alt="logo" />
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
        <CartWidget className="navbar-cart" />
      </Container>
    </Navbar>
  );
};

export default NavBar;
