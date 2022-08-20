// STYLES
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section className='aboutUs-container my-4 d-lg-flex gap-4'>
      <picture>
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660677751/audiophile/aboutUs/desktop/image-best-gear_lqdhfr.jpg'
          media='(min-width: 992px)'
          className='aboutUs-img'
        />
        <source
          srcSet='https://res.cloudinary.com/jurbina/image/upload/v1660677751/audiophile/aboutUs/tablet/image-best-gear_qkbuer.jpg'
          media='(min-width: 768px)'
          className='aboutUs-img'
        />
        <img
          src='https://res.cloudinary.com/jurbina/image/upload/v1660677751/audiophile/aboutUs/mobile/image-best-gear_hsfw1m.jpg'
          alt=''
          className='aboutUs-img'
        />
      </picture>
      <div className='aboutUs-infoContainer'>
        <h2 className='aboutUs-title'>
          BRINGING YOU THE <span className='orange'>BEST</span> AUDIO GEAR
        </h2>
        <p className='aboutUs-text'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
