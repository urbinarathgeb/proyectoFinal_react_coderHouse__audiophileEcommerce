// REACT COMPONENTS
import { Link } from 'react-router-dom';

const FeaturedZx9 = () => {
  return (
    <div className='card-zx9--container m-3 d-flex flex-column justify-content-evenly align-items-center flex-lg-row'>
      <picture>
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660615213/audiophile/home/desktop/image-speaker-zx9_zjbhkb.png'
          media='(min-width: 992px)'
          className='card-zx9--img'
        />
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660615212/audiophile/home/tablet/image-speaker-zx9_kmezfp.png'
          media='(min-width: 768px)'
          className='card-zx9--img'
        />
        <img
          src='https://res.cloudinary.com/jurbina/image/upload/v1660615213/audiophile/home/mobile/image-speaker-zx9_oqggrg.png'
          alt=''
          className='card-zx9--img'
        />
      </picture>
      <div className='card-zx9--infoContainer d-flex flex-column justify-content-center align-items-center'>
        <h3 className='card-zx9--infoTitle'>ZX9 SPEAKER</h3>
        <p className='card-zx9--infoText text-center'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to='detail/G5zRzxnb3EPqfJRsYSQP'>
          <button className='btn--black'>SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedZx9;
