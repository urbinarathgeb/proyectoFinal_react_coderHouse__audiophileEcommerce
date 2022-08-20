// BOOTSTRAP
import Nav from 'react-bootstrap/Nav';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

// STYLES
import './SocialNav.scss';

const SocialNav = () => {
  return (
    <Nav className='ms-md-3'>
      <a
        href='https://www.facebook.com'
        target='_blank'
        rel='noreferrer'
      >
        <Facebook
          className='social-icon mx-2 ms-md-0'
          size={22}
        />
      </a>
      <a
        href='https://www.twitter.com'
        target='_blank'
        rel='noreferrer'
      >
        <Twitter
          className='social-icon mx-2'
          size={22}
        />
      </a>
      <a
        href='https://www.instagram.com'
        target='_blank'
        rel='noreferrer'
      >
        <Instagram
          className='social-icon mx-2'
          size={22}
        />
      </a>
    </Nav>
  );
};

export default SocialNav;
