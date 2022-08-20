// REACT BOOTSTRAP-ICONS
import { ChevronRight } from 'react-bootstrap-icons';

// REACT COMPONENTS
import { Link } from 'react-router-dom';

// STYLES
import './CategoryCard.scss';

const CategoryCard = () => {
  return (
    <div className='categoryCard-container d-flex flex-column flex-md-row mx-auto gap-4'>
      <div className='card-headphones pb-3 d-flex flex-column align-items-center justify-content-end'>
        <div className='categoryCard-transparent'></div>
        <img
          src='https://res.cloudinary.com/jurbina/image/upload/v1660318553/audiophile/categoryCard/image-category-thumbnail-headphones_xw6sj0.png'
          alt=''
        />
        <h6>HEADPHONES</h6>
        <Link to='category/headphones'>
          <button className='btn--arrow mx-auto'>
            SHOP <ChevronRight />
          </button>
        </Link>
      </div>

      <div className='card-speakers pb-3 d-flex flex-column align-items-center justify-content-end'>
        <div className='categoryCard-transparent'></div>
        <img
          src='https://res.cloudinary.com/jurbina/image/upload/v1660318553/audiophile/categoryCard/image-category-thumbnail-speakers_j90qjx.png'
          alt=''
        />
        <h6>SPEAKERS</h6>
        <Link to='category/speakers'>
          <button className='btn--arrow mx-auto'>
            SHOP <ChevronRight />
          </button>
        </Link>
      </div>

      <div className='card-earphones pb-3 d-flex flex-column align-items-center justify-content-end'>
        <div className='categoryCard-transparent'></div>
        <img
          src='https://res.cloudinary.com/jurbina/image/upload/v1660318553/audiophile/categoryCard/image-category-thumbnail-earphones_dob3z6.png'
          alt=''
        />
        <h6>EARPHONES</h6>
        <Link to='/category/earphones'>
          <button className='btn--arrow mx-auto'>
            SHOP <ChevronRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
