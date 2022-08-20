// BOOTSTRAP
import Card from 'react-bootstrap/Card';

// HELPERS - SWEET ALERT
import { toastAddProduct } from '../../helpers/sweetAlertFunctions';

// CUSTOM COMPONENTS
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import Features from './Features';

// STYLES
import './ItemDetail.scss';

const ItemDetail = ({ product }) => {
  const { name, price, description, stock, newProduct, image } = product;
  const arrival = newProduct && 'NEW PRODUCT';
  const { addCart } = useCartContext(); // UseContext + CartContext
  const initial = stock >= 1 ? 1 : 0;

  const onAdd = count => {
    addCart(product, count);
    toastAddProduct(product); // From helpers/sweetAlertFunctions
  };

  return (
    <>
      <Card className='mx-auto mt-5 col-12 col-sm-8 col-md-10 card-detail'>
        <div className='d-flex flex-column flex-md-row'>
          <Card.Img
            src={image.mobile}
            className='p-3 detail-img'
          />
          <Card.Body className='d-flex flex-column align-items-start justify-content-md-center'>
            <Card.Subtitle className='card-new-txt'>{arrival}</Card.Subtitle>
            <Card.Title>{name}</Card.Title>
            <Card.Text className='mb-2 text-muted text-start'>
              {description}
            </Card.Text>
            <Card.Subtitle className='mb-2'>${price}</Card.Subtitle>
            <ItemCount
              initial={initial}
              stock={stock}
              name={name}
              onAdd={onAdd}
            />
          </Card.Body>
        </div>
      </Card>

      <Features product={product} />
    </>
  );
};

export default ItemDetail;
