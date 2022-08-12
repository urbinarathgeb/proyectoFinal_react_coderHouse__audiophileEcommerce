// BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// CUSTOM COMPONENTS
import { useCartContext } from '../../context/CartContext';
import CartCount from '../CartCount/CartCount';

// STYLES
import './CartItem.scss';

const CartItem = () => {
  const { cartList, removeItemCart } = useCartContext(); // UseContext + CartContext

  return (
    <>
      {cartList.map(prod => (
        <Card
          key={prod.id}
          className='cartItemCard mx-auto flex-row align-items-center my-3'
        >
          <Card.Img
            src={prod.img}
            className='cartItemCard-img'
          />
          <Card.Body className='cartItemCard-body p-0'>
            <div className='cartItemCard-name px-2'>{prod.name}</div>
            <div className='cartItemCard-price px-2'>${prod.price}</div>
            <div className='px-2'>
              <CartCount
                qty={prod.qty}
                prod={prod}
              />
            </div>
            <div className='px-2'>
              <Button
                className='principalBtn cartItemCard-btn'
                onClick={() => removeItemCart(prod.id)}
              >
                REMOVE
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CartItem;
