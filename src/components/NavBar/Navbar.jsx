//BOOTSTRAP
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//REACT COMPONENTS
import { Link, NavLink } from "react-router-dom";

//CUSTOM COMPONENTS
import CartWidget from "./CartWidget";
import logo from "../../logo.svg";

//STYLES
import "./NavBar.scss";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand--container">
          <Navbar.Brand className="mx-0 py-0">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/categoria/headphones">HEADPHONES</NavLink>
            <NavLink to="/categoria/speakers">SPEAKERS</NavLink>
            <NavLink to="/categoria/earphones">EARPHONES</NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget className="navbar-cart" />
      </Container>
    </Navbar>
  );
};

export default NavBar;
