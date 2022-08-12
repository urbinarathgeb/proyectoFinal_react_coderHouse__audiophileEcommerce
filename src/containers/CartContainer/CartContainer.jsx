// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// REACT COMPONENTS
import { Link } from 'react-router-dom';

// CUSTOM COMPONENTS
import CartItem from '../../components/CartItem/CartItem';
import CartTotal from '../../components/CartTotal/CartTotal';
import { useCartContext } from '../../context/CartContext';
import OrderForm from '../../components/OrderForm/OrderForm';

const CartContainer = () => {
  const { cartList } = useCartContext(); // UseContext + CartContext

  if (cartList.length === 0) {
    return (
      <Container
        fluid
        className='emptyCart-container justify-content-end'
      >
        <div>
          <h5>EMPTY CART</h5>
          <Link to='/'>
            <Button className='principalBtn'>CONTINUE SHOPPING</Button>
          </Link>
        </div>
      </Container>
    );
  }
  return (
    <Container fluid>
      <CartItem />
      <CartTotal />
      <OrderForm />
    </Container>
  );
};

export default CartContainer;
