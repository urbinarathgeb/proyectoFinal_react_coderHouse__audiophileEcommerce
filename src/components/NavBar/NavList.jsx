// BOOTSTRAP
import Nav from 'react-bootstrap/Nav';

// REACT COMPONENTS
import { NavLink } from 'react-router-dom';

// CUSTOM COMPONENTS

const NavList = () => {
  return (
    <Nav>
      <NavLink to='/'>CATALOG</NavLink>
      <NavLink to='/categoria/headphones'>HEADPHONES</NavLink>
      <NavLink to='/categoria/speakers'>SPEAKERS</NavLink>
      <NavLink to='/categoria/earphones'>EARPHONES</NavLink>
    </Nav>
  );
};

export default NavList;
