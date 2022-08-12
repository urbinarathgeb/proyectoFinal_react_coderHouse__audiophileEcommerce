// BOOTSTRAP
import Nav from 'react-bootstrap/Nav';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

// REACT COMPONENTS

const SocialNav = () => {
  return (
    <Nav>
      <a
        href='https://www.facebook.com'
        target='_blank'
        rel='noreferrer'
      >
        <Facebook
          color='white'
          className='mx-2'
          size={22}
        />
      </a>
      <a
        href='https://www.twitter.com'
        target='_blank'
        rel='noreferrer'
      >
        <Twitter
          color='white'
          className='mx-2'
          size={22}
        />
      </a>
      <a
        href='https://www.instagram.com'
        target='_blank'
        rel='noreferrer'
      >
        <Instagram
          color='white'
          className='mx-2'
          size={22}
        />
      </a>
    </Nav>
  );
};

export default SocialNav;
