//BOOTSTRAP
import logo from "../../logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="w-75" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">HEADPHONES</Nav.Link>
            <Nav.Link href="#link">SPEAKERS</Nav.Link>
            <Nav.Link href="#link">EARPHONES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
