// BOOTSTRAP
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// HELPERS - SWEET ALERT
import { maxStockAlert } from '../../helpers/sweetAlertFunctions';

// REACT COMPONENTS
import { useState } from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './ItemCount.scss';

const ItemCount = ({ initial, stock, name, onAdd }) => {
  const [activeState, setActiveState] = useState('addCart');
  const [count, setCount] = useState(initial);

  if (initial <= 0) {
    return <h6>Producto sin stock.</h6>;
  }

  const handleState = () => {
    onAdd(count);
    setActiveState('checkout');
  };

  const increaseCount = () => {
    count >= 1 && count < stock && setCount(count + 1);
    maxStockAlert(count, stock, name);
  };

  const decreaseCount = () => {
    count > 1 && count <= stock && setCount(count - 1);
  };

  return (
    <>
      {activeState === 'addCart' ? (
        <div className='count-container justify-content-center mt-4 gap-2'>
          <ButtonGroup aria-label='ItemCount'>
            <button
              className='btn--count'
              onClick={decreaseCount}
            >
              -
            </button>
            <div className='count'>{count}</div>
            <button
              className='btn--count'
              onClick={increaseCount}
            >
              +
            </button>
          </ButtonGroup>
          <button
            className='btn--orange'
            onClick={handleState}
          >
            ADD TO CART
          </button>
        </div>
      ) : (
        <div className='count-container justify-content-center mt-4 gap-2'>
          <Link to='/cart'>
            <button className='btn--orange'>CHECKOUT</button>
          </Link>
          <Link to='/store'>
            <button className='btn--orange'>KEEP BUYING</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemCount;
