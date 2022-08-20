// BOOTSTRAP
import { Card } from 'react-bootstrap';

// REACT COMPONENTS
import { Link } from 'react-router-dom';

const FeaturedZx7 = () => {
  return (
    <Card className='card-zx7--container m-3'>
      <picture>
        <source
          className='card-zx7--img'
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660615212/audiophile/home/desktop/image-speaker-zx7_ak9ukl.jpg'
          media='(min-width: 992px)'
        />
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660615212/audiophile/home/tablet/image-speaker-zx7_abtmuv.jpg'
          media='(min-width: 768px)'
          className='card-zx7--img'
        />
        <img
          src='https://res.cloudinary.com/jurbina/image/upload/v1660615213/audiophile/home/mobile/image-speaker-zx7_iy9dl7.jpg'
          alt='Card image'
          className='card-zx7--img'
        />
      </picture>

      <Card.ImgOverlay className='p-0 d-flex align-items-center'>
        <div className='card-zx7--infoContainer'>
          <Card.Title className='p-0'>ZX7 SPEAKER</Card.Title>
          <Link to='detail/wFcpW8byqVXsG8Ot5Fuz'>
            <button className='btn--border'>SEE PRODUCT</button>
          </Link>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default FeaturedZx7;
