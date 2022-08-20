// BOOTSTRAP
import { Card } from 'react-bootstrap';

// REACT COMPONENTS
import { Link } from 'react-router-dom';

const FeaturedXx99 = () => {
  return (
    <Card className='card-header--container'>
      <picture>
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660615212/audiophile/home/desktop/image-hero_csuv1p.jpg'
          media='(min-width: 992px)'
          className='card-header--img'
        />
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660615212/audiophile/home/tablet/image-header_hgmj6u.jpg'
          media='(min-width: 768px)'
          className='card-header--img'
        />
        <img
          src='https://res.cloudinary.com/jurbina/image/upload/v1660615213/audiophile/home/mobile/image-header_ldca61.jpg'
          alt='Card image'
          className='card-header--img'
        />
      </picture>
      <Card.ImgOverlay className='p-0 my-auto card-header--infoContainer'>
        <p className='card-header--pretitle my-0'>NEW PRODUCT</p>
        <h2 className='card-header--title my-0 text-center'>
          XX99 MARK II HEADPHONES
        </h2>
        <p className='card-header--text my-0 text-center'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to='detail/ab7HHYPVGWtnE1YU5CUP'>
          <button className='btn--orange'>SEE PRODUCT</button>
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default FeaturedXx99;
