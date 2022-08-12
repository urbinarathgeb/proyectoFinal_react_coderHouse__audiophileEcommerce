// BOOTSTRAP
import { Container } from 'react-bootstrap';

// CUSTOM COMPONENTS
import NavList from '../NavBar/NavList';
import SocialNav from './SocialNav';
import logo from '../../logo.svg';

const Footer = () => {
  return (
    <Container
      fluid
      className='mx-0 d-flex flex-column justify-content-between'
      style={{
        backgroundColor: 'black',
        height: '20vh',
        position: 'relative',
        bottom: '0px',
      }}
    >
      <img
        src={logo}
        style={{
          width: '120px',
        }}
      />
      <NavList />
      <p className='text-start'>
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
