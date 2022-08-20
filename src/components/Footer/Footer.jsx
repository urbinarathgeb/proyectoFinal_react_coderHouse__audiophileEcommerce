// BOOTSTRAP
import { Container } from 'react-bootstrap';

// REACT COMPONENTS
import { Link } from 'react-router-dom';

// CUSTOM COMPONENTS
import NavList from '../NavBar/NavList';
import SocialNav from './SocialNav';
import logo from '../../logo.svg';

// STYLES
import './Footer.scss';

const Footer = () => {
  return (
    <Container
      fluid
      className='footer-container d-flex flex-column justify-content-evenly align-items-center align-items-md-start  py-3'
    >
      <Link to='/'>
        <img
          src={logo}
          className='m-3'
          style={{
            width: '120px',
          }}
        />
      </Link>
      <NavList />
      <p className='footer-text my-3 ms-md-3 text-md-start'>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </p>
      <SocialNav />
    </Container>
  );
};

export default Footer;
