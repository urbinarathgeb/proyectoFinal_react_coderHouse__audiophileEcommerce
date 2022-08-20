// REACT COMPONENTS
import { Link } from 'react-router-dom';

const FeaturedYx1 = () => {
  return (
    <div className='card-yx1--container d-flex flex-column flex-md-row gap-3'>
      <picture>
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660615212/audiophile/home/desktop/image-earphones-yx1_byqghp.jpg'
          media='(min-width: 992px)'
        />
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660615212/audiophile/home/tablet/image-earphones-yx1_bimtia.jpg'
          media='(min-width: 768px)'
        />
        <img
          src='https://res.cloudinary.com/jurbina/image/upload/v1660615212/audiophile/home/mobile/image-earphones-yx1_z8od4k.jpg'
          alt=''
        />
      </picture>

      <div className='card-yx1--infoContainer d-flex flex-column justify-content-center align-items-center'>
        <h3>YX1 EARPHONES</h3>
        <Link to='detail/fkpl1wUVurkqDdSwuTF9'>
          <button className='btn--border'>SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedYx1;
