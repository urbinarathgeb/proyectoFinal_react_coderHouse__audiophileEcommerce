// STYLES
import './Gallery.scss';

const Gallery = ({ product }) => {
  const { gallery } = product;
  return (
    <section className='gallery-container gap-4 mb-5'>
      <picture className='gallery-imgContainer gallery-img1'>
        <source
          srcSet={gallery.desktop.img1}
          media='(min-width:992px)'
        />
        <source
          srcSet={gallery.tablet.img1}
          media='(min-width:768px)'
        />
        <img
          src={gallery.mobile.img1}
          alt=''
        />
      </picture>

      <picture className='gallery-imgContainer gallery-img2'>
        <source
          srcSet={gallery.desktop.img2}
          media='(min-width:992px)'
        />
        <source
          srcSet={gallery.tablet.img2}
          media='(min-width: 68px)'
        />
        <img
          src={gallery.mobile.img2}
          alt=''
        />
      </picture>

      <picture className='gallery-imgContainer gallery-img3'>
        <source
          srcSet={gallery.desktop.img3}
          media='(min-width:992px)'
        />
        <source
          srcSet={gallery.tablet.img3}
          media='(min-width:768px)'
        />
        <img
          src={gallery.mobile.img3}
          alt=''
        />
      </picture>
    </section>
  );
};

export default Gallery;
