// BOOTSTRAP
import Card from 'react-bootstrap/Card';

// REACT COMPONENTS
import { Link } from 'react-router-dom';

// STYLES
import './Item.scss';

const Item = ({ product }) => {
  const { name, description, categoryImg, id } = product;

  return (
    <Card className='categoryItem-container pb-4 mx-auto flex-lg-row'>
      <picture className='p-3'>
        <source
          srcSet={categoryImg.desktop}
          media='(min-width:992px)'
          className='categoryItem-img'
        />
        <source
          srcSet={categoryImg.tablet}
          media='(min-width:768px)'
          className='categoryItem-img'
        />
        <img
          src={categoryImg.mobile}
          alt=''
          className='categoryItem-img'
        />
      </picture>

      <Card.Body className='categoryItem-infoContainer d-flex flex-column justify-content-center align-items-center'>
        <Card.Title className='categoryItem-title mb-4 w-75'>
          {name.toUpperCase()}
        </Card.Title>
        <Card.Text className='categoryItem-text mb-4'>{description}</Card.Text>
        <Link to={`/detail/${id}`}>
          <button className='btn--orange'>SEE PRODUCT</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
