// BOOTSTRAP
import Card from 'react-bootstrap/Card';

// CUSTOM COMPONENTS
import { useCartContext } from '../../context/CartContext';
import CartCount from '../CartCount/CartCount';

// STYLES
import './CartItem.scss';

const CartItem = () => {
  const { cartList, removeItemCart } = useCartContext(); // UseContext + CartContext

  return (
    <section>
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
            <div className='cartItemCard-count px-2'>
              <CartCount
                qty={prod.qty}
                prod={prod}
              />
            </div>
            <div className='px-2'>
              <button
                className='btn--orange cartItemCard-btn p-1 w-100'
                onClick={() => removeItemCart(prod.id)}
              >
                REMOVE
              </button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
};

export default CartItem;
