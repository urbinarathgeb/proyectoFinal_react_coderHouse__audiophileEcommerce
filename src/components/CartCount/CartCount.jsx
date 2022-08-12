// BOOTSTRAP
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import { useCartContext } from '../../context/CartContext';

import './CartCount.scss';

const CartCount = ({ qty, prod }) => {
  const { addItemFromCount, removeItemFromCount } = useCartContext(); // UseContext + CartContext

  return (
    <ButtonGroup className='cartCount d-grid'>
      <Button
        variant='info'
        className='cartCount-btn'
        onClick={() => removeItemFromCount(prod)}
      >
        -
      </Button>
      <div className='cartCount-count'>{qty}</div>
      <Button
        variant='info'
        className='cartCount-btn'
        onClick={() => addItemFromCount(prod)}
      >
        +
      </Button>
    </ButtonGroup>
  );
};

export default CartCount;
